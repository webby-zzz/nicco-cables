
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

const HighTemperatureCablesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technicalDetails = [
    { label: "Construction", value: "Single core hook-up wires and multi-core / multi-pair — screened / unscreened, armoured / unarmoured" },
    { label: "Voltage Rating", value: "250V AC / 600V AC / 1000V AC (as per MIL-16878, VDE, DIN, JSS)" },
    { label: "Conductor", value: "Bare Copper (up to 200°C) | Tinned Copper (up to 180°C) | Silver-Plated Copper (up to 200°C) | Nickel Plated (up to 260°C)" },
    { label: "Insulation Options", value: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>PTFE:</strong> –200°C to +260°C — excellent chemical resistance, high temperature stability</li>
        <li><strong>FEP:</strong> –200°C to +200°C — good chemical resistance, thin wall insulation</li>
        <li><strong>PFA:</strong> –200°C to +250°C — good chemical resistance, thin wall, good flexibility</li>
        <li><strong>XL ETFE:</strong> –150°C to +200°C — good electrical insulation, radiation and arc tracking resistance</li>
        <li><strong>PEEK:</strong> –160°C to +250°C — mechanically tough, high temperature and radiation resistance</li>
        <li><strong>Kapton Tape:</strong> –250°C to +300°C — very thin wall, high temperature resistance</li>
        <li><strong>Silicon Rubber:</strong> –40°C to +180°C — flexible and abrasion resistant</li>
        <li><strong>Ceramic / Quartz Yarn Braiding:</strong> up to 600°C — chemically stable, high thermal resistance</li>
        <li><strong>Special High Temperature Yarn:</strong> up to 1000°C — superior radiant heat resistance</li>
      </ul>
    )},
    { label: "Screening", value: "Individual and/or overall — Al-Mylar / Copper Tape with Tinned Copper Drain Wire | Braided Bare / Tinned / Nickel / Silver-Plated Copper" },
    { label: "Armouring", value: "Galvanized Steel Wire / Stainless Steel Wire / High Strength Steel Wire Braiding" },
    { label: "Standards", value: "JSS-51034, JSS-51038, UL-1581" }
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
              High Temperature Cables (ETFE / FEP / PTFE)
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Built for reliable operation in extreme temperature and harsh environmental conditions, our High Temperature Cables utilise irradiation crosslinking technology to deliver exceptional abrasion resistance, flexibility, and a wide temperature range from -65°C to +200°C. Widely used in aerospace, defence, railways, power plants, industrial furnaces, EV systems, and high-temperature instrumentation. Compliant with SAE AS81044, SAE AS22759, NEMA WC27500, and JSS standards.
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
        </div>

        {/* Industry & Applications Section */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md border border-gray-100 overflow-hidden mb-12">
          <h3 className="text-xl font-bold text-brand-dark mb-6 border-l-4 border-brand-secondary pl-4 inline-block uppercase tracking-widest">
            Industry & Applications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-brand-ash/30 rounded-2xl border border-brand-ash">
              <h4 className="font-black text-brand-dark mb-2 uppercase text-xs tracking-widest">Steel / Cement</h4>
              <p className="text-sm text-black font-medium">Blast furnace, electric arc furnace, hot & cold rolling mills, steel refining</p>
            </div>
            <div className="p-6 bg-brand-ash/30 rounded-2xl border border-brand-ash">
              <h4 className="font-black text-brand-dark mb-2 uppercase text-xs tracking-widest">Communication</h4>
              <p className="text-sm text-black font-medium">High frequency coaxial cables for VHF, UHF, and SHF transmission</p>
            </div>
            <div className="p-6 bg-brand-ash/30 rounded-2xl border border-brand-ash">
              <h4 className="font-black text-brand-dark mb-2 uppercase text-xs tracking-widest">Marine</h4>
              <p className="text-sm text-black font-medium">Engine proximity wiring — resistant to high temperatures, fuel oils, chemicals, saline air/water</p>
            </div>
            <div className="p-6 bg-brand-ash/30 rounded-2xl border border-brand-ash">
              <h4 className="font-black text-brand-dark mb-2 uppercase text-xs tracking-widest">Petrochemical</h4>
              <p className="text-sm text-black font-medium">Instrumentation & control, temperature sensing, fire warning</p>
            </div>
            <div className="p-6 bg-brand-ash/30 rounded-2xl border border-brand-ash">
              <h4 className="font-black text-brand-dark mb-2 uppercase text-xs tracking-widest">Power</h4>
              <p className="text-sm text-black font-medium">Proximity to turbines, boilers, ash handling systems</p>
            </div>
          </div>
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

export default HighTemperatureCablesPage;
