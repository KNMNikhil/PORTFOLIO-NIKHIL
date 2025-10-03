import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Simple scramble text effect without GSAP plugins
const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    if (!rootRef.current) return;

    const text = children.toString();
    const chars = text.split('');
    
    // Create spans for each character
    const container = rootRef.current.querySelector('p');
    container.innerHTML = '';
    charsRef.current = [];
    
    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.className = 'inline-block will-change-transform';
      span.dataset.original = char;
      container.appendChild(span);
      charsRef.current.push(span);
    });

    const scrambleChar = (element, originalChar) => {
      const scrambleOptions = scrambleChars.split('');
      let iterations = 0;
      const maxIterations = Math.floor(duration * 10);
      
      const interval = setInterval(() => {
        if (iterations < maxIterations) {
          element.textContent = scrambleOptions[Math.floor(Math.random() * scrambleOptions.length)];
          iterations++;
        } else {
          element.textContent = originalChar;
          clearInterval(interval);
        }
      }, 50);
    };

    const handleMove = e => {
      charsRef.current.forEach(el => {
        const { left, top, width, height } = el.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          scrambleChar(el, el.dataset.original);
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove);

    return () => {
      el.removeEventListener('pointermove', handleMove);
    };
  }, [radius, duration, speed, scrambleChars, children]);

  return (
    <div
      ref={rootRef}
      className={className}
      style={style}
    >
      <p></p>
    </div>
  );
};

export default ScrambledText;