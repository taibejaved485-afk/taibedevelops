
import React, { useState, useEffect, useRef } from 'react';

const VisualGallery: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<number | null>(null);

  const images = [
    { title: "Logo Mockup I", url: "https://i.pinimg.com/736x/76/dd/04/76dd04044359cf93de0af442b35c46aa.jpg" },
    { title: "Logo Mockup II", url: "https://i.pinimg.com/736x/6e/17/81/6e1781bea42221afd27249d6b4fb87ae.jpg" },
    { title: "Logo Mockup III", url: "https://i.pinimg.com/736x/41/c6/bc/41c6bc072fb5d2409740d9b8da12dac0.jpg" },
    { title: "Brand Identity X", url: "https://picsum.photos/seed/ui2/800/1000" },
    { title: "Vector Masterpiece", url: "https://picsum.photos/seed/ui3/800/1000" },
    { title: "Digital Ecosystem", url: "https://picsum.photos/seed/ui4/800/1000" },
    { title: "Typography Lab", url: "https://picsum.photos/seed/ui5/800/1000" },
    { title: "Abstract Motion", url: "https://picsum.photos/seed/ui7/800/1000" },
  ];

  const totalItems = images.length;
  const angleStep = 360 / totalItems;
  const radius = 450; // Radius for the 3D circle

  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = window.setInterval(() => {
        setRotation((prev) => prev - 0.2); // Slow elegant rotation
      }, 16);
    } else {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused]);

  return (
    <div className="py-32 relative overflow-hidden bg-[#0a0a0a] rounded-[3rem] border border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter metallic-text uppercase">
          Visual Archive
        </h2>
        <p className="text-gray-500 font-futuristic text-[10px] tracking-[0.5em] uppercase">
          3D Interactive Design Portfolio
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-6"></div>
      </div>

      {/* Carousel Scene */}
      <div 
        className="carousel-scene relative h-[500px] w-full flex items-center justify-center"
        style={{ perspective: '2000px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="carousel-track relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotation}deg)` 
          }}
        >
          {images.map((img, idx) => {
            const itemAngle = idx * angleStep;
            // Calculate focus state based on current rotation
            const currentItemAngle = (itemAngle + rotation) % 360;
            const normalizedAngle = (currentItemAngle + 360) % 360;
            const isFront = normalizedAngle < 20 || normalizedAngle > 340;

            return (
              <div
                key={idx}
                className="carousel-item absolute w-[280px] md:w-[350px] aspect-[3/4] transition-all duration-700 ease-in-out group"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Main Card */}
                <div 
                  className={`carousel-item-inner relative w-full h-full rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 ${
                    isFront ? 'scale-110 opacity-100 blur-0 shadow-[0_0_50px_rgba(34,211,238,0.3)]' : 'scale-90 opacity-30 blur-[6px]'
                  }`}
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Glassmorphism Title Bar */}
                  <div className={`carousel-item-title absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-md border-t border-white/10 transition-opacity duration-500 ${isFront ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-xs font-futuristic tracking-[0.2em] text-cyan-400 uppercase mb-1">Project {idx + 1}</p>
                    <h4 className="text-white font-bold text-lg">{img.title}</h4>
                  </div>
                </div>

                {/* Floor Reflection */}
                <div 
                  className="carousel-item-reflection absolute top-[102%] left-0 w-full h-full opacity-20 pointer-events-none transition-all duration-700"
                  style={{
                    transform: 'rotateX(180deg) scaleY(0.5)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), transparent)',
                  }}
                >
                  <img 
                    src={img.url} 
                    alt="" 
                    className={`w-full h-full object-cover rounded-2xl ${isFront ? 'blur-sm' : 'blur-lg'}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-32 text-center relative z-10">
        <a 
          href="https://www.behance.net/Taibegraphics" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-6 px-12 py-5 rounded-full glass-card border-white/10 group hover:border-cyan-500/50 transition-all duration-500 shadow-2xl"
        >
          <i className="fab fa-behance text-2xl text-white group-hover:text-cyan-400"></i>
          <span className="font-futuristic text-[10px] tracking-[0.3em] text-gray-300 group-hover:text-white uppercase">
            View Full Design Ecosystem
          </span>
          <i className="fas fa-arrow-right text-[10px] text-cyan-500 group-hover:translate-x-2 transition-transform"></i>
        </a>
      </div>
    </div>
  );
};

export default VisualGallery;
