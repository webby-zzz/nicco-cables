import React from 'react';

const ExhibitionBanner: React.FC = () => {
  return (
    <section className="w-full bg-brand-dark flex flex-col items-center border-y border-white/5">
      <div className="w-full py-8 text-center">
        <h2 className="text-xs font-bold text-brand-secondary uppercase tracking-widest">
          UPCOMING EXHIBITION
        </h2>
      </div>
      <div className="w-full">
        <img 
          src="/brand identity/exhibition banner.jpeg" 
          alt="Exhibition Banner" 
          className="w-full h-auto block"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

export default ExhibitionBanner;
