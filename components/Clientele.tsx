
import React from 'react';
import { motion } from 'motion/react';

const logos = [
  "/clientele/Tata_Steel_Logo.svg.webp",
  "/clientele/SAIL_Logo.svg.webp",
  "/clientele/Jindal_Steel_and_Power_Logo.svg.webp",
  "/clientele/essar new.jpg",
  "/clientele/VIZAG-STEEL.webp",
  "/clientele/acc new.jpg",
  "/clientele/Ultratech_Cement_Logo.svg.webp",
  "/clientele/Lafarge_(Unternehmen)_logo.webp",
  "/clientele/NTPC_Logo.svg.webp",
  "/clientele/BHEL_logo.svg.webp",
  "/clientele/Tata_Power_Logo.svg.webp",
  "/clientele/Indian_Oil_Logo.svg.webp",
  "/clientele/ONGC_Logo.svg.webp",
  "/clientele/NPCIL_Logo.svg.webp",
  "/clientele/Damodar_Valley_Corporation_Logo.svg.webp",
  "/clientele/West_Bengal_Power_Development_Corporation_Logo.webp",
  "/clientele/GAIL.svg.webp",
  "/clientele/Reliance_Industries.webp",
  "/clientele/ITC_Limited_Logo.svg.webp",
  "/clientele/Larsen&Toubro_logo.svg.webp",
  "/clientele/Jk-paper-logo.webp",
  "/clientele/Delhi_Metro_logo.svg.webp",
  "/clientele/Kolkata_Metro_Rail_Corporation_Logo.webp",
  "/clientele/TRSL-logo.0363f7fa.webp",
  "/clientele/SECL_logo.webp",
  "/clientele/Coal_India_Logo.svg.webp",
  "/clientele/ECL_LOGO_COAL_INDIA.webp",
  "/clientele/Jnport_Logo.webp",
  "/clientele/Adani_Ports_Logo.svg.webp",
  "/clientele/Cochin_Shipyard_SVG_Logo.webp",
  "/clientele/Mazagon_Dock_Shipbuilders.svg.webp",
  "/clientele/Goa_Shipyard_Limited_Logo.webp",
  "/clientele/hindustan_shipyard_limited___india_logo.webp",
  "/clientele/Indian_Navy_crest.svg.webp",
  "/clientele/BARC_logo.webp",
  "/clientele/Indian_Space_Research_Organisation_Logo.svg.webp",
  "/clientele/Defence_Research_and_Development_Organisation.svg.webp",
  "/clientele/Bharat_Electronics_Limited-Logo.wine.webp",
  "/clientele/Hindustan_Aeronautics_Limited_Logo.svg.webp",
  "/clientele/66235173.webp",
  "/clientele/9b84e5d10cf047408e0b6d6c8a588a28_20230804120131169.webp",
  "/clientele/Banaras-Thermocables-Client.webp",
  "/clientele/ECR_Logo.webp",
  "/clientele/Ranbaxy_Logo.webp",
  "/clientele/download-2.webp",
  "/clientele/images (1).webp",
  "/clientele/images (1)_1.webp",
  "/clientele/images.webp",
  "/clientele/images_1.webp",
  "/clientele/locomotive-builders-plate-chittaranjan-locomotive-works-chittaranjan-india-1969-902580-small.webp",
  "/clientele/logo.webp",
  "/clientele/logo_1.webp"
];

const Clientele: React.FC = () => {
  return (
    <section id="clientele" className="py-12 md:py-16 bg-white overflow-hidden min-h-[40vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto px-4 lg:px-10 mb-6 w-full"
      >
        <div className="text-center">
          <h2 className="text-xs font-bold text-brand-secondary tracking-widest uppercase mb-2">OUR CLIENTELE</h2>
          <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter">
            Trusted by Industry{"\u00A0"}<span className="text-brand-secondary">Leaders</span>
          </h3>
        </div>
      </motion.div>

      <div className="w-full relative">
        <div className="relative flex overflow-hidden py-10 w-full group">
          {/* Edge Blur Effects */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <div
            className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]"
          >
            {/* First set of logos */}
            <div className="flex items-center">
              {logos.map((logo, index) => (
                <div key={`logo-1-${index}`} className="mx-12 w-48 h-28 flex items-center justify-center transition-all duration-500">
                  <img
                    src={logo}
                    alt={`Client Logo ${index}`}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            {/* Second set of logos for seamless loop */}
            <div className="flex items-center">
              {logos.map((logo, index) => (
                <div key={`logo-2-${index}`} className="mx-12 w-48 h-28 flex items-center justify-center transition-all duration-500">
                  <img
                    src={logo}
                    alt={`Client Logo ${index}`}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientele;
