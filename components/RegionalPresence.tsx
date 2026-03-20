
import React from 'react';
import { Mail, Phone, Building2, Landmark, TowerControl, Building } from 'lucide-react';

const stats = [
  { value: "500+", label: "National Clients" },
  { value: "1 Mil+", label: "Products Sold" },
  { value: "82+", label: "Years of Experience" },
  { value: "100%", label: "Satisfied Customers" },
];

const locations = [
  {
    city: "Kolkata",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
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

const RegionalPresence: React.FC = () => {
  return (
    <section className="py-24 bg-brand-ash overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Stats Banner - Hidden for now */}
        {/*
        <div className="relative bg-brand-dark rounded-[2.5rem] p-12 md:p-16 mb-24 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-16 max-w-2xl leading-tight">
              Leading companies chose <span className="text-brand-secondary">NICCO</span> for all their cable requirements.
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-4xl md:text-6xl font-black text-white block tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold tracking-[0.3em] text-white">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        */}

        {/* Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group overflow-hidden relative min-h-[500px]">
              {/* Background City Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={loc.image} 
                  alt={loc.city} 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>

              <div className="relative z-10 p-10 flex flex-col items-center h-full w-full">
                <div className="w-20 h-20 mb-10 text-black group-hover:text-brand-secondary transition-all duration-300 transform group-hover:-translate-y-2">
                  <loc.icon className="w-full h-full stroke-[1.5px]" />
                </div>
                <h4 className="text-2xl font-black text-brand-dark mb-6 tracking-tighter">{loc.city}</h4>
                <div className="space-y-1 mb-auto">
                  {loc.details.map((line, i) => (
                    <p key={i} className="text-[11px] text-black font-bold leading-relaxed">{line}</p>
                  ))}
                </div>
                <div className="space-y-4 pt-8 border-t border-gray-100 w-full mt-10">
                  <div className="flex items-center justify-center gap-3 text-[11px] font-black text-brand-dark tracking-widest">
                    <Phone className="w-3.5 h-3.5 text-brand-ash group-hover:text-brand-secondary transition-colors" />
                    {loc.contact}
                  </div>
                  <div className="flex items-center justify-center gap-3 text-[11px] font-black text-brand-dark tracking-widest">
                    <Mail className="w-3.5 h-3.5 text-brand-ash group-hover:text-brand-secondary transition-colors" />
                    {loc.email}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RegionalPresence;
