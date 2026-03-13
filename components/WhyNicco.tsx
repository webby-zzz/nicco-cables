
import React from 'react';
import { Microscope, History, ShieldAlert, Cpu } from 'lucide-react';

const pillars = [
  {
    icon: History,
    title: "Over 80 Years of Engineering Heritage",
    desc: "Established in 1944, Nicco's legacy is built on over eight decades of pioneering the power sector, from the nation's independence to its modern infrastructure."
  },
  {
    icon: Microscope,
    title: "Advanced Material Science",
    desc: "Utilizing high-purity electrolytic grade copper and specialized polymers (ETFE, FEP, PTFE) to ensure maximum thermal resistance."
  },
  {
    icon: ShieldAlert,
    title: "Fail-Safe Reliability",
    desc: "Our systems are tested to 950°C, ensuring that in mission-critical moments connection never fails."
  },
  {
    icon: Cpu,
    title: "Technology Driven Process",
    desc: "From Electron Beam cross-linking to laser-monitored manufacturing, we integrate cutting-edge tech for accuracy."
  }
];

const WhyNicco: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-white border-y border-gray-50 relative overflow-hidden">
      {/* Ghostly Background Image for texture */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] grayscale pointer-events-none">
         <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200" alt="Tech Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-5 space-y-12">
            <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-[0.4em]">WHY CHOOSE NICCO</h2>
            <h3 className="text-4xl md:text-8xl font-black text-brand-dark tracking-tighter leading-[0.85]">
              Precision in <br />
              <span className="text-brand-secondary underline decoration-brand-dark/10 underline-offset-[12px]">Every Strand.</span>
            </h3>
            
            <div className="rounded-4xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" 
                alt="Cable Engineering" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                 <p className="text-white text-xs font-bold uppercase tracking-[0.3em]">SPECIALIZED MANUFACTURING UNIT</p>
              </div>
            </div>

            <p className="text-xl text-brand-muted leading-relaxed font-light">
              We don’t just manufacture cables; we engineer the critical arteries of global progress. Our commitment is to connection—making it stronger, safer, and enduring.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-10 rounded-[3rem] border border-gray-100 hover:border-brand-secondary/20 hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-brand-secondary transition-all">
                    <pillar.icon className="w-7 h-7 text-brand-secondary group-hover:text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-brand-dark mb-4 tracking-tight leading-tight">{pillar.title}</h4>
                  <p className="text-brand-muted text-sm leading-relaxed font-light opacity-70 group-hover:opacity-100 transition-opacity">
                    {pillar.desc}
                  </p>
                </div>
                {/* Subtle Image on Hover */}
                <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-5 transition-opacity duration-700">
                  <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNicco;
