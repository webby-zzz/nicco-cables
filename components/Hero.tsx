
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden aspect-video lg:mt-20">
      <div className="w-full h-full relative flex items-center justify-center">
        <video
          src="/brand%20identity/Nicco%20Cables%20Web%20Banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full block object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
