
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const categories = [
  { title: "LT Power & Control Cables", img: "", link: "/products/lt-power-control" },
  { title: "Instrumentation Cables", img: "", link: "/products/instrumentation" },
  { title: "Elastomeric and Silicon Cables (upto 15 kV)", img: "", link: "/products/elastomeric-silicon" },
  { title: "Electron Beam Cables", img: "", link: "/products/electron-beam" },
  { title: "Solar Cables", img: "", link: "/products/solar-cables" },
  { title: "Wind Energy Cables", img: "", link: "/products/wind-energy-cables" },
  { title: "Overhead Conductors", img: "", link: "/products/overhead-conductors" },
  { title: "HT Cables — Up to 11 kV", img: "", link: "/products/ht-power-cables" },
  { title: "Medium Voltage Covered Conductors / Tree Spacer Cables", img: "", link: "/products/mvcc" },
  { title: "High Temperature Cables (ETFE / FEP / PTFE)", img: "", link: "/products/high-temperature" },
];

const Products: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="products" className="py-12 md:py-16 bg-gray-50/50 overflow-hidden min-h-[40vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-end mb-6 gap-4 w-full">
        <div>
          <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-2">PRODUCT RANGE</h2>
          <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter">Manufacturing <span className="text-brand-secondary">Precision</span></h3>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full bg-brand-secondary text-white hover:bg-black transition-all shadow-xl active:scale-90"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full bg-brand-secondary text-white hover:bg-black transition-all shadow-xl active:scale-90"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 px-4 md:px-[calc(50vw-640px+32px)] overflow-x-auto horizontal-scroll-hide-scrollbar snap-x pb-4"
      >
        {categories.map((cat, index) => (
          <div 
            key={index}
            className="flex-none w-[280px] md:w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden group relative snap-start glass-panel border-transparent shadow-2xl"
          >
            <img 
              src={cat.img} 
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="glass-panel p-6 rounded-[1.5rem] border-white/20">
                <span className="text-xs font-black uppercase tracking-widest mb-1 block text-brand-secondary">COLLECTION {index + 1}</span>
                <h4 className="text-xl font-black tracking-tighter mb-3 text-brand-dark">{cat.title}</h4>
                <div className="h-[1px] w-full bg-gray-200 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <Link 
                  to={cat.link}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-secondary hover:text-brand-dark transition-colors"
                >
                  DETAILED SPECS <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
