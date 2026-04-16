
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Breadcrumbs from './Breadcrumbs';

import SplitTitle from './SplitTitle';

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

const ThermocoupleCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technicalDetails = [
    { label: "Construction", value: "Single or multiple pairs" },
    { label: "Voltage Rating", value: "Up to 1100V" },
    { label: "Cable Codes", value: "Kx, Kx(A), Tx, Jx, Ex, Sx / Rx, Bx, Nx" },
    { label: "Conductor", value: "Chromel, Copper, Iron, Nicrosil, Constantan" },
    { label: "Insulation", value: "General Purpose PVC / Heat Resistant PVC / PE / XLPE / PTFE / FEP / Silicon Rubber / Fibre Glass" },
    { label: "Screening", value: "Individual and/or overall Al-Mylar / Copper Tape with Tinned Copper Drain Wire | Braided Bare / Tinned / Nickel / Silver-Plated Copper" },
    { label: "Inner Sheath", value: "PVC / HRPVC / FR PVC / FRLS PVC / ZHFR / LSF / PTFE / PFA / FEP / Fibre Glass" },
    { label: "Armouring", value: "GI Round Wire / Flat Strip / Wire Braiding / SS Wire Braiding / Copper Braiding" },
    { label: "Outer Sheath", value: "PVC / HRPVC / FR PVC / FRLS PVC / ZHFR / LSF / PTFE / PFA / FEP / Fibre Glass" },
    { label: "Standards", value: "ANSI MC-96.1, IEC 584-3, DIN, BS/EN, IEC 60332-1, IEC 60332-3 (22/23/24), IS-874" }
  ];

  const cableTypeReference = [
    { label: "Kx — Extension", value: "Type K | Chromel / Alumel | 0°C to +1100°C" },
    { label: "Kx(A) — Compensating", value: "Type K | Copper / Constantan | 0°C to +80°C" },
    { label: "Tx — Extension", value: "Type T | Copper / Constantan | –185°C to +300°C" },
    { label: "Jx — Extension", value: "Type J | Iron / Constantan | +20°C to +700°C" },
    { label: "Ex — Extension", value: "Type E | Chromel / Constantan | 0°C to +800°C" },
    { label: "Sx / Rx — Compensating", value: "Type S/R | Copper / Copper Alloy | 0°C to +1600°C" },
    { label: "Nx — Extension", value: "Type N | Nicrosil / Nisil | –200°C to +1300°C" }
  ];

  const sizesVariants = [
    { label: "Types", value: "Extension and Compensating cables" },
    { label: "Thermocouple Compatibility", value: "K, J, T, E, N, R, S, B" },
    { label: "Applications", value: "Power plants, oil & gas, steel, cement, glass industries, process automation" }
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
              <SplitTitle title="Thermocouple Extension & Compensating Cables" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Engineered for accurate transmission of thermoelectric signals from thermocouple sensors to measuring and control instruments, our Thermocouple Cables ensure reliable EMF reproduction over long distances. Available for types K, J, T, E, N, R, S, and B in screened, armoured / unarmoured, and single or multi-pair constructions. Widely used in power plants, oil & gas, steel, cement, glass industries, and process automation systems. Compliant with ANSI MC-96.1, IEC 584-3, DIN, BS/EN, and IS-874.
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
          <TechnicalTable title="Cable Type Reference" data={cableTypeReference} />
          <TechnicalTable title="Sizes & Variants" data={sizesVariants} />
        </div>

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

export default ThermocoupleCablesPage;
