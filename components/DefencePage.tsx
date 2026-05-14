import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import SplitTitle from './SplitTitle';
import ImageCarousel from './ImageCarousel';

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

const DefencePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "lfh",
      title: "Special Application (LFH) Cables & Equipment Wires",
      description: "Designed with halogen-free, fire-retardant insulation and sheath materials, our LFH (Limited Fire Hazard) Cables produce low smoke and minimal toxic gases during fire conditions. Available in power, control, instrumentation, signal, and communication types — shielded / unshielded, single or multi-core, armoured / unarmoured. Primarily used in defence applications including radar and missile launching systems. Compliant with Def Stan 61-12 (Part 18 & Part 31).",
      technical: [
        { label: "Construction", value: "Multi-core, multi-pair, composite cables — unscreened, individually screened & collectively screened" },
        { label: "Voltage Rating", value: "600V" },
        { label: "Conductor", value: "Circular electroplated & annealed tinned copper" },
        { label: "Insulation", value: "Special halogen free, flame retardant, low smoke, low toxicity polymer — E-beam cured" },
        { label: "Screening", value: "Annealed tinned copper braid" },
        { label: "Outer Sheath", value: "Special halogen free, flame retardant, low smoke, low toxicity polymer — E-beam cured" },
        { label: "Operating Temperature", value: "–50°C to +120°C" },
        { label: "Standards", value: "Def Stan 61-12 (Part 18 & Part 31)" }
      ],
      variants: [
        { label: "Voltage Options", value: "600V" },
        { label: "Types", value: "Power, control, instrumentation, signal and communication cables" },
        { label: "Configurations", value: "Shielded / unshielded, single core / multi-core, armoured / unarmoured" },
        { label: "Applications", value: "Radar systems, missile launching platforms, submarines, warships, defence lighting and communication circuits" }
      ]
    },
    {
      id: "pt",
      title: "Pressure Tight (PT) Cables / RF Cables",
      description: "Engineered to withstand radial and axial pressures from 10 to 72 bar while maintaining full sealing integrity, our PT / RF Cables deliver halogen-free, flame-retardant, and fire-survival performance in critical defence environments. Available in PT power cables (PT-10, PT-45), RF and signal variants — shielded / unshielded, armoured / unarmoured, single and multi-core. Compliant with Def Stan 02-512, MIL-DTL-17H, and customer specifications.",
      technical: [
        { label: "Construction", value: "Single core, multi-core, multi-pair — unscreened, individually screened & collectively screened" },
        { label: "Voltage Grade", value: "38V AC / 250V / 600V / 660V / 690V / 1000V" },
        { label: "Conductor", value: "Circular Electrolytic Bare / Tinned / Silver-Plated Copper" },
        { label: "Insulation", value: "Special halogen free, flame retardant, low smoke, low toxicity polymer — E-beam cured" },
        { label: "Screening", value: "Annealed Bare / Tinned / Silver-Plated Copper" },
        { label: "Outer Sheath", value: "Special halogen free, flame retardant, low smoke, low toxicity polymer — E-beam cured" },
        { label: "Water Blocking", value: "Compound / Tape — to withstand pressure requirements" },
        { label: "Operating Temperature", value: "–30°C to +120°C" },
        { label: "Standards", value: "Def Stan 02-512, MIL-DTL-17H, and customer specifications" }
      ],
      variants: [
        { label: "Voltage Options", value: "38V AC up to 1000V" },
        { label: "Types", value: "PT Power Cables (PT-10, PT-45), RF and signal cables" },
        { label: "Configurations", value: "Shielded / unshielded, armoured / unarmoured, single and multi-core" },
        { label: "Applications", value: "Submarines, warships, offshore platforms, radar communication, defence and marine systems" }
      ]
    },
    {
      id: "coaxial",
      title: "Co-Axial Cables (RG Series)",
      description: "Designed for high-frequency signal transmission with minimal signal loss and excellent shielding, our RF / Coaxial Cables ensure stable impedance and strong EMI / RFI resistance in defence and aerospace applications. Available in low, medium, and high-frequency variants, flexible and semi-rigid, armoured / unarmoured, and LSZH options. Compliant with Def Stan 02-512 (Part 5), MIL-DTL-17H, and customer specifications.",
      technical: [
        { label: "Construction", value: "Single core screened cables — primary construction" },
        { label: "Conductor", value: "ABC / ATC / SPC / CCS (Copper Clad Steel) and special conductors" },
        { label: "Insulation", value: "Polyethylene / XLPE / Fluoropolymer" },
        { label: "Outer Conductor", value: "Aluminium Mylar Tape / Annealed Tinned / Bare Copper Braid" },
        { label: "Outer Sheath", value: "Halogen free, flame retardant, low smoke, low toxicity — E-beam cured" },
        { label: "Operating Temperature", value: "–30°C to +120°C" },
        { label: "Standards", value: "Def Stan 02-512 (Part 5), MIL-DTL-17H, and customer specifications" }
      ],
      variants: [
        { label: "Cable Types", value: "RG 11, RG 58, RG 59, RG 188, RG 213, RG 214" },
        { label: "Applications", value: "Defence radar, missile systems, submarines, warships, aerospace and RF communication" }
      ]
    },
    {
      id: "ethernet",
      title: "Ethernet / LAN Cables",
      description: "Engineered for high-speed and reliable data transmission in defence communication networks, our Ethernet / LAN Cables deliver stable performance, low signal loss, and strong EMI resistance. Available in CAT 5e, CAT 6, CAT 6A, and CAT 7 variants in UTP, FTP, and SFTP configurations. Compliant with ANSI/TIA-568, ISO/IEC 11801, IEC 61156, and IEEE 802.3.",
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
        { label: "Applications", value: "Defence communication networks, radar systems, onboard data networks, submarines and warships" }
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
              <SplitTitle title="Defence" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Cables deployed in defence applications demand the highest standards of fire safety, mechanical durability, and electrical reliability under extreme conditions. We supply a comprehensive range of specialised cables engineered for submarines, warships, tanks, radar systems, and missile launching platforms.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-64 md:h-80 bg-brand-ash rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center bg-white border border-gray-100">
            <ImageCarousel 
              images={[
                "/Product Images/Industry Solution/Defence (Submarine, Warships & Tanks)/flotilla-russian-warships-sailing-toward-military-target-armed-warships-ready-attack-enemy.webp",
                "/Product Images/Industry Solution/Defence (Submarine, Warships & Tanks)/life-style.webp",
                "/Product Images/Industry Solution/Defence (Submarine, Warships & Tanks)/russian-warship-armed-with-armament-sails-into-sea-toward-military-target-attack-destroy.webp"
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

export default DefencePage;
