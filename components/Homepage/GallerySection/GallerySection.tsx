import React, { useRef } from "react";
import { HomeAboutSecSvg } from "@/styles/Svgs/AllSvgs";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export const GallerySection = () => {
  const mainWrapperRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mainWrapperRef,
  });

  const translateYImage1 = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["750%", "0%"]
  );
  const translateXImage1 = useTransform(
    scrollYProgress,
    [0.41, 0.55],
    ["0%", "920%"]
  );
  const translateYImage2 = useTransform(
    scrollYProgress,
    [0.21, 0.3],
    ["750%", "0%"]
  );
  const translateXImage2 = useTransform(
    scrollYProgress,
    [0.41, 0.55],
    ["0%", "460%"]
  );
  const translateYImage3 = useTransform(
    scrollYProgress,
    [0.31, 0.4],
    ["750%", "0%"]
  );


//   smoothing the animation...
  const translateYImage1Smooth = useSpring(translateYImage1, {
    stiffness: 20,
    damping: 20,
  });
  const translateXImage1Smooth = useSpring(translateXImage1, {
    stiffness: 20,
    damping: 20,
  });
  const translateYImage2Smooth = useSpring(translateYImage2, {
    stiffness: 20,
    damping: 20,
  });
  const translateXImage2Smooth = useSpring(translateXImage2, {
    stiffness: 20,
    damping: 20,
  });
  const translateYImage3Smooth = useSpring(translateYImage3, {
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
          <div className="h-screen w-full sticky top-0 overflow-y-hidden">
            <div className="absolute top-0 -left-[15%] w-[50%] h-[50%]  flex justify-center items-center">
              <HomeAboutSecSvg />
            </div>
            <div className="absolute bottom-0 right-[15%] w-[50%] h-[50%]  flex justify-center items-center">
              <HomeAboutSecSvg />
            </div>

            <div className="absolute top-0 w-full h-full z-10 flex justify-center items-center">
              <div className="w-[90%]  mx-auto h-full flex justify-center items-center">
                <div>the content wrapper</div>
                <div>the images wrapper</div>
              </div>
              <div className="flex justify-center items-center h-full w-full absolute top-0">
                <motion.div
                  style={{
                    y: translateYImage1Smooth,
                    x: translateXImage1Smooth,
                  }}
                  className="bg-red-800  relative z-30 flex-1 h-full flex justify-center items-center text-[2.5vw]"
                >
                  Image 1
                </motion.div>
                <motion.div
                  style={{
                    y: translateYImage2Smooth,
                    x: translateXImage2Smooth,
                  }}
                  className="bg-green-800 relative z-20 flex-1 h-full flex justify-center items-center text-[2.5vw]"
                >
                  Image 2
                </motion.div>
                <motion.div
                  style={{
                    y: translateYImage3Smooth,
                  }}
                  className="bg-blue-800 flex-1 h-full flex justify-center items-center text-[2.5vw]"
                >
                  Image 3
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
