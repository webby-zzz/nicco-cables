
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Breadcrumbs from './Breadcrumbs';
import SplitTitle from './SplitTitle';
import ImageCarousel from './ImageCarousel';

const TechnicalTable: React.FC<{ title: string; data: { label: string; value: React.ReactNode }[] }> = ({ title, data }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-brand-dark mb-6">
      {title}
    </h3>
    <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row border-b last:border-b-0 border-gray-200">
          <div className="w-full sm:w-1/3 bg-gray-50 py-3 px-4 sm:px-6 font-bold text-brand-dark text-sm sm:text-base border-b sm:border-b-0 sm:border-r border-gray-200">
            {item.label}
          </div>
          <div className="w-full sm:w-2/3 py-3 px-4 sm:px-6 text-sm sm:text-base text-gray-700 font-normal leading-relaxed break-words">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ShipbuildingMarinePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technicalDetails = [
    { label: "Construction", value: "Single core / multi-core stranded conductors with marine-grade insulation and protective layers" },
    { label: "Voltage Rating", value: "Up to 1.8 kV" },
    { label: "Conductor", value: "Copper / Tinned Copper — flexible stranded" },
    { label: "Insulation", value: "XLPE / EPR / Silicone Rubber / PE (as per cable type)" },
    { label: "Screening", value: "Copper Braid / Tinned Copper Braid / Aluminium-Mylar Tape / Copper Mylar Tape (for EMC, VFD, RF & data cables)" },
    { label: "Inner Sheath", value: "LSZH / FR Compound" },
    { label: "Armouring", value: "Galvanized Steel Wire / Tinned Copper Wire Armour / Braid (as required)" },
    { label: "Outer Sheath", value: "LSZH / FR / Oil & mud resistant compound" },
    { label: "Operating Temperature", value: "Standard marine cables: –25°C to +90°C | Silicone cables: up to +180°C" },
    { label: "Standards", value: "IEC 60092-350 / 353 / 376, BS 6883 & BS 7917, VG 95218, GOST 7866 / 11326 / 17301, NES / DEF STAN 526 & 527, EED-50-12, EED-50-13, EED-57-03, EED-57-04, DMDE Standard" },
    { label: "Special Features", value: "Flame retardant, fire resistant, LSZH, EMC / EMI shielding for VFD & sensitive electronics, oil, fuel, salt water & chemical resistant, suitable for fixed and flexible shipboard installations" }
  ];

  const variantsDetails = [
    { label: "Voltage Options", value: "Up to 1.8 kV" },
    { label: "Types", value: "Power, instrumentation, RF, Ethernet/data, degaussing, EMC/VFD, silicone, shore supply, PTFE/ETFE/FEP, and customised marine solutions" },
    { label: "Applications", value: "Ships, submarines, offshore platforms, marine power, control and communication systems" }
  ];

  return (
    <div className="bg-white min-h-screen pt-28 md:pt-36 pb-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        
        <Breadcrumbs />

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md mb-12 border border-gray-100 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 text-brand-secondary mb-4">
              <div className="h-[1px] w-8 bg-brand-secondary" />
              <span className="text-xs font-black uppercase tracking-widest">INDUSTRY SOLUTIONS</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black text-brand-dark tracking-tighter mb-6 leading-[1.1]">
              <SplitTitle title="Shipbuilding & Marine" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Engineered for reliable power transmission, control, communication, and signal integrity in harsh marine and offshore environments, our Shipbuilding & Marine Cables withstand moisture, oil, vibration, salt spray, fire risk, and mechanical stress. Suitable for ships, submarines, and offshore platforms available in power, instrumentation, RF, Ethernet, degaussing, EMC/VFD, silicone, shore supply, and PTFE/ETFE/FEP variants. Compliant with IEC 60092, BS 6883, BS 7917, VG 95218, and GOST standards.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-64 md:h-80 bg-brand-ash rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center bg-white border border-gray-100">
            <ImageCarousel 
              images={[
                "https://picsum.photos/seed/marine/1200/800",
                "https://picsum.photos/seed/shipbuilding/1200/800"
              ]} 
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <TechnicalTable title="Technical Details" data={technicalDetails} />
          <TechnicalTable title="Sizes & Variants" data={variantsDetails} />
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 mt-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link 
              to="/brochures"
              className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Download Brochure <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="bg-white text-brand-secondary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ShipbuildingMarinePage;
