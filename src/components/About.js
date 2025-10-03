import React from 'react';
import { aboutMe } from '../data/portfolioData';
import GlassSurface from './ui/GlassSurface';
import { GradientText } from './ui/gradient-text';
import { GradientDot } from './ui/gradient-dot';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="space-y-6 ml-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GradientText 
                colors={["#ffffff", "#606060", "#ffffff"]}
                animationSpeed={8}
                className="text-xl mb-4 leading-relaxed font-medium text-left w-full"
                style={{wordSpacing: '0.1em', maxWidth: 'none'}}
              >
                {aboutMe.description}
              </GradientText>
            </motion.div>
            
            <div className="space-y-4">
              {aboutMe.highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.3) }}
                >
                  <GradientDot 
                    colors={["#ffffff", "#606060", "#ffffff"]}
                    animationSpeed={8}
                  />
                  <GradientText 
                    colors={["#ffffff", "#606060", "#ffffff"]}
                    animationSpeed={8}
                    className="text-xl font-medium tracking-wide w-full"
                    style={{maxWidth: 'none'}}
                  >
                    {highlight}
                  </GradientText>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center ml-20">
            <GlassSurface 
              width={350} 
              height={450}
              borderRadius={24}
              className=""
            >
              <img 
                src="./PROFILE-removebg-preview.png" 
                alt="Profile" 
                className="w-full h-full object-cover saturate-75"
              />
            </GlassSurface>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;