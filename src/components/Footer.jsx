import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Added a very high z-index and relative positioning to ensure it's on top
    <footer className="relative z-20 py-32 px-6 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          <div className="max-w-sm">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 text-white leading-tight">
              Let's build something <br />
              <span className="text-blue-500 italic font-serif font-light text-4xl">extraordinary.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Available for full-stack roles. Based in Nigeria, working globally.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Social</span>
              <a href="https://github.com/iyousojo" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-blue-500 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/solomon-iyoubhebhe-8347682b1" className="text-sm text-gray-300 hover:text-blue-500 transition-colors">LinkedIn</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Navigation</span>
              <a href="mailto:your-email@example.com" className="text-sm text-gray-300 hover:text-blue-500 transition-colors">Email</a>
              
              {/* --- HIGH VISIBILITY BUTTON --- */}
              <button 
                onClick={scrollToTop} 
                className="group flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white hover:bg-white/10 hover:border-blue-500 transition-all cursor-pointer shadow-lg"
              >
                <span>BACK TO TOP</span>
                <span className="group-hover:-translate-y-1 transition-transform inline-block text-blue-500">↑</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gray-600">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            Designed & Developed by IYOUSOJO
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gray-800">
            © {new Date().getFullYear()} — EK-NGA / 6.3472° N
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;