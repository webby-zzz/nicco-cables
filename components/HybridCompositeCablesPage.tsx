
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
    <div className="overflow-x-auto no-scrollbar">
      <table className="w-full text-left border-collapse border border-gray-200 bg-white">
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <th className="py-4 px-6 text-base font-bold text-brand-dark w-1/3 align-top border-r border-gray-200">
                {item.label}
              </th>
              <td className="py-4 px-6 text-base text-gray-700 font-normal align-top leading-relaxed">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const HybridCompositeCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technicalDetails = [
    { label: "Construction", value: "Integrated cable with individually insulated power, control, signal conductors and/or optical fibres" },
    { label: "Conductor", value: "Annealed Copper / Tinned Copper — stranded (Class 2 / Class 5)" },
    { label: "Power Element Voltage Rating", value: "Up to 1.1 kV (higher on request)" },
    { label: "Data Element", value: "Twisted Pairs / Coaxial / Optical Fibre (SM / MM)" },
    { label: "Insulation", value: "Elastomeric / Thermoplastic / Plastic / Polymeric" },
    { label: "Screening", value: "Individual and/or overall Copper Braid / Aluminium-Mylar Tape" },
    { label: "Armouring", value: "Steel Wire / Steel Strip / Aluminium Wire (optional)" },
    { label: "Outer Sheath", value: "PVC / FR PVC / FRLS / LSZH / PE (outdoor grade)" },
    { label: "Operating Temperature", value: "–40°C to +90°C (typical)" }
  ];

  const variantsDetails = [
    { label: "Voltage Options", value: "Up to 1.1 kV (higher on request)" },
    { label: "Types", value: "Power + control, power + signal + data, copper + optical fibre hybrid" },
    { label: "Configurations", value: "Shielded / unshielded, armoured / unarmoured" },
    { label: "Applications", value: "Telecom towers, CCTV, railways, EV charging infrastructure, smart city applications" }
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
              <SplitTitle title="Hybrid Composite Cables" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Combining power, control, signal, and data transmission within a single construction, our Hybrid Composite Cables reduce cabling complexity and installation cost for modern infrastructure. Available in power + control, power + signal + data, and copper + optical fibre configurations shielded / unshielded and armoured / unarmoured. Widely used in telecom towers, CCTV systems, railways, EV charging infrastructure, and smart city applications.
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
        <p className="mt-6 text-sm text-gray-500 font-medium italic mb-12">
          Note: Custom-designed constructions available as per application requirement. Suitable for harsh industrial, outdoor, and mobile installations. Reduces overall system weight and cabling footprint. Available with fire-safe and LSZH constructions.
        </p>

        {/* CTA Section */}
        <div className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link 
              to="/contact"
              className="bg-white text-brand-secondary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HybridCompositeCablesPage;
