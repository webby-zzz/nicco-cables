
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

const MVCCPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });


  const technicalDetails = [
    { label: "Construction", value: "Stranded conductor (concentric / Non-compacted as required)" },
    { label: "Voltage Application", value: "Suitable for MV control cables rated from 11 kV to 33 kV" },
    { label: "Conductor Material & Type", value: "Longitudinally watertight stranded all aluminium alloy (AAAC), AL-7, AL-59, or AL-59 Aluminium Clad Steel (ACS)." },
    { label: "Stranding", value: "as per applicable standard" },
    { label: "Conductor Screen", value: "Semi-Conductive" },
    { label: "Inner Covering", value: "XLPE compound" },
    { label: "Outer Covering", value: "Anti Tracking, UV Resistant and erosion resistant XLPE/HDPE Compound" },
    { label: "Applicable Standards", value: "IEC 61089, IS 398 Part-2, IS 398 Part-4, IS 398 Part-6, BS EN 50182, BS EN 50397, SS4240813, SS 4240814" },
    { label: "Operating Temperature", value: "As per cable design (up to +90°C continuous conductor temperature)" },
    { label: "Special Features", value: "Uniform stranding and diameter control, Suitable for XLPE insulated MV control cables, Good tensile strength and elongation properties, Compatible with extrusion and screening processes" }
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
              <SplitTitle title="MVCC / Tree Spacer Cables" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              MVCC (Medium Voltage Covered Conductor) / Tree Spacer Cables are overhead conductors designed for medium voltage distribution networks from 11 kV to 33 kV, featuring aluminium or aluminium alloy conductors with a durable UV-resistant polymer covering. This covering improves electrical safety and reduces faults caused by vegetation, animals, or external contact, making it ideal for urban, coastal, polluted, and vegetation-dense areas. The product range includes AAAC, ACSR, AL59, AL59 ACS, AL7 and aluminium MVCC conductors. These conductors offer high mechanical strength, weather and corrosion resistance, improved reliability, and reduced maintenance for overhead distribution systems.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-full aspect-[4/3] bg-white rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center border border-gray-100">
              <img 
                src="/Product Images/MVCC/7.webp" 
                alt="MVCC Cable 7" 
                className="w-full h-full object-contain rotate-90 scale-[1.3]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <TechnicalTable title="Technical Details" data={technicalDetails} />
        </div>

        {/* Additional Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="w-full h-64 md:h-80 bg-white rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center border border-gray-100 p-4">
            <img 
              src="/Product Images/MVCC/5.webp" 
              alt="MVCC Cable 5" 
              className="w-full h-full object-contain rotate-90 scale-[1.2]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full h-64 md:h-80 bg-white rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center border border-gray-100 p-4">
            <img 
              src="/Product Images/MVCC/6.webp" 
              alt="MVCC Cable 6" 
              className="w-full h-full object-contain -rotate-90 scale-[1.2]"
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
            <button onClick={() => { setModalProps({ title: 'Medium Voltage Covered Conductor (MVCC)', url: '/brochures/HT Cables upto 11KV - NICCO .pdf' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
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


export default MVCCPage;
