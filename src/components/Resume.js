import React from 'react';
import { Timeline } from './ui/Timeline';
import { timeline } from '../data/portfolioData';

const Resume = () => {
  const timelineData = timeline.map(item => ({
    title: item.year,
    content: (
      <div>
        <h4 className="text-white text-2xl font-bold mb-3">{item.title}</h4>
        <p className="text-white/70 text-base mb-4">{item.subtitle}</p>
        <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
          item.type === 'education' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'
        }`}>
          {item.status}
        </div>
      </div>
    )
  }));

  return (
    <section id="resume" className="bg-black">
      <Timeline data={timelineData} />
    </section>
  );
};

export default Resume;