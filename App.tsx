
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutTerminal from './components/AboutTerminal';
import Skills from './components/Skills';
import Projects from './components/Projects';
import VisualGallery from './components/VisualGallery';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const App: React.FC = () => {
  const revealRefs = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      <CustomCursor />
      <WhatsAppButton />
      
      {/* Background Gemini Glow */}
      <div className="fixed inset-0 gemini-glow pointer-events-none z-0"></div>
      
      <Header />
      
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32 py-20">
        {/* Fix: Ref callbacks must return void; added braces to avoid returning the element instance */}
        <section id="home" className="reveal-hidden" ref={(el) => { revealRefs.current[0] = el; }}>
          <Hero />
        </section>

        {/* Fix: Ref callbacks must return void */}
        <section id="about" className="reveal-hidden" ref={(el) => { revealRefs.current[1] = el; }}>
          <AboutTerminal />
        </section>

        {/* Fix: Ref callbacks must return void */}
        <section id="skills" className="reveal-hidden" ref={(el) => { revealRefs.current[2] = el; }}>
          <Skills />
        </section>

        {/* Fix: Ref callbacks must return void */}
        <section id="projects" className="reveal-hidden" ref={(el) => { revealRefs.current[3] = el; }}>
          <Projects />
        </section>

        {/* Fix: Ref callbacks must return void */}
        <section id="gallery" className="reveal-hidden" ref={(el) => { revealRefs.current[4] = el; }}>
          <VisualGallery />
        </section>

        {/* Fix: Ref callbacks must return void */}
        <section id="contact" className="reveal-hidden" ref={(el) => { revealRefs.current[5] = el; }}>
          <Contact />
        </section>
      </main>

      <footer className="relative z-10 py-10 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Taibe Javed. Professional Digital Ecosystem Architect.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
