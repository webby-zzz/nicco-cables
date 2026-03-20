
import React from 'react';
import { motion } from 'motion/react';

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tata_Steel_Logo.svg/1920px-Tata_Steel_Logo.svg.png?_=20210606062937",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/SAIL_Logo.svg/960px-SAIL_Logo.svg.png?_=20190621183023",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Essar_logo.svg/500px-Essar_logo.svg.png?_=20100223180750",
  "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Rashtriya_Ispat_Nigam.svg/330px-Rashtriya_Ispat_Nigam.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/ACC_Limited_logo.svg/250px-ACC_Limited_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Ultratech_Cement_Logo.svg/1280px-Ultratech_Cement_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/04/Lafarge_%28Unternehmen%29_logo.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI04v5N08RSyBc9d8lTL5afVvGjEgHqBwRzQ&s",
  "https://upload.wikimedia.org/wikipedia/commons/d/dd/Jindal_logo_and_steel_power.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/NTPC_Logo.svg/120px-NTPC_Logo.svg.png?_=20100830204023",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/BHEL_logo.svg/960px-BHEL_logo.svg.png?_=20130508235313",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Tata_Power_Logo.svg/1280px-Tata_Power_Logo.svg.png?_=20100301235336",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Indian_Oil_Logo.svg/1280px-Indian_Oil_Logo.svg.png?_=20210602150702",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/ONGC_Logo.svg/500px-ONGC_Logo.svg.png?_=20250908034501",
  "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/NPCIL_Logo.svg/1280px-NPCIL_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Damodar_Valley_Corporation_Logo.svg/250px-Damodar_Valley_Corporation_Logo.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoKUn5FBvf31O5JNMXPuiDbMvaKaiLH2_Qw&s",
  "https://www.uxdt.nic.in/wp-content/uploads/2020/06/Gail.png",
  "https://upload.wikimedia.org/wikipedia/en/0/0e/Reliance_Industries.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/500px-ITC_Limited_Logo.svg.png?_=20250908034046",
  "https://www.purppledesigns.com/wp-content/uploads/2023/11/download-2.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/af/Ranbaxy_Logo.svg",
  "https://assets-netstorage.groww.in/stock-assets/logos2/JKPaper_29197835175_5772.png",
  "https://wp.logos-download.com/wp-content/uploads/2021/02/Larsen__Toubro_Logo.png?dl",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Delhi_Metro_logo.svg/960px-Delhi_Metro_logo.svg.png?_=20100309023850",
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Kolkata_Metro_Rail_Corporation_Logo.svg",
  "https://static.toiimg.com/thumb/msid-66235173,width-400,resizemode-4/66235173.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhvvLX976QJBMMJi_duB33XAHXonpr_a4Yg&s",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/ECR_Logo.jpg/960px-ECR_Logo.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2XcM9-KlG7nPOPFtIsA4z2kTfRM0P34ZzA&s",
  "https://upload.wikimedia.org/wikipedia/commons/c/c1/Titagarh_Wagons_Logo.svg",
  "https://thermocables.com/wp-content/uploads/2022/11/Banaras-Thermocables-Client.png",
  "https://media.9curry.com/uploads/organization/image/1687/clw-indian-railways-logo.gif",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SECL_logo.png/960px-SECL_logo.png?_=20220118235917",
  "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Coal_India_Logo.svg/960px-Coal_India_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/aa/ECL_LOGO_COAL_INDIA.jpg",
  "https://www.nmdc.co.in/cms-admin/Upload/NMDC_Logo/9b84e5d10cf047408e0b6d6c8a588a28_20230804120131169.png",
  "https://media.licdn.com/dms/image/v2/C510BAQFGAMmLm2QKKg/company-logo_200_200/company-logo_200_200/0/1630627918259/kolkata_port_trust_logo?e=2147483647&v=beta&t=QFhMI0JEZ7-cEoYsBLxi2JA-gg9LH3jbxpBON24khwU",
  "https://haldiadockcomplex.in/img/logo.jpg",
  "https://i.ytimg.com/vi/JctzKWx94_Y/maxresdefault.jpg",
  "https://content3.jdmagicbox.com/v2/comp/mumbai/21/022p9003121/catalogue/jawaharlal-nehru-port-trust-nariman-point-mumbai-government-organisations-njujemxioh.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/2/22/Cochin_Shipyard_SVG_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Mazagon_Dock_Shipbuilders.svg/1280px-Mazagon_Dock_Shipbuilders.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/4/49/Goa_Shipyard_Limited_Logo.svg",
  "https://media.licdn.com/dms/image/v2/C510BAGQf1eKG65FDg/company-logo_200_200/company-logo_200_200/0/1630624237816/hindustan_shipyard_limited___india_logo?e=2147483647&v=beta&t=nPc7R65e4KzEYPsHRILxzH2JAqI9rIHEnt_uNFvoBcI",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Indian_Navy_crest.svg/330px-Indian_Navy_crest.svg.png?_=20120221202521",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/BARC_logo.png/500px-BARC_logo.png?_=20180620042626",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/250px-Indian_Space_Research_Organisation_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Defence_Research_and_Development_Organisation.svg/1280px-Defence_Research_and_Development_Organisation.svg.png",
  "https://icon2.cleanpng.com/20180715/fyu/kisspng-bharat-electronics-limited-secunderabad-engineerin-chandrababu-naidu-5b4b3c6df13ec9.4148818715316573259882.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Bharat_Dynamics_Logo.svg/1280px-Bharat_Dynamics_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Hindustan_Aeronautics_Limited_Logo.svg/1280px-Hindustan_Aeronautics_Limited_Logo.svg.png",
];

const Clientele: React.FC = () => {
  return (
    <section id="clientele" className="py-12 md:py-16 bg-brand-ash overflow-hidden min-h-[40vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 w-full">
        <div className="text-center">
          <h2 className="text-xs font-bold text-brand-secondary tracking-widest uppercase mb-2">OUR CLIENTELE</h2>
          <h3 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter">
            Trusted by Industry <span className="text-brand-secondary">Leaders</span>
          </h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="relative flex overflow-hidden py-6 bg-white/90 backdrop-blur-md border border-brand-secondary/10 shadow-xl rounded-full w-full">
          <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 200,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* First set of logos */}
          <div className="flex items-center">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="mx-8 w-40 h-24 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Client Logo ${index}`}
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          {/* Second set of logos for seamless loop */}
          <div className="flex items-center">
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="mx-8 w-40 h-24 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Client Logo ${index}`}
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clientele;
