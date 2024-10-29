import React, { useRef } from "react";
import Image from "next/image";

import { HomeAboutSecSvg } from "@/styles/Svgs/AllSvgs";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export const AboutSecondSection = () => {
  const mainWrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mainWrapper,
    offset: ["start 80%", "end start"],
  });

//   main animation ....
  const scrollImg1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-250%"]);
  const scrollImg2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-180%"]);
  const scrollImg3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const scrollImg4Y = useTransform(scrollYProgress, [0, 1], ["0%", "-130%"]);

//   for smoothness and damping...

const scrollImg1YSmooth = useSpring(scrollImg1Y,{
    stiffness: 10,
    damping:10
})



  return (
    <>
      <div>
        <div
          ref={mainWrapper}
          className="max-w-[1920px] h-[250vh] relative mx-auto"
        >
          <div className="h-screen sticky top-0">
            <div className="absolute w-full h-full flex justify-center items-center">
              <HomeAboutSecSvg />
            </div>
            <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center">
              <div className="w-[85%] mx-auto  grid grid-cols-2 gap-4">
                <motion.div
                  style={{
                    y: scrollImg1YSmooth,
                  }}
                  className="-mb-[10%]"
                >
                  <Image
                    width={500}
                    height={550}
                    className="rounded-xl"
                    src="/assets/productImg.png"
                    alt="product-img"
                  />
                </motion.div>
                <motion.div
                  style={{
                    y: scrollImg2Y,
                  }}
                  className="-mb-[10%] flex justify-start items-end relative z-30"
                >
                  <Image
                    width={300}
                    height={450}
                    className="rounded-xl"
                    src="/assets/productImg2.png"
                    alt="product-img"
                  />
                </motion.div>
                <motion.div style={{
                    y: scrollImg3Y,
                }} className="-mt-[5%] flex justify-end items-center">
                  <Image
                    width={300}
                    height={450}
                    className="rounded-xl"
                    src="/assets/productImg3.png"
                    alt="product-img"
                  />
                </motion.div>
                <motion.div style={{
                    y: scrollImg4Y,
                }} className="flex justify-end items-end relative z-20">
                  <Image
                    width={450}
                    height={350}
                    className="rounded-xl"
                    src="/assets/productImg4.png"
                    alt="product-img"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="h-screen sticky top-0"></div>
        </div>
      </div>
    </>
  );
};
