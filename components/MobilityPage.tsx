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

const MobilityPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "marine",
      title: "Shipbuilding & Marine Cables",
      description: "Engineered for reliable power transmission, control, communication, and signal integrity in harsh marine and offshore environments, our Shipbuilding & Marine Cables withstand moisture, oil, vibration, salt spray, fire risk, and mechanical stress. Suitable for ships, submarines, and offshore platforms available in power, instrumentation, RF, Ethernet, degaussing, EMC/VFD, silicone, shore supply, and PTFE/ETFE/FEP variants. Compliant with IEC 60092, BS 6883, BS 7917, VG 95218, and GOST standards.",
      technical: [
        { label: "Construction", value: "Single core / multi-core stranded conductors with marine-grade insulation and protective layers" },
        { label: "Voltage Rating", value: "Up to 1.8 kV" },
        { label: "Conductor", value: "Copper / Tinned Copper — flexible stranded" },
        { label: "Insulation", value: "XLPE / EPR / Silicone Rubber / PE (as per cable type)" },
        { label: "Screening", value: "Copper Braid / Tinned Copper Braid / Aluminium-Mylar Tape / Copper Mylar Tape (for EMC, VFD, RF & data cables)" },
        { label: "Inner Sheath", value: "LSZH / FR Compound" },
        { label: "Armouring", value: "Galvanized Steel Wire / Tinned Copper Wire Armour / Braid (as required)" },
        { label: "Outer Sheath", value: "LSZH / FR / Oil & mud resistant compound" },
        { label: "Operating Temperature", value: "Standard marine cables: –25°C to +90°C | Silicone cables: up to +180°C" },
        { label: "Standards", value: "IEC 60092-350 / 353 / 376, BS 6883 & BS 7917, VG 95218, GOST 7866 / 11326 / 17301, NES / DEF STAN 526 & 527, EED-50-12, EED-50-13, EED-57-03, EED-57-04, DMDE Standard" },
        { label: "Special Features", value: "Flame retardant, fire resistant, LSZH, EMC / EMI shielding for VFD & sensitive electronics, oil, fuel, salt water & chemical resistant, suitable for fixed and flexible shipboard installations" }
      ],
      variants: [
        { label: "Voltage Options", value: "Up to 1.8 kV" },
        { label: "Types", value: "Power, instrumentation, RF, Ethernet/data, degaussing, EMC/VFD, silicone, shore supply, PTFE/ETFE/FEP, and customised marine solutions" },
        { label: "Applications", value: "Ships, submarines, offshore platforms, marine power, control and communication systems" }
      ]
    },
    {
      id: "automotive",
      title: "Automotive Cables",
      description: "Engineered for reliable power distribution, control, and signal transmission in modern vehicles, our Automotive Cables operate under high temperature, vibration, oil exposure, and mechanical stress. Suitable for ICE, hybrid, and electric vehicles covering vehicle wiring harnesses, power distribution, sensors, infotainment, safety systems, and EV charging applications. Compliant with ISO, JASO, SAE, and IS standards.",
      technical: [
        { label: "Construction", value: "Single core / multi-core, flexible multi-stranded conductor" },
        { label: "Voltage Rating", value: "60V and 600V (single core) | 600V AC / 900V DC | 1000V AC / 1500V DC" },
        { label: "Conductor", value: "Flexible stranded Electrolytic Copper / Tinned Copper (CuSn) / Silver Plated Copper (CuAg) / Nickel Plated Copper (CuNi)" },
        { label: "Insulation", value: "PVC / Silicone Rubber / Cross-Linked Polyolefin (XLPO / XLPE) / PTFE / ETFE" },
        { label: "Screening", value: "Copper Braid / Aluminium Foil Shield (shielded variants)" },
        { label: "Outer Sheath", value: "PVC / FEP / TPE-E (shielded cables) | Not applicable for single-wall types" },
        { label: "Operating Temperature", value: "–40°C to +85°C / +105°C / +125°C / +150°C / +180°C / +200°C / +250°C" },
        { label: "Standards", value: "ISO 6722, ISO 19642, JASO D 611, JASO D 618, SAE J1128, SAE J1127, IS 2465" },
        { label: "Special Features", value: "Flame retardant, halogen free (XLPO & silicone variants), oil, fuel & chemical resistant, abrasion resistant, EMI / EMC protection (shielded cables)" }
      ],
      variants: [
        { label: "Voltage Options", value: "60V / 600V / 1000V AC / 1500V DC" },
        { label: "Types", value: "PVC, XLPE / XLPO, Silicone, ETFE, PTFE insulated — single core and multi-core" },
        { label: "Applications", value: "Vehicle wiring harnesses, power distribution, sensors, infotainment, safety systems, EV charging" }
      ]
    },
    {
      id: "coaxial",
      title: "Co-Axial Cables (RG Series)",
      description: "Designed for high-frequency signal transmission with minimal signal loss and excellent shielding, our RF / Coaxial Cables ensure stable impedance and strong EMI / RFI resistance. Available in low, medium, and high-frequency variants — flexible and semi-rigid, armoured / unarmoured, and LSZH options. Widely used in telecom, broadcasting, CCTV, RF communication, defence, aerospace, and industrial electronics. Compliant with Def Stan 02-512 (Part 5), MIL-DTL-17H, and customer specifications.",
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
        { label: "Applications", value: "Telecom networks, broadcasting, CCTV, RF communication, defence, aerospace, industrial electronics" }
      ]
    },
    {
      id: "hybrid",
      title: "Hybrid Composite Cables",
      description: "Combining power, control, signal, and data transmission within a single construction, our Hybrid Composite Cables reduce cabling complexity and installation cost for modern infrastructure. Available in power + control, power + signal + data, and copper + optical fibre configurations shielded / unshielded and armoured / unarmoured. Widely used in telecom towers, CCTV systems, railways, EV charging infrastructure, and smart city applications.",
      technical: [
        { label: "Construction", value: "Integrated cable with individually insulated power, control, signal conductors and/or optical fibres" },
        { label: "Conductor", value: "Annealed Copper / Tinned Copper — stranded (Class 2 / Class 5)" },
        { label: "Power Element Voltage Rating", value: "Up to 1.1 kV (higher on request)" },
        { label: "Data Element", value: "Twisted Pairs / Coaxial / Optical Fibre (SM / MM)" },
        { label: "Insulation", value: "Elastomeric / Thermoplastic / Plastic / Polymeric" },
        { label: "Screening", value: "Individual and/or overall Copper Braid / Aluminium-Mylar Tape" },
        { label: "Armouring", value: "Steel Wire / Steel Strip / Aluminium Wire (optional)" },
        { label: "Outer Sheath", value: "PVC / FR PVC / FRLS / LSZH / PE (outdoor grade)" },
        { label: "Operating Temperature", value: "–40°C to +90°C (typical)" }
      ],
      variants: [
        { label: "Voltage Options", value: "Up to 1.1 kV (higher on request)" },
        { label: "Types", value: "Power + control, power + signal + data, copper + optical fibre hybrid" },
        { label: "Configurations", value: "Shielded / unshielded, armoured / unarmoured" },
        { label: "Applications", value: "Telecom towers, CCTV, railways, EV charging infrastructure, smart city applications" }
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
              <SplitTitle title="Mobility" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              A comprehensive ecosystem of high-performance cabling solutions designed for the global mobility sector. From deep-sea marine vessels to high-speed rail and next-generation automotive platforms, our cables ensure reliable power and signal integrity in motion.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-64 md:h-80 bg-brand-ash rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center bg-white border border-gray-100">
            <ImageCarousel 
              images={[
                "/Product Images/Industry Solution/Mobility (Rolling Stock, Marine, Automotive, Aerospace)/aerial-view-docked-yachts-port-olimpic-barcelona.webp",
                "/Product Images/Industry Solution/Mobility (Rolling Stock, Marine, Automotive, Aerospace)/airport-self-propelled-conveyor-belt-loaders-evening.webp",
                "/Product Images/Industry Solution/Mobility (Rolling Stock, Marine, Automotive, Aerospace)/close-up-cargo-airplane-engine-main-landing-gear-fuselage.webp"
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

        {/* Custom Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-ash/30 rounded-[2rem] p-8 md:p-12 mb-12 border border-brand-ash/50"
        >
          <p className="text-sm text-brand-dark font-bold italic">
            Note: Custom-designed constructions available as per application requirement. Suitable for harsh industrial, outdoor, and mobile installations. Reduces overall system weight and cabling footprint. Available with fire-safe and LSZH constructions.
          </p>
        </motion.div>

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
              Connect with Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default MobilityPage;
