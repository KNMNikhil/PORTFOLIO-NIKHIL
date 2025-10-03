import { cn } from "../../lib/utils";
import { useState } from "react";

export const GlowingCard = ({ children, className }) => {
  return (
    <div className={cn("outer", className)}>
      <div className="dot"></div>
      <div className="card">
        <div className="ray"></div>
        <div className="content">
          {children}
        </div>
        <div className="line topl"></div>
        <div className="line leftl"></div>
        <div className="line bottoml"></div>
        <div className="line rightl"></div>
      </div>
    </div>
  );
};