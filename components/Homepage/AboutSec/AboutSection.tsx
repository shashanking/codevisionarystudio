import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { mainFont } from "@/components/UI/Mainfontt";
import { HomeAboutSecSvg, HomepageTagIconSvg } from "@/styles/Svgs/AllSvgs";

export const AboutSection = () => {
  const about__MainWrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: about__MainWrapper,
  });

  // first top text scroll animation....

  // the right-side paragraph...
  const translateSmallText = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["200%", "0%"]
  );
  const opacitySmallText = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const translateSmallTextSmooth = useSpring(translateSmallText, {
    damping: 20,
    stiffness: 50,
  });
  const opacitySmallTextSmooth = useSpring(opacitySmallText, {
    damping: 20,
    stiffness: 50,
  });

  // the code visanary studio text....

  // images scroll animation....

  const translateXImage1 = useTransform(
    scrollYProgress,
    [0.33, 1],
    ["-800%", "0%"]
  );
  const translateYImage1 = useTransform(
    scrollYProgress,
    [0.33, 1],
    ["-500%", "0%"]
  );

  const translateXImage1Smooth = useSpring(translateXImage1, {
    damping: 20,
    stiffness: 80,
  });

  const translateYImage1Smooth = useSpring(translateYImage1, {
    // Y axis animation is common for the first image and second image..
    damping: 20,
    stiffness: 80,
  });

  const translateXImage2 = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["800%", "0%"]
  );
  const translateXImage2Smooth = useSpring(translateXImage2, {
    damping: 20,
    stiffness: 50,
  });

  const translateXImage3 = useTransform(
    scrollYProgress,
    [0.33, 1],
    ["-800%", "0%"]
  );
  const translateYImage3 = useTransform(
    scrollYProgress,
    [0.33, 1],
    ["500%", "0%"]
  );
  const translateXImage3Smooth = useSpring(translateXImage3, {
    damping: 20,
    stiffness: 50,
  });
  const translateYImage3Smooth = useSpring(translateYImage3, {
    //common for third and fourth image...
    damping: 20,
    stiffness: 50,
  });
  const translateXImage4 = useTransform(
    scrollYProgress,
    [0.33, 1],
    ["800%", "0%"]
  );
  const translateXImage4Smooth = useSpring(translateXImage4, {
    damping: 20,
    stiffness: 50,
  });

  // opacity animation ....

  const opacityIncreace = useTransform(scrollYProgress, [0.33, 1], [0, 1]);

  return (
    <div>
      <div
        ref={about__MainWrapper}
        className="max-w-[1920px] mx-auto min-h-[230vh] relative"
      >
        <div className="sticky top-0 w-full h-[120dvh] flex justify-center items-center overflow-hidden">
          <div className="absolute w-full h-full flex justify-center items-center">
            <HomeAboutSecSvg />
          </div>
          <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:landscape:w-[85%] md:portrait:w-[95%] w-[90%] mx-auto relative">
            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:landscape:flex-row md:portrait:flex-col justify-between items-center 2xl:gap-5 xl:gap-5lg:gap-5 md:landscape:gap-5 md:portrait:gap-2.5 gap-2.5">
              <div className="2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:portrait:w-full md:landscape:w-[40%] w-full">
                <div className="flex justify-start items-center gap-4 my-3">
                  <HomepageTagIconSvg />
                  <h4
                    className="2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] md:landscape:text-[1.1vw] md:portrait:text-[2.2vw] text-[3vw] font-bold uppercase"
                    style={{
                      fontFamily: mainFont.style.fontFamily,
                    }}
                  >
                    About us
                  </h4>
                </div>
                <h3
                  style={{
                    fontFamily: mainFont.style.fontFamily,
                  }}
                  className="font-bold text-white 2xl:text-[2.4vw] xl:text-[2.4vw] lg:text-[2.4vw] md:portrait:text-[3.5vw] md:landscape:text-[2.4vw] text-[5.5vw] customLine__height"
                >
                  WE are Code Visionary
                </h3>
                <h3
                  style={{
                    fontFamily: mainFont.style.fontFamily,
                  }}
                  className="font-bold text-white 2xl:text-[2.4vw] xl:text-[2.4vw] lg:text-[2.4vw] md:portrait:text-[3.5vw] md:landscape:text-[2.4vw] text-[5.5vw]"
                >
                  Studios
                </h3>
              </div>
              <div className="bg-[#d9d9d9] 2xl:min-h-24 xl:min-h-24 lg:min-h-24 md:landscape:min-h-24 md:portrait:h-1 h-1 2xl:w-1 xl:w-1 lg:w-1 md:landscape:w-1 md:portrait:w-full w-full opacity-60" />

              <div className="2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:portrait:w-full md:landscape:w-[60%] w-full 2xl:p-3 xl:p-3 lg:p-3 md:landscape:p-3 md:portrait:p-1  p-1">
                <motion.p
                  style={{
                    y: translateSmallTextSmooth,
                    opacity: opacitySmallTextSmooth,
                  }}
                  className="text-[#8F98A8] font-secondaryFont font-[400] 2xl:text-[.95vw] xl:text-[.95vw] lg:text-[.95vw] md:landscape:text-[.95vw] md:portrait:text-[2.2vw] text-[3vw]"
                >
                  At Code Visionary Studio, we combine creativity, technology,
                  and strategic thinking to craft unique digital experiences.
                  Our talented team is committed to delivering high-quality web
                  design, application development, branding, and marketing
                  services tailored to meet your specific needs.
                </motion.p>
              </div>
            </div>

            <div className="2xl:mt-5 xl:mt-5 lg:mt-5 md:landscape:mt-5 md:portrait:mt-2.5 mt-2 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:portrait:grid-cols-1 md:landscape:grid-cols-2 grid-cols-1 gap-2">
              <motion.div
                style={{
                  x: translateXImage1Smooth,
                  y: translateYImage1Smooth,
                  opacity: opacityIncreace,
                }}
                className="relative rounded-xl overflow-hidden opacity-85 2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:landscape:w-[85%] w-[95%] mx-auto flex justify-center items-center"
              >
                <Image
                  src="/assets/img2.jpeg"
                  width={500}
                  height={500}
                  alt="our-projects-shorts"
                  className="object-cover rounded-2xl"
                />
              </motion.div>

              <motion.div
                style={{
                  x: translateXImage2Smooth,
                  y: translateYImage1Smooth,
                  opacity: opacityIncreace,
                }}
                // h-[250px]
                className="relative rounded-xl overflow-hidden opacity-85 ml-[8%]  2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:landscape:w-[65%] w-[85%]"
              >
                <Image
                  src="/assets/img7.jpeg"
                  className="rounded-2xl"
                  width={400}
                  height={400}
                  alt="our-projects-shorts"
                />
              </motion.div>

              <motion.div
                style={{
                  x: translateXImage3Smooth,
                  y: translateYImage3Smooth,
                  opacity: opacityIncreace,
                }}
                // h-[250px]
                className="relative rounded-xl overflow-hidden opacity-100 2xl:-mt-[60px] xl:-mt-[60px] lg:-mt-[60px] md:landscape:-mt-[60px] mt-[0px]  2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:landscape:w-[60%] w-[90%]  ml-auto"
              >
                <Image
                  src="/assets/img5.jpeg"
                  className="rounded-2xl"
                  width={600}
                  height={600}
                  alt="our-projects-shorts"
                />
              </motion.div>

              <motion.div
                style={{
                  x: translateXImage4Smooth,
                  y: translateYImage3Smooth,
                  opacity: opacityIncreace,
                }}
                // h-[250px]
                className="relative rounded-xl overflow-hidden opacity-85  2xl:-mt-[40px] xl:-mt-[40px] lg:-mt-[40px] md:landscape:-mt-[40px] md:portrait:mt-[0px] mt-[0px] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:landscape:w-[70%] ml-auto 2xl:flex xl:flex lg:flex md:landscape:flex md:portrait:hidden justify-center items-center hidden"
              >
                <Image
                  className="rounded-2xl"
                  src="/assets/img1.jpeg"
                  width={500}
                  height={500}
                  alt="our-projects-shorts"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
