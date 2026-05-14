
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const formatName = (name: string) => {
    const productNames: { [key: string]: string } = {
      'lt-power-control': 'LT Power & Control Cables',
      'instrumentation': 'Instrumentation Cables',
      'elastomeric-silicon': 'Elastomeric and Silicon Cables (upto 15 kV)',
      'electron-beam': 'Electron Beam Cables',
      'solar-cables': 'Solar Cables',
      'wind-energy-cables': 'Wind Energy Cables',
      'overhead-conductors': 'Overhead Transmission Conductors (Bare Conductors)',
      'ht-power-cables': 'HT Cables — Up to 11 kV',
      'mvcc': 'Medium Voltage Covered Conductors / Tree Spacer Cables',
      'high-temperature': 'High Temperature Cables (ETFE / FEP / PTFE)',
      'ul-cables': 'UL Cables (International)',
      'data-ethernet': 'Data & Ethernet Cables',
      'rf-thermocouple': 'RF & Thermocouple Cables — Pressure Tight (PT) / RF Cables',
      'thermocouple': 'Thermocouple Extension & Compensating Cables',
      'fire-survival': 'Fire Resistant & Fire Survival Cables',
      'harnessing': 'Harnessing',
      'transmission-distribution': 'Transmission and Distribution',
      'renewable-energy': 'Renewable Energy',
      'power-generation': 'Power Generation',
      'exploration': 'Exploration',
      'mobility': 'Mobility',
      'defence': 'Defence',
      'manufacturing': 'Manufacturing',
      'infrastructure': 'Infrastructure',
      'indian': 'Indian Standards',
      'international': 'International Standards (UL)'
    };

    if (productNames[name]) return productNames[name].toUpperCase();

    return name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="flex mb-8 overflow-x-auto no-scrollbar whitespace-nowrap" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest">
        <li>
          <Link to="/" className="text-brand-secondary hover:text-brand-dark transition-colors flex items-center gap-1">
            <Home className="w-3 h-3" />
            <span>HOME</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-brand-ash" />
              {last ? (
                <span className="text-brand-dark">{formatName(value)}</span>
              ) : (
                <Link to={to} className="text-brand-secondary hover:text-brand-dark transition-colors">
                  {formatName(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
