
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Immersive Background */}
      <div 
        className="absolute inset-0 z-0 scale-110 transition-transform duration-100 ease-out"
        style={{ 
          transform: `translateY(${scrollY * 0.15}px)`
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2000" 
          alt="Cable Manufacturing" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Animated Accent Line - Softened to white */}
        <div className="w-24 h-1 bg-white mb-8 animate-pulse opacity-50" />

        {/* Refined Action - Switched to Black button with red hover */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-16 py-5 bg-white text-brand-dark rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-secondary hover:text-white transition-all duration-500 flex items-center justify-center gap-3 group shadow-2xl">
            EXPLORE PRODUCTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Selection Label */}
      <div className="absolute bottom-12 left-12 flex flex-col gap-4 z-10">
        <div className="flex gap-4">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-secondary" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] opacity-50">EST. 1944</span>
      </div>
    </section>
  );
};

export default Hero;
