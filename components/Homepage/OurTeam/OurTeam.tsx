import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";
import { HomeAboutSecSvg, HomepageTagIconSvg } from "@/styles/Svgs/AllSvgs";
import { useInView } from "@/hooks/useInView";

const teamList = [
  {
    image: "/assets/rini_pic.jpg",
    name: "Rini Chakraborty",
    // position: "Marketing Director",
  },

  {
    image: "/assets/vik-pic.jpg",
    name: "Vikash Jha",
    // position: "Strategic Consultant",
  },

  {
    image: "/assets/sayan_pic.jpg",
    name: "Sayan Choudhury",
    // position: "Strategic Consultant",
  },
  {
    image: "/assets/sahil_pic.jpg",
    name: "Sahil Biswas",
    // position: "Lead UX/UI Designer",

  },
  {
    image: "/assets/shashank-pic.jpg",
    name: "Shashank Singh",
    // position: "Lead Developer",
  },
  {
    image: "/assets/pradip_pic.jpg",
    name: "Pradip Choudhury",
    // position: "Marketing Director",
  },

];
export const OurTeam = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!container || !scrollContainer) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollPercentage = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      const translateX = scrollPercentage * (scrollContainer.scrollWidth - window.innerWidth);

      scrollContainer.style.transform = `translateX(-${translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '250vh' }}>
      <div className="sticky top-0 overflow-hidden">
        <div className="max-w-[1920px] mx-auto min-h-[100vh] relative flex justify-center items-center">
          <HomeAboutSecSvg />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-[85%] translate-y-[-5%]">
              <div className="flex justify-center items-center gap-4 my-3 w-[40%] mx-auto">
                <HomepageTagIconSvg />
                <h4
                  className="text-base md:text-[1.3vw] font-bold uppercase"
                  style={{
                    fontFamily: mainFont.style.fontFamily,
                    color: "#fff",
                  }}
                >
                  Our Team
                </h4>
              </div>
              <div>
                <h1
                  className="text-2xl md:text-[2.8vw] text-center font-semibold text-white mb-4"
                  style={{
                    fontFamily: mainFont.style.fontFamily,
                  }}
                >
                  Meet our Exceptional Team
                </h1>

              </div>
              <div className="mx-auto w-[90%] md:w-[80%] my-[1.5%]">
                <p className="text-white font-secondaryFont font-[400] text-[12px] mb-4 md:text-[1vw] text-center">
                  Meet the passionate professionals who drive the success of
                  Code Visionary Studios. Our team&apos;s diverse backgrounds and
                  expertise come together to create powerful, integrated
                  solutions that help our clients thrive in the digital world.
                </p>
              </div>
              <motion.div
                ref={scrollContainerRef}
                className="flex items-center w-full gap-6 my-[3%] pr-[150vw]"
                style={{
                  willChange: 'transform',
                }}
              >
                {teamList.map((cur, id) => (
                  <motion.div
                    key={id}
                    id={`ID-${id + 1}`}
                    initial={{ filter: "grayscale(1)" }}
                    whileHover={{ filter: "grayscale(0)" }}
                    className="flex-shrink-0"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative lg:landscape:w-[300px] lg:landscape:h-[390px]">
                      <Image
                        height={230}
                        width={322}
                        src={cur.image}
                        alt={cur.name || "Team member"}
                        className="z-0 object-center object-cover h-[450px] w-[320] rounded-lg bg-top"
                      />
                      <div className="absolute w-full h-full bg-transparent z-10 top-0 left-0" />
                    </div>
                    <div className="text-center mt-[70px]">
                      <h4 className="font-secondaryFont font-[600] text-lg md:text-[1.3vw] text-white">
                        {cur.name}
                      </h4>
                      <p className="font-secondaryFont font-[400] text-base md:text-[1vw] text-white/80 mt-1">
                        {/* {cur.position} */}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>            </div>
          </div>
        </div>
      </div>
    </div>
  );
};