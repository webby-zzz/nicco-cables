
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Settings, ShieldCheck, Lightbulb, Flag, Handshake, CheckCircle2 } from 'lucide-react';

const coreValues = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Engineering Excellence",
    description: "We uphold the highest standards of design, manufacturing, and testing to deliver products that perform reliably in demanding environments."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Quality Without Compromise",
    description: "Every cable manufactured at Nicco undergoes stringent testing and quality assurance to ensure consistent performance and durability."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation & Technology",
    description: "Continuous investment in R&D, advanced materials, and modern manufacturing enables us to stay ahead in cable technology."
  },
  {
    icon: <Flag className="w-8 h-8" />,
    title: "Nation Building",
    description: "We are committed to supporting India’s infrastructure and strategic sectors through solutions that align with the vision of Make in India and Viksit Bharat."
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Integrity & Trust",
    description: "Our long-standing relationships with customers are built on transparency, reliability, and consistent delivery of value."
  }
];

const accreditationLogos = [
  { url: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122012/iso9001.png?itok=5sehR1Fm", label: "ISO 9001" },
  { url: "https://icon2.cleanpng.com/20180802/cg/2472e9d13023e64e5047ad48a2fe547d.webp", label: "ISO 14001" },
  { url: "https://jalalasd.com/wp-content/uploads/2022/08/image_2022-08-10_223156335-removebg-preview-1.png", label: "ISO 45001" },
  { url: "https://media.licdn.com/dms/image/v2/C560BAQGfmi0oSeiRtg/company-logo_200_200/company-logo_200_200/0/1630594735142/research_design_and_standards_organization_logo?e=2147483647&v=beta&t=F7mvkXJHSC7k2ODs-hPz-JHzkwxgK_skvyv3v2AnXgk", label: "RDSO" },
  { url: "https://media.licdn.com/dms/image/v2/C560BAQFIkCnHpmZxMA/company-logo_200_200/company-logo_200_200/0/1631338119076?e=2147483647&v=beta&t=cCB38n4__u5V0QgBG_yFYW-SOR-zKGGtXz9thw9q4V0", label: "CLW" },
  { url: "https://assets.isu.pub/document-structure/240408100107-a6ac3e9c4f08ae7af104800f247fbd3a/v1/ee67ecfd5386e507637f0c8e4b4c819c.jpeg", label: "CORE" },
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDDptzM-472zyGrw1UsAwVnuigK16UprUaQ&s", label: "CE" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/UL_Mark.svg/960px-UL_Mark.svg.png", label: "UL" },
  { url: "https://media.licdn.com/dms/image/v2/D4D0BAQEjEIpf0RNDgg/company-logo_200_200/company-logo_200_200/0/1697543254798?e=2147483647&v=beta&t=8cSWYkLp-tlR6dPCF2ny775ShXyXWXSOo3dW7j05Unk", label: "NSIC" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Bureau_of_Indian_Standards_Logo.svg", label: "BIS" },
  { url: "https://www.leclanche.com/wp-content/uploads/2020/11/IRIS_logo_TM_white_bleed-scaled-e1605550366995.jpg", label: "IRIS" },
  { url: "https://www.dnv.in/siteassets/images/dnv-cert-mark-352x190.jpg?mode=crop&scale=both&quality=90&format=webp&width=480&height=276", label: "DNV" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Conformit%C3%A9_Europ%C3%A9enne_%28logo%29.svg", label: "CE Mark" },
  { url: "https://www.araiindia.com/wp-content/uploads/2025/12/ARAI-Logo-Hindi-.png", label: "ARAI" },
  { url: "https://upload.wikimedia.org/wikipedia/en/d/d4/NABL_Official_LOGO_Registered.png", label: "NABL" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/International_Electrotechnical_Commission_Logo.svg/960px-International_Electrotechnical_Commission_Logo.svg.png", label: "IEC" }
];

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-ash">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=2000" 
            alt="Cable Manufacturing" 
            className="w-full h-full object-cover opacity-100"
          />
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
            Our <span className="text-brand-secondary">Legacy</span>
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
      <section className="py-12 md:py-16 bg-brand-ash">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-4 block">ABOUT US</h2>
              <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight mb-6">
                Eight Decades of <span className="text-brand-secondary">Trusted Innovation.</span>
              </h3>
              <div className="relative rounded-[1.5rem] overflow-hidden aspect-square shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1200" 
                  alt="Cable Innovation" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-16 space-y-6">
              <p className="text-black leading-relaxed font-normal text-base">
                For over 8 decades, Nicco Cables has been a trusted name in India’s cable manufacturing industry, delivering high-performance connectivity solutions for critical infrastructure and strategic sectors.
              </p>
              <div className="h-[1px] w-24 bg-brand-secondary" />
              <div className="space-y-6 text-black leading-relaxed font-light text-base">
                <p>
                  Established with a vision to support the nation’s growing industrial and power needs, Nicco has evolved into a technology-driven manufacturer of advanced electrical cables and specialized connectivity systems. Today, the company engineers a comprehensive portfolio including HT cables up to 33kV, LT power and control cables, instrumentation cables, fire survival cables, electron-beam irradiated cables, and specialized elastomeric and silicon cable solutions.
                </p>
                <p>
                  Our manufacturing capabilities are supported by cutting-edge plant and machinery, advanced compounding technology, and a fully equipped in-house R&D and testing ecosystem. The company was also among the first in India’s private sector to introduce Electron Beam Irradiation technology, enabling superior cable performance in high-demand industrial applications.
                </p>
                <p>
                  With solutions designed for defence, railways, metros, power utilities, renewable energy, mining, and large-scale infrastructure, Nicco continues to play a vital role in powering India’s progress while expanding its reach across global markets.
                </p>
                <p className="font-bold text-brand-dark text-base">
                  Driven by engineering excellence, stringent quality standards, and a commitment to innovation, Nicco remains dedicated to delivering safe, reliable, and future-ready connectivity solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-16 bg-brand-ash"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 md:p-10 rounded-[1.5rem] shadow-xl border border-black/5 flex flex-col h-full"
            >
              <div className="w-10 h-10 bg-brand-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Flag className="w-5 h-5 text-brand-secondary" />
              </div>
              <h4 className="text-xl font-black text-brand-dark tracking-tighter mb-4 uppercase">OUR MISSION</h4>
              <p className="text-black leading-relaxed text-base">
                To design and manufacture high-performance cable solutions that meet the evolving needs of critical infrastructure and strategic industries, while consistently delivering superior quality, safety, and reliability. Through innovation, advanced engineering, and responsible manufacturing practices, we aim to contribute meaningfully to India’s industrial growth and global competitiveness.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-brand-dark p-8 md:p-10 rounded-[1.5rem] shadow-xl text-white flex flex-col h-full"
            >
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-5 h-5 text-brand-secondary" />
              </div>
              <h4 className="text-xl font-black tracking-tighter mb-4 uppercase">OUR VISION</h4>
              <p className="text-white leading-relaxed text-base">
                To be recognized as a global leader in advanced cable technologies, delivering world-class connectivity solutions that power industries, strengthen infrastructure, and support the development of a modern and resilient economy.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <section className="py-12 md:py-16 bg-brand-ash">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-2 block">FOUNDATIONS</h2>
            <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-tight">Core Values</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-[1200px]">
            {coreValues.map((value, idx) => (
              <div key={idx} className="group flex flex-col items-start text-left p-6 bg-[#F3F2EE] rounded-[1.5rem] border border-transparent hover:border-brand-secondary/20 hover:bg-white hover:shadow-2xl transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-[400px]">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h5 className="text-sm font-black text-brand-dark tracking-tighter mb-2 leading-tight">
                  {value.title}
                </h5>
                <p className="text-xs text-black leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Slider */}
      <section className="py-12 md:py-20 bg-brand-ash overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
          <div className="text-center">
            <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-4">CERTIFICATIONS</h2>
            <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter uppercase mb-2">
              CERTIFIED FOR
            </h3>
            <p className="font-medium text-black italic tracking-tight text-base">
              Quality, Safety & Reliability
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="relative flex overflow-hidden py-6 bg-white/90 backdrop-blur-md border border-brand-secondary/10 shadow-xl rounded-full w-full">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 60,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* First set of logos */}
              <div className="flex items-center">
                {accreditationLogos.map((logo, idx) => (
                  <div key={`logo-1-${idx}`} className="mx-8 md:mx-12 flex flex-col items-center text-center flex-shrink-0">
                    <div className="h-20 md:h-24 w-32 flex items-center justify-center">
                      <img 
                        src={logo.url} 
                        alt={logo.label} 
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-3 text-[9px] font-black text-black tracking-widest">
                      {logo.label}
                    </span>
                  </div>
                ))}
              </div>
              {/* Second set of logos for seamless loop */}
              <div className="flex items-center">
                {accreditationLogos.map((logo, idx) => (
                  <div key={`logo-2-${idx}`} className="mx-8 md:mx-12 flex flex-col items-center text-center flex-shrink-0">
                    <div className="h-20 md:h-24 w-32 flex items-center justify-center">
                      <img 
                        src={logo.url} 
                        alt={logo.label} 
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-3 text-[9px] font-black text-black tracking-widest">
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
        className="py-12 md:py-16 bg-brand-ash"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
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
                <p className="text-xs text-black leading-relaxed font-medium">
                  This world-class manufacturing ecosystem enables Nicco to deliver high-volume production, consistent quality, and technologically advanced cable solutions for demanding industrial applications.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl">
                  <img src="https://niccocable.com/wp-content/uploads/2024/07/1-12.jpg" alt="Facility 1" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[2rem] overflow-hidden aspect-square shadow-2xl">
                  <img src="https://niccocable.com/wp-content/uploads/2024/07/img1-1.jpg" alt="Facility 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="rounded-[2rem] overflow-hidden aspect-square shadow-2xl">
                  <img src="https://niccocable.com/wp-content/uploads/2024/07/1-9-scaled.jpg" alt="Facility 3" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl">
                  <img src="https://niccocable.com/wp-content/uploads/2024/07/1-1.jpg" alt="Facility 4" className="w-full h-full object-cover" />
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
