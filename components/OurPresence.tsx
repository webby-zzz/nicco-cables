
import React from 'react';
import { MapPin, Phone, Mail, Landmark, Building, TowerControl, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

interface Location {
  id: number;
  name: string;
  type: 'office' | 'customer';
  top: string;
  left: string;
}

const locations: Location[] = [
  // India Offices
  { id: 1, name: "Kolkata (HQ)", type: 'office', top: '54%', left: '73%' },
  { id: 2, name: "Mumbai", type: 'office', top: '58%', left: '70%' },
  { id: 3, name: "New Delhi", type: 'office', top: '49%', left: '71%' },
  { id: 4, name: "Chennai", type: 'office', top: '63%', left: '72%' },
  
  // Global Offices
  { id: 5, name: "London, UK", type: 'office', top: '28%', left: '48%' },
  { id: 6, name: "Dubai, UAE", type: 'office', top: '48%', left: '60%' },
  
  // Customers / Presence
  { id: 7, name: "New York, USA", type: 'customer', top: '35%', left: '26%' },
  { id: 8, name: "Singapore", type: 'customer', top: '65%', left: '79%' },
  { id: 9, name: "Sydney, Australia", type: 'customer', top: '80%', left: '90%' },
  { id: 10, name: "Moscow, Russia", type: 'customer', top: '22%', left: '58%' },
  { id: 11, name: "Sao Paulo, Brazil", type: 'customer', top: '72%', left: '34%' },
  { id: 12, name: "Johannesburg, South Africa", type: 'customer', top: '75%', left: '54%' },
  { id: 13, name: "Tokyo, Japan", type: 'customer', top: '35%', left: '88%' },
  { id: 14, name: "Berlin, Germany", type: 'customer', top: '28%', left: '51%' },
  { id: 15, name: "Toronto, Canada", type: 'customer', top: '32%', left: '24%' },
];

const officeDetails = [
  {
    city: "Kolkata",
    icon: Landmark,
    details: [
      "Nicco Cables Private Ltd",
      "Suket Building, 2nd Floor,",
      "20 Ballygunge Circular Road",
      "Kolkata - 700019"
    ],
    contact: "7419888220",
    email: "Info@niccocable.com"
  },
  {
    city: "New Delhi",
    icon: TowerControl,
    details: [
      "Nicco Cables Private Ltd",
      "Wave Silver Tower",
      "Noida, Sector-18",
      "New Delhi - 201301"
    ],
    contact: "7419888228",
    email: "Info@niccocable.com"
  },
  {
    city: "Chennai",
    icon: Building2,
    details: [
      "Nicco Cables Private Ltd",
      "Haive House, Old No-1226",
      "New No-24, 20th Main Road,",
      "Anna Nagar, Chennai - 600040"
    ],
    contact: "7419888220",
    email: "Info@niccocable.com"
  },
  {
    city: "Mumbai",
    icon: Building,
    details: [
      "Nicco Cables Private Ltd",
      "West Regional Office-207, 2nd floor,",
      "Hubtown Viva, Western Express Highway,",
      "Jogeshwari East, Mumbai - 400060"
    ],
    contact: "7419888220",
    email: "Info@niccocable.com"
  }
];

const OurPresence: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="presence">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.56 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter mb-4">
            Our <span className="text-brand-secondary">Presence</span>
          </h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto mb-8" />
          <p className="text-brand-muted font-bold uppercase tracking-[0.2em] text-xs">
            GLOBAL FOOTPRINT & STRATEGIC NETWORK
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full aspect-[2/1] bg-gray-50 rounded-[3rem] p-8 md:p-16 overflow-hidden border border-gray-100 shadow-inner"
        >
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}
          />
          
          {/* High-Quality Dotted Map */}
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/001/198/050/non_2x/dotted-world-map-png.png" 
              alt="World Map" 
              className="w-full h-full object-contain opacity-70 grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Location Dots */}
          <div className="absolute inset-0 z-10">
            {locations.map((loc, idx) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.05, duration: 0.35 }}
                className="absolute group"
                style={{ top: loc.top, left: loc.left }}
              >
                {/* Dot */}
                <div className={`relative flex items-center justify-center`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${loc.type === 'office' ? 'bg-brand-secondary' : 'bg-green-500'} animate-pulse shadow-lg shadow-current/50`} />
                  <div className={`absolute w-5 h-5 rounded-full ${loc.type === 'office' ? 'bg-brand-secondary/30' : 'bg-green-500/30'} animate-ping`} />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20">
                  <div className="bg-brand-dark text-white px-4 py-2 rounded-xl text-[10px] font-black tracking-widest whitespace-nowrap shadow-2xl flex items-center gap-2">
                    <MapPin className={`w-3 h-3 ${loc.type === 'office' ? 'text-brand-secondary' : 'text-green-400'}`} />
                    {loc.name}
                  </div>
                  <div className="w-2 h-2 bg-brand-dark rotate-45 mx-auto -mt-1" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.56 }}
            className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-gray-100 shadow-xl z-20"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-brand-secondary shadow-lg shadow-brand-secondary/50" />
                <span className="text-[10px] font-black text-brand-dark uppercase tracking-widest">OFFICES & HQ</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                <span className="text-[10px] font-black text-brand-dark uppercase tracking-widest">GLOBAL CUSTOMERS</span>
              </div>
            </div>
          </motion.div>

          {/* India Focus Label */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.56 }}
            className="absolute top-1/2 left-[75%] -translate-y-1/2 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-secondary/30" />
              <span className="text-[9px] font-black text-brand-secondary uppercase tracking-[0.5em] whitespace-nowrap">
                STRATEGIC INDIA NETWORK
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Grid for Office Details */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {officeDetails.map((loc, idx) => (
            <motion.div 
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 + idx * 0.1, duration: 0.35 }}
              className="bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group overflow-hidden relative p-10"
            >
              <div className="w-16 h-16 mb-8 text-brand-dark/10 group-hover:text-brand-secondary transition-all duration-300 transform group-hover:-translate-y-2">
                <loc.icon className="w-full h-full stroke-[1.5px]" />
              </div>
              <h4 className="text-xl font-black text-brand-dark mb-4 tracking-tighter">{loc.city}</h4>
              <div className="space-y-1 mb-8">
                {loc.details.map((line, i) => (
                  <p key={i} className="text-[10px] text-brand-muted font-bold leading-relaxed">{line}</p>
                ))}
              </div>
              <div className="space-y-3 pt-6 border-t border-gray-100 w-full">
                <div className="flex items-center justify-center gap-2 text-[10px] font-black text-brand-dark tracking-widest">
                  <Phone className="w-3 h-3 text-brand-ash group-hover:text-brand-secondary transition-colors" />
                  {loc.contact}
                </div>
                <div className="flex items-center justify-center gap-2 text-[10px] font-black text-brand-dark tracking-widest">
                  <Mail className="w-3 h-3 text-brand-ash group-hover:text-brand-secondary transition-colors" />
                  {loc.email}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
