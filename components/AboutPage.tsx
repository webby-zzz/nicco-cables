
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Settings, ShieldCheck, Lightbulb, Flag, Handshake, Target, Eye } from 'lucide-react';

const coreValues = [
  {
    icon: <Settings className="w-8 h-8 text-brand-secondary" />,
    title: "Engineering Excellence",
    description: "We uphold the highest standards of design, manufacturing, and testing to deliver products that perform reliably in demanding environments."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-secondary" />,
    title: "Quality Without Compromise",
    description: "Every cable manufactured at Nicco undergoes stringent testing and quality assurance to ensure consistent performance and durability."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-brand-secondary" />,
    title: "Innovation & Technology",
    description: "Continuous investment in R&D, advanced materials, and modern manufacturing enables us to stay ahead in cable technology."
  },
  {
    icon: <Flag className="w-8 h-8 text-brand-secondary" />,
    title: "Nation Building",
    description: "We are committed to supporting India’s infrastructure and strategic sectors through solutions that align with the vision of Make in India and Viksit Bharat."
  },
  {
    icon: <Handshake className="w-8 h-8 text-brand-secondary" />,
    title: "Integrity & Trust",
    description: "Our long-standing relationships with customers are built on transparency, reliability, and consistent delivery of value."
  }
];

const accreditationLogos = [
  { url: "/certifications/89281811cd50e63a99bb0a7e29ab271b.webp", label: "IRS" },
  { url: "/certifications/UL_logo.svg.webp", label: "UL" },
  { url: "/certifications/american-bureau-of-shipping-logo-brandlogos.net_nef0sjdw1.webp", label: "ABS" },
  { url: "/certifications/ISO_9001-2015.svg.webp", label: "ISO 9001" },
  { url: "/certifications/ISO_english_logo.svg.webp", label: "ISO" },
  { url: "/certifications/images.webp", label: "CPRI" },
  { url: "/certifications/Bureau_of_Indian_Standards_Logo.svg.webp", label: "BIS" },
  { url: "/certifications/NABL_Official_LOGO_Registered.webp", label: "NABL" },
  { url: "/certifications/International_Electrotechnical_Commission_Logo.svg.webp", label: "IEC" },
  { url: "/certifications/Post-1.webp", label: "DNV" },
  { url: "/certifications/Conformité_Européenne_(logo).webp", label: "CE" },
  { url: "/certifications/ARAI-Logo-Hindi-.webp", label: "ARAI" },
  { url: "/certifications/images_1.webp", label: "RDSO" },
  { url: "/certifications/iris-logo-1.webp", label: "IRIS" },
  { url: "/certifications/images (1).webp", label: "DDP" }
];

const timelineData = [
  {
    title: "Engineering Excellence",
    description: "Designing high-performance cable solutions for critical infrastructure and strategic industries.",
    icon: <Flag className="w-5 h-5" />,
    type: "Mission"
  },
  {
    title: "Quality Assurance",
    description: "Consistently delivering superior quality, safety, and reliability across our entire product range.",
    icon: <ShieldCheck className="w-5 h-5" />,
    type: "Mission"
  },
  {
    title: "National Growth",
    description: "Contributing meaningfully to India’s industrial growth and global competitiveness through responsible manufacturing.",
    icon: <Handshake className="w-5 h-5" />,
    type: "Mission"
  },
  {
    title: "Global Innovation",
    description: "To be recognized as a global leader in advanced cable technologies and world-class connectivity.",
    icon: <Lightbulb className="w-5 h-5" />,
    type: "Vision"
  },
  {
    title: "Resilient Future",
    description: "Powering industries and strengthening infrastructure to support a modern, resilient economy.",
    icon: <Settings className="w-5 h-5" />,
    type: "Vision"
  }
];

