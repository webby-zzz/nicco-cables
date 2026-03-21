
import React from 'react';
import { Leaf, Recycle, Sun, Droplets } from 'lucide-react';

const Sustainability: React.FC = () => {
  const sustainabilityItems = [
    { icon: Leaf, text: "Eco-friendly insulation materials", img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=200" },
    { icon: Recycle, text: "95% recyclable packaging", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=200" },
    { icon: Sun, text: "Solar powered manufacturing hubs", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=200" },
    { icon: Droplets, text: "Zero wastewater discharge", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=200" }
  ];

  return (
    <section id="sustainability" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-6 block">RESPONSIBILITY</h2>
        <h3 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter leading-tight">
          Cabling a <span className="text-brand-secondary">Greener</span>{"\u00A0"}Tomorrow.
        </h3>
      </div>

      <div className="relative">
        {/* Animated Marquee */}
        <div className="flex animate-marquee whitespace-nowrap gap-12 py-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-12">
              {sustainabilityItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-8 bg-gray-50 px-10 py-6 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm">
                    <img src={item.img} alt="" loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex items-center gap-4">
                    <item.icon className="w-6 h-6 text-brand-secondary" strokeWidth={2} />
                    <span className="text-xl font-black text-brand-dark tracking-tighter uppercase">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Sustainability;
