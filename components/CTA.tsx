
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-brand-dark rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-32 relative overflow-hidden group">
          {/* Background Image Addition */}
          <div className="absolute inset-0 z-0 opacity-20 grayscale transition-transform duration-\[2s\] group-hover:scale-110">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
              alt="Infrastructure Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-[0.85]">
              Let's Connect Your <span className="">Infrastructure.</span>
            </h2>
            <p className="text-xl text-white/70 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Our technical engineers are ready to provide custom cabling specifications for your unique industrial challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-16 py-6 bg-white text-brand-dark rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-secondary hover:text-white transition-all shadow-2xl flex items-center justify-center gap-3 group/btn">
                REQUEST ENGINEERING CONSULTATION <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