const AboutPage: React.FC = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const facilityImages = [
    "/plants and machinery images/PXL_20260307_122257277.MP.webp",
    "/plants and machinery images/PXL_20260307_122714674.MP.webp",
    "/plants and machinery images/PXL_20260307_123509679.MP.webp",
    "/plants and machinery images/PXL_20260307_124436883.MP.webp",
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % facilityImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [facilityImages.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Progress for Mission & Vision timeline
  const lineScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-dark" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56 }}
            className="w-16 h-1 bg-brand-secondary mx-auto mb-8"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-6"
          >
            Our{"\u00A0"}<span className="text-brand-secondary">Legacy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.56 }}
            className="text-white text-xs font-black uppercase tracking-widest"
          >
            ENGINEERING EXCELLENCE SINCE 1944
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 xl:px-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-5">
              <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-4 block">ABOUT US</h2>
              <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight mb-6">
                8 Decades of <span className="text-brand-secondary">Trusted{"\u00A0"}Innovation.</span>
              </h3>
              <div className="relative rounded-[1.5rem] overflow-hidden aspect-square shadow-2xl group">
                <img 
                  src="/brand identity/about us page.webp" 
                  alt="Nicco About Us" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-secondary/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-16 space-y-6">
              <p className="text-black leading-relaxed font-normal text-base">
                For over <strong className="font-bold text-brand-secondary">8 decades</strong>, <strong className="font-bold text-brand-dark">Nicco Cables</strong> has been a trusted name in India’s cable manufacturing industry, delivering <strong className="font-bold text-brand-dark">high-performance connectivity solutions</strong> for critical infrastructure and strategic sectors.
              </p>
              <div className="h-[1px] w-24 bg-brand-secondary" />
              <div className="space-y-6 text-black leading-relaxed font-light text-base">
                <p>
                  Established with a vision to support the nation’s growing industrial and power needs, Nicco has evolved into a <strong className="font-bold text-brand-dark">technology-driven manufacturer</strong> of advanced electrical cables and specialized connectivity systems. Today, the company engineers a comprehensive portfolio including <strong className="font-bold text-brand-dark">HT cables up to 33kV</strong>, LT power and control cables, instrumentation cables, <strong className="font-bold text-brand-dark">fire survival cables</strong>, electron-beam irradiated cables, and specialized elastomeric and silicon cable solutions.
                </p>
                <p>
                  Our manufacturing capabilities are supported by <strong className="font-bold text-brand-dark">cutting-edge plant and machinery</strong>, advanced compounding technology, and a fully equipped <strong className="font-bold text-brand-dark">in-house R&D and testing ecosystem</strong>. The company was also among the first in India’s private sector to introduce <strong className="font-bold text-brand-dark">Electron Beam Irradiation technology</strong>, enabling superior cable performance in high-demand industrial applications.
                </p>
                <p>
                  With solutions designed for <strong className="font-bold text-brand-dark">defence, railways, metros, power utilities, renewable energy, mining, and large-scale infrastructure</strong>, Nicco continues to play a vital role in powering India’s progress while expanding its reach across global markets.
                </p>
                <p className="font-bold text-brand-dark text-base">
                  Driven by <strong className="font-bold text-brand-secondary">engineering excellence</strong>, stringent quality standards, and a commitment to innovation, Nicco remains dedicated to delivering safe, reliable, and future-ready connectivity solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={containerRef} className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 xl:px-32">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-4 block">PURPOSE</h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter leading-tight">
              Mission & <span className="text-brand-secondary">Vision</span>
            </h3>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Central Line Background */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-100" />
            
            {/* Animated Filling Line */}
            <motion.div 
              style={{ scaleY: lineScale, transformOrigin: "top" }}
              className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-brand-secondary z-10"
            />

            <div className="space-y-12 md:space-y-16 relative z-20">
              {timelineData.map((item, idx) => (
                <div key={idx} className={`flex items-start md:items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} flex-row`}>
                  
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-[calc(100%-5rem)] md:w-[42%] ml-auto md:ml-0 group"
                  >
                    <div className={`bg-white p-6 md:p-8 rounded-[1.5rem] shadow-xl border border-black/5 hover:border-brand-secondary/20 transition-all duration-300 relative text-left ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      {/* Arrow/Pointer */}
                      <div className={`absolute top-6 md:top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-black/5 transform rotate-45 z-0 ${idx % 2 === 0 ? '-left-2' : '-left-2 md:left-auto md:-right-2'}`} />
                      
                      <div className={`flex items-center gap-3 mb-4 justify-start ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        <span className="text-[10px] font-black text-brand-secondary uppercase tracking-widest px-2 py-0.5 bg-brand-secondary/10 rounded">
                          {item.type}
                        </span>
                      </div>
                      <h4 className="text-xl font-black text-brand-dark tracking-tighter mb-3 uppercase">{item.title}</h4>
                      <p className="text-black/70 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Icon */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="absolute left-8 md:relative md:left-auto transform -translate-x-1/2 md:translate-x-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-[3px] border-brand-secondary flex items-center justify-center z-30 shadow-lg mt-2 md:mt-0"
                  >
                    <div className="text-brand-secondary scale-75 md:scale-100">
                      {item.icon}
                    </div>
                  </motion.div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block w-[42%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16 bg-brand-ash">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1440px] mx-auto px-4 lg:px-20 xl:px-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-2 block">FOUNDATIONS</h2>
            <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight">Core Values</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-[1200px]">
            {coreValues.map((value, idx) => (
              <div key={idx} className="flex flex-col items-start text-left p-6 bg-white rounded-[1.5rem] border border-black/5 shadow-xl w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-[400px]">
                <div className="w-10 h-10 bg-brand-secondary/5 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h5 className="text-sm font-black text-brand-dark tracking-tighter mb-2 leading-tight uppercase">
                  {value.title}
                </h5>
                <p className="text-xs text-black leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications Slider */}
      <section className="py-12 md:py-20 bg-white overflow-hidden relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1440px] mx-auto px-4 lg:px-20 xl:px-32 mb-10"
        >
          <div className="text-center">
            <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-4">CERTIFICATIONS</h2>
            <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter uppercase mb-2">
              CERTIFIED FOR
            </h3>
            <p className="font-medium text-black italic tracking-tight text-base">
              Quality, Safety & Reliability
            </p>
          </div>
        </motion.div>

        <div className="w-full relative">
          <div className="relative flex overflow-hidden py-10 w-full group">
            {/* Edge Blur Effects */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 13,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* First set of logos */}
              <div className="flex items-center">
                {accreditationLogos.map((logo, idx) => (
                  <div key={`logo-1-${idx}`} className="mx-12 md:mx-16 flex flex-col items-center text-center flex-shrink-0 transition-all duration-500">
                    <div className="h-24 md:h-28 w-36 flex items-center justify-center">
                      <img 
                        src={logo.url} 
                        alt={logo.label} 
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-4 text-[10px] font-black text-black tracking-widest uppercase">
                      {logo.label}
                    </span>
                  </div>
                ))}
              </div>
              {/* Second set of logos for seamless loop */}
              <div className="flex items-center">
                {accreditationLogos.map((logo, idx) => (
                  <div key={`logo-2-${idx}`} className="mx-12 md:mx-16 flex flex-col items-center text-center flex-shrink-0 transition-all duration-500">
                    <div className="h-24 md:h-28 w-36 flex items-center justify-center">
                      <img 
                        src={logo.url} 
                        alt={logo.label} 
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-4 text-[10px] font-black text-black tracking-widest uppercase">
                      {logo.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-16 bg-white"
      >
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-2 block">INFRASTRUCTURE</h2>
                <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight mb-4">
                  World-Class <span className="text-brand-secondary">Facilities</span>
                </h3>
              </div>
              
              <p className="text-black leading-relaxed font-normal text-base">
                Nicco Cables operates a state-of-the-art manufacturing facility spanning approximately 4,96,520 sq. ft., equipped with advanced machinery and automation systems designed for precision cable manufacturing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  "Advanced manufacturing lines",
                  "In-house compounding facility",
                  "3 MeV Electron Beam Accelerator",
                  "NABL-accredited testing lab",
                  "Modern quality control systems",
                  "500+ Skilled professionals"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary group-hover:scale-150 transition-transform" />
                    <span className="text-xs font-black text-brand-dark uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-[#F3F2EE] rounded-2xl border-l-4 border-brand-secondary">
                <p className="text-base text-black leading-relaxed font-normal">
                  This world-class manufacturing ecosystem enables Nicco to deliver high-volume production, consistent quality, and technologically advanced cable solutions for demanding industrial applications.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl bg-brand-ash group">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={facilityImages[currentImage]} 
                    alt={`Facility ${currentImage + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {facilityImages.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImage ? 'bg-brand-secondary w-6' : 'bg-white/50'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
