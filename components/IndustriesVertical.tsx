
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IndustryCardProps {
  title: string;
  description: string;
  link: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, link }) => (
  <Link to={link} className="group relative overflow-hidden rounded-[2rem] bg-brand-dark aspect-[4/5] flex flex-col justify-end p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent opacity-100 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative z-10 space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-2xl font-black text-white tracking-tighter leading-tight">
        {title}
      </h3>
      <p className="text-white leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3 text-base">
        {description}
      </p>
      <div className="pt-2">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-brand-secondary transition-colors">
          SPECIFICATIONS <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  </Link>
);

const IndustriesVertical: React.FC = () => {
  const industries = [
    {
      title: "Transmission and Distribution",
      description: "Optimizing the power grid with robust HT Cables (upto 33kV) and advanced Overhead Conductors.",
      link: "/industry/transmission-distribution"
    },
    {
      title: "Renewable Energy",
      description: "Empowering Solar and Wind farms with specialized Electron Beam Cables and high-performance LT systems.",
      link: "/industry/renewable-energy"
    },
    {
      title: "Power Generation",
      description: "Critical infrastructure support using LT Control and specialized HT systems for Nuclear and Hydro plants.",
      link: "/industry/power-generation"
    },
    {
      title: "Exploration",
      description: "Built for extreme depth. Elastomeric and Silicon Cables (upto 15 kV) for Oil, Gas and Mining.",
      link: "/industry/exploration"
    },
    {
      title: "Mobility",
      description: "High-flex mobility solutions for Rolling Stock, Warships, and Marine vessels using RF & Thermocouple.",
      link: "/industry/mobility"
    },
    {
      title: "Defence",
      description: "Submarine and tactical grade connectivity. Advanced Electron Beam and specialized high-temp cabling.",
      link: "/industry/defence"
    },
    {
      title: "Manufacturing",
      description: "Precision for industrial processes. Instrumentation Cables and High Temp (ETFE, FEP, PTFE) solutions.",
      link: "/industry/manufacturing"
    },
    {
      title: "Infrastructure",
      description: "Smart city architecture powered by Data & Ethernet (Cat 5-7) and Fire Survival Cables.",
      link: "/industry/infrastructure"
    },
    {
      title: "Harnessing",
      description: "Integrated system complexity simplified. Medium Voltage Covered Conductors in optimized harnesses.",
      link: "/products/harnessing"
    }
  ];

  return (
    <div className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-xs font-bold text-black uppercase tracking-widest mb-6 block">ENGINEERING SECTORS</h2>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter leading-tight">
              Industry{"\u00A0"}Solutions.
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
              link={industry.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesVertical;
