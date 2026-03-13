
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alexander Volkov",
    role: "Lead Engineer, Nord Energy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    text: "Nicco Cables provided a level of durability we haven't seen in 20 years. Their fire-resistant series is exceptional and outperforms every standard test we've conducted."
  },
  {
    name: "Sarah Jenkins",
    role: "Project Director, SkyRise Const.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    text: "The responsiveness of their technical team is as impressive as their cable conductivity. A true long-term partner for our high-rise projects across Mumbai."
  },
  {
    name: "Marcus Chen",
    role: "Operations Head, DataCore Hubs",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    text: "Seamless installation and zero signal degradation. Their high-speed data cables changed our infrastructure efficiency across our regional server farms."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary mb-4 block">FEEDBACK</span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter">Trusted Globally.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative group hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -rotate-12 group-hover:rotate-0 shadow-lg">
                <Quote className="w-6 h-6 fill-current" />
              </div>
              
              <div className="mb-10 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, star) => (
                    <div key={star} className="w-2.5 h-2.5 rounded-full bg-brand-secondary" />
                  ))}
                </div>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-secondary/20 p-1 group-hover:scale-110 transition-transform">
                  <img src={t.avatar} alt={t.name} loading="lazy" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>

              <p className="text-xl text-brand-dark italic font-light mb-10 leading-relaxed flex-grow">
                "{t.text}"
              </p>
              
              <div className="pt-8 border-t border-gray-50">
                <h5 className="font-black text-brand-dark tracking-widest text-sm">{t.name}</h5>
                <p className="text-[10px] text-brand-muted font-bold opacity-60 tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
