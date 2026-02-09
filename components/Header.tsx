
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Design', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:w-auto">
      <nav className="glass-card px-6 py-3 rounded-full flex flex-col items-center justify-center border border-white/20 shadow-xl overflow-hidden">
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 font-futuristic text-[9px] sm:text-xs tracking-widest uppercase transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Scroll Progress Line */}
        <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
