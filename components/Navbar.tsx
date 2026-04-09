
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Shield, Sun, Building2, HardHat, Globe, LayoutGrid } from 'lucide-react';

const Logo = () => (
  <Link to="/" className="flex items-center group cursor-pointer">
    <div className="h-6 md:h-10 w-auto transition-all duration-200 group-hover:scale-105">
      <img 
        src="/brand identity/Logo.png" 
        alt="NICCO Logo" 
        className="h-full w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  </Link>
);

const MegaMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const cableTypes = [
    { name: 'LT Power & Control Cables', image: '/Product Images/LT cables/3.jpg', link: '/products/lt-power-control' },
    { name: 'Instrumentation Cables', image: '/Product Images/instrumental-cables/1.webp', link: '/products/instrumentation' },
    { name: 'Elastomeric and Silicon Cables (upto 15 kV)', image: 'https://placehold.co/1x1/000000/000000', link: '/products/elastomeric-silicon' },
    { name: 'Electron Beam Cables', image: 'https://placehold.co/1x1/000000/000000', link: '/products/electron-beam' },
    { name: 'Solar Cables', image: 'https://placehold.co/1x1/000000/000000', link: '/products/solar-cables' },
    { name: 'Wind Energy Cables', image: 'https://placehold.co/1x1/000000/000000', link: '/products/wind-energy-cables' },
    { name: 'Overhead Conductors', image: 'https://placehold.co/1x1/000000/000000', link: '/products/overhead-conductors' },
    { name: 'HT Cables — Up to 11 kV', image: 'https://placehold.co/1x1/000000/000000', link: '/products/ht-power-cables' },
    { name: 'Medium Voltage Covered Conductors / Tree Spacer Cables', image: 'https://placehold.co/1x1/000000/000000', link: '/products/mvcc' },
    { name: 'High Temperature Cables (ETFE / FEP / PTFE)', image: 'https://placehold.co/1x1/000000/000000', link: '/products/high-temperature' },
    { name: 'UL Cables (International)', image: 'https://placehold.co/1x1/000000/000000', link: '/products/ul-cables' },
  ];

  return (
    <div 
      className={`absolute top-full left-0 w-full pt-4 transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible pointer-events-none'
      }`}
    >
      <div className="bg-white text-brand-dark shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden rounded-[2.5rem] border border-brand-ash/20 max-h-[85vh] overflow-y-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-12">
          
          {/* Column 1: CABLES BY TYPES (6 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-brand-secondary mb-6">
              <Zap className="w-4 h-4" /> CABLES BY TYPES
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cableTypes.map((cable) => (
                <Link 
                  key={cable.name}
                  to={cable.link}
                  onClick={onClose}
                  className="group flex flex-col items-center p-3 rounded-2xl border border-brand-ash/10 hover:border-brand-secondary/30 hover:shadow-xl hover:shadow-brand-secondary/5 transition-all duration-300 bg-brand-ash/5"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 bg-white">
                    <img 
                      src={cable.image} 
                      alt={cable.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-center leading-tight uppercase tracking-tight group-hover:text-brand-secondary transition-colors">
                    {cable.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: INDUSTRY SOLUTIONS (3 cols) */}
          <div className="lg:col-span-3 space-y-6 border-l border-brand-ash/10 pl-8">
            <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-brand-secondary mb-6">
              <Building2 className="w-4 h-4" /> INDUSTRY SOLUTIONS
            </h4>
            <ul className="space-y-3 text-[11px] font-bold uppercase tracking-tight">
              {[
                { name: 'Transmission and Distribution', link: '/industry/transmission-distribution' },
                { name: 'Renewable Energy', link: '/industry/renewable-energy' },
                { name: 'Power Generation', link: '/industry/power-generation' },
                { name: 'Exploration', link: '/industry/exploration' },
                { name: 'Mobility', link: '/industry/mobility' },
                { name: 'Defence', link: '/industry/defence' },
                { name: 'Manufacturing', link: '/industry/manufacturing' },
                { name: 'Infrastructure', link: '/industry/infrastructure' },
                { name: 'Harnessing', link: '/products/harnessing' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.link} 
                    onClick={onClose}
                    className="hover:text-brand-secondary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-ash group-hover:bg-brand-dark transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: STANDARDS & BROCHURES (2 cols) */}
          <div className="lg:col-span-2 space-y-8 border-l border-brand-ash/10 pl-8">
            <div>
              <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-brand-secondary mb-6">
                <Globe className="w-4 h-4" /> CABLES BY STANDARDS
              </h4>
              <ul className="space-y-4 text-[11px] font-bold uppercase tracking-tight">
                <li>
                  <Link to="/standards/indian" onClick={onClose} className="hover:text-brand-secondary transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-ash group-hover:bg-brand-dark transition-colors" />
                    Indian
                  </Link>
                </li>
                <li>
                  <Link to="/standards/international" onClick={onClose} className="hover:text-brand-secondary transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-ash group-hover:bg-brand-dark transition-colors" />
                    International (UL)
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="pt-8 border-t border-brand-ash/10">
              <Link 
                to="/brochures"
                onClick={onClose}
                className="w-full text-[10px] font-black uppercase tracking-widest bg-brand-secondary text-white px-4 py-4 rounded-xl hover:bg-brand-dark transition-all shadow-lg shadow-brand-secondary/20 flex items-center justify-center text-center"
              >
                VIEW BROCHURES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // 1. Define the initialization function
    const initTranslate = () => {
      if ((window as any).google?.translate?.TranslateElement) {
        const element = document.getElementById('google_translate_element');
        const mobileElement = document.getElementById('google_translate_element_mobile');
        
        if (element && element.innerHTML === '') {
          new (window as any).google.translate.TranslateElement(
            { pageLanguage: 'en', layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE },
            'google_translate_element'
          );
        }

        if (mobileElement && mobileElement.innerHTML === '') {
          new (window as any).google.translate.TranslateElement(
            { pageLanguage: 'en', layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE },
            'google_translate_element_mobile'
          );
        }
      }
    };

    // 2. Attach to window for the script callback
    (window as any).googleTranslateElementInit = initTranslate;

    // 3. Load the script if it doesn't exist
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).google?.translate) {
      initTranslate();
    }

    // 4. Fail-safe: Periodically check if the element is empty and init if needed
    const interval = setInterval(() => {
      if ((window as any).google?.translate) {
        initTranslate();
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      // We don't remove the script or the global function to avoid issues on navigation
    };
  }, []);

  const menuItems = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT US', link: '/about' },
    { name: 'PRODUCTS', link: '#', hasMegaMenu: true },
    { name: 'BROCHURES', link: '/brochures' },
    { name: 'GALLERY', link: '/gallery' },
    { name: 'CONTACT US', link: '/contact' },
  ];

  const NavLink = ({ item }: { item: typeof menuItems[0] }) => {
    const isExternal = item.link.startsWith('http');
    const isHash = item.link.includes('#');
    const useDarkText = true;
    
    if (item.link === '#') {
      return (
        <button 
          className={`text-[11px] font-black uppercase tracking-widest hover:text-brand-secondary transition-all flex items-center ${
            useDarkText ? 'text-brand-dark' : 'text-white'
          }`}
          onClick={(e) => e.preventDefault()}
        >
          {item.name}
          {item.hasMegaMenu && <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />}
        </button>
      );
    }

    if (isHash) {
      return (
        <a 
          href={item.link}
          className={`text-[11px] font-black uppercase tracking-widest hover:text-brand-secondary transition-all flex items-center ${
            useDarkText ? 'text-brand-dark' : 'text-white'
          }`}
        >
          {item.name}
          {item.hasMegaMenu && <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />}
        </a>
      );
    }

    return (
      <Link 
        to={item.link}
        className={`text-[11px] font-black uppercase tracking-widest hover:text-brand-secondary transition-all flex items-center ${
          useDarkText ? 'text-brand-dark' : 'text-white'
        }`}
      >
        {item.name}
        {item.hasMegaMenu && <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />}
      </Link>
    );
  };

  const useDarkText = true;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
      <nav 
        onMouseLeave={() => setIsMegaMenuOpen(false)}
        className="transition-all duration-300 ease-in-out flex items-center justify-center relative w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-[1440px] bg-white/90 backdrop-blur-md shadow-2xl border border-brand-secondary/10 px-4 lg:px-10 py-4 mt-2 md:mt-4 rounded-full"
      >
        <div className="absolute flex items-center left-4 lg:left-10">
          <Logo />
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              className="relative group h-full py-4 flex items-center"
              onMouseEnter={() => setIsMegaMenuOpen(!!item.hasMegaMenu)}
            >
              <NavLink item={item} />
            </div>
          ))}
        </div>

        {/* Center Badge for Mobile/Floating state */}
        {!isScrolled && (
          <div className="lg:hidden flex items-center">
            <div className={`px-3 py-1.5 bg-black/10 backdrop-blur-md rounded-full border border-black/5 flex items-center gap-1.5`}>
              <span className="w-1 h-1 rounded-full bg-brand-secondary animate-pulse" />
              <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${useDarkText ? 'text-brand-dark' : 'text-white'}`}>Since 1944</span>
            </div>
          </div>
        )}

        <div className="absolute hidden lg:flex items-center right-10">
          {/* Integrated Translate Button - Clean version */}
          <div className={`flex items-center gap-2 px-3 py-1.5 transition-all duration-200 hover:bg-brand-dark/5 rounded-full relative border border-brand-secondary/30 bg-white/50 backdrop-blur-sm group cursor-pointer ${useDarkText ? 'text-brand-dark' : 'text-white'}`}>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-black uppercase tracking-widest hidden xl:inline-block shrink-0">TRANSLATE</span>
            </div>
            <div id="google_translate_element" className="translate-y-[1px] scale-75 origin-right absolute inset-0 w-full h-full cursor-pointer z-10 opacity-0"></div>
          </div>
        </div>

        <div className={`absolute lg:hidden flex items-center gap-3 h-full top-0 transition-all duration-300 right-4 md:right-8`}>
          <div className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 transition-all duration-200 hover:bg-brand-dark/5 rounded-full relative border border-brand-secondary/30 bg-white/50 backdrop-blur-sm group cursor-pointer ${useDarkText ? 'text-brand-dark' : 'text-white'}`}>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest shrink-0">TRANSLATE</span>
            <div id="google_translate_element_mobile" className="translate-y-[1px] scale-75 origin-right absolute inset-0 w-full h-full cursor-pointer z-10 opacity-0"></div>
          </div>
          <button className="p-2.5 rounded-full hover:bg-white/10 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className={useDarkText ? 'text-brand-dark' : 'text-white'} /> : <Menu className={useDarkText ? 'text-brand-dark' : 'text-white'} />}
          </button>
        </div>

        {/* Desktop Mega Menu Attachment - No gap to prevent hover loss */}
        <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 glass-panel z-[60] transition-all duration-300 lg:hidden overflow-y-auto ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-10'}`}>
        <div className="flex flex-col items-center justify-center min-h-full py-20 space-y-8 px-6 text-center">
          <button className="absolute top-10 right-10 p-4" onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8 text-brand-dark" /></button>
          {menuItems.map((item) => {
            if (item.hasMegaMenu) {
              return (
                <div key={item.name} className="flex flex-col items-center w-full">
                  <button 
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    className="flex items-center gap-2 text-3xl font-black text-brand-dark hover:text-brand-secondary tracking-tighter uppercase"
                  >
                    {item.name}
                    <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-brand-secondary' : ''}`} />
                  </button>
                  
                  {/* Mobile Products Dropdown */}
                  <div className={`w-full max-w-sm overflow-hidden transition-all duration-300 ease-in-out ${isMegaMenuOpen ? 'max-h-[1200px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-brand-dark/5 shadow-inner space-y-8 text-left">
                      
                      {/* Cables by Types */}
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-black mb-4">
                          <Zap className="w-3 h-3 text-brand-secondary" /> CABLES BY TYPES
                        </h4>
                        <ul className="space-y-3 text-[14px] font-bold text-black pl-5 border-l border-brand-dark/10">
                          <li>
                            <Link 
                              to="/products/lt-power-control" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              LT Power & Control Cables
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/products/instrumentation" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Instrumentation Cables
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/products/elastomeric-silicon" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Elastomeric and Silicon Cables (upto 15 kV)
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/products/electron-beam" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Electron Beam Cables
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/products/solar-cables" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Solar Cables
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/products/wind-energy-cables" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Wind Energy Cables
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/products/overhead-conductors" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Overhead Conductors
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/products/ht-power-cables" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              HT Cables — Up to 11 kV
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/products/mvcc" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Medium Voltage Covered Conductors / Tree Spacer Cables
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/products/high-temperature" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              High Temperature Cables (ETFE / FEP / PTFE)
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/products/ul-cables" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              UL Cables (International)
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Industry Solutions */}
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-black mb-4">
                          <Zap className="w-3 h-3 text-brand-secondary" /> INDUSTRY SOLUTIONS
                        </h4>
                        <ul className="space-y-3 text-[14px] font-bold text-black pl-5 border-l border-brand-dark/10">
                          <li>
                            <Link 
                              to="/industry/transmission-distribution" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Transmission and Distribution
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/industry/renewable-energy" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Renewable Energy
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/industry/power-generation" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Power Generation
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/industry/exploration" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Exploration
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/industry/mobility" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Mobility
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/industry/defence" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Defence
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/industry/manufacturing" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Manufacturing
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/industry/infrastructure" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Infrastructure
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/products/harnessing" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Harnessing
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Cables by Standards */}
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-black mb-4">
                          <Globe className="w-3 h-3 text-brand-secondary" /> CABLES BY STANDARDS
                        </h4>
                        <ul className="space-y-3 text-[14px] font-bold text-black pl-5 border-l border-brand-dark/10">
                          <li>
                            <Link 
                              to="/standards/indian" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Indian
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/standards/international" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              International (UL)
                            </Link>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link 
                key={item.name} 
                to={item.link.startsWith('#') ? '/' + item.link : item.link}
                className="text-3xl font-black text-brand-dark hover:text-brand-secondary tracking-tighter uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
