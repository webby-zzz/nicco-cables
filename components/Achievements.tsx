
import React from 'react';

const stats = [
  { value: "82+", label: "Years experience" },
  { value: "50+", label: "Global clients" },
  { value: "16", label: "Product types" },
  { value: "1M+", label: "Units delivered" },
];

const Achievements: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-secondary/10 skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center group">
              <span className="text-7xl md:text-9xl font-black tracking-tighter text-brand-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </span>
              <div className="h-[2px] w-12 bg-white/10 mb-6" />
              <span className="text-xs md:text-xs font-bold uppercase tracking-widest text-white">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
