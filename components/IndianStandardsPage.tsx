import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe, FileText, CheckCircle2 } from 'lucide-react';

const standards = [
  {
    id: 'power-control',
    title: 'Power & Control Cables',
    description: 'IS 1554, IS 7098 (Part 1)',
    image: 'https://picsum.photos/seed/standard-power/1200/800'
  },
  {
    id: 'elastomeric',
    title: 'Elastomeric Cables',
    description: 'IS 9968 (Part 1), IS 9968 (Part 2)',
    image: 'https://picsum.photos/seed/standard-elastomeric/1200/800'
  },
  {
    id: 'solar',
    title: 'Solar Cables',
    description: 'IS 17293',
    image: 'https://picsum.photos/seed/standard-solar/1200/800'
  },
  {
    id: 'fire-resistant',
    title: 'Fire Resistant Cables with Low Smoke & Gases',
    description: 'IS 17505',
    image: 'https://picsum.photos/seed/standard-fire/1200/800'
  },
  {
    id: 'automotive',
    title: 'Automotive Cables',
    description: 'IS 2465 – Battery cables',
    image: 'https://picsum.photos/seed/standard-auto/1200/800'
  },
  {
    id: 'overhead',
    title: 'Cables for Overhead Power Transmission & Distribution',
    description: 'IS 398 Part-2, IS 398 Part-4, IS 398 Part-6',
    image: 'https://picsum.photos/seed/standard-overhead/1200/800'
  }
];

const StandardSection: React.FC<{ standard: typeof standards[0], index: number }> = ({ standard, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.56, ease: "easeOut" }}
      className="mb-24 last:mb-0"
    >
      <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
        {/* Image Side */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
            <img 
              src={standard.image} 
              alt={standard.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-100" />
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-brand-secondary mb-4">
            <div className="h-[1px] w-8 bg-brand-secondary" />
            <span className="text-xs font-black uppercase tracking-widest">INDIAN STANDARDS</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight mb-6">
            {standard.title}
          </h2>
          
          <div className="bg-white border border-gray-100 rounded-[1.5rem] p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shadow-sm shrink-0">
                <FileText className="w-5 h-5 text-brand-secondary" />
              </div>
              <div>
                <h4 className="text-xs font-black text-black uppercase tracking-widest mb-1">Applicable Standards</h4>
                <p className="font-bold text-brand-dark tracking-tight text-base">
                  {standard.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const IndianStandardsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-ash min-h-screen pt-32 md:pt-40">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.56, ease: "easeOut" }}
          className="relative flex flex-col lg:flex-row overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] shadow-2xl border border-gray-100"
        >
          {/* Left Side - Visual */}
          <div className="lg:w-1/2 relative h-[40vh] lg:h-auto bg-brand-dark">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.84, ease: "easeOut", delay: 0.2 }}
              className="absolute inset-0"
            >
              <img 
                src="https://picsum.photos/seed/indian-standards/1200/1600" 
                alt="Indian Standards" 
                className="w-full h-full object-cover opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/80 lg:hidden" />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.56, ease: "easeOut" }}
              className="absolute bottom-8 left-8 z-20 hidden lg:block"
            >
              <div className="glass-panel p-6 rounded-[1.5rem] border-white/10 bg-white/5 backdrop-blur-xl text-white max-w-xs shadow-2xl">
                <Globe className="w-6 h-6 text-brand-secondary mb-3" />
                <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-1">Compliance</p>
                <h4 className="text-2xl font-black tracking-tighter">Indian Standards</h4>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-12 py-10 lg:py-12 bg-brand-ash relative">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.56, ease: "easeOut" }}
                className="flex items-center gap-3 text-brand-secondary mb-4"
              >
                <div className="h-[1px] w-8 bg-brand-secondary" />
                <span className="text-xs font-black uppercase tracking-widest">CABLES BY STANDARDS</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.56, ease: "easeOut" }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-brand-dark tracking-tighter leading-tight mb-4"
              >
                Indian <span className="text-brand-secondary">Standards</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.56, ease: "easeOut" }}
                className="space-y-4"
              >
                <p className="text-base text-black leading-relaxed font-medium">
                  Our comprehensive range of cables is manufactured in strict accordance with Indian Standards (IS), ensuring the highest levels of safety, reliability, and performance for diverse applications across the nation.
                </p>
                
                <ul className="space-y-2 pt-2">
                  {['Rigorous Quality Testing', 'Certified Manufacturing', 'Nationwide Compliance'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-secondary" />
                      <span className="text-sm text-brand-dark font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Standards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h3 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-3">SPECIFICATIONS</h3>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter">IS Compliant Cables</h2>
          </div>

          <div className="space-y-8">
            {standards.map((standard, index) => (
              <StandardSection key={standard.id} standard={standard} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndianStandardsPage;
