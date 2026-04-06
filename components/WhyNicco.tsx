
import React from 'react';
import { motion } from 'motion/react';
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
    <section className="py-12 md:py-16 bg-[#ccc5b9] border-y border-gray-50 relative overflow-hidden min-h-[40vh] flex items-center">
      {/* Ghostly Background Image for texture */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] grayscale pointer-events-none">
         <img src="https://placehold.co/1x1/000000/000000" alt="Tech Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest">WHY CHOOSE NICCO</h2>
            <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight">
              Precision in <span className="text-brand-secondary underline decoration-brand-dark/10 underline-offset-[8px]">Every{"\u00A0"}Strand.</span>
            </h3>
            
            <div className="rounded-[1.5rem] overflow-hidden shadow-2xl relative aspect-[4/3] group">
              <img 
                src="https://placehold.co/1x1/000000/000000" 
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
                  <img src="https://placehold.co/1x1/000000/000000" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNicco;
