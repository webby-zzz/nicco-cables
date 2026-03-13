
import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const categories = [
  { title: "Power & Control", img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1974&auto=format&fit=crop" },
  { title: "Instrumentation", img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?q=80&w=2070&auto=format&fit=crop" },
  { title: "Elastomeric", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop" },
  { title: "HT & LT Cables", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" },
  { title: "Railway Signal", img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070&auto=format&fit=crop" },
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
    <section id="products" className="py-20 md:py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-[0.4em] mb-6">PRODUCT RANGE</h2>
          <h3 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter">Manufacturing <span className="text-brand-secondary">Precision</span></h3>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="p-6 rounded-full glass-panel hover:bg-brand-dark hover:text-white transition-all shadow-xl active:scale-90"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-6 rounded-full glass-panel hover:bg-brand-dark hover:text-white transition-all shadow-xl active:scale-90"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 px-6 md:px-[calc(50vw-640px+48px)] overflow-x-auto horizontal-scroll-hide-scrollbar snap-x"
      >
        {categories.map((cat, index) => (
          <div 
            key={index}
            className="flex-none w-[320px] md:w-[480px] aspect-[4/5] rounded-[3rem] overflow-hidden group relative snap-start glass-panel border-transparent shadow-2xl"
          >
            <img 
              src={cat.img} 
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            
            <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              <div className="glass-panel p-8 rounded-[2rem] border-white/20">
                <span className="text-[10px] font-black uppercase tracking-widest mb-2 block text-brand-secondary">COLLECTION {index + 1}</span>
                <h4 className="text-2xl font-black tracking-tighter mb-4 text-brand-dark">{cat.title}</h4>
                <div className="h-[1px] w-full bg-gray-200 mb-6 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-secondary transition-colors">
                  DETAILED SPECS <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
