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

  const opacityIncreace = useTransform(scrollYProgress,[.33,1],[0,1])

  return (
    <div>
      <div
        ref={about__MainWrapper}
        className="max-w-[1920px] mx-auto min-h-[230vh] relative"
      >
        <div className="sticky top-0 w-full h-[110vh] flex justify-center items-center overflow-hidden">
          <div className="absolute w-full h-full flex justify-center items-center">
            <HomeAboutSecSvg />
          </div>
          <div className="w-[85%] mx-auto relative">
            <div className="flex justify-between items-center gap-5">
              <div className="w-[40%]">
                <div className="flex justify-start items-center gap-4 my-3">
                  <HomepageTagIconSvg />
                  <h4
                    className="text-[1.1vw] font-bold uppercase"
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
                  className="font-bold text-white text-[2.4vw] customLine__height"
                >
                  WE are Code Visionary
                </h3>
                <h3
                  style={{
                    fontFamily: mainFont.style.fontFamily,
                  }}
                  className="font-bold text-white text-[2.4vw]"
                >
                  Studios
                </h3>
              </div>
              <div className="bg-[#d9d9d9] min-h-24 w-1 opacity-60" />
              <div className="w-[60%] p-3">
                <motion.p
                  style={{
                    y: translateSmallTextSmooth,
                    opacity: opacitySmallTextSmooth,
                  }}
                  className="text-[#8F98A8] font-secondaryFont font-[400] text-[.95vw] opacity-0"
                >
                  At Code Visionary Studio, we combine creativity, technology,
                  and strategic thinking to craft unique digital experiences.
                  Our talented team is committed to delivering high-quality web
                  design, app development, branding, and marketing services
                  tailored to meet your specific needs.
                </motion.p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <motion.div
                style={{
                  x: translateXImage1Smooth,
                  y: translateYImage1Smooth,
                  opacity: opacityIncreace
                }}
                className="relative rounded-xl overflow-hidden opacity-85 h-[300px] w-[85%] mx-auto flex justify-center items-center"
              >
                <Image
                  src="/assets/img2.jpeg"
                  fill
                  alt="our-projects-shorts"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                style={{
                  x: translateXImage2Smooth,
                  y: translateYImage1Smooth,
                  opacity: opacityIncreace
                }}
                className="relative rounded-xl overflow-hidden opacity-85 ml-[8%] h-[250px] w-[65%]"
              >
                <Image src="/assets/img7.jpeg" fill alt="our-projects-shorts" />
              </motion.div>

              <motion.div
                style={{
                  x: translateXImage3Smooth,
                  y: translateYImage3Smooth,
                  opacity: opacityIncreace
                }}
                className="relative rounded-xl overflow-hidden opacity-100 -mt-[60px] h-[250px] w-[60%] ml-auto"
              >
                <Image src="/assets/img5.jpeg" fill alt="our-projects-shorts" />
              </motion.div>

              <motion.div
                style={{
                  x: translateXImage4Smooth,
                  y: translateYImage3Smooth,
                  opacity: opacityIncreace
                }}
                className="relative rounded-xl overflow-hidden opacity-85 h-[250px] -mt-[40px] w-[70%] ml-auto flex justify-center items-center"
              >
                <Image src="/assets/img1.jpeg" fill alt="our-projects-shorts" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
