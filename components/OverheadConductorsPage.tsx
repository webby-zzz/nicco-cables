
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

const OverheadConductorsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });


  const technicalDetails = [
    { label: "Construction", value: "Concentric stranded — single or multi-layer stranding" },
    { label: "Conductor Material", value: "EC-grade Aluminium / Aluminium Alloy; Galvanized Steel / Aluminium-Clad Steel (for reinforced types)" },
    { label: "Voltage Range", value: "LV distribution to EHV transmission systems" },
    { label: "Operating Temperature", value: "Continuous operation up to 75°C / 90°C; higher ratings available on request" },
    { label: "Standards / Specifications", value: "IEC 61089, IS 398 (Part 2 & Part 4), BS EN 50182, ASTM B231 / B232 / B399, SS-424-08-13 / SS-424-08-14" },
    { label: "Special Features", value: "High current capacity with low electrical losses; excellent strength-to-weight ratio; superior corrosion resistance; stable under wind and ice loading; suitable for coastal, desert, and high-pollution environments" }
  ];

  const variantsDetails = [
    { label: "Conductor Types", value: "AAC, AAAC, ACSR, ACSR/AW, ACAR; Special high-strength & high-temperature conductors on request" },
    { label: "Aluminium Area", value: "As per standard conductor sizes" },
    { label: "Stranding", value: "Stranded, Compact, Non-compacted" },
    { label: "Surface Finish", value: "Bright / Greased (as per requirement)" }
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
              <SplitTitle title="Overhead Transmission Conductors (Bare Conductors)" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Enable efficient and reliable long-distance power transmission with Nicco's Overhead Transmission Conductors. Manufactured using high-quality aluminium and aluminium alloy with optional steel reinforcement, these conductors deliver optimal electrical performance, mechanical strength, and proven durability across diverse climatic and terrain conditions - from urban grids to remote electrification and power evacuation from renewable energy plants.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/9] bg-white border border-gray-100 flex items-center justify-center p-4">
                <img 
                  src="/brand identity/Overhead.webp" 
                  alt="Overhead Conductors" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <TechnicalTable title="Technical Details" data={technicalDetails} />
          <TechnicalTable title="Sizes & Variants" data={variantsDetails} />
        </div>

        {/* Additional Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="w-full h-64 md:h-96 bg-white rounded-[2rem] shadow-lg overflow-hidden border border-gray-100 flex items-center justify-center p-4">
            <img 
              src="/Product Images/HT-Power-Cables/1.webp" 
              alt="HT Power Cables Detail" 
              className="w-full h-full object-contain rotate-90 scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more{"\u00A0"}information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button onClick={() => { setModalProps({ title: 'Medium Voltage Covered Conductor (MVCC)', url: '/product page brochures/A5 Catalogues/MVCC .pdf' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
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


export default OverheadConductorsPage;
