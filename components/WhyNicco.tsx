
import React from 'react';
import { motion } from 'motion/react';
import { 
  History, 
  Zap, 
  FlaskConical, 
  Layers, 
  Waves, 
  Shield, 
  TrainFront, 
  Mountain 
} from 'lucide-react';

const pillars = [
  {
    title: "80+ Years of Proven Industry Leadership",
    icon: <History className="w-6 h-6" />
  },
  {
    title: "Pioneers in E-Beam Technology",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Integrated In-House Elastomeric Compounding",
    icon: <FlaskConical className="w-6 h-6" />
  },
  {
    title: "Advanced Expertise in Hybrid Cable Solutions",
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "Specialized Pressure-Tight Cable Capabilities",
    icon: <Waves className="w-6 h-6" />
  },
  {
    title: "Dedicated Defence Cable Solutions",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Trusted Partner to Indian Railways",
    icon: <TrainFront className="w-6 h-6" />
  },
  {
    title: "Preferred Choice for Mining Cable Applications",
    icon: <Mountain className="w-6 h-6" />
  }
];

const WhyNicco: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F3F2EE] border-y border-gray-100 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10 w-full">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 text-center lg:text-left">
              <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-4">WHY CHOOSE NICCO</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter leading-tight max-w-3xl mx-auto lg:mx-0">
                Engineering Excellence <span className="text-brand-secondary">Redefined.</span>
              </h3>
              <p className="mt-6 text-black/70 max-w-2xl mx-auto lg:mx-0 text-lg font-medium leading-relaxed">
                With a legacy of innovation and a commitment to quality, we provide specialized cable solutions that power the most demanding industries across the globe.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl group">
                <img 
                  src="/brand identity/WHY CHOOSE US.webp" 
                  alt="Why Choose Nicco" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-secondary/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-brand-secondary mb-6 transition-transform duration-500 group-hover:scale-110">
                {pillar.icon}
              </div>
              <h4 className="text-sm font-black text-brand-dark tracking-tighter leading-tight uppercase">
                {pillar.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNicco;
