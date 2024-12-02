import React, { useEffect, useRef, useState } from "react";
import { HomeAboutSecSvg, HomepageTagIconSvg } from "@/styles/Svgs/AllSvgs";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";

export const GallerySection = () => {
  const mainWrapperRef = useRef<HTMLDivElement | null>(null);
  const [currentScreenSizeImage1, setCurrentScreenSizeImage1] = useState(0);
  const [currentScreenSizeImage2, setCurrentScreenSizeImage2] = useState(0);

  useEffect(() => {
    setCurrentScreenSizeImage1(window.innerWidth * 0.66);
    setCurrentScreenSizeImage2(window.innerWidth * 0.33);
    const handleScreenResize = () => {
      setCurrentScreenSizeImage1(window.innerWidth * 0.66);
      setCurrentScreenSizeImage2(window.innerWidth * 0.33);
    };
    window.addEventListener("resize", handleScreenResize);
    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);
  const { scrollYProgress } = useScroll({
    target: mainWrapperRef,
  });

  // animation for X axis...
  const translateXImage1 = useTransform(
    scrollYProgress,
    [0.41, 0.55],
    [0, currentScreenSizeImage1]
  );
  const translateXImage2 = useTransform(
    scrollYProgress,
    [0.41, 0.55],
    [0, currentScreenSizeImage2]
  );

  // animation for Y axis....

  const translateYImage1Phase1 = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["800%", "0%"]
  );
  const translateYImage1Phase2 = useTransform(
    scrollYProgress,
    [0.56, 0.65],
    ["0%", "-800%"]
  );

  const combineTranslateImage1 = useTransform(scrollYProgress, (value) => {
    if (value >= 0 && value <= 0.2) return translateYImage1Phase1.get();
    if (value >= 0.2 && value <= 0.55) return "0%";
    if (value >= 0.55 && value <= 0.65) return translateYImage1Phase2.get();
    return "-800%";
  });

  const translateYImage2Phase1 = useTransform(
    scrollYProgress,
    [0.21, 0.3],
    ["800%", "0%"]
  );
  const translateYImage2Phase2 = useTransform(
    scrollYProgress,
    [0.65, 0.75],
    ["0%", "-800%"]
  );
  const combineTranslateImage2 = useTransform(scrollYProgress, (value) => {
    if (value >= 0 && value <= 0.2) return "800%";
    if (value >= 0.2 && value <= 0.3) return translateYImage2Phase1.get();
    if (value >= 0.3 && value <= 0.65) return "0%";
    if (value >= 0.65 && value <= 0.75) return translateYImage2Phase2.get();
    return "-800%";
  });

  const translateYImage3Phase1 = useTransform(
    scrollYProgress,
    [0.31, 0.4],
    ["800%", "0%"]
  );
  const translateYImage3Phase2 = useTransform(
    scrollYProgress,
    [0.75, 0.85],
    ["0%", "-800%"]
  );
  const combineTranslateImage3 = useTransform(scrollYProgress, (value) => {
    if (value >= 0 && value <= 0.31) return "800%";

    if (value >= 0.31 && value <= 0.4) return translateYImage3Phase1.get();
    if (value >= 0.4 && value <= 0.75) return "0%";
    if (value >= 0.75 && value <= 0.85) return translateYImage3Phase2.get();
    return "-800%";
  });

  // for text ....

  const translateYText1 = useTransform(
    scrollYProgress,
    [0.56, 0.65],
    ["0%", "-150%"]
  );
  const translateYPara1 = useTransform(
    scrollYProgress,
    [0.56, 0.65],
    ["0%", "-155%"]
  );

  const translateYText2 = useTransform(
    scrollYProgress,
    [0.56, 0.75],
    ["0%", "-110%"]
  );
  const translateYPara2 = useTransform(
    scrollYProgress,
    [0.56, 0.75],
    ["0%", "-185%"]
  );
  const translateYText3 = useTransform(
    scrollYProgress,
    [0.56, 0.85],
    ["0%", "-170%"]
  );
  const translateYPara3 = useTransform(
    scrollYProgress,
    [0.56, 0.85],
    ["0%", "-285%"]
  );
  const translateYText4 = useTransform(
    scrollYProgress,
    [0.56, 0.95],
    ["0%", "-190%"]
  );
  const translateYPara4 = useTransform(
    scrollYProgress,
    [0.56, 0.85],
    ["0%", "-270%"]
  );

  //   smoothing the animation all...
  const translateYImage1Smooth = useSpring(combineTranslateImage1, {
    stiffness: 20,
    damping: 20,
  });
  const translateXImage1Smooth = useSpring(translateXImage1, {
    stiffness: 20,
    damping: 20,
  });
  const translateYImage2Smooth = useSpring(combineTranslateImage2, {
    stiffness: 20,
    damping: 20,
  });
  const translateXImage2Smooth = useSpring(translateXImage2, {
    stiffness: 20,
    damping: 20,
  });
  const translateYImage3Smooth = useSpring(combineTranslateImage3, {
    stiffness: 20,
    damping: 20,
  });

  const translateYText1Smooth = useSpring(translateYText1, {
    stiffness: 20,
    damping: 20,
  });
  const translateYText2Smooth = useSpring(translateYText2, {
    stiffness: 20,
    damping: 20,
  });
  const translateYText3Smooth = useSpring(translateYText3, {
    stiffness: 20,
    damping: 20,
  });
  const translateYText4Smooth = useSpring(translateYText4, {
    stiffness: 20,
    damping: 20,
  });
  const translateYPara1Smooth = useSpring(translateYPara1, {
    stiffness: 20,
    damping: 20,
  });
  const translateYPara2Smooth = useSpring(translateYPara2, {
    stiffness: 20,
    damping: 20,
  });
  const translateYPara3Smooth = useSpring(translateYPara3, {
    stiffness: 20,
    damping: 20,
  });
  const translateYPara4Smooth = useSpring(translateYPara4, {
    stiffness: 20,
    damping: 20,
  });
 

  return (
    <>
      <div>
        <div
          ref={mainWrapperRef}
          className="max-w-[1920px] mx-auto h-[500vh]  relative"
        >
          <div className="h-screen w-full sticky top-0 overflow-hidden">
            <div className="absolute top-0 -left-[15%] w-[50%] h-[50%]  flex justify-center items-center">
              <HomeAboutSecSvg />
            </div>
            <div className="absolute bottom-0 right-[15%] w-[50%] h-[50%]  flex justify-center items-center">
              <HomeAboutSecSvg />
            </div>

            <div className="absolute top-0 w-full h-full z-10 flex justify-center items-center">
              <div className="w-[90%] relative  mx-auto h-full flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:landscape:flex-row md:portrait:flex-col 2xl:justify-start xl:justify-start lg:justify-start md:landscape:justify-start md:portrait:justify-start justify-start items-center">
                <div className="2xl:w-[55%] xl:w-[55%] lg:w-[55%] md:portrait:w-full md:landscape:w-[55%] w-full">
                  <div className="flex justify-start items-center gap-4 my-3">
                    <HomepageTagIconSvg />
                    <h4
                      className="2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] md:landscape:text-[1.1vw] md:portrait:text-[2.1vw] text-[3.1vw] font-bold uppercase"
                      style={{
                        fontFamily: mainFont.style.fontFamily,
                      }}
                    >
                      OUR PORTFOLIO
                    </h4>
                  </div>
                  <div>
                    <h3
                      className="2xl:text-[4.5vw] xl:text-[4.5vw] lg:text-[4.5vw] md:landscape:text-[4.5vw] md:portrait:text-[5vw] text-[9vw] font-[900] customLine__height customGallary__textColor opacity-75"
                      style={{
                        fontFamily: mainFont.style.fontFamily,
                      }}
                    >
                      CREATIVE
                    </h3>
                    <h3
                      className="2xl:text-[4.5vw] xl:text-[4.5vw] lg:text-[4.5vw] md:landscape:text-[4.5vw] md:portrait:text-[5vw] text-[9vw] font-[900] customLine__height customGallary__textColor opacity-75"
                      style={{
                        fontFamily: mainFont.style.fontFamily,
                      }}
                    >
                      HIGHLIGHTS
                    </h3>
                  </div>
                  <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:landscape:w-[80%] md:portrait:w-full w-full">
                    <div className="2xl:h-14 xl:h-14 lg:h-14 md:landscape:h-14 md:portrait:h-12 h-10 overflow-hidden flex flex-col justify-start items-start">
                      <motion.div
                        style={{
                          y: translateYText1Smooth,
                          // opacity:OpacityText1Smooth
                        }}
                        className=""
                      >
                        <motion.h3
                          className="text-white 2xl:text-[2.2vw] xl:text-[2.2vw] lg:text-[2.2vw] md:landscape:text-[2.2vw] md:portrait:text-[4.2vw] text-[5.5vw] font-[700]"
                          style={{
                            fontFamily: mainFont.style.fontFamily,
                          }}
                        >
                          Upwealth magazine
                        </motion.h3>
                      </motion.div>

                      <motion.div
                        style={{
                          y: translateYText2Smooth,
                        }}
                        className=""
                      >
                        <motion.h3
                          className="text-white 2xl:text-[2.2vw] xl:text-[2.2vw] lg:text-[2.2vw] md:landscape:text-[2.2vw] md:portrait:text-[4.2vw] text-[5.5vw] font-[700]"
                          style={{
                            fontFamily: mainFont.style.fontFamily,
                          }}
                        >
                          Car corner
                        </motion.h3>
                      </motion.div>

                      <motion.div
                        style={{
                          y: translateYText3Smooth,
                        }}
                        className=""
                      >
                        <motion.h3
                          className="text-white 2xl:text-[2.2vw] xl:text-[2.2vw] lg:text-[2.2vw] md:landscape:text-[2.2vw] md:portrait:text-[4.2vw] text-[5.5vw] font-[700]"
                          style={{
                            fontFamily: mainFont.style.fontFamily,
                          }}
                        >
                          Contract crafters
                        </motion.h3>
                      </motion.div>

                      <motion.div
                        style={{
                          y: translateYText4Smooth,
                        }}
                        className=""
                      >
                        <motion.h3 className="text-white 2xl:text-[2.2vw] xl:text-[2.2vw] lg:text-[2.2vw] md:landscape:text-[2.2vw] md:portrait:text-[4.2vw] text-[5.5vw] font-[700]">
                          Money blaster
                        </motion.h3>
                      </motion.div>
                    </div>
                    <div className="h-24 overflow-hidden flex flex-col justify-start items-start gap-2">
                      <motion.p
                        style={{
                          y: translateYPara1Smooth,
                        }}
                        className="font-secondaryFont 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:landscape:text-[1vw] md:portrait:text-[2vw] text-[3vw] font-[400]"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque ipsum risus, fermentum tincidunt eleifend
                        quis, efficitur convallis lectus. Donec mattis orci est,
                        vel tincidunt odio dignissim in. Proin non sollicitudin
                        risus. Praesent eget risus id magna molestie volutpat at
                        vel neque.
                      </motion.p>
                      <motion.p
                        style={{
                          y: translateYPara2Smooth,
                        }}
                        className="font-secondaryFont 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:landscape:text-[1vw] md:portrait:text-[2vw] text-[3vw]  font-[400]"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque ipsum risus, fermentum tincidunt eleifend
                        quis, efficitur convallis lectus. Donec mattis orci est,
                        vel tincidunt odio dignissim in. Proin non sollicitudin
                        risus. Praesent eget risus id magna molestie volutpat at
                        vel neque.
                      </motion.p>
                      <motion.p
                        style={{
                          y: translateYPara3Smooth,
                        }}
                        className="font-secondaryFont 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:landscape:text-[1vw] md:portrait:text-[2vw] text-[3vw]  font-[400]"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque ipsum risus, fermentum tincidunt eleifend
                        quis, efficitur convallis lectus. Donec mattis orci est,
                        vel tincidunt odio dignissim in. Proin non sollicitudin
                        risus. Praesent eget risus id magna molestie volutpat at
                        vel neque.
                      </motion.p>
                      <motion.p
                        style={{
                          y: translateYPara4Smooth,
                        }}
                        className="font-secondaryFont 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:landscape:text-[1vw] md:portrait:text-[2vw] text-[3vw] font-[400]"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque ipsum risus, fermentum tincidunt eleifend
                        quis, efficitur convallis lectus. Donec mattis orci est,
                        vel tincidunt odio dignissim in. Proin non sollicitudin
                        risus. Praesent eget risus id magna molestie volutpat at
                        vel neque.
                      </motion.p>
                    </div>

                    <button
                      className="2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw] md:portrait:text-[2.5vw] md:landscape:text-[1.2vw] text-[3.5vw] relative  rounded-full mt-[5%] px-5 py-2 font-[500] bg-[#C44F56] text-white hover:text-[#C44F56] hover:bg-white transition-all duration-300 ease-linear"
                      style={{
                        fontFamily: mainFont.style.fontFamily,
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute  w-full h-full flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:landscape:flex-row md:portrait:flex-col justify-center items-center">
                {/* image one */}
                <motion.div
                  style={{
                    y: translateYImage1Smooth,
                    x: translateXImage1Smooth,
                  }}
                  className="relative flex-1 h-full z-30"
                >
                  <Image
                    fill
                    src="/assets/portfolioImg1.png"
                    alt="portfolio-image"
                  />
                </motion.div>

                {/* image two */}
                <motion.div
                  style={{
                    y: translateYImage2Smooth,
                    x: translateXImage2Smooth,
                  }}
                  className="relative flex-1 h-full z-20"
                >
                  <Image
                    fill
                    src="/assets/portfolioImg2.png"
                    alt="portfolio-image"
                  />
                </motion.div>

                {/* image three */}
                <motion.div
                  style={{
                    y: translateYImage3Smooth,
                  }}
                  className="relative flex-1 h-full"
                >
                  <Image
                    fill
                    src="/assets/portfolioImg3.png"
                    alt="portfolio-image"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
