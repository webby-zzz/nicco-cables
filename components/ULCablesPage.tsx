import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Breadcrumbs from './Breadcrumbs';
import SplitTitle from './SplitTitle';

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
              <SplitTitle title="UL Cables (International)" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Engineered to meet stringent Underwriters Laboratories (UL) standards, our UL Cables deliver superior safety, performance, and reliability across power distribution, building wiring, industrial installations, and solar photovoltaic systems. Available in thermoset insulated wires, service entrance cables (USE / USE-2 / SER / SEU), and photovoltaic (PV) wire variants — suitable for indoor and outdoor applications. Compliant with UL 44, UL 83, UL 854, UL 4703, and CSA (on request).
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-full aspect-square bg-white rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center border border-gray-100">
              <img 
                src="/Product Images/UL-Cables/1.webp" 
                alt="UL Cable 1" 
                className="w-full h-[90%] object-contain"
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
          <div className="w-full max-w-5xl aspect-video bg-white rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center border border-gray-100">
            <img 
              src="/Product Images/UL-Cables/3.webp" 
              alt="UL Cable 3" 
              className="w-full h-full object-contain scale-[1.4]"
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
              Connect with Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ULCablesPage;
