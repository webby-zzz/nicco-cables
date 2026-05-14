
import React from 'react';
import { motion } from 'motion/react';

const accreditationLogos = [
  { url: "/certifications/Picture2.webp", label: "" },
  { url: "/certifications/Picture3.webp", label: "" },
  { url: "/certifications/Picture4.webp", label: "" },
  { url: "/certifications/Picture5.webp", label: "" },
  { url: "/certifications/Picture6.webp", label: "" },
  { url: "/certifications/Picture7.webp", label: "" },
  { url: "/certifications/Picture8.webp", label: "" },
  { url: "/certifications/Picture9.webp", label: "" },
  { url: "/certifications/Picture10.webp", label: "" },
  { url: "/certifications/Picture11.webp", label: "" },
  { url: "/certifications/Picture11 - Copy.webp", label: "" },
  { url: "/certifications/Picture11 - Copy - Copy.webp", label: "" },
  { url: "/certifications/Picture12.webp", label: "" },
  { url: "/certifications/Picture12 - Copy.webp", label: "" },
  { url: "/certifications/Picture12 - Copy (2).webp", label: "" }
];

const Certifications: React.FC = () => {
  return (
    <section id="quality" className="py-12 md:py-16 bg-white overflow-hidden min-h-[40vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto px-4 lg:px-10 mb-6 w-full"
      >
        {/* Main Title */}
        <div className="text-center">
          <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-4">CERTIFICATIONS</h2>
          <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter uppercase mb-2">
            CERTIFIED FOR
          </h3>
          <p className="font-medium text-black italic tracking-tight text-base">
            Quality, Safety & Reliability
          </p>
        </div>
      </motion.div>

      {/* Accreditation Logos Marquee */}
      <div className="w-full relative">
        <div className="relative flex overflow-hidden py-10 w-full group">
          {/* Edge Blur Effects */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div
            className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]"
            style={{ animationDuration: '13s' }}
          >
            {/* First set of logos */}
            <div className="flex items-center">
              {accreditationLogos.map((logo, idx) => (
                <div key={`logo-1-${idx}`} className="mx-12 md:mx-16 flex flex-col items-center text-center flex-shrink-0 transition-all duration-500">
                  <div className="h-24 md:h-28 w-36 flex items-center justify-center">
                    <img 
                      src={logo.url} 
                      alt={logo.label} 
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-black tracking-widest uppercase">
                    {logo.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Second set of logos for seamless loop */}
            <div className="flex items-center">
              {accreditationLogos.map((logo, idx) => (
                <div key={`logo-2-${idx}`} className="mx-12 md:mx-16 flex flex-col items-center text-center flex-shrink-0 transition-all duration-500">
                  <div className="h-24 md:h-28 w-36 flex items-center justify-center">
                    <img 
                      src={logo.url} 
                      alt={logo.label} 
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="mt-4 text-[10px] font-black text-black tracking-widest uppercase">
                    {logo.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
