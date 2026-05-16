
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustAnchors from './components/TrustAnchors';
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
  return (
    <main>
      <Hero />
      <TrustAnchors />
      <Overview />
      <Clientele />
      <WhyNicco />
      <Certifications />
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
          <Route path="/products/Elastomeric-silicon" element={<ElastomericSiliconPage />} />
          <Route path="/products/overhead-conductors" element={<OverheadConductorsPage />} />
          <Route path="/products/mvcc" element={<MVCCPage />} />
          <Route path="/products/Electron-Beam" element={<ElectronBeamCablesPage />} />
          <Route path="/products/high-temperature" element={<HighTemperatureCablesPage />} />
          <Route path="/products/Fire-Survival" element={<FireSurvivalCablesPage />} />
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
