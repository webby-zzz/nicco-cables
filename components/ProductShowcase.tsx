
import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  { 
    name: "LT Power & Control", 
    img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "Instrumentation Cables", 
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "Elastomeric and Silicon Cables (upto 15 kV)", 
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "Electron Beam Cables", 
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "Overhead Conductors", 
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "HT Cables upto 33kV", 
    img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "Medium Voltage Covered Conductors/Tree Spacer Cables", 
    img: "https://images.unsplash.com/photo-1516198254840-7f2878d65414?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "High Temperature Cables (ETFE ,FEP, PTFE)", 
    img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "Data & Ethernet Cables (Cat 5, Cat 6, Cat 7)", 
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "RF & Thermocouple Cables", 
    img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    name: "Fire Resistant and Fire Survival Cables", 
    img: "https://images.unsplash.com/photo-1533230832481-99933dec4072?auto=format&fit=crop&q=80&w=800" 
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="text-xs font-black uppercase tracking-widest text-brand-dark mb-4 block opacity-50">OUR PRODUCTS</span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter max-w-3xl leading-[1.1]">
            Providing You with the Best and Most Advanced{"\u00A0"}Products.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-square bg-[#F8F9FA] rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center p-0 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors" />
              </div>
              <h4 className="text-lg font-bold text-brand-dark mb-2 tracking-tight line-clamp-2 min-h-[3.5rem]">
                {product.name}
              </h4>
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black group-hover:text-brand-secondary transition-colors group/btn">
                LEARN MORE <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="px-12 py-5 bg-brand-secondary text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-dark transition-all shadow-xl">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
