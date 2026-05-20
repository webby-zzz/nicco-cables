
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden lg:h-screen">
      <div className="w-full h-auto lg:h-full relative flex items-center justify-center">
        <video
          src="/brand identity/new Nicco Cables Web Banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto lg:w-full lg:h-full block object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
