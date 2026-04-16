
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Clientele from './components/Clientele';
import WhyNicco from './components/WhyNicco';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BrochuresPage from './components/BrochuresPage';
import GalleryPage from './components/GalleryPage';
import LTPowerControlPage from './components/LTPowerControlPage';
import InstrumentationCablesPage from './components/InstrumentationCablesPage';
import ElastomericSiliconPage from './components/ElastomericSiliconPage';
import OverheadConductorsPage from './components/OverheadConductorsPage';
import MVCCPage from './components/MVCCPage';
import ElectronBeamCablesPage from './components/ElectronBeamCablesPage';
import HighTemperatureCablesPage from './components/HighTemperatureCablesPage';
import FireSurvivalCablesPage from './components/FireSurvivalCablesPage';
import HTPowerCablesPage from './components/HTPowerCablesPage';
import SolarCablesPage from './components/SolarCablesPage';
import WindEnergyCablesPage from './components/WindEnergyCablesPage';
import ShipbuildingMarinePage from './components/ShipbuildingMarinePage';
import AutomotiveCablesPage from './components/AutomotiveCablesPage';
import CoaxialCablesPage from './components/CoaxialCablesPage';
import RFThermocoupleCablesPage from './components/RFThermocoupleCablesPage';
import ThermocoupleCablesPage from './components/ThermocoupleCablesPage';
import DataEthernetCablesPage from './components/DataEthernetCablesPage';
import HarnessingPage from './components/HarnessingPage';
import HybridCompositeCablesPage from './components/HybridCompositeCablesPage';
import TransmissionDistributionPage from './components/TransmissionDistributionPage';
import RenewableEnergyPage from './components/RenewableEnergyPage';
import PowerGenerationPage from './components/PowerGenerationPage';
import ExplorationPage from './components/ExplorationPage';
import MobilityPage from './components/MobilityPage';
import DefencePage from './components/DefencePage';
import ManufacturingPage from './components/ManufacturingPage';
import InfrastructurePage from './components/InfrastructurePage';
import IndianStandardsPage from './components/IndianStandardsPage';
import InternationalStandardsPage from './components/InternationalStandardsPage';
import PrivacyCompliancePage from './components/PrivacyCompliancePage';
import ULCablesPage from './components/ULCablesPage';
import { X } from 'lucide-react';

const HomePage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasRegistered = localStorage.getItem('nicco_elasia_registered');
    if (hasRegistered) return;

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleRegisterClick = () => {
    localStorage.setItem('nicco_elasia_registered', 'true');
    setShowPopup(false);
    window.open('https://www.elasiaexpo.com/VisitorsRegistration', '_blank');
  };

  return (
    <main>
      <Hero />
      <Overview />
      <Clientele />
      <WhyNicco />
      <Certifications />

      {/* Elasia Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col">
              <div className="relative aspect-square w-full">
                <img 
                  src="/brand identity/ELASIA 2026 - 1080px X 1080px (6).jpg.jpeg" 
                  alt="ELASIA 2026" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-white flex flex-col items-center">
                <button 
                  onClick={handleRegisterClick}
                  className="w-full sm:w-auto px-10 py-4 bg-brand-secondary text-white font-black uppercase tracking-widest rounded-full hover:bg-brand-dark transition-all shadow-xl shadow-brand-secondary/20 transform hover:scale-105 active:scale-95 text-sm"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <div className="min-h-screen bg-white selection:bg-brand-secondary selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/brochures" element={<BrochuresPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/products/lt-power-control" element={<LTPowerControlPage />} />
          <Route path="/products/instrumentation" element={<InstrumentationCablesPage />} />
          <Route path="/products/elastomeric-silicon" element={<ElastomericSiliconPage />} />
          <Route path="/products/overhead-conductors" element={<OverheadConductorsPage />} />
          <Route path="/products/mvcc" element={<MVCCPage />} />
          <Route path="/products/electron-beam" element={<ElectronBeamCablesPage />} />
          <Route path="/products/high-temperature" element={<HighTemperatureCablesPage />} />
          <Route path="/products/fire-survival" element={<FireSurvivalCablesPage />} />
          <Route path="/products/ht-power-cables" element={<HTPowerCablesPage />} />
          <Route path="/products/solar-cables" element={<SolarCablesPage />} />
          <Route path="/products/wind-energy-cables" element={<WindEnergyCablesPage />} />
          <Route path="/products/shipbuilding-marine" element={<ShipbuildingMarinePage />} />
          <Route path="/products/automotive" element={<AutomotiveCablesPage />} />
          <Route path="/products/coaxial" element={<CoaxialCablesPage />} />
          <Route path="/products/rf-thermocouple" element={<RFThermocoupleCablesPage />} />
          <Route path="/products/thermocouple" element={<ThermocoupleCablesPage />} />
          <Route path="/products/data-ethernet" element={<DataEthernetCablesPage />} />
          <Route path="/products/harnessing" element={<HarnessingPage />} />
          <Route path="/products/hybrid-composite" element={<HybridCompositeCablesPage />} />
          <Route path="/products/ul-cables" element={<ULCablesPage />} />
          <Route path="/industry/transmission-distribution" element={<TransmissionDistributionPage />} />
          <Route path="/industry/renewable-energy" element={<RenewableEnergyPage />} />
          <Route path="/industry/power-generation" element={<PowerGenerationPage />} />
          <Route path="/industry/exploration" element={<ExplorationPage />} />
          <Route path="/industry/mobility" element={<MobilityPage />} />
          <Route path="/industry/defence" element={<DefencePage />} />
          <Route path="/industry/manufacturing" element={<ManufacturingPage />} />
          <Route path="/industry/infrastructure" element={<InfrastructurePage />} />
          <Route path="/standards/indian" element={<IndianStandardsPage />} />
          <Route path="/standards/international" element={<InternationalStandardsPage />} />
          <Route path="/privacy-compliance" element={<PrivacyCompliancePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
