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

const ThermocoupleCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });

  const technicalDetails = [
    { label: "Construction", value: "Single or multiple pairs" },
    { label: "Voltage Rating", value: "Up to 1100V" },
    { label: "Cable Codes", value: "Kx, Kx(A), Tx, Jx, Ex, Sx / Rx, Bx, Nx" },
    { label: "Conductor", value: "Chromel, Copper, Iron, Nicrosil, Constantan" },
    { label: "Insulation", value: "General Purpose PVC / Heat Resistant PVC / PE / XLPE / PTFE / FEP / Silicon Rubber / Fibre Glass" },
    { label: "Screening", value: "Individual and/or overall Al-Mylar / Copper Tape with Tinned Copper Drain Wire | Braided Bare / Tinned / Nickel / Silver-Plated Copper" },
    { label: "Inner Sheath", value: "PVC / HRPVC / FR PVC / FRLS PVC / ZHFR / LSF / PTFE / PFA / FEP / Fibre Glass" },
    { label: "Armouring", value: "GI Round Wire / Flat Strip / Wire Braiding / SS Wire Braiding / Copper Braiding" },
    { label: "Outer Sheath", value: "PVC / HRPVC / FR PVC / FRLS PVC / ZHFR / LSF / PTFE / PFA / FEP / Fibre Glass" },
    { label: "Standards", value: "ANSI MC-96.1, IEC 584-3, DIN, BS/EN, IEC 60332-1, IEC 60332-3 (22/23/24), IS-874" }
  ];

  const cableTypeReference = [
    { label: "Kx — Extension", value: "Type K | Chromel / Alumel | 0°C to +1100°C" },
    { label: "Kx(A) — Compensating", value: "Type K | Copper / Constantan | 0°C to +80°C" },
    { label: "Tx — Extension", value: "Type T | Copper / Constantan | –185°C to +300°C" },
    { label: "Jx — Extension", value: "Type J | Iron / Constantan | +20°C to +700°C" },
    { label: "Ex — Extension", value: "Type E | Chromel / Constantan | 0°C to +800°C" },
    { label: "Sx / Rx — Compensating", value: "Type S/R | Copper / Copper Alloy | 0°C to +1600°C" },
    { label: "Nx — Extension", value: "Type N | Nicrosil / Nisil | –200°C to +1300°C" }
  ];

  const variantsDetails = [
    { label: "Types", value: "Extension and Compensating cables" },
    { label: "Thermocouple Compatibility", value: "K, J, T, E, N, R, S, B" },
    { label: "Applications", value: "Power plants, oil & gas, steel, cement, glass industries, process automation" }
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
              <SplitTitle title="Thermocouple Extension & Compensating Cables" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Engineered for accurate transmission of thermoelectric signals from thermocouple sensors to measuring and control instruments, our Thermocouple Cables ensure reliable EMF reproduction over long distances. Available for types K, J, T, E, N, R, S, and B in screened, armoured / unarmoured, and single or multi-pair constructions. Widely used in power plants, oil & gas, steel, cement, glass industries, and process automation systems. Compliant with ANSI MC-96.1, IEC 584-3, DIN, BS/EN, and IS-874.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-full aspect-square bg-white rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center border border-gray-100">
              <img 
                src="/Product Images/thumbnails/Thermocouple-Extension-Cable.jpeg" 
                alt="Thermocouple Cables" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <TechnicalTable title="Technical Details" data={technicalDetails} />
          <TechnicalTable title="Cable Type Reference" data={cableTypeReference} />
          <TechnicalTable title="Sizes & Variants" data={variantsDetails} />
        </div>

        {/* CTA Section */}
        <div className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 mt-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more{"\u00A0"}information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button onClick={() => { setModalProps({ title: 'Thermocouple Cables', url: '#' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
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

export default ThermocoupleCablesPage;
