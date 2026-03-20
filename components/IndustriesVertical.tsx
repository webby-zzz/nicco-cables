
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, image }) => (
  <div className="group relative overflow-hidden rounded-[2rem] bg-gray-900 aspect-[4/5] flex flex-col justify-end p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
    <img 
      src={`${image}?auto=format&fit=crop&q=80&w=1200`} 
      alt={title} 
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent opacity-100 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative z-10 space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-2xl font-black text-white tracking-tighter leading-tight">
        {title}
      </h3>
      <p className="text-white leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3 text-base">
        {description}
      </p>
      <div className="pt-2">
        <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-brand-secondary transition-colors">
          SPECIFICATIONS <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  </div>
);

const IndustriesVertical: React.FC = () => {
  const industries = [
    {
      title: "Transmission & Distribution",
      description: "Optimizing the power grid with robust HT Cables (upto 33kV) and advanced Overhead Conductors.",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5"
    },
    {
      title: "Renewable Energy",
      description: "Empowering Solar and Wind farms with specialized Electron Beam Cables and high-performance LT systems.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23"
    },
    {
      title: "Power Generation",
      description: "Critical infrastructure support using LT Control and specialized HT systems for Nuclear and Hydro plants.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
    },
    {
      title: "Exploration",
      description: "Built for extreme depth. Elastomeric and Silicon Cables (upto 15 kV) for Oil, Gas and Mining.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
    },
    {
      title: "Mobility",
      description: "High-flex mobility solutions for Rolling Stock, Warships, and Marine vessels using RF & Thermocouple.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837"
    },
    {
      title: "Defence",
      description: "Submarine and tactical grade connectivity. Advanced Electron Beam and specialized high-temp cabling.",
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc"
    },
    {
      title: "Manufacturing",
      description: "Precision for industrial processes. Instrumentation Cables and High Temp (ETFE, FEP, PTFE) solutions.",
      image: "https://images.unsplash.com/photo-1516198254840-7f2878d65414"
    },
    {
      title: "Infrastructure",
      description: "Smart city architecture powered by Data & Ethernet (Cat 5-7) and Fire Survival Cables.",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b"
    },
    {
      title: "Harnessing",
      description: "Integrated system complexity simplified. Medium Voltage Covered Conductors in optimized harnesses.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
    }
  ];

  return (
    <div className="bg-brand-ash py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-xs font-bold text-black uppercase tracking-widest mb-6 block">ENGINEERING SECTORS</h2>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter leading-tight">
              Industry Solutions.
            </h2>
          </div>
          <p className="text-black max-w-sm font-light text-base">
            A comprehensive ecosystem of industrial-grade cabling designed for the world's most demanding sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry) => (
            <IndustryCard 
              key={industry.title}
              title={industry.title}
              description={industry.description}
              image={industry.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesVertical;
