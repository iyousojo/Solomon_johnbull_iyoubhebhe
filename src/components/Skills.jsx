import React from 'react';
import { skills } from '../data/projects';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-16">
        <h2 className="text-accent-blue font-mono text-xs tracking-widest uppercase mb-4 text-center md:text-left">
          Tech Stack
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-center md:text-left text-white">
          Specialized in <span className="text-gray-500 italic font-serif">End-to-End</span> development.
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => {
  // Assign the icon reference to a Capitalized variable
  const IconComponent = skill.icon; 

  return (
    <div 
      key={index} 
      className="group p-8 bg-card-gray border border-white/5 rounded-3xl hover:border-accent-blue/30 hover:bg-white/[0.02] transition-all duration-500"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-500">
          {/* Render the component here with the desired classes */}
          <IconComponent className="w-4 h-4" /> 
        </div>
        <h3 className="text-sm font-bold text-gray-400 group-hover:text-white uppercase tracking-widest transition-colors">
          {skill.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, i) => (
          <span 
            key={i} 
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-medium text-gray-500 group-hover:text-gray-300 transition-all duration-500"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
})}
      </div>
    </section>
  );
};

export default Skills;