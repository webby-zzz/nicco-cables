import React from 'react';
import { Award, ShieldCheck, Zap } from 'lucide-react';

const TrustAnchors: React.FC = () => {
  return (
    <section className="bg-brand-ash py-6 border-b border-black/5 relative z-20">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-black/10">
          <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0 first:pt-0">
            <Award className="w-8 h-8 text-brand-secondary flex-shrink-0" />
            <div>
              <h4 className="text-sm font-black text-brand-dark uppercase tracking-wider">80 Years of Legacy</h4>
              <p className="text-xs text-brand-muted font-medium">Trusted manufacturing since 1944</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
            <ShieldCheck className="w-8 h-8 text-brand-secondary flex-shrink-0" />
            <div>
              <h4 className="text-sm font-black text-brand-dark uppercase tracking-wider">NABL-Accredited</h4>
              <p className="text-xs text-brand-muted font-medium">In-house R&D & testing lab</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
            <Zap className="w-8 h-8 text-brand-secondary flex-shrink-0" />
            <div>
              <h4 className="text-sm font-black text-brand-dark uppercase tracking-wider">3 MeV Accelerator</h4>
              <p className="text-xs text-brand-muted font-medium">First private sector in India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAnchors;
