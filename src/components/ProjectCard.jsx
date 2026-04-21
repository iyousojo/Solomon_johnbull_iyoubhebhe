import React, { useState, useEffect } from 'react';

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = project.screenshots && project.screenshots.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hasMultipleImages, project.screenshots.length]);

  return (
    <div className="group relative bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl flex flex-col h-full">
      
      {/* --- Responsive Image Area --- */}
      <div className="relative h-48 sm:h-56 md:h-64 lg:aspect-video bg-white/5 overflow-hidden">
        {project.screenshots && project.screenshots.length > 0 ? (
          project.screenshots.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`${project.title} screenshot ${index}`} 
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              } group-hover:scale-105 transition-transform duration-[2000ms]`}
              onError={(e) => {
                e.target.src = "https://placehold.co/600x400/1a1a1a/666?text=Preview+Coming+Soon";
              }}
            />
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-700 font-mono text-xs">
            [ No Preview Available ]
          </div>
        )}

        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {project.screenshots.map((_, idx) => (
              <div 
                key={idx}
                className={`h-0.5 rounded-full transition-all duration-500 ${
                  idx === currentImageIndex ? 'w-3 bg-blue-500' : 'w-1 bg-white/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* --- Content Area --- */}
      <div className="p-5 sm:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg sm:text-2xl font-bold text-white truncate mr-2">
            {project.title}
          </h3>
          <span className="shrink-0 text-[9px] text-blue-400 font-mono border border-blue-400/30 px-2 py-0.5 rounded-full bg-blue-400/5">
            {project.tags[0]}
          </span>
        </div>
        
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 sm:line-clamp-3">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex justify-center items-center px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all text-white">
              Code
            </a>
          )}
          
          {project.apiLink && (
            <a href={project.apiLink} target="_blank" rel="noreferrer" className="flex justify-center items-center px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all text-white">
              API
            </a>
          )}

          {/* New Admin Link Button */}
          {project.adminLink && (
            <a href={project.adminLink} target="_blank" rel="noreferrer" className="flex justify-center items-center px-3 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all">
              Admin
            </a>
          )}

          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex justify-center items-center px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all">
              Live
            </a>
          )}

          {project.downloadLink && (
            <a href={project.downloadLink} target="_blank" rel="noreferrer" className="flex justify-center items-center px-3 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 text-green-400 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all">
              App
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;