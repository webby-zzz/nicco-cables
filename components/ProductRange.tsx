import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const products = [
  {
    name: "Data & Ethernet Cables",
    image: "/Product Images/thumbnails/data cables featured image.jpeg",
    link: "/products/data-ethernet"
  },
  {
    name: "Elastomeric & Silicon Cables",
    image: "/Product Images/thumbnails/Silicon insulated cable.jpeg",
    link: "/products/Elastomeric-silicon"
  },
  {
    name: "Electron Beam Cables",
    image: "/Product Images/thumbnails/Electron beam cable.jpeg",
    link: "/products/Electron-Beam"
  },
  {
    name: "Fire Resistant & Survival Cables",
    image: "/Product Images/thumbnails/new Fire Survival cable.jpeg",
    link: "/products/Fire-Survival"
  },
  {
    name: "High Temperature Cables",
    image: "/Product Images/thumbnails/High temperature PTFE cable.jpeg",
    link: "/products/high-temperature"
  },
  {
    name: "HT Cables upto 33kV",
    image: "/Product Images/thumbnails/HT cable.jpeg",
    link: "/products/ht-power-cables"
  },
  {
    name: "Instrumentation Cables",
    image: "/Product Images/thumbnails/Instrumentation Cables.jpeg",
    link: "/products/instrumentation"
  },
  {
    name: "LT Power & Control",
    image: "/Product Images/thumbnails/LT Cables.jpeg",
    link: "/products/lt-power-control"
  },
  {
    name: "MVCC",
    image: "/Product Images/thumbnails/Medium voltage Covered conductors - tree spacer.jpeg",
    link: "/products/mvcc"
  },
  {
    name: "Overhead Conductors",
    image: "/Product Images/thumbnails/Overhead Conductors.jpeg",
    link: "/products/overhead-conductors"
  },
  {
    name: "RF & Thermocouple Cables",
    image: "/Product Images/thumbnails/Thermocouple-Extension-Cable.webp",
    link: "/products/rf-thermocouple"
  }
];

const ProductRange: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const autoPlayRef = useRef<(() => void) | null>(null);

  // Synchronize visible items with viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = products.length;
  // Calculate max index to ensure no empty slots at the end
  const maxIndex = totalItems - visibleItems;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  // Keep autoPlay callback reference updated to avoid stale state closures
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  // Auto advance every 3 seconds
  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="product-range" className="py-12 md:py-16 bg-[#fcfcfc] overflow-hidden border-b border-gray-100 relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12 relative">
        
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-3">OUR PRODUCT RANGE</h2>
          <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter uppercase leading-tight">
            Featured <span className="text-brand-secondary">Products</span>
          </h3>
        </div>

        {/* Carousel Container with Absolute Arrows at Edges */}
        <div className="relative px-8 md:px-10">
          
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            id="product-range-prev"
            className="absolute left-0 top-[40%] -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-brand-secondary transition-colors z-10"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-8 h-8 stroke-[1.5px]" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            id="product-range-next"
            className="absolute right-0 top-[40%] -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-brand-secondary transition-colors z-10"
            aria-label="Next products"
          >
            <ChevronRight className="w-8 h-8 stroke-[1.5px]" />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-out py-2"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`
              }}
            >
              {products.map((product, idx) => (
                <div 
                  key={idx}
                  className="px-2 md:px-3 flex-shrink-0"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <Link 
                    to={product.link}
                    className="group block w-full"
                  >
                    {/* Featured Image Card */}
                    <div className="aspect-[1.5/1] w-full rounded-2xl overflow-hidden bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Centered Uppercase Bold Title Below */}
                    <span className="text-[11px] md:text-xs font-black text-brand-dark uppercase tracking-widest mt-4 block text-center leading-tight group-hover:text-brand-secondary transition-colors duration-300">
                      {product.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-brand-secondary w-6' : 'bg-gray-200 w-1.5'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductRange;
