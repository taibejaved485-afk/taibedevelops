
import React, { useRef } from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Ahad Portfolio',
      desc: 'Elegant personal branding showcase with fluid transitions.',
      link: 'https://ahadportfolio-inky.vercel.app',
      span: 'md:col-span-2',
      img: 'https://i.pinimg.com/736x/26/5c/43/265c43038b3303cd2d2a87590f8b36c6.jpg',
      color: 'from-cyan-500/20'
    },
    {
      title: 'Ahmad Portfolio',
      desc: 'Minimalist professional landing page.',
      link: 'https://ahmadprotfolio.vercel.app',
      span: 'md:col-span-1',
      img: 'https://i.pinimg.com/736x/96/4d/36/964d3602afbd96c076f212275c2b5e00.jpg',
      color: 'from-purple-500/20'
    },
    {
      title: 'Techskoop',
      desc: 'Futuristic tech news aggregator platform.',
      link: 'https://techskoop.vercel.app',
      span: 'md:col-span-1',
      img: 'https://i.pinimg.com/736x/d4/82/cf/d482cf356de039d8948fa6aa5d03d714.jpg',
      color: 'from-pink-500/20'
    },
    {
      title: 'Bridal Saloon',
      desc: 'Luxury aesthetics and client booking portal.',
      link: 'https://bridal-saloon.vercel.app',
      span: 'md:col-span-1',
      img: 'https://i.pinimg.com/736x/f1/37/66/f13766f130f290f2d5d0d703fc142bdf.jpg',
      color: 'from-blue-500/20'
    },
    {
      title: 'Motral Web Studio',
      desc: 'High-concept digital agency interface.',
      link: 'https://motral-web-studio.vercel.app',
      span: 'md:col-span-1',
      img: 'https://i.pinimg.com/1200x/5d/2f/86/5d2f863e23489e400eaa1d3438ecfdad.jpg',
      color: 'from-cyan-500/20'
    },
    {
      title: 'Motral Particles',
      desc: 'Physics-based interactive art engine.',
      link: 'https://motralparticles.vercel.app',
      span: 'md:col-span-2',
      img: 'https://i.pinimg.com/1200x/ef/09/3d/ef093de56256b5d3e2aabeda0d694ad1.jpg',
      color: 'from-pink-500/20'
    },
    {
      title: 'TastyBites',
      desc: 'Pixel-perfect e-commerce responsive clone.',
      link: 'https://pizza-hut-murex.vercel.app',
      span: 'md:col-span-1',
      img: 'https://i.pinimg.com/736x/50/53/b2/5053b225d1f30ad8e4adff11a3f3d5c0.jpg',
      color: 'from-orange-500/20'
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return; // Disable on mobile
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div className="py-10 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter uppercase">Project Matrix</h2>
        <p className="text-gray-400 font-futuristic text-[10px] tracking-[0.4em] uppercase">Interactive Deployment Archive</p>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
      </div>

      {/* Container switches between slider on mobile and grid on desktop */}
      <div className="projects-container-mobile grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-[350px]">
        {/* Track for mobile animation, Desktop stays simple grid children */}
        <div className="projects-track-mobile md:contents">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`project-card-mobile group glass-card rounded-3xl overflow-hidden relative border border-white/5 shine-sweep transition-transform duration-300 ease-out will-change-transform ${project.span}`}
            >
              <div className="absolute inset-0">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-black/90`}></div>
              </div>

              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-[10px] md:text-[11px] leading-relaxed mb-6 md:mb-8 line-clamp-2 font-light">
                  {project.desc}
                </p>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-max px-6 md:px-8 py-2 md:py-3 rounded-full border border-cyan-500/20 text-[8px] md:text-[9px] font-futuristic tracking-[0.3em] text-cyan-400 transition-all flex items-center gap-3 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] group-hover:border-cyan-400"
                >
                  LIVE DEMO <i className="fas fa-external-link-alt text-[8px]"></i>
                </a>
              </div>
              
              {/* Corner Decorative Elements */}
              <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 pointer-events-none border-t border-r border-white/10 rounded-tr-3xl transition-all group-hover:border-cyan-500/40"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
