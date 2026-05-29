import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full aspect-[2/1] lg:aspect-auto lg:h-[90vh] bg-black overflow-hidden lg:mt-20">
      <video
        src="/brand%20identity/full%20width%20NiccoCables_WebBanner.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full block object-cover object-center"
      />
    </section>
  );
};

export default Hero;
