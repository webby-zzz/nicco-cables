
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

const ElectronBeamCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });


  const technicalDetails = [
    { label: "Construction", value: "Single core or multi-core flexible stranded Copper / Tinned Copper conductors, insulated and sheathed" },
    { label: "Voltage Rating", value: "300/300 V up to 3.6/6.0 kV" },
    { label: "Conductor", value: "Annealed Flexible Copper / Tinned Copper — Class 5 / Class 6" },
    { label: "Insulation", value: "Elastomeric compound (halogen free, heat resistant)" },
    { label: "Outer Sheath", value: "Elastomeric, halogen free, flame retardant" },
    { label: "Operating Temperature", value: "+90°C / +120°C / +180°C (as per design)" },
    { label: "Fire Performance", value: "Low smoke, halogen free, flame retardant, low toxicity and corrosive gas emission" },
    { label: "Standards", value: "BS EN 50264, BS EN 50306, OEM / RDSO specifications (as applicable)" },
    { label: "Special Features", value: "Excellent flexibility and mechanical robustness, resistant to oils, fuels, ozone and weathering, suitable for high-temperature zones" }
  ];

  const variantsDetails = [
    { label: "Voltage Options", value: "300/300 V up to 3.6/6.0 kV" },
    { label: "Core Configuration", value: "Single core and multi-core" },
    { label: "Types", value: "Thin-walled flexible elastomeric cables, power & control cables, high-temperature rolling stock cables, locomotive cable sets" }
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
              <SplitTitle title="Electron Beam" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Specially engineered for rolling stock, coaching stock, and railway power and control applications, our Railway Cables deliver high safety, reliability, and durability across low, medium, and high voltage environments. Compliant with BS EN 50264, BS EN 50306, BS EN 50382, and RDSO/EDTS/CLW specifications suitable for power supply, signalling, control circuits, traction equipment, and onboard electrical systems.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-64 md:h-80 bg-white rounded-[2rem] shadow-lg overflow-hidden border border-gray-100 flex items-center justify-center p-4">
            <img 
              src="/brand identity/E-Beam.webp" 
              alt="Electron Beam Cables" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
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
          <div className="flex flex-wrap gap-4 w-full md:w-auto mt-4 md:mt-0 justify-center md:justify-end">
            <a href="/product page brochures/A5 Catalogues/Wind&Solar.pdf" target="_blank" rel="noopener noreferrer" className="bg-brand-dark text-white px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Solar Brochure <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/product page brochures/A5 Catalogues/Railway.pdf" target="_blank" rel="noopener noreferrer" className="bg-brand-dark text-white px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Railway Brochure <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/product page brochures/A5 Catalogues/Auto (Current, R3).pdf" target="_blank" rel="noopener noreferrer" className="bg-brand-dark text-white px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Auto Brochure <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/contact" className="bg-white text-brand-secondary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

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


export default ElectronBeamCablesPage;
