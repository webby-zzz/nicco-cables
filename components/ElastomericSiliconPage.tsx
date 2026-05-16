
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

const ElastomericSiliconPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });


  const technicalDetails = [
    { label: "Construction", value: "Flexible conductor with extruded insulation, outer sheath and protective layers" },
    { label: "Voltage Rating", value: "1.1 kV to 15 kV" },
    { label: "Conductor Material & Type", value: "Flexible Annealed Tinned Copper" },
    { label: "Insulation", value: "Elastomeric as per applicable standard" },
    { label: "Screening", value: (
      <ul className="list-none space-y-2">
        <li>a. Non-Metallic: Extruded / Taped Semi-conducting Screen (for MV cables)</li>
        <li>b. Metallic: ATC Wires Braiding or Spirally</li>
      </ul>
    )},
    { label: "Sheath", value: "Elastomeric as per Applicable standard and application" },
    { label: "Operating Temperature", value: "Normal operation: up to 90°C" },
    { label: "Special Features", value: "Flame Retardant (FR), Flame Retardant Low Smoke (FRLS), Halogen Free, Oil & Chemical Resistant, Fire Survival (FS)" }
  ];

  const variantsDetails = [
    { label: "Voltage Range", value: "Up to 1.1 kV (LV) and 3.3 kV to 15 kV (MV)" },
    { label: "Number of Cores", value: "Single-core, multicore, and Control Cables up to 61 cores" },
    { label: "Applications", value: "Flexible reeling, festoon duty, high-temperature environments, heat, oil, and flame resistance" }
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
              <SplitTitle title="Elastomeric and Silicon Cables (up to 15 kV)" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Elastomeric Mining Cables are designed for reliable transmission and distribution of electrical power and control in industrial, mining, and utility applications, manufactured in compliance with IS 14494, BS 6708, NEMA WC-58, IEC 60502-1 & 2, and IS 9968 standards. These cables offer high electrical performance, mechanical strength, and durability under harsh operating conditions. The product range includes low voltage cables up to 1.1 kV and medium voltage cables from 3.3 kV to 15 kV, available in single-core, multicore, and Control Cables up to 61 cores. They are widely used for flexible reeling, festoon duty, high-temperature environments, and applications requiring heat, oil, and flame resistance with high mechanical toughness.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-white border border-gray-100 flex items-center justify-center">
                <img 
                  src="/Product Images/Elastomeric-and-Silicon-Cables/1.webp" 
                  alt="Elastomeric Cable 1" 
                  className="w-full h-full object-contain rotate-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-white border border-gray-100 flex items-center justify-center">
                <img 
                  src="/Product Images/Elastomeric-and-Silicon-Cables/2.webp" 
                  alt="Elastomeric Cable 2" 
                  className="w-full h-full object-contain rotate-90"
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
          className="mb-12 flex justify-center"
        >
          <div className="w-full max-w-5xl aspect-video bg-white rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center border border-gray-100">
            <img 
              src="/Product Images/Elastomeric-and-Silicon-Cables/8.webp" 
              alt="Elastomeric Cable 8" 
              className="w-full h-full object-contain"
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
            <button onClick={() => { setModalProps({ title: 'Elastomeric Insulated Cables', url: '/product page brochures/A5 Catalogues/Elastomeric.pdf' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Download Brochure <ArrowRight className="w-4 h-4" />
            </button>
            <Link 
              to="/contact"
              className="bg-white text-brand-secondary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Connect with Us <ArrowRight className="w-4 h-4" />
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


export default ElastomericSiliconPage;
