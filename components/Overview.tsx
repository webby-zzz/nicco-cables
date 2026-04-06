
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Overview: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-white overflow-hidden min-h-[40vh] flex items-center">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          <div className="lg:col-span-6 relative">
            <h2 className="text-xs font-bold text-brand-secondary tracking-widest uppercase mb-3 block">OUR HERITAGE STORY</h2>
            <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight mb-4">
              Powering Connections <span className="text-brand-secondary">that Build{"\u00A0"}Nations</span>
            </h3>
            
            {/* Visual Addition */}
            <div className="relative mt-4 rounded-[1.5rem] overflow-hidden aspect-video shadow-2xl group bg-brand-ash flex items-center justify-center">
              <span className="text-brand-dark/10 font-black text-2xl tracking-tighter">NICCO CABLES</span>
              <div className="absolute inset-0 bg-brand-secondary/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <p className="text-black font-normal leading-relaxed text-base">
              For over <strong>8 decades</strong>, <strong>Nicco Cables</strong> has been at the forefront of <strong>India’s cable manufacturing industry</strong>. From <strong>HT cables up to 33kV</strong> to advanced <strong>fire-survival</strong> and <strong>electron-beam technologies</strong>, our solutions power critical sectors including <strong>transmission and distribution, renewable energy, power generation, exploration, mobility, defence, manufacturing, infrastructure, and harnessing</strong>.
            </p>
            <div className="h-[1px] w-16 bg-brand-secondary" />
            <p className="text-black leading-relaxed font-light text-base">
              With <strong>world-class manufacturing</strong>, <strong>in-house R&D</strong>, advanced <strong>compounding technology</strong>, and <strong>NABL-accredited testing</strong>, we engineer cables that deliver uncompromising <strong>safety, durability, and performance</strong> in the most demanding environments.
            </p>
            
            <div className="pt-2">
              <Link to="/about" className="inline-block px-6 py-2.5 bg-brand-secondary text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl shadow-brand-dark/10">
                Know More
              </Link>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
