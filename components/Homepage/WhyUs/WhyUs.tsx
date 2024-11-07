import { mainFont } from "@/components/UI/Mainfontt";
import { HomepageTagIconSvg, WhyUsSectionSvg } from "@/styles/Svgs/AllSvgs";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

export const WhyUsSection = () => {
  const [scope, animate] = useAnimate();
  const handleAutoAnimation = async () => {
    console.log("autoAnimation");
    animate(
      "#mobileBanner1",
      {
        x: "90%",
        y: ["-100%", "0%"],
        opacity: [0, 1],
      },
      { duration: 0.5, ease: "backInOut" }
    );
    animate(
      "#mobileBanner2",
      {
        x: "-90%",
        y: ["-100%", "0%"],
        opacity: [0, 1],
      },
      { duration: 0.5, ease: "backInOut" }
    );
    animate(
      "#mobileBanner3",
      {
        x: "90%",
        y: ["-100%", "0%"],
        opacity: [0, 1],
      },
      { duration: 0.5, ease: "backInOut" }
    );

    await animate(
      "#mobileBanner4",
      {
        x: "-90%",
        y: ["-100%", "0%"],
        opacity: [0, 1],
      },
      { duration: 0.5, ease: "backInOut" }
    );

    animate(
      "#mobileBanner1",
      {
        x: "0%",
      },
      { duration: 0.5, ease: "backInOut", delay: 2.8 }
    );
    animate(
      "#mobileBanner2",
      {
        x: "0%",
      },
      { duration: 0.5, ease: "backInOut", delay: 2.8 }
    );
    animate(
      "#mobileBanner3",
      {
        x: "0%",
      },
      { duration: 0.5, ease: "backInOut", delay: 2.8 }
    );
    animate(
      "#mobileBanner4",
      {
        x: "0%",
      },
      { duration: 0.5, ease: "backInOut", delay: 2.8 }
    );
  };

  useEffect(() => {
    handleAutoAnimation();
    const timer = setInterval(() => handleAutoAnimation(), 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div>
        <div
          ref={scope}
          className="max-w-[1920px] mx-auto min-h-[100vh] relative flex justify-center items-centers bg-yellow-00"
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
                <div
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
                </div>
                <div
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
                </div>
                <div
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
                </div>
                <div id="mobileBanner4" className="absolute z-20 mr-[1%] bottom-[25%] overflow-hidden">
                  <Image
                    alt="mobile-img"
                    src="/assets/mobileBanner4.png"
                    height={350}
                    width={205}
                    className="z-20"
                  />
                </div>
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
                  Code Visionary Studio stands out for our innovative solutions,
                  personalized service, and proven track record. Our holistic
                  approach to web design, app development, branding, and
                  marketing ensures your business thrives in the digital age.
                </p>
              </div>

              <div className="bg-white rounded-full px-3 py-2.5 flex justify-center items-center gap-4 w-[80%] my-[3%]">
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
                    Our portfolio of successful projects and satisfied clients
                    speaks to our commitment to excellence and our ability to
                    deliver results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
