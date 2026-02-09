
import React, { useEffect } from 'react';
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
import { GoogleGenAI } from "@google/genai";

const App: React.FC = () => {
  const revealRefs = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Dynamic Favicon Generation using Gemini
  useEffect(() => {
    const generateFavicon = async () => {
      const storedFavicon = localStorage.getItem('taibe_custom_favicon');
      if (storedFavicon) {
        const faviconLink = document.getElementById('dynamic-favicon') as HTMLLinkElement;
        if (faviconLink) faviconLink.href = storedFavicon;
        return;
      }

      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
        const prompt = "A sleek geometric favicon for a software engineer. An abstract hexagon shape formed by interconnected circuit lines and nodes, symbolizing connectivity and clean code. Minimalist style, gradient of emerald green and dark slate. Flat design, professional, sharp edges, isolated on white background.";
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }]
          }
        });

        const imagePart = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
        if (imagePart?.inlineData) {
          const base64Data = `data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`;
          localStorage.setItem('taibe_custom_favicon', base64Data);
          const faviconLink = document.getElementById('dynamic-favicon') as HTMLLinkElement;
          if (faviconLink) faviconLink.href = base64Data;
        }
      } catch (error) {
        console.error("Favicon generation failed:", error);
      }
    };

    generateFavicon();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      <CustomCursor />
      <WhatsAppButton />
      
      {/* Background Gemini Glow */}
      <div className="fixed inset-0 gemini-glow pointer-events-none z-0"></div>
      
      <Header />
      
      {/* Adjusted space-y for mobile (12) vs desktop (32) */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 lg:space-y-32 py-10 lg:py-20">
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
