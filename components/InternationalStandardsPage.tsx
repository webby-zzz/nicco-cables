
import React, { useEffect } from 'react';
import { motion } from 'motion/react';

const InternationalStandardsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const standards = [
    {
      category: "Power & Control Cables",
      items: ["IEC 60502-1", "IEC 60227 / 60228", "BS and other international standards"]
    },
    {
      category: "Elastomeric Cables",
      items: ["IEC 60502-1", "IEC 60502-2", "BS specifications"]
    },
    {
      category: "Solar Cables",
      items: ["IEC 62893", "EN 50618"]
    },
    {
      category: "Instrumentation Cables",
      items: [
        "BS EN 50288-7", "IEC 60502-1", "IEC 60079-14", "BS 5308 (Part 1 & 2)", 
        "BS 7655", "IEC-189 (Part 1 & 2)", "VDE-0815 & 0816", 
        "IEC 60332-1", "IEC 60332-3-22/23/24"
      ]
    },
    {
      category: "Fire Resistant Cables with Low Smoke & Gases",
      items: [
        "BS-7846", "BS-7629", "BS-8434", "BS-6387 (Category CWZ)", 
        "IEC-60331-21", "IS 17505", "IEC 60754", "IEC 61034"
      ]
    },
    {
      category: "Automotive Cables",
      items: [
        "ISO 6722", "ISO 19642 (Part 5 & 9)", "JASO D 611", 
        "JASO D 618", "SAE J1128", "SAE J1127", "IS 2465"
      ]
    },
    {
      category: "Ship Wiring Cables",
      items: [
        "IEC 60092-350 / 353 / 376", "BS 6883", "BS 7917", "VG 95218", 
        "GOST 7866 / 11326 / 17301", "NES / DEF STAN 526 & 527", 
        "EED-50-12", "EED-50-13"
      ]
    },
    {
      category: "Cables for Naval Ships & Submarines",
      items: [
        "IEC 60092-350 / 353 / 376", "BS 6883", "BS 7917", "VG 95218", 
        "GOST 7866 / 11326 / 17301", "NES / DEF STAN 526 & 527", 
        "EED-50-12", "EED-50-13", "EED-57-03 (PT-10)", "EED-57-04 (PT-45)", 
        "DMDE Standard", "ANSI/TIA-568-C.2", "Def Stan 02-526", 
        "Def Stan 02-527", "Def Stan 61-12 (Part 18 & 25)"
      ]
    },
    {
      category: "Cables for Overhead Power Transmission & Distribution",
      items: ["IEC 61089", "BS EN 50182", "BS EN 50397"]
    },
    {
      category: "Power, Control, Solar, Appliance Wire Cables",
      items: ["UL 44", "UL 854", "UL 83", "UL 4703", "ICEA-S-76-474"]
    },
    {
      category: "Cables for Rolling Stock & Coach Wiring",
      items: ["BS EN 50264", "BS EN 50306", "BS EN 50382", "OEM / RDSO specifications"]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-28 md:pt-36 pb-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 text-brand-secondary mb-4">
            <div className="h-[1px] w-8 bg-brand-secondary" />
            <span className="text-xs font-black uppercase tracking-widest">STANDARDS</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black text-brand-dark tracking-tighter mb-6 leading-[1.1]">
            International Standards
          </h1>
          <p className="text-base text-black leading-relaxed font-medium max-w-3xl">
            Our products are engineered and manufactured to comply with the most rigorous international standards, ensuring global reliability, safety, and performance across diverse industries.
          </p>
        </motion.div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standards.map((std, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-black text-brand-dark mb-4 leading-tight">
                {std.category}
              </h3>
              <ul className="space-y-2">
                {std.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-black font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default InternationalStandardsPage;
