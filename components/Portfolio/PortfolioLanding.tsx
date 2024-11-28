import React from 'react';
import { mainFont } from '../UI/Mainfontt';
import dynamic from 'next/dynamic';

// Dynamically import HeroGrid with no SSR to avoid hydration issues
const HeroGrid = dynamic(() => import('./HeroGrid'), { ssr: false });

const PortfolioLanding = () => {
  return (
    <section className="relative w-full min-h-[1132px] bg-[#000D0F] overflow-hidden">
      {/* Main Text Content */}
      <div className="absolute w-full max-w-[1122px] h-[190px] left-1/2 -translate-x-1/2 top-[250px] px-4">
        <h1 style={{ fontFamily: mainFont.style.fontFamily }} className="text-[clamp(48px,5vw,96px)] leading-[1] text-center font-bold text-white">
          Creative Excellence <br /> in Action
        </h1>
      </div>

      <div className="absolute w-full max-w-[1254px] left-1/2 -translate-x-1/2 top-[488px] px-6">
        <p className="font-secondaryFont text-[clamp(16px,1.25vw,20px)] leading-[1.5] text-center text-white">
          Browse through our portfolio to see examples of our work across various industries.
          Each project highlights our commitment to delivering top-notch web design, app development,
          branding, and digital marketing solutions.
        </p>
      </div>

      {/* 3D Grid Animation */}
      <div className="absolute w-[calc(100%-2rem)] max-w-[84%] h-[720px] left-1/2 -translate-x-1/2 top-[638px] rounded-[clamp(30px,4vw,60px)] overflow-hidden bg-gradient-to-b from-[#000D0F]/50 to-[#000D0F]/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[rgba(137,226,255,0.03)] rounded-[clamp(30px,4vw,60px)]" />
        <HeroGrid />
      </div>
    </section>
  );
};

export default PortfolioLanding;
