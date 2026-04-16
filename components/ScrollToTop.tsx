
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-[100] p-5 bg-brand-secondary text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group border-2 border-white/20 overflow-hidden hover:bg-brand-dark ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
      }`}
    >
      <div className="relative z-10 flex flex-col items-center">
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-200" />
      </div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-brand-dark text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl opacity-100 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block border border-white/10">
        Back to Top
      </span>

      {/* Background Pulse Effect */}
      <span className="absolute inset-0 bg-brand-dark/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
    </button>
  );
};

export default ScrollToTop;
