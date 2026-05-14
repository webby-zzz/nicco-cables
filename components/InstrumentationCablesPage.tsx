
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

const InstrumentationCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });


  const technicalDetails = [
    { label: "Construction", value: "Cores, Pairs, Triads and Quads" },
    { label: "Voltage Rating", value: "24V / 60V / 150V / 300V / 500V / 600V / 1000V / 1100V (as per standard)" },
    { label: "Conductor Material", value: "Electrolytic Grade Annealed Bare Copper / Tinned Copper / Nickel Plated / Silver Plated" },
    { label: "Conductor Type", value: "Class 1 / Class 2 / Class 5 / Class 6" },
    { label: "Insulation", value: "PVC / XLPE / LDPE / HDPE / XLPO / EPR / HEPR / Silicon Rubber" },
    { label: "Screening", value: "Individual Pair and/or Overall Screening — Al-Mylar Tape / Copper Tape / Braiding with Tinned Copper Drain Wire" },
    { label: "Inner Sheath", value: "PVC / FR PVC / FRLS PVC / LSZH" },
    { label: "Ripcord", value: "Provided for easy sheath removal" },
    { label: "Armouring", value: "GI Round Wire / Flat Strip Armour / SS Wire Braiding / GI Wire Braiding / Copper Wire Braiding" },
    { label: "Outer Sheath", value: "PVC / FR PVC / FRLS PVC / LSZH" },
    { label: "Multi-Layer Sheath", value: "Aluminium Tape (Longitudinal) + HDPE + Polyamide — for alternate lead sheath cables" },
    { label: "Operating Temperature", value: "PVC: –15°C to +70°C / +85°C / +105°C | XLPE: –40°C to +90°C | Silicon Rubber: –60°C to +150°C | EPR: –40°C to +90°C | XLPO: –40°C to +120°C" },
    { label: "Standards", value: "BS EN 50288-7, IEC 60502-1, IEC 60079-14, BS 5308 Part 1 & 2, IEC 189 Part 1 & 2, VDE-0815 & 0816" },
    { label: "Special Features", value: "Fire Survival / FRLS / LSZH options, Excellent noise rejection, Oil, moisture & chemical resistant, Suitable for hazardous area installations" }
  ];

  const variantsDetails = [
    { label: "Size Range", value: "0.2 to 2.5 sq.mm" },
    { label: "Number of Cores", value: "Up to 50 Cores, Pairs, Triads, and Quads" },
    { label: "Voltage Options", value: "24V up to 1100V (as per standard)" },
    { label: "Installation", value: "Suitable for indoor and outdoor installations" }
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
              <SplitTitle title="Instrumentation Cables" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Transmit low-level signals with precision using our Instrumentation Cables, engineered for accurate data communication between field instruments and control systems. Featuring twisted pairs, multi-layer shielding, and robust construction, these cables deliver exceptional noise rejection and signal integrity across demanding industrial environments. Widely used in oil & gas, power plants, chemical industries, refineries, water treatment plants, and automation systems — available in Cores, Pairs, Triads, and Quads configurations with FR / FRLS / LSZH sheath options including fire survival properties.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-white border border-gray-100 flex items-center justify-center">
                <img 
                  src="/Product Images/instrumental-cables/1.webp" 
                  alt="Instrumentation Cable 1" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-white border border-gray-100 flex items-center justify-center">
                <img 
                  src="/Product Images/instrumental-cables/2.webp" 
                  alt="Instrumentation Cable 2" 
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
              src="/Product Images/instrumental-cables/3.webp" 
              alt="Instrumentation Cable 3" 
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
            <button onClick={() => { setModalProps({ title: 'Instrumentation Cables', url: '/product page brochures/A5 Catalogues/Instrumentation .pdf' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
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


export default InstrumentationCablesPage;
