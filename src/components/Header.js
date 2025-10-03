import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass' : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex justify-center items-center py-6">
        </div>
      </nav>
    </header>
  );
};

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('');
  
  const navItems = [
    { name: 'About', icon: '👤' },
    { name: 'Projects', icon: '💼' },
    { name: 'Skills', icon: '⚡' },
    { name: 'Resume', icon: '📄' },
    { name: 'Achievements', icon: '🏆' },
    { name: 'Contact', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'resume', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      let currentSection = '';
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId;
          }
        }
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  const getActiveIndex = () => {
    return navItems.findIndex(item => item.name.toLowerCase() === activeSection);
  };

  return (
    <nav className="floating-nav">
      <div className="relative flex space-x-2">
        {/* Sliding indicator */}
        <div 
          className="absolute top-0 left-0 w-12 h-12 bg-white/30 rounded-full transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(${getActiveIndex() * 56}px)`,
            opacity: activeSection ? 1 : 0
          }}
        />
        
        {navItems.map((item, index) => {
          const isActive = activeSection === item.name.toLowerCase();
          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.name)}
              className={`relative z-10 p-3 rounded-full transition-all duration-500 ease-in-out text-white hover:scale-110 focus:outline-none focus:ring-0 border-none ${
                isActive 
                  ? 'scale-110' 
                  : 'hover:bg-white/20'
              }`}
              title={item.name}
            >
              <span className="text-lg">{item.icon}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
export { FloatingNav };