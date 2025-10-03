import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import './ProfileCard.css';

const ProfileCard = ({
  avatarUrl = '/profile-removebg-preview.png',
  name = 'Nikhil',
  title = 'Computer Science Student',
  handle = 'nikhil',
  status = 'Available',
  contactText = 'Contact',
  showUserInfo = false,
  enableTilt = true,
  onContactClick
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId = null;

    const updateCardTransform = (offsetX, offsetY, card, wrap) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = Math.min(Math.max((100 / width) * offsetX, 0), 100);
      const percentY = Math.min(Math.max((100 / height) * offsetY, 0), 100);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--pointer-from-center': `${Math.min(Math.max(Math.hypot(percentY - 50, percentX - 50) / 50, 0), 1)}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        '--rotate-x': `${Math.round(-(centerX / 5) * 1000) / 1000}deg`,
        '--rotate-y': `${Math.round((centerY / 4) * 1000) / 1000}deg`
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    return {
      updateCardTransform,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    event => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(event.clientX - rect.left, event.clientY - rect.top, card, wrap);
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    animationHandlers.cancelAnimation();
    wrap.classList.add('active');
    card.classList.add('active');
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    wrap.classList.remove('active');
    card.classList.remove('active');
  }, [animationHandlers]);

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    card.addEventListener('pointerenter', handlePointerEnter);
    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      card.removeEventListener('pointerenter', handlePointerEnter);
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerleave', handlePointerLeave);
      animationHandlers.cancelAnimation();
    };
  }, [enableTilt, animationHandlers, handlePointerMove, handlePointerEnter, handlePointerLeave]);

  return (
    <div ref={wrapRef} className="pc-card-wrapper">
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={`${name} avatar`}
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x500/1a1a1a/ffffff?text=Profile';
              }}
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <img src={avatarUrl} alt={`${name} mini avatar`} loading="lazy" />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
                <button className="pc-contact-btn" onClick={onContactClick} type="button">
                  {contactText}
                </button>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileCard;