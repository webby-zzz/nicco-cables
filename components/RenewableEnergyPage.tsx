import React, { useState, useEffect } from 'react';
import BrochureDownloadModal from './BrochureDownloadModal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Breadcrumbs from './Breadcrumbs';
import SplitTitle from './SplitTitle';
import ImageCarousel from './ImageCarousel';

const TechnicalTable: React.FC<{ title: string; data: { label: string; value: React.ReactNode }[] }> = ({ title, data }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-brand-dark mb-6">
      {title}
    </h3>
    <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row border-b last:border-b-0 border-gray-200">
          <div className="w-full sm:w-1/3 bg-gray-50 py-3 px-4 sm:px-6 font-bold text-brand-dark text-sm sm:text-base border-b sm:border-b-0 sm:border-r border-gray-200 border-l-4 border-l-brand-secondary">
            {item.label}
          </div>
          <div className="w-full sm:w-2/3 py-3 px-4 sm:px-6 text-sm sm:text-base text-gray-700 font-normal leading-relaxed break-words">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RenewableEnergyPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ title: '', url: '' });

  const brochureMapping: Record<string, { title: string; url: string }> = {
    "LT Power & Control Cables": {
      title: "LT Power & Control Cables",
      url: "/brochures/Long LT Power & Control Cable-compressed\u00A0(1).pdf"
    },
    "HT Cables upto 33 kV": {
      title: "HT Cables",
      url: "/brochures/HT Cables upto 11KV - NICCO  (5.83 x 8.27 in) (1)_compressed.pdf"
    },
    "HT Power Cables upto 33kV": {
      title: "HT Cables",
      url: "/brochures/HT Cables upto 11KV - NICCO  (5.83 x 8.27 in) (1)_compressed.pdf"
    },
    "Instrumentation Cables": {
      title: "Instrumentation Cables",
      url: "/brochures/INSTRUMENTATION CABLES - NICCO_compressed.pdf"
    },
    "Fire Resistant & Fire Survival Cables": {
      title: "Fire Survival Cables",
      url: "/brochures/Fire Survival Cables rated at 950°C - NICCO_compressed.pdf"
    },
    "Elastomeric Mining Cables": {
      title: "Elastomeric Insulated Cables",
      url: "/brochures/_NICCO - ELASTOMERIC INSULATED CABLES_compressed.pdf"
    },
    "Elastomeric & Silicon Cables (Up to 15 kV)": {
      title: "Elastomeric Insulated Cables",
      url: "/brochures/_NICCO - ELASTOMERIC INSULATED CABLES_compressed.pdf"
    },
    "Ethernet / LAN Cables": {
      title: "Data Centre Cables",
      url: "/brochures/Data Centre_compressed.pdf"
    },
    "Solar Cables": {
      title: "Wind Energy and Solar Cables",
      url: "/brochures/Wind Energy and Solar Cables (1)_compressed.pdf"
    },
    "Wind Energy Cables": {
      title: "Wind Energy and Solar Cables",
      url: "/brochures/Wind Energy and Solar Cables (1)_compressed.pdf"
    },
    "Automotive Cables": {
      title: "Automotive Cables",
      url: "/brochures/AUTOMOTIVE CABLES_compressed.pdf"
    },
    "Shipbuilding & Marine Cables": {
      title: "Shipbuilding Cables",
      url: "/brochures/SHIPBUILDING CABLES_compressed.pdf"
    }
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "solar",
      title: "Solar Cables",
      description: "Engineered for photovoltaic systems, our Solar Cables ensure reliable power transmission across rooftop and industrial solar installations with a service life of 25+ years. Compliant with IS 17293, IEC 62893, and EN 50618.",
      technical: [
        { label: "Construction", value: "Flexible stranded conductor with cross-linked insulation and outer sheath" },
        { label: "Voltage Rating", value: "Up to 1.0 kV AC / 1.5 kV DC" },
        { label: "Conductor", value: "Electrolytic Tinned Copper — Class 5 / Class 6" },
        { label: "Insulation", value: "Cross-Linked Polyolefin (XLPO) — 120°C rated" },
        { label: "Sheath", value: "UV Resistant, Halogen Free Compound" },
        { label: "Operating Temperature", value: "–40°C to +120°C" },
        { label: "Standards", value: "IS 17293, IEC 62893, EN 50618" },
        { label: "Special Features", value: "UV, ozone & weather resistant, highly flexible, halogen free, flame retardant" }
      ],
      variants: [
        { label: "Voltage Options", value: "Up to 1.0 kV AC / 1.5 kV DC" },
        { label: "Applications", value: "Solar panel interconnection, DC/AC connections, combiner boxes, inverters, rooftop and industrial solar installations" }
      ]
    },
    {
      id: "wind",
      title: "Wind Energy Cables",
      description: "Built for onshore and offshore wind turbine systems, our Wind Energy Cables withstand continuous vibration, torsional movement, UV exposure, and extreme temperatures — with a service life of 20–25+ years. Compliant with IEC 60502, IEC 60332, EN 50525, and DNV Offshore standards.",
      technical: [
        { label: "Construction", value: "Fine stranded flexible conductor with cross-linked insulation and torsion-optimised outer sheath" },
        { label: "Voltage Rating", value: "Up to 0.6/1 kV (LV) | 6/10 kV (MV options available)" },
        { label: "Conductor", value: "Electrolytic Tinned Copper — Class 5 / Class 6 (as per IEC 60228)" },
        { label: "Insulation", value: "XLPE / EPR / Special Elastomer" },
        { label: "Compound Sheath", value: "UV Resistant, Halogen Free, Torsion-Resistant PUR or Elastomer Compound" },
        { label: "Operating Temperature", value: "–40°C to +90°C (standard) | Up to +120°C (special grades)" },
        { label: "Standards", value: "IEC 60502, IEC 60332, EN 50525, DNV Offshore Compliance (where applicable)" },
        { label: "Special Features", value: "High torsion resistance, UV, ozone & weather resistant, FR / LSZH options, oil & grease resistant, suitable for vertical suspension in tower" }
      ],
      variants: [
        { label: "Voltage Options", value: "LV up to 0.6/1 kV | MV up to 6/10 kV" },
        { label: "Applications", value: "Generator to transformer transmission, tower loop connections, pitch control systems, instrumentation wiring, grid transmission" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 md:pt-36 pb-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        
        <Breadcrumbs />

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md mb-12 border border-gray-100 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 text-brand-secondary mb-4">
              <div className="h-[1px] w-8 bg-brand-secondary" />
              <span className="text-xs font-black uppercase tracking-widest">INDUSTRY SOLUTIONS</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black text-brand-dark tracking-tighter mb-6 leading-[1.1]">
              <SplitTitle title="Renewable Energy" />
            </h1>
            <p className="text-base text-black leading-relaxed font-medium">
              Purpose-built for renewable energy systems, our Solar and Wind Energy Cables are engineered to deliver reliable power transmission in demanding outdoor environments. Designed for long service life, high flexibility, and resistance to UV, moisture, and temperature extremes.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-64 md:h-80 bg-brand-ash rounded-[2rem] shadow-lg overflow-hidden flex items-center justify-center bg-white border border-gray-100">
            <ImageCarousel 
              images={[
                "/Product Images/Industry Solution/Renewable energy - solar & wind/photovoltaics-solar-power-station-energy-from-natural.webp",
                "/Product Images/Industry Solution/Renewable energy - solar & wind/shot-wind-turbines-mountains.webp",
                "/Product Images/Industry Solution/Renewable energy - solar & wind/solar-energy-generated-farm.webp",
                "/Product Images/Industry Solution/Renewable energy - solar & wind/wind-turbines-agricultural-field-summer-day-energy-production-clean-renewable-energy.webp"
              ]} 
            />
          </div>
        </motion.div>

        {/* Product Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md border border-gray-100"
            >
              <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-6 tracking-tight">
                {section.title}
              </h2>
              <p className="text-base text-black font-medium leading-relaxed mb-10">
                {section.description}
              </p>

              {brochureMapping[section.title] && (
                <div className="mb-8 flex justify-start">
                  <button 
                    onClick={() => {
                      setModalProps({
                        title: brochureMapping[section.title].title,
                        url: brochureMapping[section.title].url
                      });
                      setIsModalOpen(true);
                    }}
                    className="inline-flex items-center gap-2 bg-brand-secondary/10 hover:bg-brand-secondary text-brand-secondary hover:text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-brand-secondary/20 hover:shadow-lg hover:shadow-brand-secondary/20"
                  >
                    Download {brochureMapping[section.title].title} Brochure <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div className="flex flex-col gap-8">
                {section.id === "wind" && (
                  <div className="mb-4 bg-gray-50 border border-gray-200 rounded-[2rem] p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-wider">Torsion Test Requirement (Wind Turbine Cables)</h3>
                    <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed mb-6">
                      A torsion test shall be carried out to verify the mechanical performance and durability of the proposed cable design under simulated wind turbine operating conditions.
                    </p>
                    
                    <h4 className="text-lg font-bold text-brand-dark mb-3 uppercase tracking-wider">Test Procedure</h4>
                    <p className="text-sm md:text-base text-gray-700 mb-4">The torsion test shall consist of the following two stages:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h5 className="font-bold text-brand-secondary mb-3 uppercase text-sm tracking-widest">Low Temperature Torsion Test</h5>
                        <p className="text-sm text-gray-700 mb-4 leading-relaxed">Torsion cycles shall be applied at the following temperatures depending on cable type:</p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 mb-4">
                          <li><strong>LT Version Cable:</strong> -40°C ± 5°C</li>
                          <li><strong>STD Version Cable:</strong> -20°C ± 5°C</li>
                          <li><strong>TT Version Cable:</strong> 0°C ± 2°C</li>
                        </ul>
                        <p className="text-sm text-gray-700 font-bold bg-gray-50 p-2 rounded border border-gray-100 inline-block">Number of Cycles: 270 torsion cycles</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                        <h5 className="font-bold text-brand-secondary mb-3 uppercase text-sm tracking-widest">Ambient Temperature Torsion Test</h5>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-3 mb-4">
                          <li><strong>Temperature:</strong> 20°C ± 15°C</li>
                          <li><strong>Number of Cycles:</strong> 5000 torsion cycles</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-brand-dark mb-3 uppercase tracking-wider">Test Sample Requirements</h4>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6 space-y-3">
                       <p className="text-sm text-gray-700 leading-relaxed">The torsion test at 20°C shall be performed on a cable sample of minimum 1 meter length.</p>
                       <p className="text-sm text-gray-700 leading-relaxed">The sample length for tests conducted at 0°C, -20°C, or -40°C shall be mutually agreed between the supplier and the client during the design phase.</p>
                    </div>
                    
                    <div className="p-5 bg-brand-secondary/5 rounded-xl border-l-4 border-brand-secondary">
                       <p className="text-sm md:text-base font-bold text-brand-dark leading-relaxed">The cable shall demonstrate reliable performance under torsional stress conditions typically encountered in wind turbine tower loop applications.</p>
                    </div>
                  </div>
                )}
                <TechnicalTable title="Technical Details" data={section.technical} />
                <TechnicalTable title="Sizes & Variants" data={section.variants} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-secondary rounded-[2rem] p-8 md:p-12 mt-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Need more information?</h2>
            <p className="text-white/90 text-base font-medium">Contact our team or download our product brochure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link 
              to="/brochures"
              className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Download Brochure <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="bg-white text-brand-secondary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Connect with Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
      <BrochureDownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        brochureTitle={modalProps.title} 
        pdfUrl={modalProps.url} 
      />
    </div>
  );
};

export default RenewableEnergyPage;
