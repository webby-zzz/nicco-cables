import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Shield, Settings, ChevronDown, ChevronUp, FileText } from 'lucide-react';

const products = [
  {
    id: 'overhead-conductors',
    title: 'Overhead Conductors',
    image: 'https://picsum.photos/seed/overhead/1200/800',
    description: 'Overhead Transmission Conductors (Bare Conductors) are designed for efficient and reliable transmission of electrical power over long distances in overhead line systems. Manufactured from high-quality aluminium or aluminium alloy with or without steel reinforcement, they provide excellent electrical performance and mechanical strength for diverse terrains and climatic conditions. The range includes AAC, AAAC, ACSR, ACSR/AW, and ACAR conductors, used in high-voltage transmission, sub-transmission, and distribution networks across urban, rural, and remote areas. These conductors offer high current carrying capacity, low electrical losses, strong corrosion resistance, and long-term reliability in demanding environments.',
    technicalDetails: [
      { label: 'Construction', value: 'Concentric stranded construction, Single or multi-layer stranding' },
      { label: 'Conductor Material', value: 'EC-grade aluminium / aluminium alloy, Galvanized steel / aluminium-clad steel (for reinforced conductors)' },
      { label: 'Voltage Range', value: 'From LV distribution to EHV transmission systems' },
      { label: 'Operating Temperature', value: 'Continuous operation up to 75°C / 90°C, Higher temperature ratings available on request' },
      { label: 'Standards / Specifications', value: 'IEC 61089, IS 398 (Part-2), BS EN 50182, ASTM B231 / B232 / B399 (on request)/ IS 398 (Part 4)/ SS-424-08-13/SS-424-08-14' }
    ]
  },
  {
    id: 'lt-power-control',
    title: 'LT Power & Control Cable',
    image: 'https://picsum.photos/seed/lt-cable/1200/800',
    description: 'LT Power & Control Cables are designed for efficient low-voltage power distribution and control applications in industrial, commercial, and infrastructure projects. These cables are manufactured with high-quality conductors and insulation materials, available up to 1.1 kV in XLPE or PVC insulation, with armoured/unarmoured constructions and FR, FRLS, or LSZH sheath options including fire-survival properties. They are widely used for power supply in factories, buildings, substations, and utilities, as well as for control, monitoring, and signalling circuits in automation systems and machinery. The cables offer excellent insulation strength, mechanical protection, fire safety, and reliable performance in demanding industrial environments.',
    technicalDetails: [
      { label: 'Construction', value: 'Multi-core stranded conductors with insulation, laid up with fillers and protective layers' },
      { label: 'Voltage Rating', value: 'Up to and including 1.1 kV (1100 V)' },
      { label: 'Conductor (Material & Type)', value: 'Aluminium or Copper, Solid, stranded & Flexible (Class 1/ Class 2 / Class 5)' },
      { label: 'Insulation', value: 'PVC /HR PVC/ XLPE /PE' },
      { label: 'Inner Sheath', value: 'PVC / FR PVC / FRLS PVC / LSZH / HDPE / PE' },
      { label: 'Armouring', value: 'Galvanized steel wire / strip armour (for armoured cables), Aluminium Wire & Strip Armour (Applicable for single core armoured)' },
      { label: 'Outer Sheath', value: 'PVC / FR PVC / FRLS / LSZH / HDPE / PE' },
      { label: 'Operating Temperature Range', value: 'iv) PVC and HR PVC insulated: up to +70°C and +85°C respectively\nv) XLPE insulated: up to +90°C\nvi) Short circuit temperature: up to +160°C (PVC), +250°C (XLPE)' },
      { label: 'Standards / Specifications', value: 'IS 1554 (Part 1), IS 7098 (Part 1), IEC 60502-1, IEC 60227 / 60228 (as applicable), BS/EN and other international standards as applicable' },
      { label: 'Special Features', value: 'Flame retardant /Fire Resistant / FRLS / LSZH options, Oil and moisture resistant, Suitable for indoor and outdoor installations, good flexibility for easy installation' }
    ]
  },
  {
    id: 'ht-cables',
    title: 'HT Cables up to 11kV',
    image: 'https://picsum.photos/seed/ht-cable/1200/800',
    description: 'HT Power Cables up to 11 kV are designed for reliable transmission and distribution of electrical power in medium voltage networks ranging from 3.3 kV to 11 kV earthed systems. Manufactured using high-quality materials and advanced processes, these cables ensure electrical safety, durability, and consistent performance in industrial and utility applications. The range includes armoured and unarmoured variants with FR, FRLS, and LSZH sheath options, suitable for underground, duct, trench, and tray installations. They provide excellent insulation strength, resistance to moisture and mechanical stress, and long service life in demanding environments.',
    technicalDetails: [
      { label: 'Construction', value: 'Single core or three core, stranded compacted circular conductor with Conductor screen, insulation, insulation screen, metallic screen, and protective layers' },
      { label: 'Voltage Rating', value: 'Earthed systems: 1.9/3.3 kV, 3.8/6.6 kV, 6.35/11 kV\nUnearthed system: 3.3/3.3 kV and 6.6/6.6 kV' },
      { label: 'Conductor (Material & Type)', value: 'Aluminium or Copper Stranded Compacted Circular' },
      { label: 'Insulation', value: 'XLPE (Cross-linked Polyethylene)' },
      { label: 'Screening (if any)', value: 'Conductor screen and insulation screen (taped/extruded as per Standard)' },
      { label: 'Metallic Screen', value: 'Copper tape / copper wire screen (as per standard)' },
      { label: 'Inner Sheath', value: 'PVC / FR PVC /PE /HDPE' },
      { label: 'Armouring', value: 'Galvanized steel wire / strip armour (for armoured cables), Aluminium Wire & Strip Armour (Applicable for single core armoured)' },
      { label: 'Outer Sheath', value: 'PVC / FR PVC / FRLS / LSZH (as per requirement)' },
      { label: 'Operating Temperature Range', value: 'Conductor temperature: up to +90°C\nShort circuit temperature: up to +250°C' },
      { label: 'Standards / Specifications', value: 'IS 7098 (Part 2), IEC 60502-2, OEM / Utility specifications (on request), BS/EN and other international standards as applicable.' }
    ]
  }
];

