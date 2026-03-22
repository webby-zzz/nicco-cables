
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Clientele from './components/Clientele';
import ExhibitionBanner from './components/ExhibitionBanner';
import WhyNicco from './components/WhyNicco';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BrochuresPage from './components/BrochuresPage';
import GalleryPage from './components/GalleryPage';
import LTPowerControlPage from './components/LTPowerControlPage';
import TransmissionDistributionPage from './components/TransmissionDistributionPage';
import IndianStandardsPage from './components/IndianStandardsPage';
import PrivacyCompliancePage from './components/PrivacyCompliancePage';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Overview />
      <Clientele />
      <WhyNicco />
      <ExhibitionBanner />
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
          <Route path="/industry/transmission-distribution" element={<TransmissionDistributionPage />} />
          <Route path="/standards/indian" element={<IndianStandardsPage />} />
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
