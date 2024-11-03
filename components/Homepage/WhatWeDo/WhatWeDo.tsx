import React, { useRef } from "react";
import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";
import { HomeAboutSecSvg } from "@/styles/Svgs/AllSvgs";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";

export const WhatWeDo = () => {
  const mainContainerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mainContainerRef,
  });

  // animation fro translate on X axis....
  const translateXImage1 = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["-650%", "0%"]
  );
  const translateXImage2 = useTransform(
    scrollYProgress,
    [0.35, 0.6],
    ["650%", "0%"]
  );
  const translateXImage3 = useTransform(
    scrollYProgress,
    [0.65, 0.95],
    ["-650%", "0%"]
  );

  // smooth transition...
  const translateXImage1Smooth = useSpring(translateXImage1, {
    stiffness: 20,
    damping: 20,
  });
  const translateXImage2Smooth = useSpring(translateXImage2, {
    stiffness: 20,
    damping: 20,
  });
  const translateXImage3Smooth = useSpring(translateXImage3, {
    stiffness: 20,
    damping: 20,
  });

  // animation for opacity increace....
  const opacityImage1 = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const opacityImage2 = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const opacityImage3 = useTransform(scrollYProgress, [0.65, 0.95], [0, 1]);

  // smooth transition opacity...

  const opacityImage1Smooth = useSpring(opacityImage1, {
    stiffness: 20,
    damping: 20,
  });
  const opacityImage2Smooth = useSpring(opacityImage2, {
    stiffness: 20,
    damping: 20,
  });
  const opacityImage3Smooth = useSpring(opacityImage3, {
    stiffness: 20,
    damping: 20,
  });

  //   translate up...
  const translateUpMainWrapper = useTransform(
    scrollYProgress,
    [0.85, 1],
    ["0%", "5%"]
  );

  return (
    <>
      <div>
        <div
          ref={mainContainerRef}
          className="max-w-[1920px] h-[200vh] relative mx-auto"
        >
          <div className="min-h-[100vh] top-0 sticky w-full  flex justify-center items-center overflow-hidden">
            <Image
              src="/assets/WhatWeDoBG.png"
              alt="bg-img"
              fill
              className="object-cover"
            />
            <div className="w-full h-full absolute flex justify-center items-center">
              <HomeAboutSecSvg />
            </div>
            <div className="w-[85%] mx-auto relative z-40 p-2">
              <h3
                className="text-center font-bold text-[2vw] text-white"
                style={{
                  fontFamily: mainFont.style.fontFamily,
                }}
              >
                We
              </h3>
              <motion.div
                style={{
                  marginBottom: translateUpMainWrapper,
                }}
                className="flex flex-col justify-center items-center gap-20 mt-[2%]"
              >
                <motion.div
                  style={{
                    x: translateXImage1Smooth,
                    opacity: opacityImage1Smooth,
                  }}
                >
                  <Image
                    src="/assets/design_txt1.png"
                    height={200}
                    width={800}
                    alt="designimg"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateXImage2Smooth,
                    opacity: opacityImage2Smooth,
                  }}
                >
                  <Image
                    src="/assets/develop_txt2.png"
                    alt="img"
                    height={200}
                    width={800}
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: translateXImage3Smooth,
                    opacity: opacityImage3Smooth,
                  }}
                >
                  <Image
                    src="/assets/deliver_txt3.png"
                    alt="img"
                    height={200}
                    width={800}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
