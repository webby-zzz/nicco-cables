
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Shield, Sun, Building2, HardHat, Globe, LayoutGrid } from 'lucide-react';

const Logo = ({ isScrolled }: { isScrolled: boolean }) => (
  <Link to="/" className="flex items-center group cursor-pointer">
    <div className={`${isScrolled ? 'h-12 md:h-16' : 'h-14 md:h-20'} w-auto transition-all duration-200 group-hover:scale-105`}>
      <img 
        src="/brand identity/Nicco logo 1.5ft X 1.5ft-01 (1).png" 
        alt="NICCO Logo" 
        className="h-full w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  </Link>
);

const MegaMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={`absolute top-full left-0 w-full pt-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
      <div className="bg-brand-dark text-white shadow-2xl overflow-hidden rounded-[2.5rem] border border-white/10 max-h-[85vh] overflow-y-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-16 p-12 lg:px-16 lg:py-16">
          
          {/* Column 1: CABLES BY TYPES */}
          <div className="space-y-8">
            <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white mb-8">
              <Zap className="w-4 h-4 text-brand-secondary" /> CABLES BY TYPES
            </h4>
            <ul className="space-y-3 text-sm text-white font-medium">
              <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">
                <Link to="/products/lt-power-control">LT Power & Control</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">Instrumentation Cables</li>
              <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">Elastomeric & Silicon</li>
              <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">Electron Beam Cables</li>
              <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">Overhead Conductors</li>
              <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">HT Cables upto 33kV</li>
              <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">High Temp (PTFE/FEP)</li>
            </ul>
          </div>

          {/* Column 2 & 3: INDUSTRY SOLUTIONS */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white mb-8">
              <Zap className="w-4 h-4 text-brand-secondary" /> INDUSTRY SOLUTIONS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
              <ul className="space-y-3 text-sm text-white font-medium">
                <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">
                  <Link to="/industry/transmission-distribution">Transmission and Distribution</Link>
                </li>
                <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">Renewable Energy (Solar, Wind)</li>
                <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">Power Generation</li>
                <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">Exploration (Oil & Gas, Mining)</li>
                <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">Mobility (Aerospace, Marine)</li>
              </ul>
              <ul className="space-y-3 text-sm text-white font-medium">
                <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">Defence (Submarine, Tactical)</li>
                <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">Manufacturing & Process</li>
                <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">Infrastructure (Metro, Tunnels)</li>
                <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3">Harnessing</li>
              </ul>
            </div>
          </div>

          {/* Column 4: CABLES BY STANDARDS */}
          <div className="space-y-12">
            <div>
              <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white mb-8">
                <Globe className="w-4 h-4 text-brand-secondary" /> CABLES BY STANDARDS
              </h4>
              <ul className="space-y-4 text-sm text-white font-medium">
                <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3 font-bold">
                  <Link to="/standards/indian">Indian Standards (IS)</Link>
                </li>
                <li className="hover:text-white transition-colors cursor-pointer border-l-2 border-transparent hover:border-brand-secondary pl-3 font-bold">International (IEC, UL, CE)</li>
              </ul>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <Link 
                to="/brochures"
                className="w-full text-xs font-black uppercase tracking-widest bg-brand-secondary text-white px-6 py-4 rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-lg shadow-brand-secondary/20 flex items-center justify-center"
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
      const element = document.getElementById('google_translate_element');
      const mobileElement = document.getElementById('google_translate_element_mobile');
      
      if (element && element.innerHTML === '' && (window as any).google?.translate?.TranslateElement) {
        try {
          new (window as any).google.translate.TranslateElement(
            { 
              pageLanguage: 'en', 
              layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false 
            },
            'google_translate_element'
          );
        } catch (error) {
          console.error('Google Translate initialization failed:', error);
        }
      }

      if (mobileElement && mobileElement.innerHTML === '' && (window as any).google?.translate?.TranslateElement) {
        try {
          new (window as any).google.translate.TranslateElement(
            { 
              pageLanguage: 'en', 
              layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false 
            },
            'google_translate_element_mobile'
          );
        } catch (error) {
          console.error('Google Translate mobile initialization failed:', error);
        }
      }
    };

    // 2. Attach to window for the script callback
    (window as any).googleTranslateElementInit = initTranslate;

    // 3. Load the script if it doesn't exist
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if ((window as any).google?.translate) {
      // If script is already there, try to init
      initTranslate();
    }

    // 4. Fail-safe: Periodically check if the element is empty and init if needed
    // This handles cases where React re-renders or the script loads but doesn't fire the callback
    const interval = setInterval(() => {
      const element = document.getElementById('google_translate_element');
      const mobileElement = document.getElementById('google_translate_element_mobile');
      
      const isDesktopEmpty = element && element.innerHTML === '';
      const isMobileEmpty = mobileElement && mobileElement.innerHTML === '';

      if ((isDesktopEmpty || isMobileEmpty) && (window as any).google?.translate) {
        initTranslate();
      } else if (element && element.innerHTML !== '' && mobileElement && mobileElement.innerHTML !== '') {
        clearInterval(interval);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
      // We don't remove the script or the global function to avoid issues on navigation
    };
  }, []);

  const menuItems = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT US', link: '/about' },
    { name: 'PRODUCTS', link: '/#products', hasMegaMenu: true },
    { name: 'BROCHURES', link: '/brochures' },
    { name: 'GALLERY', link: '/gallery' },
    { name: 'CONTACT US', link: '/contact' },
  ];

  const NavLink = ({ item }: { item: typeof menuItems[0] }) => {
    const isExternal = item.link.startsWith('http');
    const isHash = item.link.includes('#');
    const useDarkText = true;
    
    if (isHash) {
      return (
        <a 
          href={item.link}
          className={`text-[12px] font-black uppercase tracking-widest hover:text-brand-secondary transition-all flex items-center ${
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
        className={`text-[12px] font-black uppercase tracking-widest hover:text-brand-secondary transition-all flex items-center ${
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
        onMouseEnter={() => isMegaMenuOpen && setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
        className={`transition-all duration-300 ease-in-out flex items-center justify-center relative ${
          isScrolled 
            ? 'w-[calc(100%-2rem)] max-w-7xl bg-white/90 backdrop-blur-md shadow-2xl border border-brand-secondary/10 px-10 lg:py-4 py-6 mt-4 rounded-full' 
            : 'w-[calc(100%-2rem)] max-w-7xl bg-white/90 backdrop-blur-md border border-brand-secondary/10 shadow-xl px-10 py-6 mt-6 rounded-full'
        }`}
      >
        <div className={`absolute flex items-center transition-all duration-300 ${isScrolled ? 'left-10' : 'left-10'}`}>
          <Logo isScrolled={isScrolled} />
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              className="relative group h-full py-4 flex items-center"
              onMouseEnter={() => item.hasMegaMenu && setIsMegaMenuOpen(true)}
            >
              <NavLink item={item} />
            </div>
          ))}
        </div>

        {/* Center Badge for Mobile/Floating state */}
        {!isScrolled && (
          <div className="lg:hidden flex items-center">
            <div className={`px-5 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2.5`}>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
              <span className={`text-xs font-black uppercase tracking-[0.25em] ${useDarkText ? 'text-brand-dark' : 'text-white'}`}>Eight Decades of Trust & Innovation</span>
            </div>
          </div>
        )}

        <div className={`absolute hidden lg:flex items-center transition-all duration-300 ${isScrolled ? 'right-10' : 'right-10'}`}>
          {/* Integrated Translate Button - Compact version */}
          <div className={`flex items-center gap-2 px-3 py-1.5 transition-all duration-200 hover:bg-white/5 rounded-lg relative ${useDarkText ? 'text-brand-dark hover:bg-brand-dark/5' : 'text-white'}`}>
            <div className="flex items-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
              <Globe className="w-3 h-3 shrink-0" />
              <span className="text-[9px] font-black uppercase tracking-widest hidden xl:inline-block shrink-0">TRANSLATE</span>
            </div>
            <div id="google_translate_element" className="translate-y-[1px] scale-75 origin-right"></div>
          </div>
        </div>

        <div className={`absolute lg:hidden flex items-center gap-2 h-full top-0 transition-all duration-300 ${isScrolled ? 'right-4' : 'right-4'}`}>
          <div id="google_translate_element_mobile" className="scale-75 origin-right"></div>
          <button className="p-2.5 rounded-full hover:bg-white/10 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className={useDarkText ? 'text-brand-dark' : 'text-white'} /> : <Menu className={useDarkText ? 'text-brand-dark' : 'text-white'} />}
          </button>
        </div>

        {/* Desktop Mega Menu Attachment - No gap to prevent hover loss */}
        <MegaMenu isOpen={isMegaMenuOpen} />
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
                        <ul className="space-y-3 text-sm font-bold text-black pl-5 border-l border-brand-dark/10">
                          <li>
                            <Link 
                              to="/products/lt-power-control" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              LT Power & Control
                            </Link>
                          </li>
                          <li className="hover:text-brand-secondary transition-colors cursor-pointer">Instrumentation Cables</li>
                          <li className="hover:text-brand-secondary transition-colors cursor-pointer">Elastomeric & Silicon</li>
                          <li className="hover:text-brand-secondary transition-colors cursor-pointer">Electron Beam Cables</li>
                          <li className="hover:text-brand-secondary transition-colors cursor-pointer">Overhead Conductors</li>
                          <li className="hover:text-brand-secondary transition-colors cursor-pointer">HT Cables upto 33kV</li>
                        </ul>
                      </div>

                      {/* Industry Solutions */}
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-black mb-4">
                          <Zap className="w-3 h-3 text-brand-secondary" /> INDUSTRY SOLUTIONS
                        </h4>
                        <ul className="space-y-3 text-sm font-bold text-black pl-5 border-l border-brand-dark/10">
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
                          <li className="hover:text-brand-secondary transition-colors cursor-pointer">Renewable Energy (Solar, Wind)</li>
                          <li className="hover:text-brand-secondary transition-colors cursor-pointer">Power Generation</li>
                          <li className="hover:text-brand-secondary transition-colors cursor-pointer">Exploration (Oil & Gas, Mining)</li>
                          <li className="hover:text-brand-secondary transition-colors cursor-pointer">Mobility (Aerospace, Marine)</li>
                          <li className="hover:text-brand-secondary transition-colors cursor-pointer">Defence (Submarine, Tactical)</li>
                        </ul>
                      </div>

                      {/* Cables by Standards */}
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-black mb-4">
                          <Globe className="w-3 h-3 text-brand-secondary" /> CABLES BY STANDARDS
                        </h4>
                        <ul className="space-y-3 text-sm font-bold text-black pl-5 border-l border-brand-dark/10">
                          <li>
                            <Link 
                              to="/standards/indian" 
                              className="block hover:text-brand-secondary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setIsMegaMenuOpen(false);
                              }}
                            >
                              Indian Standards (IS)
                            </Link>
                          </li>
                          <li className="hover:text-brand-secondary transition-colors cursor-pointer">International (IEC, UL, CE)</li>
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
