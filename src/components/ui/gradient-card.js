import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const GradientCard = ({ children }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      // Calculate mouse position relative to card center
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setMousePosition({ x, y });

      // Calculate rotation (limited range for subtle effect)
      const rotateX = -(y / rect.height) * 5; // Max 5 degrees rotation
      const rotateY = (x / rect.width) * 5; // Max 5 degrees rotation

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  // Reset rotation when not hovering
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="w-full flex items-center justify-center">
      {/* Card container with realistic 3D effect */}
      <motion.div
        ref={cardRef}
        className="relative rounded-[32px] overflow-hidden"
        style={{
          width: "500px",
          height: "480px",
          transformStyle: "preserve-3d",
          backgroundColor: "#0e131f",
          boxShadow: "0 -10px 100px 10px rgba(255, 255, 255, 0.25), 0 0 10px 0 rgba(0, 0, 0, 0.5)",
        }}
        initial={{ y: 0 }}
        animate={{
          y: isHovered ? -5 : 0,
          rotateX: rotation.x,
          rotateY: rotation.y,
          perspective: 1000,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Subtle glass reflection overlay */}
        <motion.div
          className="absolute inset-0 z-35 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
            backdropFilter: "blur(2px)",
          }}
          animate={{
            opacity: isHovered ? 0.7 : 0.5,
            rotateX: -rotation.x * 0.2,
            rotateY: -rotation.y * 0.2,
            z: 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        />

        {/* Dark background with black gradient like in the image */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(180deg, #000000 0%, #000000 70%)",
          }}
          animate={{
            z: -1
          }}
        />

        {/* White/black glow effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
          style={{
            background: `
              radial-gradient(ellipse at bottom right, rgba(128, 128, 128, 0.7) -10%, rgba(0, 0, 0, 0) 70%),
              radial-gradient(ellipse at bottom left, rgba(0, 0, 0, 0.7) -10%, rgba(128, 128, 128, 0) 70%)
            `,
            filter: "blur(40px)",
          }}
          animate={{
            opacity: isHovered ? 0.3 : 0.2,
            y: isHovered ? rotation.x * 0.5 : 0,
            z: 0
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        />

        {/* Central white glow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
          style={{
            background: `
              radial-gradient(circle at bottom center, rgba(128, 128, 128, 0.7) -20%, rgba(0, 0, 0, 0) 60%)
            `,
            filter: "blur(45px)",
          }}
          animate={{
            opacity: isHovered ? 0.3 : 0.2,
            y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
            z: 0
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        />

        {/* Enhanced bottom border glow for premium look */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
          style={{
            background: "linear-gradient(90deg, rgba(100, 100, 100, 0.05) 0%, rgba(100, 100, 100, 0.3) 50%, rgba(100, 100, 100, 0.05) 100%)",
          }}
          animate={{
            boxShadow: isHovered
              ? "0 0 15px 3px rgba(200, 200, 200, 0.6), 0 0 25px 5px rgba(0, 0, 0, 0.5), 0 0 35px 7px rgba(200, 200, 200, 0.3)"
              : "0 0 10px 2px rgba(200, 200, 200, 0.5), 0 0 20px 4px rgba(0, 0, 0, 0.4), 0 0 30px 6px rgba(200, 200, 200, 0.2)",
            opacity: isHovered ? 1 : 0.9,
            z: 0.5
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        />

        {/* Card content */}
        <motion.div
          className="relative flex flex-col h-full p-8 z-40"
          animate={{
            z: 2
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};