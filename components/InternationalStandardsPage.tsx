import Seo from './Seo';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplitTitle from './SplitTitle';
import BrochureDownloadModal from './BrochureDownloadModal';

const InternationalStandardsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const standards = [
    {
      category: "Power & Control Cables",
      items: ["IEC 60502-1", "IEC 60227 / 60228", "BS and other international standards"]
    },
    {
      category: "Elastomeric Cables",
      items: ["IEC 60502-1", "IEC 60502-2", "BS specifications"]
    },
    {
      category: "Solar Cables",
      items: ["IEC 62893", "EN 50618"]
    },
    {
      category: "Instrumentation Cables",
      items: [
        "BS EN 50288-7", "IEC 60502-1", "IEC 60079-14", "BS 5308 (Part 1 & 2)", 
        "BS 7655", "IEC-189 (Part 1 & 2)", "VDE-0815 & 0816", 
        "IEC 60332-1", "IEC 60332-3-22/23/24"
      ]
    },
    {
      category: "Fire Resistant Cables with Low Smoke & Gases",
      items: [
        "BS-7846", "BS-7629", "BS-8434", "BS-6387 (Category CWZ)", 
        "IEC-60331-21", "IS 17505", "IEC 60754", "IEC 61034"
      ]
    },
    {
      category: "Automotive Cables",
      items: [
        "ISO 6722", "ISO 19642 (Part 5 & 9)", "JASO D 611", 
        "JASO D 618", "SAE J1128", "SAE J1127", "IS 2465"
      ]
    },
    {
      category: "Ship Wiring Cables",
      items: [
        "IEC 60092-350 / 353 / 376", "BS 6883", "BS 7917", "VG 95218", 
        "GOST 7866 / 11326 / 17301", "NES / DEF STAN 526 & 527", 
        "EED-50-12", "EED-50-13"
      ]
    },
    {
      category: "Cables for Naval Ships & Submarines",
      items: [
        "IEC 60092-350 / 353 / 376", "BS 6883", "BS 7917", "VG 95218", 
        "GOST 7866 / 11326 / 17301", "NES / DEF STAN 526 & 527", 
        "EED-50-12", "EED-50-13", "EED-57-03 (PT-10)", "EED-57-04 (PT-45)", 
        "DMDE Standard", "ANSI/TIA-568-C.2", "Def Stan 02-526", 
        "Def Stan 02-527", "Def Stan 61-12 (Part 18 & 25)"
      ]
    },
    {
      category: "Cables for Overhead Power Transmission & Distribution",
      items: ["IEC 61089", "BS EN 50182", "BS EN 50397"]
    },
    {
      category: "Power, Control, Solar, Appliance Wire Cables",
      items: ["UL 44", "UL 854", "UL 83", "UL 4703", "ICEA-S-76-474"],
      hasULBrochure: true
    },
    {
      category: "Cables for Rolling Stock & Coach Wiring",
      items: ["BS EN 50264", "BS EN 50306", "BS EN 50382", "OEM / RDSO specifications"]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 md:pt-36 pb-16">
      <Seo
        title="International Cable Standards Compliance (IEC/BS) | Nicco Cables"
        description="Guide to IEC, British Standards (BS), European Standards (EN), and ASTM compliance specifications met by Nicco Cables."
        keywords="International standards, IEC compliance, BS specification, EN standards, ASTM wires"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "International Cable Standards Compliance (IEC/BS)",
          "description": "Compliance standards and test parameters according to global IEC, BS, EN, and ASTM frameworks."
      }}
      />
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 text-brand-secondary mb-4">
            <div className="h-[1px] w-8 bg-brand-secondary" />
            <span className="text-xs font-black uppercase tracking-widest">STANDARDS</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black text-brand-dark tracking-tighter mb-6 leading-[1.1]">
            <SplitTitle title="International Standards" />
          </h1>
          <p className="text-base text-black leading-relaxed font-medium max-w-3xl">
            Our products are engineered and manufactured to comply with the most rigorous international standards, ensuring global reliability, safety, and performance across diverse industries.
          </p>
        </motion.div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standards.map((std, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-black text-brand-dark mb-4 leading-tight">
                {std.category}
              </h3>
              <ul className="space-y-2">
                {std.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-black font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              {std.hasULBrochure && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button 
                    onClick={() => {
                      setModalProps({ title: 'UL Cables', url: '/brochures/UL Cables_compressed.pdf' });
                      setIsModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-brand-secondary/10 hover:bg-brand-secondary text-brand-secondary hover:text-white px-4 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 border border-brand-secondary/25 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" /> Download UL Brochure
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 mt-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more{"\u00A0"}information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button onClick={() => { setModalProps({ title: 'UL Cables', url: '/brochures/UL Cables_compressed.pdf' }); setIsModalOpen(true); }} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Download UL Brochure <ArrowRight className="w-4 h-4" />
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

export default InternationalStandardsPage;
