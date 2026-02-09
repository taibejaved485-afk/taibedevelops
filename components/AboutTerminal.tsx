
import React, { useState, useEffect } from 'react';

const AboutTerminal: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = `> access system_kernel.sh
> user_id: Taibe_Javed
> credentials: [VERIFIED]
> bio_init: 
  I specialize in the synthesis of robust Full-Stack 
  architectures and high-fidelity graphic design. 
  
  My methodology merges technical precision with 
  creative intuition, delivering digital ecosystems 
  that are as powerful as they are aesthetic.

> stack_status: ONLINE
> creative_mode: ENABLED
> connection_status: READY_TO_COLLABORATE`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 lg:py-20">
      {/* Mobile side-by-side grid, Desktop stays same */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
        
        {/* Image Section */}
        <div className="relative group flex justify-center">
          <div className="absolute -inset-4 md:-inset-10 bg-cyan-500/10 blur-[40px] md:blur-[100px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative glass-card rounded-2xl md:rounded-[3rem] overflow-hidden border border-white/10 p-2 md:p-4 floating w-full">
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent pointer-events-none"></div>
            <img 
              src="https://i.pinimg.com/736x/a5/19/52/a51952b60084d169d7a1b51efd18c5d4.jpg" 
              alt="About Taibe" 
              className="w-full h-[200px] sm:h-[400px] md:h-[550px] object-cover rounded-xl md:rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 border border-white/5"
            />
          </div>
        </div>

        {/* Terminal Section */}
        <div className="relative">
          <div className="mb-2 md:mb-10 hidden sm:block">
            <h2 className="text-xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tighter uppercase">Mission Briefing</h2>
            <div className="h-1 w-12 md:w-24 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
          </div>

          <div className="glass-card rounded-xl md:rounded-2xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Mac OS Style Terminal Header */}
            <div className="bg-white/10 px-2 md:px-4 py-1.5 md:py-3 flex items-center justify-between border-b border-white/10 backdrop-blur-xl">
              <div className="flex gap-1 md:gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ff5f56] shadow-[0_0_5px_rgba(255,95,86,0.5)]"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_5px_rgba(255,189,46,0.5)]"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#27c93f] shadow-[0_0_5px_rgba(39,201,63,0.5)]"></div>
              </div>
              <span className="text-[7px] md:text-[9px] font-terminal text-gray-500 tracking-[0.1em] md:tracking-[0.3em] uppercase truncate max-w-[50%]">terminal — taibe@ai</span>
              <div className="w-4 md:w-10"></div>
            </div>
            {/* Terminal Body - Adjusted font size for mobile */}
            <div className="p-2 md:p-8 font-terminal text-[7px] sm:text-xs md:text-sm leading-tight md:leading-relaxed text-cyan-400/90 min-h-[140px] sm:min-h-[350px] bg-black/40">
              <pre className="whitespace-pre-wrap">{text}<span className="inline-block w-1 h-2 md:w-2 md:h-4 bg-cyan-400 ml-1 animate-pulse"></span></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTerminal;
