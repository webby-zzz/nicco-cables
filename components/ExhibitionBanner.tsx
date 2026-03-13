import React from 'react';

const ExhibitionBanner: React.FC = () => {
  return (
    <section className="w-full bg-brand-dark py-64 flex items-center justify-center border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white/20 tracking-[0.2em]">
          Exhibition Section
        </h2>
        <p className="mt-4 text-brand-secondary/40 font-bold uppercase tracking-widest text-xs">
          COMING SOON
        </p>
      </div>
    </section>
  );
};

export default ExhibitionBanner;
