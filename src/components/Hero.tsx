import React from 'react';
import HeroImage from '../assets/namibia-purple-and-orange-skies.png';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[140px] md:h-[180px] lg:h-[220px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Object Fit */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          alt="Namibian Landscape"
          className="w-full h-full object-cover object-top"
        />
        {/* Slightly lighter overlays for better visibility */}
        <div className="absolute inset-0 bg-primary-dark/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/50 via-transparent to-primary-dark/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-tight">
          Welcome!
        </h1>
      </div>
    </section>
  );
};

export default Hero;
