
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const LTPowerControlPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-ash min-h-screen pt-32 md:pt-40 pb-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md mb-8 border border-gray-100 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter mb-6 leading-tight">
              LT Power & Control Cables
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Power your industrial, commercial, and infrastructure projects with our LT Power & Control Cables, engineered for reliable power distribution and control applications. Built with high-quality conductors and premium insulation, these cables deliver mechanical strength, operational safety, and a long service life across diverse conditions. Available up to 1.1 kV in XLPE & PVC insulation, with Armoured and Unarmoured variants, and FR / FRLS / LSZH sheath options including fire survival properties.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img 
              src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800" 
              alt="LT Power Cables" 
              className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Technical Details Table */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md border border-gray-100 overflow-hidden mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter mb-8 border-b-2 border-brand-secondary pb-4">
            Technical Details & Specifications
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark w-1/3 align-top bg-gray-50/50 rounded-tl-xl uppercase tracking-widest">
                    Construction
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Multi-core stranded conductors with insulation, laid up with fillers and protective layers
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Voltage Rating
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Up to and including 1.1 kV (1100 V)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Conductor (Material & Type)
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Aluminium or Copper, Solid, stranded & Flexible (Class 1/ Class 2 / Class 5)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Insulation
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    PVC /HR PVC/ XLPE /PE
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Inner Sheath
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    PVC / FR PVC / FRLS PVC / LSZH / HDPE / PE
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Armouring
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Galvanized steel wire / strip armour (for armoured cables), Aluminium Wire & Strip Armour (Applicable for single core armoured)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Outer Sheath
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    PVC / FR PVC / FRLS / LSZH / HDPE / PE
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Operating Temperature Range
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    <ul className="list-none space-y-2">
                      <li>i) PVC and HR PVC insulated: up to +70°C and +85°C respectively</li>
                      <li>ii) XLPE insulated: up to +90°C</li>
                      <li>iii) Short circuit temperature: up to +160°C (PVC), +250°C (XLPE)</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Standards / Specifications
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    IS 1554 (Part 1), IS 7098 (Part 1), IEC 60502-1, IEC 60227 / 60228 (as applicable), BS/EN and other international standards as applicable.
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Special Features
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Flame retardant /Fire Resistant / FRLS / LSZH options, Oil and moisture resistant, Suitable for indoor and outdoor installations, good flexibility for easy installation
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 rounded-bl-xl uppercase tracking-widest">
                    Sizes & Variants
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    <ul className="list-none space-y-3">
                      <li><strong>Number of cores:</strong> Power Core up to 5C with circular/segmental conductors as applicable, Control core from 2 core to 61 cores</li>
                      <li><strong>Size range (Sq.mm):</strong> Single Core up to 1000 Sq.mm & multi core up to 630 sq.mm (power cables), 0.5 to 2.5 sq.mm (control cables)</li>
                      <li><strong>Voltage options:</strong> Up to and including 1.1 kV</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200" 
            alt="Industrial Cables" 
            className="w-full h-64 md:h-96 object-cover rounded-[2rem] shadow-lg"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* CTA Section */}
        <div className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team for a detailed consultation.</p>
          </div>
          <Link 
            to="/contact"
            className="bg-white text-brand-secondary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default LTPowerControlPage;
