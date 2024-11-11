import { mainFont } from "@/components/UI/Mainfontt";
import { HomepageTagIconSvg, WhyUsSectionSvg } from "@/styles/Svgs/AllSvgs";
import {
  useAnimate,
  useScroll,
  useSpring,
  useTransform,
  motion,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const WhyUsSection = () => {
  const mainContainerWrapperRef = useRef<HTMLDivElement | null>(null);

  const [scope, animate] = useAnimate();

  const { scrollYProgress } = useScroll({
    target: mainContainerWrapperRef,
  });

  //  all main animations
  // image 1...
  const Image1ScrollXPhase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["350%", "150%"]
  );
  const Image1ScrollXPhase2 = useTransform(
    scrollYProgress,
    [0.35, 0.8],
    ["150%", "0%"]
  );
  const Image1ScrollXPhase3 = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0%", "-150%"]
  );

  const Image1ScrollYPhase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["-150%", "0%"]
  );
  const Image1ScrollYPhase2 = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0%", "150%"]
  );
  const Image1OpacityPhase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    [0, 1]
  );
  const Image1OpacityPhase2 = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const Image1ScrollXCombine = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return Image1ScrollXPhase1.get();
    }

    if (value > 0.35 && value <= 0.8) {
      return Image1ScrollXPhase2.get();
    }
    if (value > 0.8 && value <= 1) {
      return Image1ScrollXPhase3.get();
    }
    return "350%";
    //return "350%"; // Default or reset value if none match
  });

  const Image1ScrollYCombine = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return Image1ScrollYPhase1.get();
    }
    if (value > 0.35 && value <= 0.8) {
      return "0%";
    }
    if (value > 0.8 && value <= 1) {
      return Image1ScrollYPhase2.get();
    }
    return "-150%";
  });
  const Image1OpacityCombine = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return Image1OpacityPhase1.get();
    }
    if (value > 0.35 && value <= 0.8) {
      return 1;
    }
    if (value > 0.8 && value <= 1) {
      return Image1OpacityPhase2.get();
    }
    return 0;
  });

  // image 2....
  const Image2ScrollXPhase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["-350%", "-150%"]
  );
  const Image2ScrollXPhase2 = useTransform(
    scrollYProgress,
    [0.35, 0.8],
    ["-150%", "0%"]
  );
  const Image2ScrollXPhase3 = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0%", "-150%"]
  );

  const Image2ScrollYPhase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["-150%", "0%"]
  );
  const Image2ScrollYPhase2 = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0%", "150%"]
  );

  const Image2OpacityPhase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    [0, 1]
  );
  const Image2OpacityPhase2 = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const Image2ScrollXCombine = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return Image2ScrollXPhase1.get();
    }

    if (value > 0.35 && value <= 0.8) {
      return Image2ScrollXPhase2.get();
    }
    if (value > 0.8 && value <= 1) {
      return Image2ScrollXPhase3.get();
    }
    return "-350%";
  });
  const Image2ScrollYCombine = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return Image2ScrollYPhase1.get();
    }
    if (value > 0.35 && value <= 0.8) {
      return "0%";
    }
    if (value > 0.8 && value <= 1) {
      return Image2ScrollYPhase2.get();
    }
    return "-150%";
  });
  const Image2OpacityCombine = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return Image2OpacityPhase1.get();
    }
    if (value > 0.35 && value <= 0.8) {
      return 1;
    }
    if (value > 0.8 && value <= 1) {
      return Image2OpacityPhase2.get();
    }
    return 0;
  });

  // image 3....
  const Image3ScrollXPhase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["250%", "150%"]
  );
  const Image3ScrollXPhase2 = useTransform(
    scrollYProgress,
    [0.35, 0.8],
    ["150%", "0%"]
  );
  const Image3ScrollXPhase3 = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0%", "-150%"]
  );

  const Image3ScrollYPhase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["-150%", "0%"]
  );
  const Image3ScrollYPhase2 = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0%", "150%"]
  );
  const Image3OpacityPhase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    [0, 1]
  );
  const Image3OpacityPhase2 = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const Image3ScrollXCombine = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return Image3ScrollXPhase1.get();
    }

    if (value > 0.35 && value <= 0.8) {
      return Image3ScrollXPhase2.get();
    }
    if (value > 0.8 && value <= 1) {
      return Image3ScrollXPhase3.get();
    }
    return "250%";
  });
  const Image3ScrollYCombine = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return Image3ScrollYPhase1.get();
    }
    if (value > 0.35 && value <= 0.8) {
      return "0%";
    }
    if (value > 0.8 && value <= 1) {
      return Image3ScrollYPhase2.get();
    }
    return "-150%";
  });
  const Image3OpacityCombine = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return Image3OpacityPhase1.get();
    }
    if (value > 0.35 && value <= 0.8) {
      return 1;
    }
    if (value > 0.8 && value <= 1) {
      return Image3OpacityPhase2.get();
    }
    return 0;
  });

  // image 4 ....

  const Image4ScrollXPhase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["-250%", "-150%"]
  );
  const Image4ScrollXPhase2 = useTransform(
    scrollYProgress,
    [0.35, 0.8],
    ["-150%", "0%"]
  );
  const Image4ScrollXPhase3 = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0%", "-150%"]
  );

  const Image4ScrollYPhase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["-150%", "0%"]
  );
  const Image4ScrollYPhase2 = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0%", "150%"]
  );

  const Image4OpacityPhase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    [0, 1]
  );
  const Image4OpacityPhase2 = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const Image4ScrollXCombine = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return Image4ScrollXPhase1.get();
    }

    if (value > 0.35 && value <= 0.8) {
      return Image4ScrollXPhase2.get();
    }
    if (value > 0.8 && value <= 1) {
      return Image4ScrollXPhase3.get();
    }
    return "-250%";
  });
  const Image4ScrollYCombine = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return Image4ScrollYPhase1.get();
    }
    if (value > 0.35 && value <= 0.8) {
      return "0%";
    }
    if (value > 0.8 && value <= 1) {
      return Image4ScrollYPhase2.get();
    }
    return "-250%";
  });
  const Image4OpacityCombine = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return Image4OpacityPhase1.get();
    }
    if (value > 0.35 && value <= 0.8) {
      return 1;
    }
    if (value > 0.8 && value <= 1) {
      return Image4OpacityPhase2.get();
    }
    return 0;
  });

  // making animation scroll smooth ....
  // image 1....
  const Image1ScrollXSmooth = useSpring(Image1ScrollXCombine, {
    stiffness: 20,
    damping: 20,
  });
  const Image1ScrollYSmooth = useSpring(Image1ScrollYCombine, {
    stiffness: 20,
    damping: 20,
  });
  const Image1OpacitySmooth = useSpring(Image1OpacityCombine, {
    stiffness: 20,
    damping: 20,
  });

  // image 2....

  const Image2ScrollXSmooth = useSpring(Image2ScrollXCombine, {
    stiffness: 20,
    damping: 20,
  });
  const Image2ScrollYSmooth = useSpring(Image2ScrollYCombine, {
    stiffness: 20,
    damping: 20,
  });
  const Image2OpacitySmooth = useSpring(Image2OpacityCombine, {
    stiffness: 20,
    damping: 20,
  });

  // image 3....

  const Image3ScrollXSmooth = useSpring(Image3ScrollXCombine, {
    stiffness: 20,
    damping: 20,
  });
  const Image3ScrollYSmooth = useSpring(Image3ScrollYCombine, {
    stiffness: 20,
    damping: 20,
  });
  const Image3OpacitySmooth = useSpring(Image3OpacityCombine, {
    stiffness: 20,
    damping: 20,
  });

  // image 4....

  const Image4ScrollXSmooth = useSpring(Image4ScrollXCombine, {
    stiffness: 20,
    damping: 20,
  });
  const Image4ScrollYSmooth = useSpring(Image4ScrollYCombine, {
    stiffness: 20,
    damping: 20,
  });
  const Image4OpacitySmooth = useSpring(Image4OpacityCombine, {
    stiffness: 20,
    damping: 20,
  });

  // amimation for points wrapper start....

  const TranslateYAxisPoint1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["0%", "-120%"]
  );

  const TranslateYAxisPoint2Phase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    ["0%", "-110%"]
  );
  const TranslateYAxisPoint2Phase2 = useTransform(
    scrollYProgress,
    [0.35, 0.8],
    ["-110%", "-180%"]
  );

  const TranslateYAxisPoint2 = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return TranslateYAxisPoint2Phase1.get();
    }
    if (value > 0.35 && value <= 0.8) {
      return TranslateYAxisPoint2Phase2.get();
    }
    if (value > 0.8 && value <= 1) {
      return "-250%";
    }
    return "0%";
  });
  const TranslateYAxisPoint3 = useTransform(
    scrollYProgress,
    [0.8, 1],
    ["0%", "-250%"]
  );
  const OpacityPoint1 = useTransform(scrollYProgress, [0.1, 0.35], [1, 0]);
  const OpacityPoint2Phase1 = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    [0, 1]
  );
  const OpacityPoint2Phase2 = useTransform(
    scrollYProgress,
    [0.35, 0.8],
    [1, 0]
  );
  const OpacityPoint2 = useTransform(scrollYProgress, (value) => {
    if (value >= 0.1 && value <= 0.35) {
      return OpacityPoint2Phase1.get();
    }
    if (value > 0.35 && value <= 0.8) {
      return OpacityPoint2Phase2.get();
    }
    if (value > 0.8 && value <= 1) {
      return 0;
    }
    return 0;
  });

  const OpacityPoint3 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  // male pointd animation smooth ...
  const TranslateYAxisPoint1Smooth = useSpring(TranslateYAxisPoint1, {
    stiffness: 20,
    damping: 20,
  });
  const OpacityPoint1Smooth = useSpring(OpacityPoint1, {
    stiffness: 20,
    damping: 20,
  });

  const TranslateYAxisPoint2Smooth = useSpring(TranslateYAxisPoint2, {
    stiffness: 20,
    damping: 20,
  });
  const OpacityPoint2Smooth = useSpring(OpacityPoint2, {
    stiffness: 20,
    damping: 20,
  });

  const TranslateYAxisPoint3Smooth = useSpring(TranslateYAxisPoint3, {
    stiffness: 20,
    damping: 20,
  });
  const OpacityPoint3Smooth = useSpring(OpacityPoint3, {
    stiffness: 20,
    damping: 20,
  });

  return (
    <>
      <div>
        <div
          ref={mainContainerWrapperRef}
          className="max-w-[1920px] mx-auto min-h-[250vh] relative"
        >
          <div
            ref={scope}
            className="sticky top-0 h-screen w-screen flex justify-center"
          >
            <div className="w-[85%] mx-auto flex justify-between items-center gap-5">
              <div className="w-1/2  flex justify-center items-center bg-green-00">
                <div className="relative w-full bg-red-90 flex justify-center items-center py-4 overflow-hidden">
                  <div className="absolute top-0 left-0 z-0 w-full h-full flex justify-center items-center">
                    <WhyUsSectionSvg />
                  </div>

                  <Image
                    alt="mobile-img"
                    src="/assets/MobileImg.png"
                    height={350}
                    width={350}
                    className="z-10"
                  />

                  <motion.div
                    style={{
                      x: Image1ScrollXSmooth,
                      y: Image1ScrollYSmooth,
                      opacity: Image1OpacitySmooth,
                    }}
                    id="mobileBanner1"
                    className="absolute z-20 mr-[1%] top-[8%] overflow-hidden"
                  >
                    <Image
                      alt="mobile-img"
                      src="/assets/mobileBanner.png"
                      height={350}
                      width={205}
                      className="z-20"
                    />
                  </motion.div>

                  <motion.div
                    style={{
                      x: Image2ScrollXSmooth,
                      y: Image2ScrollYSmooth,
                      opacity: Image2OpacitySmooth,
                    }}
                    id="mobileBanner2"
                    className="absolute z-20 mr-[1%] top-[25%] overflow-hidden"
                  >
                    <Image
                      alt="mobile-img"
                      src="/assets/mobileBanner2.png"
                      height={350}
                      width={205}
                      className="z-20"
                    />
                  </motion.div>

                  <motion.div
                    style={{
                      x: Image3ScrollXSmooth,
                      y: Image3ScrollYSmooth,
                      opacity: Image3OpacitySmooth,
                    }}
                    id="mobileBanner3"
                    className="absolute z-20 mr-[1%] top-[28%] overflow-hidden"
                  >
                    <Image
                      alt="mobile-img"
                      src="/assets/mobileBanner3.png"
                      height={350}
                      width={205}
                      className="z-20"
                    />
                  </motion.div>

                  <motion.div
                    style={{
                      x: Image4ScrollXSmooth,
                      y: Image4ScrollYSmooth,
                      opacity: Image4OpacitySmooth,
                    }}
                    id="mobileBanner4"
                    className="absolute z-20 mr-[1%] bottom-[25%] overflow-hidden"
                  >
                    <Image
                      alt="mobile-img"
                      src="/assets/mobileBanner4.png"
                      height={350}
                      width={205}
                      className="z-20"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-start items-center gap-5">
                  <HomepageTagIconSvg />
                  <h5
                    style={{
                      fontFamily: mainFont.style.fontFamily,
                    }}
                    className="text-white text-[1.1vw]"
                  >
                    Why Us
                  </h5>
                </div>
                <div className="w-[70%] my-[2%]">
                  <h3
                    style={{
                      fontFamily: mainFont.style.fontFamily,
                      lineHeight: "normal",
                    }}
                    className="text-white text-[2.2vw] customLine__height"
                  >
                    What Makes Us Different
                  </h3>
                  <p className="text-white font-secondaryFont font-[400] my-[2%] text-[1vw]">
                    Code Visionary Studio stands out for our innovative
                    solutions, personalized service, and proven track record.
                    Our holistic approach to web design, app development,
                    branding, and marketing ensures your business thrives in the
                    digital age.
                  </p>
                </div>
                <div className=" h-32 overflow-hidden">
                  <motion.div
                    style={{
                      y: TranslateYAxisPoint1Smooth,
                      opacity: OpacityPoint1Smooth,
                    }}
                    className="bg-white flex-shrink-0 rounded-full px-3 py-2.5 flex justify-center items-center gap-4 w-[80%] my-[3%]"
                  >
                    <div className="bg-black h-14 w-14 rounded-full flex justify-center items-center flex-shrink-0">
                      <h4
                        style={{
                          fontFamily: mainFont.style.fontFamily,
                        }}
                        className="text-white font-[500] text-[2.1vw]"
                      >
                        1
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-[#000D0F] font-secondaryFont font-[600] text-[1.2vw]">
                        Proven Track Record
                      </h4>
                      <p className="text-[#333333] text-[.85vw] font-secondaryFont font-[600]">
                        Our portfolio of successful projects and satisfied
                        clients speaks to our commitment to excellence and our
                        ability to deliver results.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    style={{
                      y: TranslateYAxisPoint2Smooth,
                      opacity: OpacityPoint2Smooth,
                    }}
                    className="bg-white flex-shrink-0 rounded-full px-3 py-2.5 flex justify-center items-center gap-4 w-[80%] my-[3%]"
                  >
                    <div className="bg-black h-14 w-14 rounded-full flex justify-center items-center flex-shrink-0">
                      <h4
                        style={{
                          fontFamily: mainFont.style.fontFamily,
                        }}
                        className="text-white font-[500] text-[2.1vw]"
                      >
                        2
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-[#000D0F] font-secondaryFont font-[600] text-[1.2vw]">
                        Proven Track Record
                      </h4>
                      <p className="text-[#333333] text-[.85vw] font-secondaryFont font-[600]">
                        Our portfolio of successful projects and satisfied
                        clients speaks to our commitment to excellence and our
                        ability to deliver results.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    style={{
                      y: TranslateYAxisPoint3Smooth,
                      opacity: OpacityPoint3Smooth,
                    }}
                    className="bg-white flex-shrink-0 rounded-full px-3 py-2.5 flex justify-center items-center gap-4 w-[80%] my-[3%]"
                  >
                    <div className="bg-black h-14 w-14 rounded-full flex justify-center items-center flex-shrink-0">
                      <h4
                        style={{
                          fontFamily: mainFont.style.fontFamily,
                        }}
                        className="text-white font-[500] text-[2.1vw]"
                      >
                        3
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-[#000D0F] font-secondaryFont font-[600] text-[1.2vw]">
                        Proven Track Record
                      </h4>
                      <p className="text-[#333333] text-[.85vw] font-secondaryFont font-[600]">
                        Our portfolio of successful projects and satisfied
                        clients speaks to our commitment to excellence and our
                        ability to deliver results.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
