
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, X, Send, CheckCircle2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import BrochureDownloadModal from './BrochureDownloadModal';

interface Brochure {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  pdfUrl: string;
  description: string;
  previewImage?: string;
}

const dummyBrochures: Brochure[] = [
  {
    id: '1',
    title: 'Nicco Cables Corporate Catalogue',
    category: 'Corporate',
    thumbnail: '/brochures/Thumbnails/Nicco Cables Corporate Catalogue.webp',
    pdfUrl: '/brochures/Nicco Cables Pvt. Ltd. Corporate  Catalogue (2)_compressed.pdf',
    description: 'A comprehensive overview of Nicco Cables, our history, and our vision for the future of power transmission.',
    previewImage: '/brochures/Thumbnails/Nicco Cables Corporate Catalogue.webp'
  },
  {
    id: '2',
    title: 'Data Centre Cables',
    category: 'Technical',
    thumbnail: '/brochures/Thumbnails/Nicco Cables Corporate Catalogue.webp',
    pdfUrl: '/brochures/Data Centre_compressed.pdf',
    description: 'Detailed specifications for Data Centre cables.',
    previewImage: '/brochures/Thumbnails/Nicco Cables Corporate Catalogue.webp'
  },
  {
    id: '3',
    title: 'LT Power & Control Cables',
    category: 'Technical',
    thumbnail: '/brochures/Thumbnails/LT Cables Brochure.webp',
    pdfUrl: '/brochures/Long LT Power & Control Cable-compressed\u00A0(1).pdf',
    description: 'Comprehensive catalog for long length Low Tension power and Control Cables.',
    previewImage: '/brochures/Thumbnails/LT Cables Brochure.webp'
  },
  {
    id: '4',
    title: 'Medium Voltage Covered Conductor (MVCC)',
    category: 'Technical',
    thumbnail: '/brochures/Thumbnails/Medium Voltage Covered Conductor (MVCC).webp',
    pdfUrl: '/brochures/Medium Voltage Covered Conductor (MVCC) with E-Beam Process passed (1)_compressed.pdf',
    description: 'Specifications for Medium Voltage Covered Conductor (MVCC) with E-Beam Process.',
    previewImage: '/brochures/Thumbnails/Medium Voltage Covered Conductor (MVCC).webp'
  },
  {
    id: '5',
    title: 'Railway Cables',
    category: 'Technical',
    thumbnail: '/brochures/Thumbnails/Railway Cables.webp',
    pdfUrl: '/brochures/Railway Cables_compressed.pdf',
    description: 'Detailed specifications for RDSO approved specialized cables for Railway Signaling and power applications.',
    previewImage: '/brochures/Thumbnails/Railway Cables.webp'
  },
  {
    id: '6',
    title: 'Wind Energy and Solar Cables',
    category: 'Technical',
    thumbnail: '/brochures/Thumbnails/new Wind Energy and Solar Cables.jpg',
    pdfUrl: '/brochures/Wind Energy and Solar Cables (1)_compressed.pdf',
    description: 'Cables designed specifically for renewable energy applications including wind and solar.',
    previewImage: '/brochures/Thumbnails/new Wind Energy and Solar Cables.jpg'
  },
  {
    id: '7',
    title: 'Shipbuilding Cables',
    category: 'Technical',
    thumbnail: '/brochures/Thumbnails/Shipbuilding Cables.webp',
    pdfUrl: '/brochures/SHIPBUILDING CABLES_compressed.pdf',
    description: 'Marine-grade cables designed for shipbuilding and offshore applications.',
    previewImage: '/brochures/Thumbnails/Shipbuilding Cables.webp'
  },
  {
    id: '8',
    title: 'Automotive Cables',
    category: 'Technical',
    thumbnail: '/brochures/Thumbnails/Automotive Cables.webp',
    pdfUrl: '/brochures/AUTOMOTIVE CABLES_compressed.pdf',
    description: 'High-performance cables for the automotive industry.',
    previewImage: '/brochures/Thumbnails/Automotive Cables.webp'
  },
  {
    id: '9',
    title: 'HT Cables',
    category: 'Technical',
    thumbnail: '/brochures/Thumbnails/HT Cables upto 11KV.webp',
    pdfUrl: '/brochures/HT Cables upto 11KV - NICCO  (5.83 x 8.27 in) (1)_compressed.pdf',
    description: 'Specifications for High Tension (HT) cables.',
    previewImage: '/brochures/Thumbnails/HT Cables upto 11KV.webp'
  },
  {
    id: '10',
    title: 'Fire Survival Cables',
    category: 'Technical',
    thumbnail: '/brochures/Thumbnails/Fire Survival Cables.webp',
    pdfUrl: '/brochures/Fire Survival Cables rated at 950°C - NICCO_compressed.pdf',
    description: 'Fire survival cables rated at 950°C for critical safety applications.',
    previewImage: '/brochures/Thumbnails/Fire Survival Cables.webp'
  },
  {
    id: '11',
    title: 'Instrumentation Cables',
    category: 'Technical',
    thumbnail: '/brochures/Thumbnails/new Instrumentation Cables.jpg',
    pdfUrl: '/brochures/INSTRUMENTATION CABLES - NICCO_compressed.pdf',
    description: 'High-precision Instrumentation Cables for industrial control systems.',
    previewImage: '/brochures/Thumbnails/new Instrumentation Cables.jpg'
  },
  {
    id: '12',
    title: 'UL Cables',
    category: 'Technical',
    thumbnail: '/brochures/Thumbnails/UL Cables.png',
    pdfUrl: '/brochures/UL Cables_compressed.pdf',
    description: 'International standard UL listed cables for diverse applications.',
    previewImage: '/brochures/Thumbnails/UL Cables.png'
  },
  {
    id: '13',
    title: 'Elastomeric Insulated Cables',
    category: 'Technical',
    thumbnail: '/brochures/Thumbnails/Elastomeric Insulated Cables.webp',
    pdfUrl: '/brochures/_NICCO - ELASTOMERIC INSULATED CABLES_compressed.pdf',
    description: 'Highly flexible, durable, and temperature-resistant Elastomeric Insulated Cables designed for heavy industrial and demanding applications.',
    previewImage: '/brochures/Thumbnails/Elastomeric Insulated Cables.webp'
  }
];

