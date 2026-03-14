
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, X, Send, CheckCircle2 } from 'lucide-react';

interface Brochure {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  pdfUrl: string;
  description: string;
}

const dummyBrochures: Brochure[] = [
  {
    id: '1',
    title: 'Corporate Profile 2024',
    category: 'Corporate',
    thumbnail: 'https://picsum.photos/seed/corp/600/800',
    pdfUrl: '#',
    description: 'A comprehensive overview of Nicco Cables, our history, and our vision for the future of power transmission.'
  },
  {
    id: '2',
    title: 'Railway Cables Catalog',
    category: 'Technical',
    thumbnail: 'https://picsum.photos/seed/rail/600/800',
    pdfUrl: '#',
    description: 'Detailed specifications for RDSO approved specialized cables for railway signaling and power applications.'
  },
  {
    id: '3',
    title: 'Industrial Power Solutions',
    category: 'Technical',
    thumbnail: 'https://picsum.photos/seed/power/600/800',
    pdfUrl: '#',
    description: 'Explore our range of high-performance cables designed for heavy industrial environments and power plants.'
  },
  {
    id: '4',
    title: 'Quality & Certifications',
    category: 'Quality',
    thumbnail: 'https://picsum.photos/seed/quality/600/800',
    pdfUrl: '#',
    description: 'A collection of our international certifications and quality assurance protocols.'
  }
];

const BrochuresPage: React.FC = () => {
  const [selectedBrochure, setSelectedBrochure] = useState<Brochure | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownloadClick = (brochure: Brochure) => {
    setSelectedBrochure(brochure);
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call for lead capture
    const formData = new FormData(e.currentTarget);
    console.log('Lead captured:', Object.fromEntries(formData.entries()));
    
    // In a real scenario, you'd send this to Web3Forms or your backend
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setIsSubmitted(true);
    
    // Trigger download after a short delay
    setTimeout(() => {
      window.open(selectedBrochure?.pdfUrl, '_blank');
    }, 1000);
  };

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
              RESOURCES
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-10"
            >
              Technical Literature & Brochures
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 leading-relaxed font-light max-w-2xl"
            >
              Download our latest product catalogs, technical specifications, and corporate documentation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {dummyBrochures.map((brochure, idx) => (
              <motion.div
                key={brochure.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl mb-6 bg-gray-100 border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={brochure.thumbnail} 
                    alt={brochure.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">{brochure.category}</p>
                    <h4 className="text-white text-xl font-black tracking-tighter leading-tight">{brochure.title}</h4>
                  </div>
                </div>
                
                <div className="px-2">
                  <h3 className="text-lg font-black text-brand-dark tracking-tighter mb-2">{brochure.title}</h3>
                  <p className="text-sm text-brand-muted/70 line-clamp-2 mb-6 font-medium leading-relaxed">
                    {brochure.description}
                  </p>
                  <button 
                    onClick={() => handleDownloadClick(brochure)}
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-secondary hover:text-brand-dark transition-colors"
                  >
                    <Download className="w-4 h-4" /> DOWNLOAD PDF
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
              >
                <X className="w-6 h-6 text-brand-dark" />
              </button>

              <div className="p-10 md:p-16">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">Thank You!</h3>
                    <p className="text-brand-muted font-medium mb-8">Your download will start automatically. If it doesn't, click the button below.</p>
                    <a 
                      href={selectedBrochure?.pdfUrl}
                      className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-secondary transition-all"
                    >
                      <Download className="w-4 h-4" /> RESTART DOWNLOAD
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="mb-10">
                      <div className="flex items-center gap-3 text-brand-secondary mb-4">
                        <FileText className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">DOWNLOAD REQUEST</span>
                      </div>
                      <h3 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">
                        {selectedBrochure?.title}
                      </h3>
                      <p className="text-brand-muted font-medium">Please provide your details to access the technical documentation.</p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div>
                        <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest mb-3 block">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-brand-secondary transition-all" 
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest mb-3 block">Phone Number</label>
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-brand-secondary transition-all" 
                            placeholder="+91 ..."
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest mb-3 block">Email Address</label>
                          <input 
                            type="email" 
                            name="email"
                            required
                            className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-brand-secondary transition-all" 
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      
                      <button 
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-brand-dark text-white font-black text-[10px] uppercase tracking-[0.3em] py-5 rounded-2xl hover:bg-brand-secondary transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-dark/10 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {loading ? 'PROCESSING...' : 'ACCESS BROCHURE'} <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BrochuresPage;
