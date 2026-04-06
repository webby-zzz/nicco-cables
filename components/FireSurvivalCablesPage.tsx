
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

const FireSurvivalCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technicalDetails = [
    { label: "Construction", value: "Single & multi-core / Pairs / Triads / Quads" },
    { label: "Voltage Grade", value: "300V / 500V / 600V / 1100V" },
    { label: "Conductor", value: "Solid or stranded annealed bare or tinned copper" },
    { label: "Fire Barrier", value: "Glass Mica Tape" },
    { label: "Insulation", value: "XLPE / XLPO / EPR / Silicone Rubber" },
    { label: "Screening", value: "Al-Mylar / Copper Tape with Tinned Copper Drain Wire | Braided Bare / Tinned / Nickel / Silver-Plated Copper" },
    { label: "Inner Sheath", value: "LSOH / ZHFR / SHF1 / SHF2" },
    { label: "Armouring", value: "GI Round Wire / Flat Strip / SS / GI / ATC Wire Braiding" },
    { label: "Outer Sheath", value: "LSOH / ZHFR / SHF1 / SHF2" },
    { label: "Standards", value: "BS-7846, BS-7629, BS-8434, IEC-60331-21, IS 17505, IEC 60754, IEC 61034" },
    { label: "Special Features", value: "Halogen free, low smoke, maintains functionality during fire, water spray & mechanical impact" }
  ];

  const firePerformanceTesting = [
    { label: "BS 6387", value: "650°C / 650°C + water spray / 950°C — 15 to 30 min" },
    { label: "BS 7629-1 / BS 8434-1 & 2", value: "830°C to 950°C — 30 / 60 / 120 min" },
    { label: "EN 50200", value: "830°C to 850°C — 30 / 60 / 120 min" }
  ];

  const sizesVariants = [
    { label: "Voltage Options", value: "300V / 500V / 600V / 1100V" },
    { label: "Types", value: "Fire Survival (FS), Fire Resistant (FR), FRLS" },
    { label: "Applications", value: "Fire alarms, emergency lighting, public address systems for airports, metro, high-rise buildings, malls, industrial facilities" }
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
              Fire Resistant and Fire Survival Cables
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Engineered to maintain electrical functionality during fire conditions up to 950°C, our Fire Survival Cables ensure continuous operation of fire alarms, emergency lighting, and public address systems. Available in FS, FR, and FRLS variants — suitable for airports, metro systems, high-rise buildings, malls, and industrial facilities. Compliant with BS-7846, BS-7629, BS-8434, IEC-60331-21, and IS 17505.
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
          <TechnicalTable title="Fire Performance Testing" data={firePerformanceTesting} />
          <TechnicalTable title="Sizes & Variants" data={sizesVariants} />
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

export default FireSurvivalCablesPage;
