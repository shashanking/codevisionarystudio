import React from 'react';
import { mainFont } from '@/components/UI/Mainfontt';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Client logos array
const clientLogos = [
  {
    image: "/assets/Kaltech.png",
    alt: "Kaltech"
  },
  {
    image: "/assets/COG.png",
    alt: "COG"
  },
  {
    image: "/assets/Ekdant.png",
    alt: "Ekdant"
  },
  {
    image: "/assets/Dorji.png",
    alt: "Dorji"
  },
  {
    image: "/assets/Salankara.png",
    alt: "Salankara"
  },
  {
    image: "/assets/The_Art_of_Eating.png",
    alt: "The Art of Eating"
  },
  {
    image: "/assets/Sukhoneer.png",
    alt: "Sukhoneer"
  },
  {
    image: "/assets/Dental_Clinic.png",
    alt: "Dental Clinic"
  },
  {
    image: "/assets/Toto_Wala.png",
    alt: "Toto Wala"
  },
  {
    image: "/assets/Riqsa.png",
    alt: "Riqsa"
  },
  {
    image: "/assets/Shop_infinity.png",
    alt: "Shop Infinity"
  },
  {
    image: "/assets/Money_Blaster.png",
    alt: "Money Blaster"
  },
  {
    image: "/assets/dgc_logo.png",
    alt: "DGC"
  }
];

// CSS for the animation
const marqueeStyles = {
  wrapper: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative' as const,
  },
  animationContainer: {
    display: 'flex',
    width: 'fit-content',
    animation: 'marquee 30s linear infinite',
    willChange: 'transform',
  },
  logoContainer: {
    display: 'flex',
    animation: 'marquee2 30s linear infinite',
    willChange: 'transform',
  },
  item: {
    flex: '0 0 auto',
    marginRight: '48px',
  },
};

// Define the CSS keyframes in a style tag that will be added to the component
const keyframesStyle = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee2 {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const MovingClients = () => {
  const [isClient, setIsClient] = useState(false);

  // Only run on client-side to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="py-16 md:py-24 overflow-hidden">
      {/* Add the keyframes style to the document */}
      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />
      
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-5xl font-bold mb-2"
            style={{ fontFamily: mainFont.style.fontFamily, color: "#ffffff" }}
          >
            Our <span className="text-[#4da6ff]">Clients</span>
          </h2>
          <p className="text-white/80 text-sm md:text-base font-secondaryFont">
            Driving digital transformation for global leaders
          </p>
        </div>

        <div style={marqueeStyles.wrapper}>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          {isClient && (
            <div style={marqueeStyles.animationContainer}>
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div key={`first-${index}`} style={marqueeStyles.item} className="client-logo-item">
                  <div className="bg-white rounded-lg p-4 w-[200px] h-[120px] flex items-center justify-center shadow-md">
                    <Image
                      src={logo.image}
                      alt={logo.alt}
                      width={150}
                      height={80}
                      className="object-contain max-h-[80px] max-w-[150px]"
                    />
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => (
                <div key={`second-${index}`} style={marqueeStyles.item} className="client-logo-item">
                  <div className="bg-white rounded-lg p-4 w-[180px] h-[100px] flex items-center justify-center shadow-md">
                    <Image
                      src={logo.image}
                      alt={logo.alt}
                      width={150}
                      height={80}
                      className="object-contain max-h-[80px] max-w-[150px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovingClients;
