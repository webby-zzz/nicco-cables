
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, Shield, Settings, Ruler, Thermometer, CheckCircle2, ArrowRight, FileText } from 'lucide-react';

const LTPowerControlPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 md:pt-40">
      {/* Hero Section - Unique Split Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.56, ease: "easeOut" }}
          className="relative flex flex-col lg:flex-row overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-2xl border border-gray-100"
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
                src="https://picsum.photos/seed/cable-tech/1200/1600" 
                alt="LT Power & Control Cables" 
                className="w-full h-full object-cover opacity-60"
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
              className="absolute bottom-12 left-12 z-20 hidden lg:block"
            >
              <div className="glass-panel p-8 rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl text-white max-w-xs shadow-2xl">
                <Zap className="w-8 h-8 text-brand-secondary mb-4" />
                <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-2">Voltage Rating</p>
                <h4 className="text-3xl font-black tracking-tighter">Up to 1.1 kV</h4>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 flex items-center px-8 md:px-12 lg:px-16 py-12 lg:py-16 bg-white relative">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.56, ease: "easeOut" }}
                className="flex items-center gap-3 text-brand-secondary mb-6"
              >
                <div className="h-[1px] w-12 bg-brand-secondary" />
                <span className="text-xs font-black uppercase tracking-[0.4em]">POWER SOLUTIONS</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.56, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-brand-dark tracking-tighter leading-none mb-6"
              >
                LT Power & <span className="text-brand-secondary">Control</span> Cables
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.56, ease: "easeOut" }}
                className="space-y-6"
              >
                <p className="text-lg text-brand-muted leading-relaxed font-medium">
                  Our LT Power and Control Cables are designed for efficient power distribution and control applications in industrial, commercial, and infrastructure projects. Manufactured using high-quality conductors and insulation materials, these cables ensure safe operation, mechanical robustness, and long service life under varied operating conditions.
                </p>
                
                <div className="p-6 rounded-[1.5rem] bg-gray-50 border border-gray-100 group hover:bg-brand-dark transition-all duration-300 shadow-sm hover:shadow-xl">
                  <p className="text-[10px] font-black text-brand-secondary uppercase tracking-widest mb-2 group-hover:text-brand-secondary/80 transition-colors">Product Range</p>
                  <p className="text-base font-bold text-brand-dark group-hover:text-white leading-snug transition-colors">
                    LT Power & Control Cables up to 1.1 kV (insulation Type XLPE & PVC), Armoured and Unarmoured variants, FR / FRLS / LSZH sheath options with Fire survival properties.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Applications & Reliability - Bento Style */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Usage Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-12 rounded-[3rem] bg-white border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-3xl bg-brand-secondary/10 flex items-center justify-center mb-8">
                <Settings className="w-8 h-8 text-brand-secondary" />
              </div>
              <h3 className="text-xs font-bold text-brand-secondary uppercase tracking-[0.4em] mb-6">What is this cable used for?</h3>
              <p className="text-2xl font-black text-brand-dark tracking-tighter leading-tight mb-8">
                LT Power Cables are used for low voltage power distribution in factories, buildings, substations, utilities, and infrastructure projects. LT Control Cables are used for control, monitoring, and signalling circuits in automation systems, panels, machinery, and process control applications.
              </p>
            </motion.div>

            {/* Reliability Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-12 rounded-[3rem] bg-brand-dark border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 text-white"
            >
              <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center mb-8">
                <Shield className="w-8 h-8 text-brand-secondary" />
              </div>
              <h3 className="text-xs font-bold text-brand-secondary uppercase tracking-[0.4em] mb-6">What makes it reliable or special?</h3>
              <ul className="space-y-4">
                {[
                  "Designed for continuous intendent Voltage operation",
                  "Excellent insulation resistance and dielectric strength",
                  "High mechanical protection with armouring options",
                  "Fire-safe variants available",
                  "Reliable performance in industrial environments"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-bold tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Technical Details - Blueprint Style */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h3 className="text-xs font-bold text-brand-secondary uppercase tracking-[0.4em] mb-4">SPECIFICATIONS</h3>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter">Technical Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
            
            {/* Construction */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
              <FileText className="w-6 h-6 text-brand-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-3">Construction</h4>
              <p className="text-lg font-bold text-brand-dark tracking-tight leading-snug">
                Multi-core stranded conductors with insulation, laid up with fillers and protective layers
              </p>
            </div>

            {/* Voltage Rating */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
              <Zap className="w-6 h-6 text-brand-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-3">Voltage Rating</h4>
              <p className="text-lg font-bold text-brand-dark tracking-tight leading-snug">
                Up to and including 1.1 kV (1100 V)
              </p>
            </div>

            {/* Conductor */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
              <Settings className="w-6 h-6 text-brand-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-3">Conductor (Material & Type)</h4>
              <p className="text-lg font-bold text-brand-dark tracking-tight leading-snug">
                Aluminium or Copper, Solid, stranded & Flexible (Class 1/ Class 2 / Class 5)
              </p>
            </div>

            {/* Insulation */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
              <Shield className="w-6 h-6 text-brand-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-3">Insulation</h4>
              <p className="text-lg font-bold text-brand-dark tracking-tight leading-snug">
                PVC /HR PVC/ XLPE /PE
              </p>
            </div>

            {/* Inner Sheath */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
              <Shield className="w-6 h-6 text-brand-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-3">Inner Sheath</h4>
              <p className="text-lg font-bold text-brand-dark tracking-tight leading-snug">
                PVC / FR PVC / FRLS PVC / LSZH / HDPE / PE
              </p>
            </div>

            {/* Armouring */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
              <Shield className="w-6 h-6 text-brand-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-3">Armouring</h4>
              <p className="text-lg font-bold text-brand-dark tracking-tight leading-snug">
                Galvanized steel wire / strip armour (for armoured cables), Aluminium Wire & Strip Armour (Applicable for single core armoured)
              </p>
            </div>

            {/* Outer Sheath */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
              <Shield className="w-6 h-6 text-brand-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-3">Outer Sheath</h4>
              <p className="text-lg font-bold text-brand-dark tracking-tight leading-snug">
                PVC / FR PVC / FRLS / LSZH / HDPE / PE
              </p>
            </div>

            {/* Operating Temp */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group lg:col-span-2">
              <Thermometer className="w-6 h-6 text-brand-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-3">Operating Temperature Range</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-bold text-brand-muted mb-1">PVC/HR PVC</p>
                  <p className="text-lg font-bold text-brand-dark">up to +70°C / +85°C</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-muted mb-1">XLPE</p>
                  <p className="text-lg font-bold text-brand-dark">up to +90°C</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-muted mb-1">Short Circuit</p>
                  <p className="text-lg font-bold text-brand-dark">+160°C (PVC) / +250°C (XLPE)</p>
                </div>
              </div>
            </div>

            {/* Standards */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group lg:col-span-2">
              <CheckCircle2 className="w-6 h-6 text-brand-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-3">Standards / Specifications</h4>
              <p className="text-lg font-bold text-brand-dark tracking-tight leading-snug">
                IS 1554 (Part 1), IS 7098 (Part 1), IEC 60502-1, IEC 60227 / 60228 (as applicable), BS/EN and other international standards as applicable.
              </p>
            </div>

            {/* Special Features */}
            <div className="bg-white p-10 hover:bg-gray-50 transition-colors group">
              <Zap className="w-6 h-6 text-brand-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-3">Special Features</h4>
              <p className="text-lg font-bold text-brand-dark tracking-tight leading-snug">
                Flame retardant /Fire Resistant / FRLS / LSZH options, Oil and moisture resistant, Suitable for indoor and outdoor installations, good flexibility for easy installation
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sizes & Variants - Clean List */}
      <section className="py-24 md:py-32 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/5 -skew-x-12 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <h3 className="text-xs font-bold text-brand-secondary uppercase tracking-[0.4em] mb-8">VARIANTS</h3>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-10">Sizes & <br />Variants</h2>
              <p className="text-xl text-white/50 font-medium leading-relaxed">
                We offer a wide range of configurations to meet specific project requirements, ensuring optimal performance across all applications.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6">
                {[
                  { label: "Number of cores", value: "Power Core up to 5C with circular/segmental conductors as applicable, Control core from 2 core to 61 cores" },
                  { label: "Size range (Sq.mm)", value: "Single Core up to 1000 Sq.mm & multi core up to 630 sq.mm (power cables), 0.5 to 2.5 sq.mm (control cables)" },
                  { label: "Voltage options", value: "Up to and including 1.1 kV" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                  >
                    <p className="text-[10px] font-black text-brand-secondary uppercase tracking-widest mb-3">{item.label}</p>
                    <p className="text-xl font-bold tracking-tight group-hover:text-brand-secondary transition-colors">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-brand-secondary rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-brand-secondary/20">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-4">Ready to discuss your project?</h2>
              <p className="text-white/80 font-bold text-lg">Get technical guidance and a custom quote for your cable requirements.</p>
            </div>
            <Link 
              to="/contact"
              className="bg-brand-dark text-white px-10 py-6 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-4 shadow-xl hover:bg-white hover:text-brand-dark transition-all duration-300"
            >
              CONTACT OUR EXPERTS <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LTPowerControlPage;
