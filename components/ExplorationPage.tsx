
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const ExplorationPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "lt-power",
      title: "LT Power & Control Cables",
      description: "Designed for low-voltage power distribution and control in oil & gas and mining facilities, our LT Power & Control Cables deliver excellent insulation strength, mechanical protection, and fire safety. Available up to 1.1 kV with armoured / unarmoured variants and FR / FRLS / LSZH sheath options. Compliant with IS 1554 (Part 1), IS 7098 (Part 1), IEC 60502-1, and BS/EN standards.",
      technical: [
        { label: "Construction", value: "Multi-core stranded conductors with insulation, fillers and protective layers" },
        { label: "Voltage Rating", value: "Up to 1.1 kV (1100V)" },
        { label: "Conductor", value: "Aluminium or Copper — Solid, Stranded & Flexible (Class 1 / Class 2 / Class 5)" },
        { label: "Insulation", value: "PVC / HR PVC / XLPE / PE" },
        { label: "Inner Sheath", value: "PVC / FR PVC / FRLS PVC / LSZH / HDPE / PE" },
        { label: "Armouring", value: "GI Wire / Strip Armour | Aluminium Wire & Strip Armour (single core)" },
        { label: "Outer Sheath", value: "PVC / FR PVC / FRLS / LSZH / HDPE / PE" },
        { label: "Operating Temperature", value: "PVC up to +70°C / HR PVC up to +85°C / XLPE up to +90°C | Short circuit — +160°C (PVC) / +250°C (XLPE)" },
        { label: "Standards", value: "IS 1554 (Part 1), IS 7098 (Part 1), IEC 60502-1, IEC 60227 / 60228, BS/EN standards" },
        { label: "Special Features", value: "FR / FRLS / LSZH options, oil & moisture resistant, suitable for indoor and outdoor installations" }
      ],
      variants: [
        { label: "Voltage Options", value: "Up to 1.1 kV" },
        { label: "Core Configuration", value: "Multi-core, armoured and unarmoured" },
        { label: "Applications", value: "Power supply, control, monitoring and signalling circuits in oil & gas and mining facilities" }
      ]
    },
    {
      id: "ht-cables",
      title: "HT Cables — Up to 11 kV",
      description: "Engineered for medium voltage power transmission in oil & gas and mining networks, our HT Cables cover earthed systems from 3.3 kV to 11 kV. Available in armoured and unarmoured variants with FR / FRLS / LSZH sheath options — suitable for underground, duct, trench, and tray installations. Compliant with IS 7098 (Part 2), IEC 60502-2, and BS/EN standards.",
      technical: [
        { label: "Construction", value: "Single core or three core, stranded compacted circular conductor with conductor screen, insulation screen, metallic screen, and protective layers" },
        { label: "Voltage Rating", value: "Earthed — 1.9/3.3 kV | 3.8/6.6 kV | 6.35/11 kV | Unearthed — 3.3/3.3 kV | 6.6/6.6 kV" },
        { label: "Conductor", value: "Aluminium or Copper — Stranded Compacted Circular" },
        { label: "Insulation", value: "XLPE (Cross-Linked Polyethylene)" },
        { label: "Screening", value: "Conductor screen and insulation screen (taped / extruded as per standard)" },
        { label: "Metallic Screen", value: "Copper tape / Copper wire screen (as per standard)" },
        { label: "Inner Sheath", value: "PVC / FR PVC / PE / HDPE" },
        { label: "Armouring", value: "GI Wire / Strip Armour | Aluminium Wire & Strip Armour (single core)" },
        { label: "Outer Sheath", value: "PVC / FR PVC / FRLS / LSZH (as per requirement)" },
        { label: "Operating Temperature", value: "Conductor up to +90°C | Short circuit up to +250°C" },
        { label: "Standards", value: "IS 7098 (Part 2), IEC 60502-2, BS/EN standards, OEM / Utility specifications (on request)" }
      ],
      variants: [
        { label: "Voltage Options", value: "3.3 kV / 6.6 kV / 11 kV (earthed and unearthed systems)" },
        { label: "Core Configuration", value: "Single core and three core" },
        { label: "Installation", value: "Underground, duct, trench, and tray installations" }
      ]
    },
    {
      id: "instrumentation",
      title: "Instrumentation Cables",
      description: "Engineered for accurate signal transmission between field instruments and control systems in oil & gas and mining environments, our Instrumentation Cables deliver exceptional noise rejection and signal integrity. Available in Cores, Pairs, Triads, and Quads with FR / FRLS / LSZH options — suitable for hazardous area installations. Compliant with BS EN 50288-7, IEC 60502-1, BS 5308 Part 1 & 2, and VDE-0815 & 0816.",
      technical: [
        { label: "Construction", value: "Cores, Pairs, Triads and Quads" },
        { label: "Voltage Rating", value: "24V / 60V / 150V / 300V / 500V / 600V / 1000V / 1100V (as per standard)" },
        { label: "Conductor Material", value: "Electrolytic Grade Annealed Bare Copper / Tinned Copper / Nickel Plated / Silver Plated" },
        { label: "Conductor Type", value: "Class 1 / Class 2 / Class 5 / Class 6" },
        { label: "Insulation", value: "PVC / XLPE / LDPE / HDPE / XLPO / EPR / HEPR / Silicon Rubber" },
        { label: "Screening", value: "Individual and/or overall — Al-Mylar / Copper Tape with Tinned Copper Drain Wire | Braided Tinned Copper" },
        { label: "Inner Sheath", value: "PVC / FR PVC / FRLS PVC / LSZH" },
        { label: "Ripcord", value: "For easy sheath removal" },
        { label: "Armouring", value: "GI Round Wire / Flat Strip / SS Wire Braiding / GI Wire Braiding / Copper Wire Braiding" },
        { label: "Outer Sheath", value: "PVC / FR PVC / FRLS PVC / LSZH" },
        { label: "Multi-Layer Sheath", value: "Aluminium Tape (Longitudinal) + HDPE + Polyamide — for alternate lead sheath cables" },
        { label: "Operating Temperature", value: "PVC: –15°C to +70°C / +85°C / +105°C | XLPE: –40°C to +90°C | Silicon Rubber: –60°C to +150°C | EPR: –40°C to +90°C | XLPO: –40°C to +120°C" },
        { label: "Standards", value: "BS EN 50288-7, IEC 60502-1, IEC 60079-14, BS 5308 Part 1 & 2, IEC-189 Part 1 & 2, VDE-0815 & 0816" },
        { label: "Special Features", value: "Fire Survival / FRLS / LSZH options, excellent noise rejection, oil, moisture & chemical resistant, suitable for hazardous area installations" }
      ],
      variants: [
        { label: "Size Range", value: "0.2 to 2.5 sq.mm" },
        { label: "Number of Cores", value: "Up to 50 Cores, Pairs, Triads, and Quads" },
        { label: "Installation", value: "Indoor and outdoor installations" }
      ]
    },
    {
      id: "ethernet",
      title: "Ethernet / LAN Cables",
      description: "Engineered for high-speed and reliable data transmission in oil & gas and mining communication networks, our Ethernet Cables deliver stable performance, low signal loss, and strong EMI resistance. Available in CAT 5e, CAT 6, CAT 6A, and CAT 7 variants in UTP, FTP, and SFTP configurations. Compliant with ANSI/TIA-568, ISO/IEC 11801, IEC 61156, and IEEE 802.3.",
      technical: [
        { label: "Construction", value: "4 twisted pairs (8 conductors), precisely twisted to control crosstalk" },
        { label: "Conductor", value: "Solid or stranded annealed copper — 23 to 26 AWG (as per category)" },
        { label: "Insulation", value: "HDPE / Foamed PE" },
        { label: "Screening", value: "UTP — Unshielded | FTP — Overall foil screen | SFTP — Individual pair foil + overall braid" },
        { label: "Outer Sheath", value: "PVC / FR PVC / LSZH / PE (outdoor)" },
        { label: "Operating Temperature", value: "–20°C to +75°C" },
        { label: "Standards", value: "ANSI/TIA-568, ISO/IEC 11801, IEC 61156, IEEE 802.3, RoHS compliant (on request)" }
      ],
      performance: [
        { label: "CAT 5e", value: "Up to 1 Gbps @ 100 MHz" },
        { label: "CAT 6", value: "Up to 1 Gbps (10 Gbps short distance) @ 250 MHz" },
        { label: "CAT 6A", value: "Up to 10 Gbps @ 500 MHz" },
        { label: "CAT 7", value: "Up to 10 Gbps @ 600–1000 MHz" }
      ],
      variants: [
        { label: "Types", value: "CAT 5e, CAT 6, CAT 6A, CAT 7" },
        { label: "Configurations", value: "UTP, FTP, SFTP" },
        { label: "Applications", value: "LAN networks, industrial automation, CCTV systems, telecom infrastructure in oil & gas and mining facilities" }
      ]
    },
    {
      id: "mining",
      title: "Elastomeric Mining Cables",
      description: "Built for reliable power transmission and control in mining and industrial environments, our Elastomeric Mining Cables deliver high electrical performance, mechanical strength, and durability under harsh operating conditions. Available from 1.1 kV up to 15 kV in single-core, multicore, and control configurations up to 61 cores. Compliant with IS 14494, BS 6708, NEMA WC-58, IEC 60502-1 & 2, and IS 9968.",
      technical: [
        { label: "Construction", value: "Flexible conductor with extruded insulation, outer sheath and protective layers" },
        { label: "Voltage Rating", value: "1.0 kV to 15 kV" },
        { label: "Conductor", value: "Flexible Annealed Tinned Copper" },
        { label: "Insulation", value: "Elastomeric as per applicable standard" },
        { label: "Screening", value: "Non-Metallic — Extruded / Taped Semi-conducting Screen (MV cables) | Metallic — ATC Wires Braiding or Spirally applied" },
        { label: "Sheath", value: "Elastomeric as per applicable standard" },
        { label: "Operating Temperature", value: "Up to 90°C (normal operation)" },
        { label: "Special Features", value: "FR / FRLS / Halogen Free / Oil & Chemical Resistant / Fire Survival (FS)" }
      ],
      variants: [
        { label: "Voltage Options", value: "LV up to 1.1 kV | MV from 3.3 kV to 15 kV" },
        { label: "Core Configuration", value: "Single core, multicore, control cables up to 61 cores" },
        { label: "Applications", value: "Flexible reeling, festoon duty, high-temperature environments, heat, oil & flame resistant applications" }
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
              <SplitTitle title="Exploration" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Cables deployed in oil & gas and mining environments must endure extreme mechanical stress, chemical exposure, and hazardous conditions. We supply a comprehensive range of cables engineered specifically for exploration, extraction, and processing applications — built for reliability where it matters most.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-64 md:h-80 bg-brand-ash rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center bg-white border border-gray-100">
            <ImageCarousel 
              images={[
                "/Product Images/Industry Solution/Exploration - Oil & Gas, Mining/drilling-rig-close-up-construction-site-deep-hole-drilling-extraction-minerals-oil-gas-working-process.webp",
                "/Product Images/Industry Solution/Exploration - Oil & Gas, Mining/oil-pump-jack-oilfield-winter-sunset-sky-background-extraction-oil-petroleum-concept-toned.webp",
                "/Product Images/Industry Solution/Exploration - Oil & Gas, Mining/section-oil-field-where-oil-pumps-operate-silhouette-block-pumping-unit-against-dramatic-winter-sky.webp"
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
                {section.performance && <TechnicalTable title="Transmission Performance" data={section.performance} />}
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

export default ExplorationPage;
