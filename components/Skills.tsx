
import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400', level: 90, bento: 'md:col-span-2 md:row-span-2' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500', level: 85, bento: 'md:col-span-1 md:row-span-1' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400', level: 90, bento: 'md:col-span-1 md:row-span-2' },
    { name: 'Photoshop', icon: 'fas fa-palette', color: 'text-blue-600', level: 80, bento: 'md:col-span-1 md:row-span-1', sub: 'Adobe' },
    { name: 'Illustrator', icon: 'fas fa-pen-nib', color: 'text-orange-600', level: 80, bento: 'md:col-span-1 md:row-span-1', sub: 'Adobe' },
    { name: 'MongoDB', icon: 'fas fa-database', color: 'text-emerald-400', level: 80, bento: 'md:col-span-1 md:row-span-1' },
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500', level: 95, bento: 'md:col-span-1 md:row-span-1' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500', level: 95, bento: 'md:col-span-1 md:row-span-1' },
  ];

  return (
    <div className="py-4 lg:py-10">
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 lg:mb-4 tracking-tighter uppercase">Arsenal</h2>
        <p className="text-gray-400 font-futuristic text-[8px] lg:text-[10px] tracking-[0.4em] uppercase">Core Tech & Design Capabilities</p>
        <div className="h-1 w-16 lg:w-24 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full mt-4 lg:mt-6"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 auto-rows-[120px] lg:auto-rows-[160px]">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className={`glass-card p-4 lg:p-6 rounded-2xl lg:rounded-[2rem] flex flex-col items-center justify-center text-center group relative overflow-hidden transition-all duration-500 hover:border-cyan-500/30 ${skill.bento}`}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color.replace('text', 'from')}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className={`text-3xl md:text-5xl mb-2 lg:mb-3 glow-icon ${skill.color} transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 relative z-10`}>
              <i className={skill.icon}></i>
            </div>
            
            <div className="relative z-10">
              <span className="font-futuristic text-[7px] lg:text-[8px] text-gray-500 block mb-1 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.sub || 'Expertise'}
              </span>
              <h3 className="font-bold text-[10px] sm:text-sm tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </div>
            
            {/* Animated Progress Bar on Hover */}
            <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10">
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_#22d3ee]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-[7px] lg:text-[9px] font-terminal mt-1 lg:mt-2 text-cyan-400 block">{skill.level}% Optimized</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
