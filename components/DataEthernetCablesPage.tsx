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

const DataEthernetCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });

  const technicalDetails = [
    { label: "Construction", value: "4 twisted pairs (8 conductors), precisely twisted to control crosstalk" },
    { label: "Conductor", value: "Solid or stranded annealed copper — 23 to 26 AWG (as per category)" },
    { label: "Insulation", value: "HDPE / Foamed PE" },
    { label: "Screening", value: "UTP — Unshielded | FTP — Overall foil screen | SFTP — Individual pair foil + overall braid" },
    { label: "Outer Sheath", value: "PVC / FR PVC / LSZH / PE (outdoor)" },
    { label: "Operating Temperature", value: "–20°C to +75°C" },
    { label: "Standards", value: "ANSI/TIA-568, ISO/IEC 11801, IEC 61156, IEEE 802.3, RoHS compliant (on request)" }
  ];

  const transmissionPerformance = [
    { label: "CAT 5e", value: "Up to 1 Gbps @ 100 MHz" },
    { label: "CAT 6", value: "Up to 1 Gbps (10 Gbps short distance) @ 250 MHz" },
    { label: "CAT 6A", value: "Up to 10 Gbps @ 500 MHz" },
    { label: "CAT 7", value: "Up to 10 Gbps @ 600–1000 MHz" }
  ];

  const variantsDetails = [
    { label: "Types", value: "CAT 5e, CAT 6, CAT 6A, CAT 7" },
    { label: "Configurations", value: "UTP, FTP, SFTP" },
    { label: "Applications", value: "LAN networks, data centres, industrial automation, CCTV systems, telecom infrastructure, smart building applications" }
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
              <SplitTitle title="Data & Ethernet Cables" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Engineered for high-speed and reliable data transmission in modern communication networks, our Ethernet / LAN Cables deliver stable performance, low signal loss, and strong EMI resistance. Available in CAT 5e, CAT 6, CAT 6A, and CAT 7 variants in UTP, FTP, and SFTP configurations suitable for indoor, outdoor, and industrial use. Compliant with ANSI/TIA-568, ISO/IEC 11801, IEC 61156, and IEEE 802.3.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-full aspect-square bg-white rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center border border-gray-100">
              <img 
                src="/Product Images/thumbnails/Category cable.jpeg" 
                alt="Data & Ethernet Cables" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <TechnicalTable title="Technical Details" data={technicalDetails} />
          <TechnicalTable title="Transmission Performance" data={transmissionPerformance} />
          <TechnicalTable title="Sizes & Variants" data={variantsDetails} />
        </div>

        {/* CTA Section */}
        <div className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more{"\u00A0"}information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button onClick={() => { setModalProps({ title: 'Data & Ethernet Cables', url: '#' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
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

export default DataEthernetCablesPage;
