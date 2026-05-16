import React, { useState, useEffect, useRef } from 'react';
import { Award, Shield, Zap, Microscope, ShieldCheck, Cable, Factory } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TrustAnchors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  const anchors = [
    {
      icon: <Award className="w-8 h-8 text-brand-secondary flex-shrink-0" />,
      title: "80+ Years of Trust",
      description: "80+ years of trust and industry leadership"
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-secondary flex-shrink-0" />,
      title: "Trusted Across Sectors",
      description: "Trusted across defence, railways, power, mining & infrastructure sectors"
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-secondary flex-shrink-0" />,
      title: "3 MeV Electron Beam",
      description: "First private sector company in India to install a 3 MeV Electron Beam Accelerator (Radiation Dynamics Inc., USA) for advanced irradiated curing Cable Technology"
    },
    {
      icon: <Microscope className="w-8 h-8 text-brand-secondary flex-shrink-0" />,
      title: "Advanced R&D",
      description: "Advanced in-house R&D and NABL-accredited testing facilities"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-secondary flex-shrink-0" />,
      title: "Global Standards",
      description: "Certified to global quality and safety standards"
    },
    {
      icon: <Cable className="w-8 h-8 text-brand-secondary flex-shrink-0" />,
      title: "Wide Portfolio",
      description: "Wide portfolio of high-performance and specialty cable solutions"
    },
    {
      icon: <Factory className="w-8 h-8 text-brand-secondary flex-shrink-0" />,
      title: "State-of-the-art Manufacturing",
      description: "State-of-the-art manufacturing with modern automation and technical expertise"
    }
  ];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + anchors.length) % anchors.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(timer);
  }, [anchors.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      paginate(1);
    } else if (isRightSwipe) {
      paginate(-1);
    }
    
    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="bg-brand-ash py-2 md:py-2 border-b border-black/5 relative z-20 overflow-hidden select-none">
      <div className="w-full px-4 md:px-8">
        <div 
          className="relative h-16 md:h-16 w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={(e) => {
            touchStartX.current = e.clientX;
          }}
          onMouseMove={(e) => {
            if (touchStartX.current) {
              touchEndX.current = e.clientX;
            }
          }}
          onMouseUp={() => handleTouchEnd()}
          onMouseLeave={() => {
            if (touchStartX.current) handleTouchEnd();
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-row items-center justify-center gap-4 md:gap-6 w-full px-4"
            >
              <div className="flex-shrink-0 scale-90 md:scale-100">
                {anchors[currentIndex].icon}
              </div>
              <div className="max-w-[1000px] text-left">
                <h4 className="text-[13px] md:text-[15px] font-black text-brand-dark uppercase tracking-wider leading-tight mb-0.5">
                  {anchors[currentIndex].title}
                </h4>
                <p className="text-[11px] md:text-[12px] text-brand-muted font-medium leading-snug">
                  {anchors[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TrustAnchors;
