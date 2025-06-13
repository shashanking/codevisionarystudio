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
    image: "/assets/uluberia-college.jpeg",
    alt: "Ulbuberia College"
  },
  {
    image: "/assets/garhbeta-college.jpeg",
    alt: "Garhbeta College"
  },
  {
    image: "/assets/dinabandhu-andrews-college.jpg",
    alt: "Dinabandhu Andrews College"
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
  },
  {
    image: "/assets/sovarani-memorial-college.jpg",
    alt: "Sovarani Memorial College"
  },
];

// CSS for the animation
const marqueeStyles = {
  wrapper: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative' as const,
    padding: '20px 0',
  },
  animationContainer: {
    display: 'flex',
    width: 'fit-content',
    animation: 'marquee 30s linear infinite',
    willChange: 'transform',
    gap: '32px',
    padding: '10px 0px',
  },
  logoContainer: {
    display: 'flex',
    animation: 'marquee2 30s linear infinite',
    willChange: 'transform',
    gap: '32px',
    padding: '20px 0',
  },
  item: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '12px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
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
  
  @media (hover: hover) {
    .client-logo-item {
      transition: transform 0.3s ease;
    }
    .client-logo-item:hover {
      transform: translateY(-5px);
    }
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
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          {isClient && (
            <div style={marqueeStyles.animationContainer}>
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div key={`first-${index}`} style={marqueeStyles.item} className="client-logo-item">
                  <div className="bg-white/90 rounded-xl p-4 w-[180px] h-[120px] flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex-1 flex items-center justify-center w-full">
                      <Image
                        src={logo.image}
                        alt={logo.alt}
                        width={120}
                        height={60}
                        className="object-contain max-h-[60px] max-w-[120px]"
                      />
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-xs font-medium text-gray-700 line-clamp-1">{logo.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => (
                <div key={`second-${index}`} style={marqueeStyles.item} className="client-logo-item">
                  <div className="bg-white/90 rounded-xl p-4 w-[180px] h-[120px] flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex-1 flex items-center justify-center w-full">
                      <Image
                        src={logo.image}
                        alt={logo.alt}
                        width={120}
                        height={60}
                        className="object-contain max-h-[60px] max-w-[120px]"
                      />
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-xs font-medium text-gray-700 line-clamp-1">{logo.alt}</p>
                    </div>
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
