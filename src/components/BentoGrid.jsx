import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const BentoGrid = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col mb-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-accent-blue font-bold mb-4">
          Selected Works
        </h2>
        <p className="text-3xl md:text-5xl font-bold tracking-tighter">
          Solving complex problems with <br />
          <span className="text-gray-500 italic">elegant codebases.</span>
        </p>
      </div>

      {/* The Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item) => (
          <div 
            key={item.id} 
            className={item.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}
          >
            <ProjectCard project={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;