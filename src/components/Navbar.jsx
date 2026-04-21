import React from 'react';
import { navLinks } from '../data/projects';

const Navbar = () => {
  return (
    /* Changed 'fixed' to 'absolute' so it stays at the top of the page only */
    <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-xl">
      <div className="flex items-center justify-between px-6 py-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        <span className="font-bold tracking-tighter text-xl italic text-white">IY.</span>
        
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-accent-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;