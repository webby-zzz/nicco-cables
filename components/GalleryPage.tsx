
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Camera, Award, Newspaper, Tent, Users } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'expos' | 'stalls' | 'news' | 'awards' | 'functions';
  title: string;
  description: string;
  imageUrl: string;
}

const categories = [
  { id: 'all', label: 'All Moments', icon: Camera },
  { id: 'expos', label: 'Expos', icon: Globe },
  { id: 'stalls', label: 'Event Stalls', icon: Tent },
  { id: 'news', label: 'Media Coverage', icon: Newspaper },
  { id: 'awards', label: 'Awards', icon: Award },
  { id: 'functions', label: 'Functions', icon: Users },
];

// Helper for Globe icon since it wasn't imported in the first pass
import { Globe } from 'lucide-react';

const dummyGallery: GalleryItem[] = [
  {
    id: '1',
    category: 'expos',
    title: 'International Railway Expo 2023',
    description: 'Showcasing our latest RDSO approved signaling cables to global delegates.',
    imageUrl: 'https://picsum.photos/seed/expo1/1200/800'
  },
  {
    id: '2',
    category: 'stalls',
    title: 'PowerGrid Symposium Stall',
    description: 'Engaging with industry leaders at the annual PowerGrid technical symposium.',
    imageUrl: 'https://picsum.photos/seed/stall1/1200/800'
  },
  {
    id: '3',
    category: 'news',
    title: 'Economic Times Feature',
    description: 'Nicco Cables recognized for its contribution to the "Make in India" initiative.',
    imageUrl: 'https://picsum.photos/seed/news1/1200/800'
  },
  {
    id: '4',
    category: 'awards',
    title: 'Excellence in Manufacturing 2023',
    description: 'Receiving the prestigious award for quality consistency in the cable industry.',
    imageUrl: 'https://picsum.photos/seed/award1/1200/800'
  },
  {
    id: '5',
    category: 'functions',
    title: 'Annual CSR Meet',
    description: 'Sponsoring the regional education drive for underprivileged children.',
    imageUrl: 'https://picsum.photos/seed/func1/1200/800'
  },
  {
    id: '6',
    category: 'expos',
    title: 'Elecrama 2024',
    description: 'Our pavilion at Elecrama, the world\'s largest electrical ecosystem congregation.',
    imageUrl: 'https://picsum.photos/seed/expo2/1200/800'
  },
  {
    id: '7',
    category: 'news',
    title: 'Business Standard Highlight',
    description: 'Coverage of our new Electron Beam cable facility launch.',
    imageUrl: 'https://picsum.photos/seed/news2/1200/800'
  },
  {
    id: '8',
    category: 'awards',
    title: 'Safety First Certification',
    description: 'Awarded for maintaining 1000+ days without any on-site incidents.',
    imageUrl: 'https://picsum.photos/seed/award2/1200/800'
  }
];

const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = activeTab === 'all' 
    ? dummyGallery 
    : dummyGallery.filter(item => item.category === activeTab);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold text-brand-secondary uppercase tracking-[0.4em] mb-8"
            >
              GALLERY
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-10"
            >
              Moments of Excellence & Impact
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 leading-relaxed font-light max-w-2xl"
            >
              Explore our journey through industry events, media recognitions, and corporate milestones.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-4 border-b border-gray-100 sticky top-24 md:top-28 bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  activeTab === cat.id 
                    ? 'bg-brand-dark text-white border-brand-dark shadow-lg shadow-brand-dark/10' 
                    : 'bg-transparent text-brand-muted border-transparent hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div 
                    onClick={() => setSelectedImage(item)}
                    className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm mb-5 bg-gray-50 border border-gray-100 cursor-pointer group-hover:shadow-xl transition-all duration-500"
                  >
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <p className="text-[9px] font-black text-brand-secondary uppercase tracking-[0.2em] mb-1">{item.category}</p>
                    <h3 className="text-lg font-black text-brand-dark tracking-tighter mb-1 uppercase">{item.title}</h3>
                    <p className="text-xs text-brand-muted font-medium leading-relaxed opacity-70">
                      {item.description}
                    </p>
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
                className="absolute -top-12 right-0 p-2 text-white/40 hover:text-white transition-colors"
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
                  <p className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-3">{selectedImage.category}</p>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white mb-3 uppercase">{selectedImage.title}</h3>
                  <p className="text-sm md:text-base text-white/70 font-medium leading-relaxed">{selectedImage.description}</p>
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
