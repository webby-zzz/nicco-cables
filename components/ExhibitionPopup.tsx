import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ExhibitionPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup 1 second after opening the site
    const timer = setTimeout(() => {
      // Optional: use sessionStorage if we want it once per session,
      // but to strictly match "appear 1 second after opening the site" on every reload:
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Blur Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative max-w-4xl w-full bg-transparent rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col items-center"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose} 
              id="close-expo-popup"
              className="absolute top-4 right-4 bg-black/60 text-white hover:bg-brand-secondary hover:scale-110 p-2 rounded-full z-50 transition-all shadow-md"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banners */}
            <div className="w-full flex items-center justify-center">
              {/* PC Banner (Landscape 16:9 aspect) */}
              <img 
                src="/expo banner/PC Website Banner for E3 (1920px X 1080px)_page-0001.webp" 
                alt="Exhibition Banner PC" 
                className="hidden md:block w-full h-auto object-contain max-h-[85vh] rounded-3xl"
                referrerPolicy="no-referrer"
              />
              {/* Phone Banner (Square 1:1 aspect) */}
              <img 
                src="/expo banner/PHONE Website Banner for E3 (1080px X 1080px)_page-0001.webp" 
                alt="Exhibition Banner Phone" 
                className="block md:hidden w-full h-auto object-contain max-h-[80vh] rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExhibitionPopup;
