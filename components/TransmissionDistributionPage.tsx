import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Breadcrumbs from './Breadcrumbs';
import SplitTitle from './SplitTitle';
import ImageCarousel from './ImageCarousel';

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

const TransmissionDistributionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "overhead",
      title: "Overhead Transmission Conductors (Bare Conductors)",
      description: "Enable efficient and reliable long-distance power transmission with Nicco's Overhead Transmission Conductors. Manufactured using high-quality aluminium and aluminium alloy with optional steel reinforcement, these conductors deliver optimal electrical performance, mechanical strength, and proven durability across diverse climatic and terrain conditions - from urban grids to remote electrification and power evacuation from renewable energy plants.",
      technical: [
        { label: "Construction", value: "Concentric stranded — single or multi-layer stranding" },
        { label: "Conductor Material", value: "EC-grade Aluminium / Aluminium Alloy; Galvanized Steel / Aluminium-Clad Steel (for reinforced types)" },
        { label: "Voltage Range", value: "LV distribution to EHV transmission systems" },
        { label: "Operating Temperature", value: "Continuous operation up to 75°C / 90°C; higher ratings available on request" },
        { label: "Standards / Specifications", value: "IEC 61089, IS 398 (Part 2 & Part 4), BS EN 50182, ASTM B231 / B232 / B399, SS-424-08-13 / SS-424-08-14" },
        { label: "Special Features", value: "High current capacity with low electrical losses; excellent strength-to-weight ratio; superior corrosion resistance; stable under wind and ice loading; suitable for coastal, desert, and high-pollution environments" }
      ],
      variants: [
        { label: "Conductor Types", value: "AAC, AAAC, ACSR, ACSR/AW, ACAR; Special high-strength & high-temperature conductors on request" },
        { label: "Aluminium Area", value: "As per standard conductor sizes" },
        { label: "Stranding", value: "Stranded, Compact, Non-compacted" },
        { label: "Surface Finish", value: "Bright / Greased (as per requirement)" }
      ]
    },
    {
      id: "lt-power",
      title: "LT Power & Control Cables",
      description: "Power your industrial, commercial, and infrastructure projects with Nicco's LT Power & Control Cables, engineered for reliable low voltage power distribution and control applications. Built with high-quality conductors and premium insulation, these cables deliver mechanical strength, operational safety, and a long service life across diverse conditions. Available up to 1.1 kV in XLPE & PVC insulation, with Armoured and Unarmoured variants, and FR / FRLS / LSZH sheath options including fire survival properties.",
      technical: [
        { label: "Construction", value: "Multi-core stranded conductors with insulation, laid up with fillers and protective layers" },
        { label: "Voltage Rating", value: "Up to and including 1.1 kV (1100 V)" },
        { label: "Conductor (Material & Type)", value: "Aluminium or Copper, Solid, stranded & Flexible (Class 1 / Class 2 / Class 5)" },
        { label: "Insulation", value: "PVC / HR PVC / XLPE / PE" },
        { label: "Inner Sheath", value: "PVC / FR PVC / FRLS PVC / LSZH / HDPE / PE" },
        { label: "Armouring", value: "Galvanized steel wire / strip armour (for armoured cables), Aluminium Wire & Strip Armour (Applicable for single core armoured)" },
        { label: "Outer Sheath", value: "PVC / FR PVC / FRLS / LSZH / HDPE / PE" },
        { label: "Operating Temperature Range", value: "i) PVC and HR PVC insulated: up to +70°C and +85°C respectively ii) XLPE insulated: up to +90°C iii) Short circuit temperature: up to +160°C (PVC), +250°C (XLPE)" },
        { label: "Standards / Specifications", value: "IS 1554 (Part 1), IS 7098 (Part 1), IEC 60502-1, IEC 60227 / 60228 (as applicable), BS/EN and other international standards as applicable" },
        { label: "Special Features", value: "Flame Retardant / Fire Resistant / FRLS / LSZH options, Oil and moisture resistant, Suitable for indoor and outdoor installations, good flexibility for easy installation" }
      ],
      variants: [
        { label: "Number of Cores", value: "Power Core up to 5C with circular/segmental conductors as applicable, Control core from 2 core to 61 cores" },
        { label: "Size Range (sq.mm)", value: "Single core up to 1000 sq.mm & multi-core up to 630 sq.mm (power cables), 0.5 to 2.5 sq.mm (control cables)" },
        { label: "Voltage Options", value: "Up to and including 1.1 kV" }
      ]
    },
    {
      id: "ht-cables",
      title: "HT Power Cables - Up to 11 kV",
      description: "Ensure reliable power transmission across medium voltage networks with Nicco's HT Power Cables, rated from 3.3 kV to 11 kV. Manufactured using premium-grade materials and advanced processes, these cables deliver exceptional electrical safety, dielectric strength, and long service life in demanding industrial and utility environments. Available in Armoured and Unarmoured variants with FR / FRLS / LSZH sheath options, suited for underground, duct, trench, and tray installations.",
      technical: [
        { label: "Construction", value: "Single or three core, stranded compacted circular conductor with conductor screen, insulation, insulation screen, metallic screen, and protective layers" },
        { label: "Voltage Rating", value: "Earthed systems — 1.9/3.3 kV, 3.8/6.6 kV, 6.35/11 kV Unearthed systems — 3.3/3.3 kV, 6.6/6.6 kV" },
        { label: "Conductor (Material & Type)", value: "Aluminium or Copper — Stranded Compacted Circular" },
        { label: "Insulation", value: "XLPE (Cross-Linked Polyethylene)" },
        { label: "Screening", value: "Conductor screen & insulation screen (taped / extruded as per standard)" },
        { label: "Metallic Screen", value: "Copper tape / copper wire screen (as per standard)" },
        { label: "Inner Sheath", value: "PVC / FR PVC / PE / HDPE" },
        { label: "Armouring", value: "Galvanized steel wire / strip armour (for armoured cables), Aluminium Wire & Strip Armour (Applicable for single core armoured)" },
        { label: "Outer Sheath", value: "PVC / FR PVC / FRLS / LSZH (as per requirement)" },
        { label: "Operating Temperature Range", value: "i) Conductor temperature: up to +90°C ii) Short circuit temperature: up to +250°C" },
        { label: "Standards / Specifications", value: "IS 7098 (Part 2), IEC 60502-2, OEM / Utility specifications on request, BS/EN and other international standards as applicable" },
        { label: "Special Features", value: "Flame Retardant / Fire Resistant / FRLS / LSZH options, Moisture and chemical resistant, Excellent thermal and electrical stability, Suitable for direct burial and underground installation" }
      ],
      variants: [
        { label: "Number of Cores", value: "Single core and three core (circular / compacted / segmental conductors as applicable)" },
        { label: "Size Range (sq.mm)", value: "Single core up to 630 sq.mm; Multi-core up to 400 sq.mm" },
        { label: "Voltage Options", value: "Up to 11 kV" }
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
              <SplitTitle title="Transmission and Distribution" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              From high-voltage overhead transmission to low-voltage distribution and control, Nicco's T&D product range is engineered to meet the demands of power utilities, infrastructure developers, and industrial operators. Built for diverse terrains and challenging environments, our cables and conductors keep the pulse of the nation's core infrastructure uninterrupted.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-64 md:h-80 bg-brand-ash rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center p-4 bg-white border border-gray-100">
            <ImageCarousel 
              images={[
                "/brand identity/Overhead.webp",
                "/Product Images/LT cables/1.jpg",
                "/Product Images/HT-Power-Cables/2.webp"
              ]} 
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
                <TechnicalTable title="Sizes & Variants" data={section.variants} />
              </div>
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
            <Link 
              to="/brochures"
              className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Download Brochure <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="bg-white text-brand-secondary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TransmissionDistributionPage;