const ProductSection: React.FC<{ product: typeof products[0], index: number }> = ({ product, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.56, ease: "easeOut" }}
      className="mb-24 last:mb-0"
    >
      <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-start`}>
        {/* Image Side */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-100" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-black text-white tracking-tighter">{product.title}</h3>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center pt-2 lg:pt-4">
          <div className="flex items-center gap-3 text-brand-secondary mb-4">
            <div className="h-[1px] w-8 bg-brand-secondary" />
            <span className="text-xs font-black uppercase tracking-widest">PRODUCT</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight mb-4">
            {product.title}
          </h2>
          
          <p className="text-base text-black leading-relaxed font-medium mb-6">
            {product.description}
          </p>

          {/* Collapsible Technical Details */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full px-6 py-5 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-brand-secondary" />
                <span className="text-sm font-black text-brand-dark uppercase tracking-widest">Technical Details</span>
              </div>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-black" />
              ) : (
                <ChevronDown className="w-5 h-5 text-black" />
              )}
            </button>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 py-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 gap-4">
                      {product.technicalDetails.map((detail, i) => (
                        <div key={i} className="flex flex-col md:flex-row md:gap-4 py-3 border-b border-gray-100 last:border-0 last:pb-0">
                          <span className="text-xs font-bold text-brand-secondary uppercase tracking-wider md:w-1/3 shrink-0 mb-1 md:mb-0">
                            {detail.label}
                          </span>
                          <span className="text-sm font-medium text-brand-dark whitespace-pre-line">
                            {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TransmissionDistributionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-ash min-h-screen pt-24 md:pt-32">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.56, ease: "easeOut" }}
          className="relative flex flex-col lg:flex-row overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] shadow-2xl border border-gray-100"
        >
          {/* Left Side - Visual */}
          <div className="lg:w-1/2 relative h-[40vh] lg:h-auto bg-brand-dark">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.84, ease: "easeOut", delay: 0.2 }}
              className="absolute inset-0"
            >
              <img 
                src="https://picsum.photos/seed/transmission/1200/1600" 
                alt="Transmission and Distribution" 
                className="w-full h-full object-cover opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/80 lg:hidden" />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.56, ease: "easeOut" }}
              className="absolute bottom-8 left-8 z-20 hidden lg:block"
            >
              <div className="glass-panel p-6 rounded-[1.5rem] border-white/10 bg-white/5 backdrop-blur-xl text-white max-w-xs shadow-2xl">
                <Zap className="w-6 h-6 text-brand-secondary mb-3" />
                <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-1">Industry Solution</p>
                <h4 className="text-2xl font-black tracking-tighter">Powering Networks</h4>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 flex items-center px-6 md:px-10 lg:px-12 py-10 lg:py-12 bg-brand-ash relative">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.56, ease: "easeOut" }}
                className="flex items-center gap-3 text-brand-secondary mb-4"
              >
                <div className="h-[1px] w-8 bg-brand-secondary" />
                <span className="text-xs font-black uppercase tracking-widest">INDUSTRY SOLUTIONS</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.56, ease: "easeOut" }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-brand-dark tracking-tighter leading-tight mb-4"
              >
                Transmission and <span className="text-brand-secondary">Distribution</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.56, ease: "easeOut" }}
                className="space-y-4"
              >
                <p className="text-base text-black leading-relaxed font-medium">
                  Comprehensive cable solutions designed for efficient and reliable transmission of electrical power across diverse terrains and demanding environments. From high-voltage transmission to low-voltage distribution, our products ensure the pulse of the nation's core infrastructure remains uninterrupted.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h3 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-3">OUR PRODUCTS</h3>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter">Solutions for Transmission & Distribution</h2>
          </div>

          <div className="space-y-8">
            {products.map((product, index) => (
              <ProductSection key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransmissionDistributionPage;
