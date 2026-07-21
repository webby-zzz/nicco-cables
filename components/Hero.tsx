import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full aspect-[1920/780] max-h-[90vh] bg-black overflow-hidden lg:mt-20">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full block object-cover object-center"
      >
        <source src="/brand%20identity/hero-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;
