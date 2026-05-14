import React, { useEffect } from 'react';
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
    <div className="overflow-x-auto no-scrollbar">
      <table className="w-full text-left border-collapse border border-gray-200 bg-white">
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <th className="py-4 px-6 text-base font-bold text-brand-dark w-1/3 align-top border-r border-gray-200">
                {item.label}
              </th>
              <td className="py-4 px-6 text-base text-gray-700 font-normal align-top leading-relaxed">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const RenewableEnergyPage: React.FC = () => {
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
    <div className="bg-white min-h-screen pt-28 md:pt-36 pb-16">
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

              <div className="flex flex-col gap-8">
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
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default RenewableEnergyPage;
