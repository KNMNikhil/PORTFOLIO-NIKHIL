import React from 'react';
import MagicBento from './MagicBento';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

        </div>

        <MagicBento 
          textAutoHide={true}
          enableStars={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="255, 255, 255"
        />
      </div>
    </section>
  );
};

export default Projects;