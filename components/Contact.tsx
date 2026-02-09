
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">LET'S CONNECT</h2>
        <p className="text-gray-400 font-futuristic text-xs tracking-[0.3em] uppercase">Start a conversation</p>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-200">Got a vision? I have the tools to make it reality.</h3>
          <p className="text-gray-400 text-lg">Available for freelance opportunities and long-term collaborations.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-cyan-400 border-white/10 group-hover:border-cyan-400/50 group-hover:scale-110 transition-all">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-futuristic uppercase tracking-widest">Phone</p>
                <p className="text-lg text-gray-200">03706487654</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-purple-400 border-white/10 group-hover:border-purple-400/50 group-hover:scale-110 transition-all">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-futuristic uppercase tracking-widest">Email</p>
                <p className="text-lg text-gray-200">taibejaved485@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-pink-400 border-white/10 group-hover:border-pink-400/50 group-hover:scale-110 transition-all">
                <i className="fas fa-location-dot"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-futuristic uppercase tracking-widest">Location</p>
                <p className="text-lg text-gray-200">Ghokhuwal 121JB, Faisalabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 rounded-3xl border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <i className="fas fa-paper-plane text-[200px] -rotate-12"></i>
          </div>
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="YOUR NAME" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-all font-futuristic text-xs tracking-widest hover:bg-white/10"
              />
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-all font-futuristic text-xs tracking-widest hover:bg-white/10"
              />
              <textarea 
                rows={4} 
                placeholder="YOUR MESSAGE" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-all font-futuristic text-xs tracking-widest resize-none hover:bg-white/10"
              ></textarea>
            </div>
            <button className="w-full py-4 rounded-xl animated-border font-futuristic tracking-[0.3em] text-xs hover:scale-[1.05] transition-transform shadow-xl">
              SEND TRANSMISSION
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
