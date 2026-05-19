import React from 'react';
import { Link } from 'react-router-dom';
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
    title: <><span className="text-brand-secondary">80+ Years</span> of Proven Industry Leadership</>,
    icon: <img src="/icons/Nicco website icons/leadership.gif" alt="Leadership" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
  },
  {
    title: <>Pioneers in <span className="text-brand-secondary">E-Beam Technology</span></>,
    icon: <img src="/icons/Nicco website icons/electricity.gif" alt="E-Beam Technology" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
  },
  {
    title: <>Integrated <span className="text-brand-secondary">In-House</span> Elastomeric Compounding</>,
    icon: <img src="/icons/Nicco website icons/flask.gif" alt="Compounding" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
  },
  {
    title: <><span className="text-brand-secondary">Advanced Expertise</span> in Hybrid Cable Solutions</>,
    icon: <img src="/icons/Nicco website icons/innovation.gif" alt="Expertise" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
  },
  {
    title: <>Specialized <span className="text-brand-secondary">Pressure-Tight</span> Cable Capabilities</>,
    icon: <img src="/icons/Nicco website icons/diving-equipment.gif" alt="Pressure-Tight Capabilities" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
  },
  {
    title: <>Dedicated <span className="text-brand-secondary">Defence</span> Cable Solutions</>,
    icon: <img src="/icons/Nicco website icons/shield.gif" alt="Defence Solutions" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
  },
  {
    title: <>Trusted Partner to <span className="text-brand-secondary">Indian Railways</span></>,
    icon: <img src="/icons/Nicco website icons/train.gif" alt="Indian Railways" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
  },
  {
    title: <>Preferred Choice for <span className="text-brand-secondary">Mining Cables</span> Applications</>,
    icon: <img src="/icons/Nicco website icons/natural-resources.gif" alt="Mining Cable Applications" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
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
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link to="/about" className="inline-block px-6 py-2.5 bg-brand-secondary text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl shadow-brand-dark/10">
                  Know More
                </Link>
              </div>
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
