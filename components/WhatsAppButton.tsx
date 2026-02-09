
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "923706487654";
  const message = encodeURIComponent("Hi Taibe, I saw your portfolio and want to discuss a project.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Button Body */}
      <div className="relative glass-card p-4 rounded-full border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] group-hover:border-emerald-400 group-hover:scale-110 transition-all duration-500 bg-emerald-500/5 backdrop-blur-xl">
        <i className="fab fa-whatsapp text-3xl text-emerald-400 group-hover:text-emerald-300"></i>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-4 py-2 rounded-lg bg-black/80 border border-emerald-500/30 text-emerald-400 text-[10px] font-futuristic tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 pointer-events-none">
          CHAT WITH ME
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
