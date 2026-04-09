
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

const WindEnergyCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Wind Energy Cables
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Engineered for power transmission, control, and signal applications in wind turbine systems, our Wind Energy Cables deliver reliable performance across onshore and offshore installations. Built to withstand continuous vibration, torsional movement, UV exposure, and extreme temperatures with a service life of 20–25+ years. Compliant with IEC 60502, IEC 60332, EN 50525, and DNV Offshore standards.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-brand-ash">
                <img 
                  src="/Product Images/Wind-Energy-Cables/1.webp" 
                  alt="Wind Energy Cable 1" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-brand-ash">
                <img 
                  src="/Product Images/Wind-Energy-Cables/12.webp" 
                  alt="Wind Energy Cable 12" 
                  className="w-full h-full object-contain -rotate-90"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </motion.div>

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
          <div className="w-full max-w-5xl aspect-video bg-white rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center">
            <img 
              src="/Product Images/Wind-Energy-Cables/2.webp" 
              alt="Wind Energy Cable 2" 
              className="w-full h-full object-contain -rotate-90 scale-[1.6]"
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

export default WindEnergyCablesPage;
