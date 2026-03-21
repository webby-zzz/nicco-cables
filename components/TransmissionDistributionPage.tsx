import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const TransmissionDistributionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 md:pt-40 pb-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md mb-8 border border-gray-100 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 text-brand-secondary mb-4">
              <div className="h-[1px] w-8 bg-brand-secondary" />
              <span className="text-xs font-black uppercase tracking-widest">INDUSTRY SOLUTIONS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter mb-6 leading-tight">
              Transmission & <span className="text-brand-secondary">Distribution</span>
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              From high-voltage overhead transmission to low-voltage distribution and control, Nicco's T&D product range is engineered to meet the demands of power utilities, infrastructure developers, and industrial operators. Built for diverse terrains and challenging environments, our cables and conductors keep the pulse of the nation's core infrastructure uninterrupted.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img 
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" 
              alt="Transmission and Distribution" 
              className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Product 1: Overhead Transmission Conductors */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md border border-gray-100 overflow-hidden mb-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter mb-4">
              Overhead Transmission Conductors (Bare{"\u00A0"}Conductors)
            </h2>
            <p className="text-base text-black leading-relaxed font-medium">
              Enable efficient and reliable long-distance power transmission with Nicco's Overhead Transmission Conductors. Manufactured using high-quality aluminium and aluminium alloy with optional steel reinforcement, these conductors deliver optimal electrical performance, mechanical strength, and proven durability across diverse climatic and terrain conditions - from urban grids to remote electrification and power evacuation from renewable energy plants.
            </p>
          </div>
          
          <h3 className="text-xl font-bold text-brand-dark mb-4 border-b-2 border-brand-secondary pb-2 inline-block">
            Technical{"\u00A0"}Details
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark w-1/3 align-top bg-gray-50/50 rounded-tl-xl uppercase tracking-widest">
                    Construction
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Concentric stranded — single or multi-layer stranding
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Conductor Material
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    EC-grade Aluminium / Aluminium Alloy; Galvanized Steel / Aluminium-Clad Steel (for reinforced types)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Voltage Range
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    LV distribution to EHV transmission systems
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Operating Temperature
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Continuous operation up to 75°C / 90°C; higher ratings available on request
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Standards / Specifications
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    IEC 61089, IS 398 (Part 2 & Part 4), BS EN 50182, ASTM B231 / B232 / B399, SS-424-08-13 / SS-424-08-14
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Special Features
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    High current capacity with low electrical losses; excellent strength-to-weight ratio; superior corrosion resistance; stable under wind and ice loading; suitable for coastal, desert, and high-pollution environments
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 rounded-bl-xl uppercase tracking-widest">
                    Sizes & Variants
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    <ul className="list-none space-y-2">
                      <li><strong>Conductor Types:</strong> AAC, AAAC, ACSR, ACSR/AW, ACAR; Special high-strength & high-temperature conductors on request</li>
                      <li><strong>Aluminium Area:</strong> As per standard conductor sizes</li>
                      <li><strong>Stranding:</strong> Stranded, Compact, Non-compacted</li>
                      <li><strong>Surface Finish:</strong> Bright / Greased (as per requirement)</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Product 2: LT Power & Control Cables */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md border border-gray-100 overflow-hidden mb-8"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter mb-4">
              LT Power & Control{"\u00A0"}Cables
            </h2>
            <p className="text-base text-black leading-relaxed font-medium">
              Power your industrial, commercial, and infrastructure projects with Nicco's LT Power & Control Cables, engineered for reliable low voltage power distribution and control applications. Built with high-quality conductors and premium insulation, these cables deliver mechanical strength, operational safety, and a long service life across diverse conditions. Available up to 1.1 kV in XLPE & PVC insulation, with Armoured and Unarmoured variants, and FR / FRLS / LSZH sheath options including fire survival properties.
            </p>
          </div>
          
          <h3 className="text-xl font-bold text-brand-dark mb-4 border-b-2 border-brand-secondary pb-2 inline-block">
            Technical{"\u00A0"}Details
          </h3>
          
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
                    Aluminium or Copper, Solid, stranded & Flexible (Class 1 / Class 2 / Class 5)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Insulation
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    PVC / HR PVC / XLPE / PE
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
                    IS 1554 (Part 1), IS 7098 (Part 1), IEC 60502-1, IEC 60227 / 60228 (as applicable), BS/EN and other international standards as applicable
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Special Features
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Flame Retardant / Fire Resistant / FRLS / LSZH options, Oil and moisture resistant, Suitable for indoor and outdoor installations, good flexibility for easy installation
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 rounded-bl-xl uppercase tracking-widest">
                    Sizes & Variants
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    <ul className="list-none space-y-2">
                      <li><strong>Number of Cores:</strong> Power Core up to 5C with circular/segmental conductors as applicable, Control core from 2 core to 61 cores</li>
                      <li><strong>Size Range (sq.mm):</strong> Single core up to 1000 sq.mm & multi-core up to 630 sq.mm (power cables), 0.5 to 2.5 sq.mm (control cables)</li>
                      <li><strong>Voltage Options:</strong> Up to and including 1.1 kV</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Product 3: HT Power Cables */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md border border-gray-100 overflow-hidden mb-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter mb-4">
              HT Power Cables - Up to 11 kV
            </h2>
            <p className="text-base text-black leading-relaxed font-medium">
              Ensure reliable power transmission across medium voltage networks with Nicco's HT Power Cables, rated from 3.3 kV to 11 kV. Manufactured using premium-grade materials and advanced processes, these cables deliver exceptional electrical safety, dielectric strength, and long service life in demanding industrial and utility environments. Available in Armoured and Unarmoured variants with FR / FRLS / LSZH sheath options, suited for underground, duct, trench, and tray installations.
            </p>
          </div>
          
          <h3 className="text-xl font-bold text-brand-dark mb-4 border-b-2 border-brand-secondary pb-2 inline-block">
            Technical{"\u00A0"}Details
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark w-1/3 align-top bg-gray-50/50 rounded-tl-xl uppercase tracking-widest">
                    Construction
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Single or three core, stranded compacted circular conductor with conductor screen, insulation, insulation screen, metallic screen, and protective layers
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Voltage Rating
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    <ul className="list-none space-y-1">
                      <li><strong>Earthed systems:</strong> 1.9/3.3 kV, 3.8/6.6 kV, 6.35/11 kV</li>
                      <li><strong>Unearthed systems:</strong> 3.3/3.3 kV, 6.6/6.6 kV</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Conductor (Material & Type)
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Aluminium or Copper — Stranded Compacted Circular
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Insulation
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    XLPE (Cross-Linked Polyethylene)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Screening
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Conductor screen & insulation screen (taped / extruded as per standard)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Metallic Screen
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Copper tape / copper wire screen (as per standard)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Inner Sheath
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    PVC / FR PVC / PE / HDPE
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
                    PVC / FR PVC / FRLS / LSZH (as per requirement)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Operating Temperature Range
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    <ul className="list-none space-y-2">
                      <li>i) Conductor temperature: up to +90°C</li>
                      <li>ii) Short circuit temperature: up to +250°C</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Standards / Specifications
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    IS 7098 (Part 2), IEC 60502-2, OEM / Utility specifications on request, BS/EN and other international standards as applicable
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 uppercase tracking-widest">
                    Special Features
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    Flame Retardant / Fire Resistant / FRLS / LSZH options, Moisture and chemical resistant, Excellent thermal and electrical stability, Suitable for direct burial and underground installation
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <th className="py-4 px-4 text-sm font-bold text-brand-dark align-top bg-gray-50/50 rounded-bl-xl uppercase tracking-widest">
                    Sizes & Variants
                  </th>
                  <td className="py-4 px-4 text-sm text-black font-medium align-top">
                    <ul className="list-none space-y-2">
                      <li><strong>Number of Cores:</strong> Single core and three core (circular / compacted / segmental conductors as applicable)</li>
                      <li><strong>Size Range (sq.mm):</strong> Single core up to 630 sq.mm; Multi-core up to 400 sq.mm</li>
                      <li><strong>Voltage Options:</strong> Up to 11 kV</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more{"\u00A0"}information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button 
              className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Download Brochure <ArrowRight className="w-4 h-4" />
            </button>
            <Link 
              to="/contact"
              className="bg-white text-brand-secondary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TransmissionDistributionPage;
