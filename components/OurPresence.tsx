
import React from 'react';
import { motion } from 'motion/react';

const officeDetails = [
  {
    city: "Kolkata (HQ)",
    details: [
      "Nicco Cables Private Ltd",
      "Suket Building, 2nd Floor,",
      "20 Ballygunge Circular Road",
      "Kolkata - 700019"
    ]
  },
  {
    city: "Mumbai",
    details: [
      "2O7, 2nd Floor",
      "Hubtown Viva",
      "Western Express Highway",
      "Jogeshwari (East) Mumbai, 400060"
    ]
  },
  {
    city: "Noida",
    details: [
      "Office No.404, 4th Floor",
      "Wave Silver Tower",
      "Sec 18,",
      "Noida – 201301"
    ]
  },
  {
    city: "Hyderabad",
    details: [
      "48, 2nd Floor,",
      "Sarvasukhi Colony, West Marredpally,",
      "above Indian Overseas Bank,",
      "Sarvasukhi Colony,",
      "Secundarabad-500026"
    ]
  },
  {
    city: "BBSR",
    details: [
      "Pl. No. - 44, 1st floor,",
      "Ananda Bhaban",
      "Near Bharat Petrol Pump,",
      "Rasulgarh,",
      "Bhubaneswar- 751010"
    ]
  },
  {
    city: "Chennai",
    details: [
      "Haive House, Old. No. 1226 New No. 24,",
      "20th Main Road, Anna Nagar,",
      "Chennai – 600040"
    ]
  }
];

const OurPresence: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-brand-ash overflow-hidden min-h-[50vh] flex flex-col justify-center" id="presence">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Bottom Grid for Office Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {officeDetails.map((loc, idx) => (
            <motion.div 
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.1, duration: 0.35 }}
              className="bg-white border border-gray-100 rounded-[2rem] hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group overflow-hidden relative p-6"
            >
              <h4 className="text-lg font-black text-brand-dark mb-2 tracking-tighter uppercase">{loc.city}</h4>
              <div className="space-y-1">
                {loc.details.map((line, i) => (
                  <p key={i} className="text-xs text-black font-bold leading-relaxed">{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
