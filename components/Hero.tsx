
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
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] px-4 lg:px-10 flex flex-col items-center justify-center text-center h-full">
        <span className="text-sm md:text-base font-black text-white uppercase tracking-[0.5em] opacity-90">8 Decades of Trust & Innovation</span>
      </div>
    </section>
  );
};

export default Hero;
