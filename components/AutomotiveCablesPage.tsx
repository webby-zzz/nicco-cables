
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Breadcrumbs from './Breadcrumbs';

import SplitTitle from './SplitTitle';

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

const AutomotiveCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technicalDetails = [
    { label: "Construction", value: "Single core / multi-core, flexible multi-stranded conductor" },
    { label: "Voltage Rating", value: "60V and 600V (single core) | 600V AC / 900V DC | 1000V AC / 1500V DC" },
    { label: "Conductor", value: "Flexible stranded Electrolytic Copper / Tinned Copper (CuSn) / Silver Plated Copper (CuAg) / Nickel Plated Copper (CuNi)" },
    { label: "Insulation", value: "PVC / Silicone Rubber / Cross-Linked Polyolefin (XLPO / XLPE) / PTFE / ETFE" },
    { label: "Screening", value: "Copper Braid / Aluminium Foil Shield (shielded variants)" },
    { label: "Outer Sheath", value: "PVC / FEP / TPE-E (shielded cables) | Not applicable for single-wall types" },
    { label: "Operating Temperature", value: "–40°C to +85°C / +105°C / +125°C / +150°C / +180°C / +200°C / +250°C" },
    { label: "Standards", value: "ISO 6722, ISO 19642, JASO D 611, JASO D 618, SAE J1128, SAE J1127, IS 2465" },
    { label: "Special Features", value: "Flame retardant, halogen free (XLPO & silicone variants), oil, fuel & chemical resistant, abrasion resistant, EMI / EMC protection (shielded cables)" }
  ];

  const variantsDetails = [
    { label: "Voltage Options", value: "60V / 600V / 1000V AC / 1500V DC" },
    { label: "Types", value: "PVC, XLPE / XLPO, Silicone, ETFE, PTFE insulated — single core and multi-core" },
    { label: "Applications", value: "Vehicle wiring harnesses, power distribution, sensors, infotainment, safety systems, EV charging" }
  ];

  return (
    <div className="bg-white min-h-screen pt-28 md:pt-36 pb-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        
        <Breadcrumbs />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md mb-12 border border-gray-100 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 text-brand-secondary mb-4">
              <div className="h-[1px] w-8 bg-brand-secondary" />
              <span className="text-xs font-black uppercase tracking-widest">PRODUCTS</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black text-brand-dark tracking-tighter mb-6 leading-[1.1]">
              <SplitTitle title="Automotive Cables" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Engineered for reliable power distribution, control, and signal transmission in modern vehicles, our Automotive Cables operate under high temperature, vibration, oil exposure, and mechanical stress. Suitable for ICE, hybrid, and electric vehicles covering vehicle wiring harnesses, power distribution, sensors, infotainment, safety systems, and EV charging applications. Compliant with ISO, JASO, SAE, and IS standards.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-brand-ash" />
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-brand-ash" />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <TechnicalTable title="Technical Details" data={technicalDetails} />
          <TechnicalTable title="Sizes & Variants" data={variantsDetails} />
        </div>

        {/* CTA Section */}
        <div className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
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
            <Link 
              to="/contact"
              className="bg-white text-brand-secondary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Connect with Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AutomotiveCablesPage;
