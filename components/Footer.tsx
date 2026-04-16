
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowUp, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-4 bg-white px-4">
      <div className="max-w-[1440px] mx-auto bg-[#413E3A] rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden text-white">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          <div className="lg:col-span-5">
            <div className="flex items-center mb-6">
              <div className="h-20 w-auto">
                <img 
                  src="/brand identity/Logo.png" 
                  alt="NICCO Logo" 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="text-white leading-relaxed font-light mb-6 text-base">
              Over 8 decades of unwavering commitment to powering global infrastructure. The pulse of the nation’s core industries.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-white mb-4 tracking-widest text-xs opacity-50 uppercase">COMPANY</h4>
              <ul className="space-y-2">
                {[
                  { name: 'HOME', link: '/' },
                  { name: 'ABOUT US', link: '/about' },
                  { name: 'PRODUCTS', link: '/#products' },
                  { name: 'BROCHURES', link: '#' },
                  { name: 'GALLERY', link: '#' },
                  { name: 'CONTACT US', link: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.link} className="text-white hover:text-white transition-colors text-xs font-medium uppercase">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 tracking-widest text-xs opacity-50 uppercase">INDUSTRIES</h4>
              <ul className="space-y-2">
                {[
                  'Transmission and Distribution',
                  'Renewable Energy',
                  'Power Generation',
                  'Exploration',
                  'Mobility',
                  'Defence',
                  'Manufacturing',
                  'Infrastructure',
                  'Harnessing'
                ].map((link) => (
                  <li key={link}>
                    <Link to="/#products" className="text-white hover:text-white transition-colors text-xs font-medium uppercase">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-white mb-4 tracking-widest text-xs opacity-50 uppercase">FOLLOW US</h4>
              <div className="flex gap-3 mb-6">
                {[
                  { Icon: Linkedin, href: 'https://www.linkedin.com/company/nicco-cables-pvt-ltd/' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 hover:text-white transition-all hover:-translate-y-1 border border-white/10"
                  >
                    <social.Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <button onClick={scrollToTop} className="flex items-center gap-2 text-xs font-extrabold tracking-[0.3em] text-white hover:text-white transition-colors group uppercase">
                BACK TO TOP <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
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
