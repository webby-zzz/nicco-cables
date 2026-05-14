
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

const getCategory = (filename: string, path: string) => {
  const name = filename.replace(/\.[^/.]+$/, "");
  const lowerName = name.toLowerCase();
  const lowerPath = path.toLowerCase();

  if (lowerPath.includes('/manufacturing/') || lowerPath.includes('/plants and machinery images/')) {
    return 'Manufacturing Facility';
  }

  // Management/News updates
  if (
    lowerName.startsWith('india & eu') || 
    lowerName.startsWith('national executive') || // IEEMA
    lowerName.startsWith('our chairperson') ||
    lowerName.includes('women_s day speech') ||
    lowerName.includes("women's day speech")
  ) {
    return 'Management/News updates';
  }

  // Exhibitions & Conferences
  if (
    lowerName.includes('exhibitor') || 
    lowerName.includes('exhibition') ||
    lowerName.includes('energy conclave') ||
    lowerName.startsWith('iree') ||
    lowerName.startsWith('transtech')
  ) {
    return 'Exhibitions & Conferences';
  }

  // Celebrations
  if (
    (lowerName.includes('celebration') || lowerName.includes('vishkarma puja') || lowerName.includes('vishwakarma puja') || lowerName.includes('women_s day') || lowerName.includes("women's day") || lowerName.includes('event')) &&
    !lowerName.includes('women_s day speech at heritage group of institutes') &&
    !lowerName.includes("women's day speech at heritage group of institutes")
  ) {
    return 'Celebrations';
  }

  return 'Other';
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

  const { galleryItems } = useMemo(() => {
    const galleryPaths = Object.keys(import.meta.glob('/public/Gallery/**/*'));
    const plantsPaths = Object.keys(import.meta.glob('/public/plants and machinery images/**/*'));
    const imagePaths = Array.from(new Set([...galleryPaths, ...plantsPaths]));
    
    const items: GalleryItem[] = imagePaths.map((path, index) => {
      const filename = path.split('/').pop() || '';
      const title = filename.replace(/\.[^/.]+$/, "");
      const category = getCategory(filename, path);
      return {
        id: String(index),
        category,
        title,
        description: '',
        imageUrl: path.replace('/public', '')
      };
    });

    return { galleryItems: items };
  }, []);

  const categories = [
    { id: 'all', label: 'All Images' },
    { id: 'Manufacturing Facility', label: 'Manufacturing Facility' },
    { id: 'Management/News updates', label: 'Management/News updates' },
    { id: 'Exhibitions & Conferences', label: 'Exhibitions & Conferences' },
    { id: 'Celebrations', label: 'Celebrations' },
  ];

  const filteredItems = useMemo(() => {
    if (activeTab === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === activeTab);
  }, [activeTab, galleryItems]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredItems]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-48 md:pt-56 pb-16 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 relative z-10">
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
              className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-6 md:whitespace-nowrap"
            >
              Moments of Excellence &{"\u00A0"}Impact
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white leading-relaxed font-light max-w-2xl"
            >
              Explore our journey through industry events, media recognitions, and corporate{"\u00A0"}milestones.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-6 relative z-40">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
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
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
          {filteredItems.length > 0 ? (
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
                      {item.category !== 'Manufacturing Facility' && (
                        <h3 className="text-lg font-black text-brand-dark tracking-tighter mb-1 uppercase">{item.title}</h3>
                      )}
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
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 font-medium italic">No images available in this category yet.</p>
            </div>
          )}
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
                className="absolute -top-12 right-0 p-2 text-white hover:text-brand-secondary transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Arrows */}
              <button 
                onClick={handlePrev}
                className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 p-4 text-white hover:text-brand-secondary transition-colors z-10"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              
              <button 
                onClick={handleNext}
                className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 p-4 text-white hover:text-brand-secondary transition-colors z-10"
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              <div className="w-full relative flex flex-col items-center">
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                
                <div className="mt-8 text-center max-w-2xl px-4">
                  <p className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-2">{selectedImage.category}</p>
                  {selectedImage.category !== 'Manufacturing Facility' && (
                    <h3 className="text-base md:text-lg font-bold tracking-normal text-white mb-2 uppercase">{selectedImage.title}</h3>
                  )}
                  {selectedImage.description && (
                    <p className="text-white/80 font-medium leading-relaxed text-sm">{selectedImage.description}</p>
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
