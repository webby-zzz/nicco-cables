
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Overview: React.FC = () => {
  return (
    <section id="about" className="py-6 md:py-8 bg-white overflow-hidden flex items-center">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          <div className="lg:col-span-6 relative">
            <h2 className="text-xs font-bold text-brand-secondary tracking-widest uppercase mb-2 block">OUR HERITAGE STORY</h2>
            <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight mb-3">
              <span className="inline-block">Powering Connections</span> <br className="md:hidden" />
              <span className="text-brand-secondary inline-block">That Build{"\u00A0"}Nations</span>
            </h3>
            
            {/* Visual Addition */}
            <div className="relative mt-3 rounded-[1.5rem] overflow-hidden h-[220px] md:h-[280px] w-full shadow-2xl group">
              <img loading="lazy" src="/brand identity/cable-manufacturing.jpg.jpeg" 
                alt="Nicco Heritage" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-secondary/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3 text-black leading-relaxed font-normal text-sm md:text-base">
            <p>
              For over 8 decades, Nicco Cables has stood at the forefront of <strong className="font-bold text-brand-dark">India's cable manufacturing industry</strong>, a legacy forged in trust, engineering excellence, and an unbreakable commitment to powering <strong className="font-bold text-brand-dark">the Nation's most critical infrastructure</strong>.
            </p>
            <div className="h-[1px] w-16 bg-brand-secondary" />
            <div className="space-y-3">
              <p>
                From metro networks and high-speed trains to offshore platforms, wind farms, mining operations, and classified defense missions, our cables go where failure is simply not an option.
              </p>
              <p>
                We deliver power and reliability across key sectors: <strong className="font-bold text-brand-dark">Transmission & Distribution, Renewable Energy, Power Generation, Exploration, Mobility, Defence, Manufacturing, Infrastructure and Harnessing</strong>.
              </p>
              <p>
                Supporting <strong className="font-bold text-brand-dark">Atmanirbhar Bharat and Viksit Bharat 2047</strong>, Nicco operates 5,50,000 sq. ft. of world-class infrastructure, in-house R&D, advanced compounding, and NABL testing laboratories.
              </p>
              <p className="font-bold text-brand-dark">
                We build the backbone of India.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
