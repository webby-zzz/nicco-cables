
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white min-h-[50vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="bg-brand-dark rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden group">
          {/* Background Image Addition */}
          <div className="absolute inset-0 z-0 opacity-20 grayscale transition-transform duration-\[2s\] group-hover:scale-110">
            <img 
              src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=2000" 
              alt="Infrastructure Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-tight">
              Let's Connect Your <span className="">Infrastructure.</span>
            </h2>
            <p className="text-white font-light mb-8 max-w-2xl mx-auto leading-relaxed text-base">
              Our technical engineers are ready to provide custom cabling specifications for your unique industrial challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-secondary text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all shadow-2xl flex items-center justify-center gap-2 group/btn">
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
