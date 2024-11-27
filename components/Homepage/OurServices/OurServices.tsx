import { mainFont } from "@/components/UI/Mainfontt";
import { HomeAboutSecSvg, HomepageTagIconSvg } from "@/styles/Svgs/AllSvgs";
import Image from "next/image";
import React from "react";

export const OurServices: React.FC = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute -bottom-[35%] -left-[20%] flex justify-end items-end">
          <HomeAboutSecSvg />
        </div>
        <div className="absolute -top-[35%] flex justify-start items-start -right-[20%]">
          <HomeAboutSecSvg />
        </div>
        <div className="max-w-[1920px] min-h-[100vh] mx-auto relative z-40 flex justify-center">
          <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:portrait:w-[90%] md:landscape:w-[85%] w-[90%] mx-auto flex flex-col items-center justify-center">
            <div className="flex justify-center items-center gap-4">
              <HomepageTagIconSvg />
              <h4
                style={{
                  fontFamily: mainFont.style.fontFamily,
                }}
                className="font-bold 2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] md:landscape:text-[1.1vw] md:portrait:text-[2.1vw] text-[3.1vw] text-white"
              >
                Our services
              </h4>
            </div>
            <h2
              style={{
                fontFamily: mainFont.style.fontFamily,
              }}
              className="font-bold 2xl:text-[2.7vw] xl:text-[2.7vw] lg:text-[2.7vw] md:portrait:text-[3.7vw] md:landscape:text-[2.7vw] text-[6vw] my-[.5%] text-white"
            >
              Our Expertise
            </h2>

            <p className="text-center font-secondaryFont 2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] md:landscape:text-[1.1vw] md:portrait:text-[2.5vw] text-[3vw] font-[400] text-white">
              Discover the comprehensive range of IT services we offer at Code
              Visionary Studios. From web design and application development to
              branding and digital marketing, our expert team delivers
              innovative solutions that drive your business forward.
            </p>

            <div className="flex flex-col gap-5 w-full my-[2%]">
              <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:landscape:flex-row md:portrait:flex-col justify-center w-full 2xl:gap-5 xl:gap-5 lg:gap-5 md:portrait:gap-2.5 md:landscape:gap-5 gap-2">
                <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:portrait:w-full md:landscape:w-[50%] w-full bg-[#FFFFFF]/20 backdrop:blur-md flex justify-center items-center 2xl:items-start xl:items-start lg:items-start md:landscape:items-start px-3 py-5 rounded-lg">
                  <div className="w-[50%] flex flex-col justify-start items-start 2xl:gap-3 xl:gap-3 lg:gap-3 md:landscape:gap-3 gap-1">
                    <h4 className="font-secondaryFont 2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw] md:portrait:text-[2.2vw] md:landscape:text-[1.2vw] text-[4.2vw] font-[500] text-white">
                      Website Design & Development
                    </h4>
                    <p className="font-secondaryFont 2xl:text-[.8vw] xl:text-[.8vw] lg:text-[.8vw] md:portrait:text-[2.5vw] md:landscape:text-[.8vw] text-[2.2vw] font-[400] text-white">
                      Creating visually stunning and highly functional websites
                      that elevate your online presence. Our expert team blends
                      creativity with technical expertise to deliver custom web
                      solutions tailored to your unique business needs.
                    </p>
                    <button
                      className="font-bold 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:landscape:text-[1vw] text-[3vw] text-white"
                      style={{
                        fontFamily: mainFont.style.fontFamily,
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                  <div className="w-[50%] relative">
                    <Image
                      src="/assets/WebDesignDevelopImg.png"
                      alt="mock-up"
                      height={1000}
                      width={1000}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center 2xl:gap-5 xl:gap-5 lg:gap-5 md:landscape:gap-5 gap-2 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:landscape:w-[50%] w-full">
                  <div className="flex-1 flex flex-col justify-center items-start gap-3 h-full bg-[#FFFFFF]/20 backdrop:blur-md px-3 py-5 rounded-lg">
                    <h3 className="text-white font-secondaryFont font-[500]  2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw] md:portrait:text-[2.2vw] md:landscape:text-[1.2vw] text-[4vw]">
                      Mobile Application Design & Development
                    </h3>

                    <div className="w-full relative flex justify-center items-center">
                      <Image
                        src="/assets/MobileDevImg.png"
                        alt="mock-up"
                        height={140}
                        width={140}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-start gap-3 h-full bg-[#FFFFFF]/20 backdrop:blur-md px-3 py-5 rounded-lg">
                    <h3 className="font-secondaryFont 2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw] md:portrait:text-[2.2vw] md:landscape:text-[1.2vw] text-[4vw] font-[500] text-white">
                      Branding
                    </h3>
                    <div className="w-full relative flex justify-center items-center">
                      <Image
                        src="/assets/BrandingImg.png"
                        alt="mock-up"
                        height={140}
                        width={170}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center flex-wrap w-full 2xl:gap-5 xl:gap-5 lg:gap-5 md:landscape:gap-5 gap-2">
                <div className="flex-1 flex flex-col justify-center items-start gap-1 h-full bg-[#FFFFFF]/20 backdrop:blur-md px-3 py-0 rounded-lg flex-shrink-0">
                  <h3 className="font-secondaryFont 2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw] md:portrait:text-[2.2vw] md:landscape:text-[1.2vw] text-[4vw] font-[500] mt-3 text-white">
                    Digital Marketing
                  </h3>
                  <div className="w-full h-[150px] relative flex justify-center items-center">
                    <Image
                      src="/assets/DigitalMarketingImg.png"
                      alt="mock-up"
                      fill
                      // height={100}
                      // width={300}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-start gap-1 h-full bg-[#FFFFFF]/20 backdrop:blur-md px-3 py-0 rounded-lg flex-shrink-0">
                  <h3 className="font-secondaryFont 2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw] md:portrait:text-[2.2vw] md:landscape:text-[1.2vw] text-[4vw] font-[500] mt-3 text-white">
                    UI/UX Design
                  </h3>
                  <div className="w-full h-[150px] relative flex justify-center items-center">
                    <Image
                      src="/assets/UXUIImg.png"
                      alt="mock-up"
                      fill
                      // height={100}
                      // width={300}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-start gap-1 h-full bg-[#FFFFFF]/20 backdrop:blur-md px-3 py-5 rounded-lg flex-shrink-0">
                  <h3 className="font-secondaryFont 2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw] md:portrait:text-[2.2vw] md:landscape:text-[1.2vw] text-[4vw] font-[500] text-white">
                    Web Applications
                  </h3>
                  <div className="w-full h-[150px] relative flex justify-center items-center">
                    <Image
                      src="/assets/WebapplicationImg.png"
                      alt="mock-up"
                      fill
                      // height={100}
                      // width={300}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
