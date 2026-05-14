import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Breadcrumbs from './Breadcrumbs';
import SplitTitle from './SplitTitle';
import BrochureDownloadModal from './BrochureDownloadModal';

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

const RFThermocoupleCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });

  const technicalDetails = [
    { label: "Construction", value: "Single core, multi-core, multi-pair — unscreened, individually screened & collectively screened, armoured / unarmoured" },
    { label: "Voltage Grade", value: "38V AC / 250V / 600V / 660V / 690V / 1000V" },
    { label: "Conductor", value: "Circular Electrolytic Bare / Tinned / Silver-Plated Copper" },
    { label: "Insulation", value: "Special halogen-free, flame-retardant, low smoke, low toxicity polymer - E-beam cured" },
    { label: "Screening", value: "Annealed Bare / Tinned / Silver-Plated Copper" },
    { label: "Outer Sheath", value: "Special halogen-free, flame-retardant, low smoke, low toxicity polymer — E-beam cured" },
    { label: "Water Blocking", value: "Compound / Tape — to withstand pressure requirements" },
    { label: "Operating Temperature", value: "–30°C to +120°C" },
    { label: "Standards", value: "Def Stan 02-512, MIL-DTL-17H, and customer specifications" }
  ];

  const variantsDetails = [
    { label: "Voltage Options", value: "38V AC up to 1000V" },
    { label: "Types", value: "PT Power Cables (PT-10, PT-45), RF and signal cables — shielded / unshielded, armoured / unarmoured, single and multi-core" },
    { label: "Applications", value: "Shipbuilding, submarines, offshore platforms, marine systems, radar communication, defence" }
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
              <SplitTitle title="RF & Thermocouple Cables — Pressure Tight (PT) / RF Cables" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Specially designed for critical pressure-resistant applications, our PT / RF Cables withstand radial and axial pressures from 10 to 72 bar while maintaining full sealing integrity. Featuring halogen-free, flame-retardant, and fire-survival properties with low smoke and toxicity ideal for shipbuilding, submarines, offshore platforms, radar communication, and defence applications. Compliant with Def Stan 02-512, MIL-DTL-17H, and customer specifications.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-full aspect-square bg-white rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center border border-gray-100">
              <img 
                src="/Product Images/thumbnails/Thermocouple-Extension-Cable.jpeg" 
                alt="Pressure Tight (PT) / RF Cables" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <TechnicalTable title="Technical Details" data={technicalDetails} />
          <TechnicalTable title="Sizes & Variants" data={variantsDetails} />
        </div>

        {/* CTA Section */}
        <div className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 mt-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more{"\u00A0"}information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button onClick={() => { setModalProps({ title: 'PT / RF Cables', url: '#' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Download Brochure <ArrowRight className="w-4 h-4" />
            </button>
            <Link 
              to="/contact"
              className="bg-white text-brand-secondary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      <BrochureDownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        brochureTitle={modalProps.title} 
        pdfUrl={modalProps.url} 
      />
    </div>
  );
};

export default RFThermocoupleCablesPage;
