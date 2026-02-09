
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import AboutTerminal from './components/AboutTerminal.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import VisualGallery from './components/VisualGallery.tsx';
import Contact from './components/Contact.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import { useIntersectionObserver } from './hooks/useIntersectionObserver.ts';

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
        <section id="home" className="reveal-hidden" ref={(el) => { revealRefs.current[0] = el; }}>
          <Hero />
        </section>

        <section id="about" className="reveal-hidden" ref={(el) => { revealRefs.current[1] = el; }}>
          <AboutTerminal />
        </section>

        <section id="skills" className="reveal-hidden" ref={(el) => { revealRefs.current[2] = el; }}>
          <Skills />
        </section>

        <section id="projects" className="reveal-hidden" ref={(el) => { revealRefs.current[3] = el; }}>
          <Projects />
        </section>

        <section id="gallery" className="reveal-hidden" ref={(el) => { revealRefs.current[4] = el; }}>
          <VisualGallery />
        </section>

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
