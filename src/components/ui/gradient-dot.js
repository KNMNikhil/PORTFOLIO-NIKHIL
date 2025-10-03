import React from 'react';

export function GradientDot({ 
  colors = ["#ffffff", "#808080", "#404040"], 
  animationSpeed = 12,
  className = "w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
    backgroundSize: "300% 100%",
  };

  return (
    <div
      className={`${className} animate-gradient`}
      style={gradientStyle}
    />
  );
}