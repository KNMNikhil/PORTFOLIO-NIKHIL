import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function NavBar({ items, className = "" }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId.toLowerCase() === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId.toLowerCase() === 'journey') {
      document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById(sectionId.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${className}`}
    >
      <div className="glass-dark flex items-center gap-3 py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                scrollToSection(item.name);
              }}
              className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors focus:outline-none ${
                isActive ? "bg-white/20 text-white" : "text-white/60 hover:text-white/90"
              }`}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                    <div className="absolute w-12 h-6 bg-white/30 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-white/30 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-white/30 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}