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

const WindEnergyCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });


  const technicalDetails = [
    { label: "Construction", value: "Fine stranded flexible conductor with cross-linked insulation and torsion-optimised outer sheath" },
    { label: "Voltage Rating", value: "Up to 0.6/1 kV (LV) | 6/10 kV (MV options available)" },
    { label: "Conductor", value: "Electrolytic Tinned Copper Class 5 / Class 6 (as per IEC 60228)" },
    { label: "Insulation", value: "XLPE / EPR / Special Elastomer Compound" },
    { label: "Sheath", value: "UV Resistant, Halogen Free, Torsion-Resistant PUR or Elastomer Compound" },
    { label: "Operating Temperature", value: "–40°C to +90°C (standard) | Up to +120°C (special grades)" },
    { label: "Standards", value: "IEC 60502, IEC 60332, EN 50525, DNV Offshore standards" },
    { label: "Special Features", value: "High torsion resistance, UV, ozone & weather resistant, FR / LSZH options, oil & grease resistant, suitable for vertical suspension in tower" }
  ];

  const sizesVariants = [
    { label: "Voltage Options", value: "LV up to 0.6/1 kV | MV up to 6/10 kV" },
    { label: "Applications", value: "Generator to transformer power transmission, tower loop connections, pitch control systems, instrumentation wiring, grid transmission" }
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
              <SplitTitle title="Wind Energy Cables" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Engineered for power transmission, control, and signal applications in wind turbine systems, our Wind Energy Cables deliver reliable performance across onshore and offshore installations. Built to withstand continuous vibration, torsional movement, UV exposure, and extreme temperatures with a service life of 20–25+ years. Compliant with IEC 60502, IEC 60332, EN 50525, and DNV Offshore standards.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-white border border-gray-100 flex items-center justify-center">
                <img 
                  src="/Product Images/Wind-Energy-Cables/1.webp" 
                  alt="Wind Energy Cable 1" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-white border border-gray-100 flex items-center justify-center">
                <img 
                  src="/Product Images/Wind-Energy-Cables/12.webp" 
                  alt="Wind Energy Cable 12" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Torsion Test Requirement Section */}
        <div className="mb-12 bg-gray-50 border border-gray-200 rounded-[2rem] p-8 shadow-sm">
          <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-wider">Torsion Test Requirement (Wind Turbine Cables)</h3>
          <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed mb-6">
            A torsion test shall be carried out to verify the mechanical performance and durability of the proposed cable design under simulated wind turbine operating conditions.
          </p>
          
          <h4 className="text-lg font-bold text-brand-dark mb-3 uppercase tracking-wider">Test Procedure</h4>
          <p className="text-sm md:text-base text-gray-700 mb-4">The torsion test shall consist of the following two stages:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h5 className="font-bold text-brand-secondary mb-3 uppercase text-sm tracking-widest">Low Temperature Torsion Test</h5>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">Torsion cycles shall be applied at the following temperatures depending on cable type:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 mb-4">
                <li><strong>LT Version Cable:</strong> -40°C ± 5°C</li>
                <li><strong>STD Version Cable:</strong> -20°C ± 5°C</li>
                <li><strong>TT Version Cable:</strong> 0°C ± 2°C</li>
              </ul>
              <p className="text-sm text-gray-700 font-bold bg-gray-50 p-2 rounded border border-gray-100 inline-block">Number of Cycles: 270 torsion cycles</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
              <h5 className="font-bold text-brand-secondary mb-3 uppercase text-sm tracking-widest">Ambient Temperature Torsion Test</h5>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-3 mb-4">
                <li><strong>Temperature:</strong> 20°C ± 15°C</li>
                <li><strong>Number of Cycles:</strong> 5000 torsion cycles</li>
              </ul>
            </div>
          </div>
          
          <h4 className="text-lg font-bold text-brand-dark mb-3 uppercase tracking-wider">Test Sample Requirements</h4>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6 space-y-3">
             <p className="text-sm text-gray-700 leading-relaxed">The torsion test at 20°C shall be performed on a cable sample of minimum 1 meter length.</p>
             <p className="text-sm text-gray-700 leading-relaxed">The sample length for tests conducted at 0°C, -20°C, or -40°C shall be mutually agreed between the supplier and the client during the design phase.</p>
          </div>
          
          <div className="p-5 bg-brand-secondary/5 rounded-xl border-l-4 border-brand-secondary">
             <p className="text-sm md:text-base font-bold text-brand-dark leading-relaxed">The cable shall demonstrate reliable performance under torsional stress conditions typically encountered in wind turbine tower loop applications.</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <TechnicalTable title="Technical Details" data={technicalDetails} />
          <TechnicalTable title="Sizes & Variants" data={sizesVariants} />
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
              src="/Product Images/Wind-Energy-Cables/2.webp" 
              alt="Wind Energy Cable 2" 
              className="w-full h-full object-contain scale-[1.4]"
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
            <button onClick={() => { setModalProps({ title: 'Wind Energy and Solar Cables', url: '/product page brochures/A5 Catalogues/Wind&Solar.pdf' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
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


export default WindEnergyCablesPage;