const BrochuresPage: React.FC = () => {
  const [selectedBrochure, setSelectedBrochure] = useState<Brochure | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDownloadClick = (brochure: Brochure) => {
    setSelectedBrochure(brochure);
    setIsModalOpen(true);
  };

  
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-56 pb-16 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-6"
            >
              RESOURCES
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-6 md:whitespace-nowrap"
            >
              Technical Literature &{"\u00A0"}Brochures
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white leading-relaxed font-light max-w-2xl"
            >
              Download our latest product catalogs, technical specifications, and corporate{"\u00A0"}documentation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {dummyBrochures.map((brochure, idx) => (
              <motion.div
                key={brochure.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl mb-6 bg-gray-100 border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={brochure.thumbnail} 
                    alt={brochure.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <p className="text-white text-xs font-bold uppercase tracking-widest mb-2">{brochure.category}</p>
                    <h4 className="text-white text-xl font-black tracking-tighter leading-tight">{brochure.title}</h4>
                  </div>
                </div>
                
                  <div className="px-2">
                    <h3 className="text-base font-black text-brand-dark tracking-tighter mb-2">{brochure.title}</h3>
                    <p className="text-xs text-black line-clamp-2 mb-4 font-medium leading-relaxed">
                      {brochure.description}
                    </p>
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={() => handleDownloadClick(brochure)}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-secondary hover:text-brand-dark transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" /> DOWNLOAD
                      </button>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <BrochureDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brochureTitle={selectedBrochure?.title || ''}
        pdfUrl={selectedBrochure?.pdfUrl || ''}
      />
    </div>
  );
};

export default BrochuresPage;
