
import React from 'react';

const Overview: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-6 relative">
            <h2 className="text-xs font-bold text-brand-secondary tracking-[0.4em] uppercase mb-10 block">OUR HERITAGE STORY</h2>
            <h3 className="text-4xl md:text-7xl font-black text-brand-dark tracking-tighter leading-tight mb-12">
              Powering Connections <br /> 
              <span className="text-brand-secondary">that Build Nations</span>
            </h3>
            
            {/* Visual Addition */}
            <div className="relative mt-12 rounded-[3rem] overflow-hidden aspect-video shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                alt="Industrial Connectivity" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-secondary/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8 lg:pt-20">
            <p className="text-2xl text-brand-muted font-normal leading-relaxed">
              For over <strong>eight decades</strong>, <strong>Nicco Cables</strong> has been at the forefront of <strong>India’s cable manufacturing industry</strong>. From <strong>HT cables up to 33kV</strong> to advanced <strong>fire-survival</strong> and <strong>electron-beam technologies</strong>, our solutions power critical sectors including <strong>defence, railways, power utilities, infrastructure, and aerospace</strong>.
            </p>
            <div className="h-[1px] w-32 bg-brand-secondary" />
            <p className="text-lg text-brand-muted/70 leading-relaxed font-light">
              With <strong>world-class manufacturing</strong>, <strong>in-house R&D</strong>, advanced <strong>compounding technology</strong>, and <strong>NABL-accredited testing</strong>, we engineer cables that deliver uncompromising <strong>safety, durability, and performance</strong> in the most demanding environments.
            </p>
            
            <div className="pt-6">
              <button className="px-12 py-5 bg-brand-dark text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-secondary transition-all shadow-xl shadow-brand-dark/10">
                OUR CLIENTELE
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Overview;
