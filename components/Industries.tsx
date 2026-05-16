
import React from 'react';
import { motion } from 'motion/react';
import { Train, Shield, Anchor, Zap, Flame, Cpu, Sun, Wind, Activity, Factory, Car, Box } from 'lucide-react';

const industryList = [
  { icon: Train, title: "Railway Cables", desc: "RDSO approved signaling and Power Cables for nationwide networks." },
  { icon: Shield, title: "Defence Cables", desc: "Ruggedized cabling for extreme military environments and tactical gear." },
  { icon: Flame, title: "Fire Survival Cables", desc: "Rated at 950°C to ensure critical system operation during fire emergencies." },
  { icon: Anchor, title: "Shipbuilding & Marine", desc: "Corrosion-resistant solutions for offshore vessels and naval fleets." },
  { icon: Zap, title: "MVCC Conductor", desc: "Medium Voltage Covered Conductors for optimized power transmission." },
  { icon: Sun, title: "Solar & Renewable", desc: "TUV certified PV cables for wind farms and solar installations." },
  { icon: Car, title: "Automotive Cable", desc: "High-flex precision wiring for modern vehicle electronics." },
  { icon: Box, title: "UL & HT Cables", desc: "Globally compliant UL listed and High Tension cables upto 33kV." },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-8 md:py-12 bg-white relative overflow-hidden min-h-[50vh] flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-ash/20 -skew-y-3 origin-top-left -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4"
        >
          <div className="max-w-xl">
            <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-4">CORE VERTICALS</h2>
            <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight">
              Specialized Solutions for Every{"\u00A0"}<span className="text-brand-secondary">Challenge</span>.
            </h3>
          </div>
          <p className="text-black max-w-sm mb-2 font-light text-base">
            We manufacture a comprehensive range of cables designed for reliability in the most demanding environments on earth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industryList.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-[2rem] border-transparent hover:border-brand-secondary/20 hover:shadow-2xl hover:shadow-brand-secondary/5 hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:rotate-[10deg] shadow-sm">
                <item.icon className="w-5 h-5 text-brand-dark transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-secondary transition-colors tracking-tight">{item.title}</h4>
              <p className="text-black text-xs leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
