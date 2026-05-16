
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

const LTPowerControlPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });


  const technicalDetails = [
    { label: "Construction", value: "Multi-core stranded conductors with insulation, fillers and protective layers" },
    { label: "Voltage Rating", value: "Up to 1.1 kV (1100V)" },
    { label: "Conductor", value: "Aluminium or Copper — Solid, Stranded & Flexible (Class 1 / Class 2 / Class 5)" },
    { label: "Insulation", value: "PVC / HR PVC / XLPE / PE" },
    { label: "Inner Sheath", value: "PVC / FR PVC / FRLS PVC / LSZH / HDPE / PE" },
    { label: "Armouring", value: "Galvanized steel wire / strip armour (for armoured cables)" },
    { label: "Outer Sheath", value: "PVC / FR PVC / FRLS / LSZH / HDPE / PE" },
    { label: "Operating Temperature Range", value: (
      <ul className="list-none space-y-2">
        <li>i) PVC and HR PVC insulated: up to +70°C and +85°C respectively</li>
        <li>ii) XLPE insulated: up to +90°C</li>
        <li>iii) Short circuit temperature: up to +160°C (PVC), +250°C (XLPE)</li>
      </ul>
    )},
    { label: "Standards / Specifications", value: "IS 1554 (Part 1), IS 7098 (Part 1), IEC 60502-1, IEC 60227 / 60228 (as applicable), BS/EN and other international standards as applicable" },
    { label: "Special Features", value: "Flame Retardant / Fire Resistant / FRLS / LSZH options, Oil and moisture resistant, Suitable for indoor and outdoor installations, good flexibility for easy installation" }
  ];

  const variantsDetails = [
    { label: "Number of Cores", value: "Power Core up to 5C with circular/segmental conductors as applicable, Control core from 2 core to 61 cores" },
    { label: "Size Range (sq.mm)", value: "Single core up to 1000 sq.mm & multi-core up to 630 sq.mm (Power Cables), 0.5 to 2.5 sq.mm (Control Cables)" },
    { label: "Voltage Options", value: "Up to and including 1.1 kV" }
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
              <span className="text-xs font-black uppercase tracking-widest">INDUSTRY SOLUTIONS</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black text-brand-dark tracking-tighter mb-6 leading-[1.1] md:whitespace-nowrap">
              <SplitTitle title="LT Power & Control Cables" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Power your industrial, commercial, and infrastructure projects with our LT Power & Control Cables, engineered for reliable power distribution and control applications. Built with high-quality conductors and premium insulation, these cables deliver mechanical strength, operational safety, and a long service life across diverse conditions. Available up to 1.1 kV in XLPE & PVC insulation, with Armoured and Unarmoured variants, and FR / FRLS / LSZH sheath options including Fire Survival properties.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-white border border-gray-100 flex items-center justify-center">
                <img 
                  src="/Product Images/LT cables/3.jpg" 
                  alt="LT Power & Control Cable 3" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-white border border-gray-100 flex items-center justify-center">
                <img 
                  src="/Product Images/LT cables/2.jpg" 
                  alt="LT Power & Control Cable 2" 
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
              src="/Product Images/LT cables/1.jpg" 
              alt="LT Power & Control Cable 1" 
              className="w-full h-full object-contain rotate-90 scale-[1.4]"
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
            <button onClick={() => { setModalProps({ title: 'LT Power & Control Cable Catalog', url: '/product page brochures/A5 Catalogues/Long LT-compressed.pdf' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
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


export default LTPowerControlPage;
