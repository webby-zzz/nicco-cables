
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Breadcrumbs from './Breadcrumbs';

const TechnicalTable: React.FC<{ title: string; data: { label: string; value: React.ReactNode }[] }> = ({ title, data }) => (
  <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md border border-gray-100 overflow-hidden mb-12">
    <h3 className="text-xl font-bold text-brand-dark mb-6 border-l-4 border-brand-secondary pl-4 inline-block uppercase tracking-widest">
      {title}
    </h3>
    <div className="overflow-x-auto no-scrollbar">
      <table className="w-full text-left border-collapse border border-brand-secondary/30">
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-brand-secondary/30 hover:bg-brand-secondary/[0.02] transition-colors">
              <th className="py-4 px-6 text-[11px] font-black text-brand-dark w-1/3 align-top bg-brand-secondary/[0.05] uppercase tracking-[0.2em] border-r border-brand-secondary/30">
                {item.label}
              </th>
              <td className="py-4 px-6 text-sm text-black font-medium align-top">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ElastomericSiliconPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    { label: "Number of Cores", value: "Single-core, multicore, and control cables up to 61 cores" },
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
              Elastomeric and Silicon Cables (up to 15 kV)
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Elastomeric Mining Cables are designed for reliable transmission and distribution of electrical power and control in industrial, mining, and utility applications, manufactured in compliance with IS 14494, BS 6708, NEMA WC-58, IEC 60502-1 & 2, and IS 9968 standards. These cables offer high electrical performance, mechanical strength, and durability under harsh operating conditions. The product range includes low voltage cables up to 1.1 kV and medium voltage cables from 3.3 kV to 15 kV, available in single-core, multicore, and control cables up to 61 cores. They are widely used for flexible reeling, festoon duty, high-temperature environments, and applications requiring heat, oil, and flame resistance with high mechanical toughness.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-brand-ash" />
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-brand-ash" />
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
          className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="w-full h-64 md:h-96 bg-brand-ash rounded-[2rem] shadow-lg" />
          <div className="w-full h-64 md:h-96 bg-brand-ash rounded-[2rem] shadow-lg" />
        </motion.div>

        {/* CTA Section */}
        <div className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more{"\u00A0"}information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link 
              to="/brochures"
              className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Download Brochure <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/contact"
              className="bg-white text-brand-secondary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ElastomericSiliconPage;
