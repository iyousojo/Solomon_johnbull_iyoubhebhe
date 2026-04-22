import React from 'react';
import Portrait from '../assets/portrait.png'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-20 pt-24 md:pt-0 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-accent-blue/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] bg-white/[0.02] blur-[80px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500">
              Available for new projects
            </span>
          </div>

          <h1 className="text-6xl md:text-[100px] lg:text-[120px] font-extrabold tracking-tighter leading-[0.8] mb-8 text-white">
            Full-Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 italic font-serif font-light">
              Developer.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-12">
            I specialize in building high-performance systems that simplify complex problems in <span className="text-white">Logistics</span> and <span className="text-white">Education</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-4">
            <a 
              href="#work" 
              className="px-10 py-4 bg-white text-black font-bold rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 w-full sm:w-auto text-center"
            >
              Explore Work
            </a>

            {/* --- MEGA CV DOWNLOAD LINK --- */}
            <a 
              href="https://mega.nz/file/A2lT1ThK#PpmTDTwBrIi2kP3KXvtCzmDhRlnUEUt5Ab-YqRu1sB8" // Replace with your actual MEGA link
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-white text-gray-300 hover:text-white rounded-sm transition-all w-full sm:w-auto text-center text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
            >
              Download CV <span className="text-lg">↓</span>
            </a>

            <a 
              href="https://github.com/iyousojo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 border border-white/10 hover:bg-white/5 rounded-sm transition-all w-full sm:w-auto text-center text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
            >
              GitHub <span>↗</span>
            </a>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group flex items-center justify-center aspect-[5/6] w-full max-w-md lg:max-w-none bg-gradient-to-t from-black to-card-gray rounded-3xl p-6 border border-white/5 hover:border-accent-blue/40 transition-all duration-700">
            <div className="absolute inset-0 bg-accent-blue/5 rounded-3xl blur-2xl group-hover:opacity-100 opacity-0 transition-opacity" />

            {Portrait ? (
              <img 
                src={Portrait} 
                alt="Iyanuoluwa Yousojo" 
                className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-700 z-10"
              />
            ) : (
              <div className="w-full h-full border-2 border-dashed border-gray-800 rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10">
                <span className="text-xs uppercase tracking-widest text-gray-700 font-mono mb-4">[ Portrait Area ]</span>
                <span className="text-5xl font-extrabold tracking-tighter italic font-serif text-gray-800">IY.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;