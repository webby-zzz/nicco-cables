
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="w-full relative">
        <video
          src="/brand identity/Nicco Cables Web Banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
