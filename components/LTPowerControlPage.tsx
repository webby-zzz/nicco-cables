
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

const LTPowerControlPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    { label: "Size Range (sq.mm)", value: "Single core up to 1000 sq.mm & multi-core up to 630 sq.mm (power cables), 0.5 to 2.5 sq.mm (control cables)" },
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
              LT Power & Control{"\u00A0"}Cables
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Power your industrial, commercial, and infrastructure projects with our LT Power & Control Cables, engineered for reliable power distribution and control applications. Built with high-quality conductors and premium insulation, these cables deliver mechanical strength, operational safety, and a long service life across diverse conditions. Available up to 1.1 kV in XLPE & PVC insulation, with Armoured and Unarmoured variants, and FR / FRLS / LSZH sheath options including fire survival properties.
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
            <a 
              href="/brochures/LT Power & Control Cable Catalog_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Download Brochure <ArrowRight className="w-4 h-4" />
            </a>
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

export default LTPowerControlPage;
