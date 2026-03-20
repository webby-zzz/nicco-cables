
import React from 'react';
import { Microscope, History, ShieldAlert, Cpu } from 'lucide-react';

const pillars = [
  {
    title: "Over 80 Years of Engineering Heritage",
  },
  {
    title: "Advanced Material Science",
  },
  {
    title: "Fail-Safe Reliability",
  },
  {
    title: "Technology Driven Process",
  }
];

const WhyNicco: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-brand-ash border-y border-gray-50 relative overflow-hidden min-h-[40vh] flex items-center">
      {/* Ghostly Background Image for texture */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] grayscale pointer-events-none">
         <img src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1200" alt="Tech Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest">WHY CHOOSE NICCO</h2>
            <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight">
              Precision in <span className="text-brand-secondary underline decoration-brand-dark/10 underline-offset-[8px]">Every Strand.</span>
            </h3>
            
            <div className="rounded-[1.5rem] overflow-hidden shadow-2xl relative aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800" 
                alt="Cable Engineering" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-5 rounded-[1.5rem] border border-gray-100 hover:border-brand-secondary/20 hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex items-center justify-center text-center min-h-[100px]">
                <div className="relative z-10">
                  <h4 className="text-base font-bold text-brand-dark tracking-tight leading-tight">{pillar.title}</h4>
                </div>
                {/* Subtle Image on Hover */}
                <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNicco;
