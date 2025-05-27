import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";
import { HomeAboutSecSvg, HomepageTagIconSvg } from "@/styles/Svgs/AllSvgs";
import { useInView } from "@/hooks/useInView";

const teamList = [
  {
    image: "/assets/pradip_pic.jpg",
    name: "Pradip Choudhury",
    // position: "Marketing Director",
  },


  {
    image: "/assets/vik-pic.jpeg",
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
    image: "/assets/rini_pic.jpg",
    name: "Rini Chakraborty",
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

  // Map of names to audio file paths
  const audioUrlMap: Record<string, string> = {
    "Shashank Singh": "/assets/shashank_audio.mp3",
    "Rini Chakraborty": "/assets/rini_audio.mp3",
    "Sahil Biswas": "/assets/sahil_audio.mp3",
    "Vikash Jha": "/assets/vikash_audio.mp3",
    "Pradip Choudhury": "/assets/pradip_audio.mp3",
    "Sayan Choudhury": "/assets/sayan_audio.mp3",
  };

  // Ref to keep track of currently playing audio
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  // Array of refs for all audio elements
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  // Ensure refs array is always up-to-date
  if (audioRefs.current.length !== teamList.length) {
    audioRefs.current = Array(teamList.length).fill(null);
  }

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
                {teamList.map((cur, id) => {
                  const hasAudio = !!audioUrlMap[cur.name];
                  // Use the same ref array for all audios
                  if (!audioRefs.current[id]) audioRefs.current[id] = null;

                  // Handler for click event to play audio
                  const handleAudioClick = () => {
                    const audioRef = audioRefs.current[id];
                    if (hasAudio && audioRef) {
                      // Pause any previously playing audio
                      if (currentAudioRef.current && currentAudioRef.current !== audioRef) {
                        currentAudioRef.current.pause();
                        currentAudioRef.current.currentTime = 0;
                      }
                      // If already playing, pause and reset
                      if (!audioRef.paused) {
                        audioRef.pause();
                        audioRef.currentTime = 0;
                        currentAudioRef.current = null;
                      } else {
                        audioRef.currentTime = 0;
                        audioRef.play();
                        currentAudioRef.current = audioRef;
                      }
                    }
                  };
                  const handleMouseEnter = handleAudioClick;
                  const handleMouseLeave = () => { };

                  return (
                    <motion.div
                      key={id}
                      id={`ID-${id + 1}`}
                      initial={{ filter: "grayscale(1)" }}
                      whileHover={{ filter: "grayscale(0)" }}
                      className="flex-shrink-0"
                      transition={{ duration: 0.3 }}
                      onClick={handleMouseEnter} // handleMouseEnter now acts as playAudioOnClick
                      style={{ cursor: hasAudio ? 'pointer' : 'default' }}
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
                        {/* UI indicator for audio-enabled members */}
                        {hasAudio && (
                          <>
                            <div className="absolute top-2 left-2 flex items-center bg-black/60 text-white px-2 py-1 rounded shadow z-20 pointer-events-none animate-pulse">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l-2 2H5a2 2 0 00-2 2v4a2 2 0 002 2h2l2 2zm7-2a4 4 0 000-8" />
                              </svg>
                              <span className="text-xs font-semibold">Click to play audio</span>
                            </div>
                            <audio ref={el => { audioRefs.current[id] = el; }} src={audioUrlMap[cur.name]} preload="auto" />
                          </>
                        )}
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
                  );
                })}
              </motion.div>            </div>
          </div>
        </div>
      </div>
    </div>
  );
};