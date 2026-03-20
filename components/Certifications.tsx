
import React from 'react';
import { motion } from 'motion/react';

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

const Certifications: React.FC = () => {
  return (
    <section id="quality" className="py-12 md:py-16 bg-brand-ash overflow-hidden min-h-[40vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 w-full">
        {/* Main Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A2B3C] tracking-tighter leading-tight">
            Accreditations
          </h2>
        </div>
      </div>

      {/* Accreditation Logos Marquee */}
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
  );
};

export default Certifications;
