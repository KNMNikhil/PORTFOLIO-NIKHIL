import React, { useRef } from 'react';
import { Awards } from './ui/award';

const Achievements = () => {
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  
  const handleMouseMove = (e, ref) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = (ref) => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  
  const certificates = [
    {
      title: "Appreciation",
      subtitle: "has successfully completed the Google Cloud Study Jam Program.",
      recipient: "Nikhil KNM",
      date: "2023",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
    },
    {
      title: "Internship",
      subtitle: "has successfully completed AI/ML internship at ZOHO.",
      recipient: "Nikhil KNM",
      date: "2025",
      logo: "/ZOHOPNG.png"
    },
    {
      title: "Appreciation",
      subtitle: "has been part of the Conference Team for The Future Factory Forum.",
      recipient: "Nikhil KNM",
      date: "2025",
      logo: "/SME.jpeg"
    }
  ];



  return (
    <section id="achievements" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-12 justify-center">
          {certificates.map((cert, index) => (
            <div 
              key={`cert-${cert.title}-${cert.date}-${index}`} 
              ref={cardRefs[index]}
              className="transition-transform duration-200 ease-out"
              onMouseMove={(e) => handleMouseMove(e, cardRefs[index])}
              onMouseLeave={() => handleMouseLeave(cardRefs[index])}
            >
              <Awards
                variant="certificate"
                title={cert.title}
                subtitle={cert.subtitle}
                recipient={cert.recipient}
                date={cert.date}
                logo={cert.logo}
                className="glass border border-white/30 text-white bg-black"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;