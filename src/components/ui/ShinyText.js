const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        background:
          'linear-gradient(120deg, rgba(120, 120, 120, 1) 40%, rgba(255, 255, 255, 1) 50%, rgba(120, 120, 120, 1) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        animationDuration: animationDuration
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;