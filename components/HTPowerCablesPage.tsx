
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

const HTPowerCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });


  const technicalDetails = [
    { label: "Construction", value: "Single core or three core, stranded compacted circular conductor with conductor screen, insulation screen, metallic screen, and protective layers" },
    { label: "Voltage Rating", value: "Earthed 1.9/3.3 kV | 3.8/6.6 kV | 6.35/11 kV | Unearthed — 3.3/3.3 kV | 6.6/6.6 kV" },
    { label: "Conductor", value: "Aluminium or Copper Stranded Compacted Circular" },
    { label: "Insulation", value: "XLPE (Cross-Linked Polyethylene)" },
    { label: "Screening", value: "Conductor screen and insulation screen (taped / extruded as per standard)" },
    { label: "Metallic Screen", value: "Copper tape / Copper wire screen (as per standard)" },
    { label: "Inner Sheath", value: "PVC / FR PVC / PE / HDPE" },
    { label: "Armouring", value: "GI Wire / Strip Armour | Aluminium Wire & Strip Armour (single core armoured)" },
    { label: "Outer Sheath", value: "PVC / FR PVC / FRLS / LSZH (as per requirement)" },
    { label: "Operating Temperature", value: "Conductor up to +90°C | Short circuit up to +250°C" },
    { label: "Standards", value: "IS 7098 (Part 2), IEC 60502-2, BS/EN and other international standards, OEM / Utility specifications (on request)" }
  ];

  const variantsDetails = [
    { label: "Voltage Options", value: "3.3 kV / 6.6 kV / 11 kV (earthed and unearthed systems)" },
    { label: "Core Configuration", value: "Single core and three core" },
    { label: "Installation", value: "Underground, duct, trench, and tray installations" }
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
              <SplitTitle title="HT Power Cables - Up to 11 kV" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Engineered for reliable power transmission and distribution in medium voltage networks, our HT Cables cover earthed systems from 3.3 kV to 11 kV. Built with high-quality materials and advanced processes, these cables ensure electrical safety, durability, and consistent performance in industrial and utility applications. Available in armoured and unarmoured variants with FR / FRLS / LSZH sheath options suitable for underground, duct, trench, and tray installations.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-full aspect-video bg-white rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center border border-gray-100">
              <img 
                src="/Product Images/HT-Power-Cables/1.webp" 
                alt="HT Power Cable 1" 
                className="w-full h-full object-contain rotate-90 scale-[1.8]"
                referrerPolicy="no-referrer"
              />
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
          className="my-12 flex justify-center"
        >
          <div className="w-full max-w-5xl aspect-video bg-white rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center border border-gray-100">
            <img 
              src="/Product Images/HT-Power-Cables/2.webp" 
              alt="HT Power Cable 2" 
              className="w-full h-full object-contain rotate-90 scale-[1.4]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button onClick={() => { setModalProps({ title: 'HT Cables upto 11KV', url: '/brochures/HT Cables upto 11KV - NICCO .pdf' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
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


export default HTPowerCablesPage;
