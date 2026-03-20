
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Camera, Globe, Tent, Newspaper, Award, Users } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

const getCategory = (filename: string) => {
  const name = filename.replace(/\.[^/.]+$/, "");
  const lowerName = name.toLowerCase();

  if (lowerName.includes('celebration') || lowerName.includes('vishkarma puja') || lowerName.includes('vishwakarma puja')) {
    return 'Events';
  }
  if (lowerName.includes('exhibitor') || lowerName.includes('exhibition')) {
    return 'Exhibitions';
  }
  if (lowerName.includes('newspaper') || lowerName.includes('news')) {
    return 'News Coverage';
  }
  
  if (lowerName.startsWith('our chairperson')) return 'Our Chairperson';
  if (lowerName.startsWith('iree')) return 'IREE Expo';
  if (lowerName.includes('women_s day') || lowerName.includes("women's day")) return 'Events';
  if (lowerName.includes('energy conclave')) return 'Energy Conclave';
  if (lowerName.startsWith('transtech')) return 'TransTech';
  if (lowerName.startsWith('india & eu')) return 'India & EU FTA';
  if (lowerName.startsWith('national executive')) return 'IEEMA';
  
  const parts = name.split(/[-_]/);
  return parts[0].trim() || 'Other';
};

const LazyImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      onLoad={() => {
        if (isInView) setIsLoaded(true);
      }}
      referrerPolicy="no-referrer"
    />
  );
};

const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { galleryItems, categories } = useMemo(() => {
    const imagePaths = Object.keys(import.meta.glob('/public/Gallery/*'));
    
    const items: GalleryItem[] = imagePaths.map((path, index) => {
      const filename = path.split('/').pop() || '';
      const title = filename.replace(/\.[^/.]+$/, "");
      const category = getCategory(filename);
      return {
        id: String(index),
        category,
        title,
        description: '',
        imageUrl: path.replace('/public', '')
      };
    });

    const uniqueCategories = Array.from(new Set(items.map(item => item.category)));
    const cats = uniqueCategories.map(cat => ({
      id: cat,
      label: cat,
      icon: Camera
    }));

    cats.unshift({ id: 'all', label: 'All Images', icon: Camera });

    return { galleryItems: items, categories: cats };
  }, []);

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="bg-brand-ash min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-6"
            >
              GALLERY
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-6"
            >
              Moments of Excellence & Impact
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white leading-relaxed font-light max-w-2xl"
            >
              Explore our journey through industry events, media recognitions, and corporate milestones.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-6 sticky top-24 md:top-28 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white/90 backdrop-blur-md shadow-xl border border-brand-secondary/10 rounded-[2rem] md:rounded-full py-3 md:py-4 px-2 md:px-8">
            <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar px-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-200 border ${
                    activeTab === cat.id 
                      ? 'bg-brand-secondary text-white border-brand-secondary shadow-lg shadow-brand-secondary/10' 
                      : 'bg-transparent text-black border-transparent hover:border-brand-dark hover:bg-brand-dark hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.28 }}
                  className="group"
                >
                  <div 
                    onClick={() => setSelectedImage(item)}
                    className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm mb-5 bg-gray-50 border border-gray-100 cursor-pointer group-hover:shadow-xl transition-all duration-300"
                  >
                    <LazyImage 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <p className="font-black text-brand-secondary uppercase tracking-[0.2em] mb-1 text-xs">{item.category}</p>
                    <h3 className="text-lg font-black text-brand-dark tracking-tighter mb-1 uppercase">{item.title}</h3>
                    {item.description && (
                      <p className="text-xs text-black font-medium leading-relaxed opacity-100">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-brand-dark/98 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative w-full max-w-5xl max-h-full flex flex-col items-center"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full relative flex flex-col items-center">
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                
                <div className="mt-8 text-center max-w-2xl px-4">
                  <p className="text-brand-secondary text-xs font-black uppercase tracking-[0.3em] mb-3">{selectedImage.category}</p>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-3 uppercase">{selectedImage.title}</h3>
                  {selectedImage.description && (
                    <p className="text-white font-medium leading-relaxed text-base">{selectedImage.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
