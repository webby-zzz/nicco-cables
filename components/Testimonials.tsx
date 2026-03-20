
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alexander Volkov",
    role: "Lead Engineer, Nord Energy",
    avatar: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=150",
    text: "Nicco Cables provided a level of durability we haven't seen in 20 years. Their fire-resistant series is exceptional and outperforms every standard test we've conducted."
  },
  {
    name: "Sarah Jenkins",
    role: "Project Director, SkyRise Const.",
    avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=150",
    text: "The responsiveness of their technical team is as impressive as their cable conductivity. A true long-term partner for our high-rise projects across Mumbai."
  },
  {
    name: "Marcus Chen",
    role: "Operations Head, DataCore Hubs",
    avatar: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=150",
    text: "Seamless installation and zero signal degradation. Their high-speed data cables changed our infrastructure efficiency across our regional server farms."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-50/50 overflow-hidden min-h-[50vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="text-center mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-brand-secondary mb-2 block">FEEDBACK</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter">Trusted Globally.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 relative group hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -rotate-12 group-hover:rotate-0 shadow-lg">
                <Quote className="w-4 h-4 fill-current" />
              </div>
              
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, star) => (
                    <div key={star} className="w-2 h-2 rounded-full bg-brand-secondary" />
                  ))}
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-secondary/20 p-0.5 group-hover:scale-110 transition-transform">
                  <img src={t.avatar} alt={t.name} loading="lazy" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>

              <p className="text-brand-dark italic font-light mb-6 leading-relaxed flex-grow text-base">
                "{t.text}"
              </p>
              
              <div className="pt-4 border-t border-gray-50">
                <h5 className="font-black text-brand-dark tracking-widest text-xs">{t.name}</h5>
                <p className="text-xs text-black font-bold opacity-100 tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
