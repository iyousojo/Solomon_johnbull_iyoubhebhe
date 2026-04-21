import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ScrollReveal from './components/ScrollReveal'; // Import the wrapper

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white scroll-smooth selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />
      <main>
        {/* We usually don't wrap Hero because it should be visible immediately */}
        <Hero />
        
        {/* Wrap the Projects Grid */}
        <ScrollReveal delay={0.1}>
          <BentoGrid />
        </ScrollReveal>

        {/* Wrap the Skills section with a slightly longer delay */}
        <ScrollReveal delay={0.2}>
          <Skills />
        </ScrollReveal>

        {/* Wrap the Contact section */}
        <ScrollReveal delay={0.2}>
          <Contact />
        </ScrollReveal>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;