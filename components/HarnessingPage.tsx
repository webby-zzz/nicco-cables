
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

const HarnessingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "harnessing",
      title: "Cable Harnessing",
      description: "Engineered for railway rolling stock applications, our Electron Beam Irradiated Thin-Walled Flexible Elastomeric Cables deliver limited fire hazard properties with minimum flame spread, low smoke emission, and reduced toxic fumes. Used for power, auxiliary, control, sensor, and driver circuits in EMU, MEMU, and electric locomotives — including AC traction motors. Compliant with ELRS/SPEC/ELC/0019, EDTS-132, CLW/ES/03/0458 & 0459, and DS-3,4,5,7 standards.",
      technical: [
        { label: "Construction", value: "Single core / multi-core — screened & unscreened" },
        { label: "Voltage Rating", value: "Up to 3.0 kV" },
        { label: "Conductor", value: "Tinned circular flexible copper conductor" },
        { label: "Insulation", value: "EBXL EPDM" },
        { label: "Sheath", value: "EEA / EMA / EVA" },
        { label: "Filler", value: "Cross-linked Polyolefin (if required)" },
        { label: "EMC Screen", value: "Tin plated copper braiding (if required)" },
        { label: "Operating Temperature", value: "–40°C to +120°C" },
        { label: "Standards", value: "ELRS/SPEC/ELC/0019/Rev-04, EDTS-132 Rev-C, DS-3/4/5/7, CLW/ES/03/0458 & 0459 (with latest amendments)" }
      ],
      fireSafety: [
        { label: "Flame Spread / Retardancy", value: "IEC 60332-1-2, IEC 60332-3" },
        { label: "Low Smoke Emission", value: "ASTM D2843 / IEC 61034-2" },
        { label: "Corrosivity of Combustion Gases", value: "IEC 60754-2" },
        { label: "Toxicity of Combustion Gases", value: "NES 713" }
      ],
      variants: [
        { label: "Size Range", value: "0.5 to 150 sq.mm" },
        { label: "Core Configuration", value: "Single core and multi-core" },
        { label: "Voltage Options", value: "Up to 3.0 kV" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-28 md:pt-36 pb-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        
        <Breadcrumbs />

        {/* Header Section */}
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
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black text-brand-dark tracking-tighter mb-6 leading-[1.1]">
              Cable <span className="text-brand-secondary">Harnessing</span>
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Engineered for railway rolling stock applications, our Electron Beam Irradiated Thin-Walled Flexible Elastomeric Cables deliver limited fire hazard properties with minimum flame spread, low smoke emission, and reduced toxic fumes.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-64 md:h-80 bg-brand-ash rounded-[2rem] shadow-lg overflow-hidden">
            <img 
              src="https://picsum.photos/seed/harnessing/1200/800" 
              alt="Cable Harnessing" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Product Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md border border-gray-100"
            >
              <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-6 tracking-tight">
                {section.title}
              </h2>
              <p className="text-base text-black font-medium leading-relaxed mb-10">
                {section.description}
              </p>

              <div className="flex flex-col gap-8">
                <TechnicalTable title="Technical Details" data={section.technical} />
                <TechnicalTable title="Fire Safety Performance" data={section.fireSafety} />
                <TechnicalTable title="Sizes & Variants" data={section.variants} />
              </div>
              <p className="mt-6 text-sm text-gray-500 font-medium italic">
                Note: Cable harnessing as per EN specifications for rolling stock, customised specifications, or any other international standard can be manufactured as per customer requirement.
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 mt-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Download Brochure <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/contact" className="bg-white text-brand-secondary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HarnessingPage;

