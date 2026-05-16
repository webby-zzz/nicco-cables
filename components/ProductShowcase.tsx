
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

const products = [
  { 
    name: "LT Power & Control Cables", 
    img: "https://placehold.co/1x1/000000/000000",
    link: "/products/lt-power-control"
  },
  { 
    name: "Instrumentation Cables", 
    img: "https://placehold.co/1x1/000000/000000",
    link: "/products/instrumentation"
  },
  { 
    name: "Elastomeric and Silicon Cables (upto 15 kV)", 
    img: "https://placehold.co/1x1/000000/000000",
    link: "/products/Elastomeric-silicon"
  },
  { 
    name: "Electron Beam Cables", 
    img: "https://placehold.co/1x1/000000/000000",
    link: "/products/Electron-Beam"
  },
  { 
    name: "Solar Cables", 
    img: "https://placehold.co/1x1/000000/000000",
    link: "/products/solar-cables"
  },
  { 
    name: "Wind Energy Cables", 
    img: "https://placehold.co/1x1/000000/000000",
    link: "/products/wind-energy-cables"
  },
  { 
    name: "Overhead Conductors", 
    img: "https://placehold.co/1x1/000000/000000",
    link: "/products/overhead-conductors"
  },
  { 
    name: "HT Cables upto 33 kV", 
    img: "https://placehold.co/1x1/000000/000000",
    link: "/products/ht-power-cables"
  },
  { 
    name: "Medium Voltage Covered Conductors / Tree Spacer Cables", 
    img: "https://placehold.co/1x1/000000/000000",
    link: "/products/mvcc"
  },
  { 
    name: "High Temperature Cables (ETFE / FEP / PTFE)", 
    img: "https://placehold.co/1x1/000000/000000",
    link: "/products/high-temperature"
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-black uppercase tracking-widest text-brand-dark mb-4 block opacity-50">OUR PRODUCTS</span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter max-w-3xl leading-[1.1]">
            Providing You with the Best and Most Advanced{"\u00A0"}Products.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group cursor-pointer"
            >
              <Link to={product.link}>
                <div className="aspect-square bg-[#F8F9FA] rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center p-0 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 relative">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    loading="lazy"
                    className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="text-base font-bold text-brand-dark mb-2 tracking-tight truncate w-full">
                  {product.name}
                </h4>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black group-hover:text-brand-secondary transition-colors group/btn">
                  LEARN MORE <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <button className="px-12 py-5 bg-brand-secondary text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-dark transition-all shadow-xl">
            VIEW ALL PRODUCTS
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
