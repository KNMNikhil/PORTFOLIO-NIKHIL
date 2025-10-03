import React from 'react';
import { skills, additionalSkills, logos } from '../data/portfolioData';
import LogoLoop from './ui/LogoLoop';

const SkillBar = ({ skill }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-white/70">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

        </div>

        {/* Logo Loop */}
        <div className="mb-16">
          <LogoLoop 
            logos={logos}
            speed={50}
            direction="left"
            logoHeight={40}
            gap={60}
            pauseOnHover={true}
            fadeOut={true}
            scaleOnHover={true}
            className="py-8"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technical Skills</h3>
            <div className="grid lg:grid-cols-2 gap-24">
              <div className="space-y-6">
                {skills.technical.slice(0, 3).map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
              <div className="space-y-6">
                {skills.technical.slice(3, 6).map((skill, index) => (
                  <SkillBar key={index + 3} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;