
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

const ULCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technicalDetails = [
    { label: "Construction", value: "Single core / multi-core — stranded or solid conductor with insulation and protective layers" },
    { label: "Voltage Rating", value: "600V / 1000V / 2000V (as per applicable UL standard)" },
    { label: "Conductor", value: "Aluminium / Copper / Tinned Copper — solid or stranded" },
    { label: "Insulation", value: "PVC / XLPE (as per UL type)" },
    { label: "Outer Sheath", value: "PVC / XLPE (integral with insulation or jacketed)" },
    { label: "Operating Temperature", value: "UL 44 / UL 83 — up to +90°C (dry/wet) | UL 4703 — up to +90°C (wet/dry), sunlight resistant" },
    { label: "Standards", value: "UL 44, UL 83, UL 854, UL 4703, CSA (on request)" },
    { label: "Special Features", value: "Flame retardant, sunlight resistant, oil & moisture resistant, suitable for indoor and outdoor use, RoHS compliant (on request)" }
  ];

  const cableTypes = [
    { label: "UL 44", value: "XHHW-2, XHHW, XHH, RHW-2, RHW, RHH, SIS, RWU75, RWU90, RW75, RW90, R90" },
    { label: "UL 4703 (Photovoltaic Wire)", value: "RHW-2 (US requirements)" },
    { label: "UL 854 (Service Entrance Cable)", value: "USE-2, USE — single and/or coverless multiple insulated conductors" }
  ];

  const cableMarking = [
    { label: "UL 44", value: "SR, PR I, PR II, GR I, GR II, CT, FT4, –40°C rating, VW-1 (2000V), FT1 (2000V)" },
    { label: "UL 4703", value: "Wet/dry temperature rating, Sunlight Resistant / Sun Res, –40°C (optional), VW-1 (optional), Direct Burial / Dir Bur" },
    { label: "UL 854", value: "Sunlight Resistant / Sun Res, –40°C rating, PR I, PR II, GR I, GR II" }
  ];

  const variantsDetails = [
    { label: "Size Range", value: "14 AWG to 2000 KCMIL (as per UL standard)" },
    { label: "Core Configuration", value: "Single core and multi-core" },
    { label: "Voltage Options", value: "600V / 1000V / 2000V" }
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
              <span className="text-xs font-black uppercase tracking-widest">CABLES BY TYPE</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black text-brand-dark tracking-tighter mb-6 leading-[1.1]">
              UL Cables <span className="text-brand-secondary">(International)</span>
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Engineered to meet stringent Underwriters Laboratories (UL) standards, our UL Cables deliver superior safety, performance, and reliability across power distribution, building wiring, industrial installations, and solar photovoltaic systems. Available in thermoset insulated wires, service entrance cables (USE / USE-2 / SER / SEU), and photovoltaic (PV) wire variants — suitable for indoor and outdoor applications. Compliant with UL 44, UL 83, UL 854, UL 4703, and CSA (on request).
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-full h-64 md:h-80 bg-brand-ash rounded-[2rem] shadow-lg overflow-hidden">
              <img 
                src="/Product Images/UL-Cables/1.webp" 
                alt="UL Cable 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <TechnicalTable title="Technical Details" data={technicalDetails} />
          <TechnicalTable title="Cable Types" data={cableTypes} />
          <TechnicalTable title="Cable Marking" data={cableMarking} />
          <TechnicalTable title="Sizes & Variants" data={variantsDetails} />
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
              src="/Product Images/UL-Cables/3.webp" 
              alt="UL Cable 3" 
              className="w-full h-full object-contain scale-[1.6]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 mt-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more{"\u00A0"}information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
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
    </div>
  );
};

export default ULCablesPage;
