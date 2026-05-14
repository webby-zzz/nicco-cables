import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowUp, Send, ChevronDown } from 'lucide-react';

const FooterSection = ({ title, links }: { title: string, links: {name: string, link: string}[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 lg:border-none pb-4 lg:pb-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between lg:cursor-default lg:pointer-events-none"
      >
        <h4 className="font-bold text-white tracking-widest text-xs opacity-60 uppercase border-l-2 border-brand-secondary pl-2 text-left">
          {title}
        </h4>
        <ChevronDown className={`w-4 h-4 text-white/60 lg:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`mt-4 lg:mt-4 overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="space-y-2">
          {links.map((item) => (
            <li key={item.name}>
              <Link to={item.link} className="text-white/90 hover:text-brand-secondary transition-colors text-[11px] font-medium uppercase tracking-wide">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="pb-4 bg-white px-4">
      <div className="max-w-[1440px] mx-auto bg-[#413E3A] rounded-[2rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden text-white">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 w-full pt-2">
            <div className="flex flex-col justify-start md:col-span-2 lg:col-span-1 mb-6 lg:mb-0">
              <div className="h-16 w-auto mb-6">
                <img 
                  src="/brand identity/Logo.png" 
                  alt="NICCO Logo" 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-white/80 leading-relaxed font-light text-[13px]">
                Over 8 decades of unwavering commitment to powering global infrastructure. The pulse of the nation’s core industries.
              </p>
            </div>
            
            <FooterSection 
              title="COMPANY" 
              links={[
                { name: 'HOME', link: '/' },
                { name: 'ABOUT US', link: '/about' },
                { name: 'BROCHURES', link: '/brochures' },
                { name: 'GALLERY', link: '/gallery' },
                { name: 'CONTACT US', link: '/contact' }
              ]} 
            />

            <FooterSection 
              title="PRODUCTS" 
              links={[
                { name: 'LT Power & Control', link: '/products/lt-power-control' },
                { name: 'Instrumentation', link: '/products/instrumentation' },
                { name: 'Elastomeric/Silicon', link: '/products/elastomeric-silicon' },
                { name: 'Electron Beam', link: '/products/electron-beam' },
                { name: 'Solar', link: '/products/solar-cables' },
                { name: 'Wind Energy', link: '/products/wind-energy-cables' },
                { name: 'Overhead Conductors', link: '/products/overhead-conductors' },
                { name: 'HT Cables', link: '/products/ht-power-cables' },
                { name: 'MVCC/Tree Spacer', link: '/products/mvcc' },
                { name: 'High Temperature', link: '/products/high-temperature' },
                { name: 'UL Cables', link: '/products/ul-cables' }
              ]} 
            />

            <FooterSection 
              title="INDUSTRIES" 
              links={[
                { name: 'Transmission & Dist.', link: '/industry/transmission-distribution' },
                { name: 'Renewable Energy', link: '/industry/renewable-energy' },
                { name: 'Power Generation', link: '/industry/power-generation' },
                { name: 'Exploration', link: '/industry/exploration' },
                { name: 'Mobility', link: '/industry/mobility' },
                { name: 'Defence', link: '/industry/defence' },
                { name: 'Manufacturing', link: '/industry/manufacturing' },
                { name: 'Infrastructure', link: '/industry/infrastructure' },
                { name: 'Harnessing', link: '/products/harnessing' }
              ]} 
            />

            <FooterSection 
              title="STANDARDS" 
              links={[
                { name: 'Indian', link: '/standards/indian' },
                { name: 'International', link: '/standards/international' }
              ]} 
            />

            <div className="flex flex-col h-full">
              <h4 className="font-bold text-white mb-4 tracking-widest text-xs opacity-60 uppercase border-l-2 border-brand-secondary pl-2">CONNECT</h4>
              <div className="flex flex-col gap-2 mb-6">
                <a href="tel:03340647177" className="text-white/90 hover:text-brand-secondary transition-colors text-[11px] font-medium tracking-wide">
                  (033) 40647177
                </a>
                <a href="mailto:info@niccocables.com" className="text-white/90 hover:text-brand-secondary transition-colors text-[11px] font-medium tracking-wide">
                  info@niccocables.com
                </a>
              </div>

              <div className="flex gap-3 mb-auto">
                {[
                  { Icon: Linkedin, href: 'https://www.linkedin.com/company/nicco-cables-pvt-ltd/' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-secondary hover:text-white transition-all hover:-translate-y-1 border border-white/10 shadow-lg"
                  >
                    <social.Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <button onClick={scrollToTop} className="mt-6 flex items-center gap-2 text-[10px] font-extrabold tracking-[0.3em] text-white hover:text-brand-secondary transition-colors group uppercase bg-white/5 w-fit px-4 py-3 rounded-xl border border-white/10 hover:bg-white/10">
                SCROLL TO TOP <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform text-brand-secondary" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white font-bold tracking-widest text-xs">
            © 2024 NICCO CABLES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[9px] text-white font-bold tracking-widest">
            <Link to="/privacy-compliance" className="hover:text-white uppercase">PRIVACY & COMPLIANCE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
