import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TrustAnchors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const anchors = [
    {
      icon: <Award className="w-8 h-8 text-brand-secondary flex-shrink-0" />,
      title: "80 Years of Legacy",
      description: "Trusted manufacturing since 1944"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-secondary flex-shrink-0" />,
      title: "NABL-Accredited",
      description: "In-house R&D & testing lab"
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-secondary flex-shrink-0" />,
      title: "3 MeV Accelerator",
      description: "First private sector in India"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % anchors.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [anchors.length]);

  return (
    <section className="bg-brand-ash py-6 border-b border-black/5 relative z-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 xl:px-32">
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-6 divide-x divide-black/10">
          {anchors.map((anchor, idx) => (
            <div key={idx} className="flex items-center gap-4 justify-center">
              {anchor.icon}
              <div>
                <h4 className="text-sm font-black text-brand-dark uppercase tracking-wider">{anchor.title}</h4>
                <p className="text-xs text-brand-muted font-medium">{anchor.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative h-16 w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center gap-4 w-full"
            >
              {anchors[currentIndex].icon}
              <div className="flex-1 max-w-[200px]">
                <h4 className="text-[13px] font-black text-brand-dark uppercase tracking-wider leading-tight mb-0.5">{anchors[currentIndex].title}</h4>
                <p className="text-[11px] text-brand-muted font-medium leading-tight">{anchors[currentIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TrustAnchors;
