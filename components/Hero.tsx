
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullSubText = "Digital Systems Architect × Visual Artist";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullSubText.slice(0, i));
      i++;
      if (i > fullSubText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between text-left py-10 lg:py-20 min-h-[70vh] lg:min-h-[90vh] mt-4 lg:mt-10 gap-12 lg:gap-20">
      {/* Left Side: Content */}
      <div className="flex-1 order-2 lg:order-1 space-y-8 max-w-2xl">
        <div className="space-y-4">
          <p className="font-futuristic text-cyan-400 tracking-[0.4em] text-xs lg:text-sm uppercase animate-pulse">
            Protocol: Active
          </p>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter metallic-text uppercase leading-none">
            Taibe <br /> Javed
          </h1>
          <div className="h-1 w-24 lg:w-32 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
        </div>

        <p className="font-futuristic text-lg md:text-2xl text-gray-300 tracking-[0.2em] uppercase min-h-[3rem]">
          {typedText}<span className="inline-block w-2 h-6 bg-cyan-400 ml-1 animate-pulse"></span>
        </p>
        
        <p className="text-gray-400 text-sm lg:text-lg leading-relaxed max-w-lg">
          Bridging the gap between high-performance engineering and pixel-perfect design. 
          Architecting futuristic digital ecosystems with the MERN stack and Adobe Creative Suite.
        </p>

        <div className="flex flex-wrap gap-4 lg:gap-6 pt-4">
          <a 
            href="#projects" 
            className="px-6 lg:px-10 py-3 lg:py-4 rounded-full glass-card border-white/10 hover:border-cyan-500/50 font-futuristic text-[8px] lg:text-[10px] tracking-[0.3em] hover:scale-110 transition-transform active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            EXPLORE WORK
          </a>
          <a 
            href="#contact" 
            className="px-6 lg:px-10 py-3 lg:py-4 rounded-full border border-white/10 glass-card font-futuristic text-[8px] lg:text-[10px] tracking-[0.3em] hover:border-cyan-500 hover:scale-110 transition-all active:scale-95"
          >
            INITIATE CONTACT
          </a>
        </div>
      </div>

      {/* Right Side: Circular Image */}
      <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
        <div className="relative group">
          {/* Enhanced Glow Effects */}
          <div className="absolute -inset-12 bg-gradient-to-tr from-cyan-500/30 via-purple-500/20 to-pink-500/30 blur-[60px] lg:blur-[100px] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -inset-4 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute -inset-8 border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

          {/* Circle Frame */}
          <div className="relative w-48 h-48 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full p-2 bg-gradient-to-tr from-cyan-400/50 via-purple-500/30 to-pink-500/50 shadow-[0_0_30px_rgba(34,211,238,0.3)] lg:shadow-[0_0_50px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_80px_rgba(34,211,238,0.5)] transition-all duration-700">
            <div className="w-full h-full rounded-full bg-black overflow-hidden relative border-4 border-black">
              <img 
                src="https://i.pinimg.com/736x/af/4d/a5/af4da5dd0b6e4f8b84928fa7d15b41ca.jpg" 
                alt="Taibe Javed" 
                className="w-full h-full object-cover scale-110 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-100"
              />
              {/* Scanline overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-4 w-full animate-[scan_4s_linear_infinite] opacity-40 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Bottom Scroll Icon (Hidden on mobile when stacked to avoid clutter) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="mouse-scroll shadow-[0_0_15px_rgba(34,211,238,0.3)]"></div>
        <span className="text-[9px] font-futuristic tracking-[0.4em] text-cyan-500/50 uppercase">Scroll Down</span>
      </div>
    </div>
  );
};

export default Hero;
