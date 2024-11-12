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
          <div className="w-[85%] mx-auto flex flex-col items-center justify-center">
            <div className="flex justify-center items-center gap-4">
              <HomepageTagIconSvg />
              <h4
                style={{
                  fontFamily: mainFont.style.fontFamily,
                }}
                className="font-bold text-[1.1]vw"
              >
                Our services
              </h4>
            </div>
            <h2
              style={{
                fontFamily: mainFont.style.fontFamily,
              }}
              className="font-bold text-[2.7vw] my-[.5%]"
            >
              Our Expertise
            </h2>

            <p className="text-center font-secondaryFont text-[1.1vw] font-[400]">
              Discover the comprehensive range of IT services we offer at Code
              Visionary Studios. From web design and application development to branding
              and digital marketing, our expert team delivers innovative
              solutions that drive your business forward.
            </p>

            <div className="flex flex-col gap-5 w-full my-[2%]">
              <div className="flex justify-center w-full gap-5">
                <div className="w-[50%] bg-[#FFFFFF]/20 backdrop:blur-md flex justify-center px-3 py-5 rounded-lg">
                  <div className="w-[50%] flex flex-col justify-start items-start gap-3">
                    <h4 className="font-secondaryFont text-[1.2vw] font-[500]">
                      Website Design & Development
                    </h4>
                    <p className="font-secondaryFont text-[.8vw] font-[400]">
                      Creating visually stunning and highly functional websites
                      that elevate your online presence. Our expert team blends
                      creativity with technical expertise to deliver custom web
                      solutions tailored to your unique business needs.
                    </p>
                    <button
                      className="font-bold text-[1vw]"
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
                <div className="flex justify-center items-center gap-5 w-[50%]">
                  <div className="flex-1 flex flex-col justify-center items-start gap-3 h-full bg-[#FFFFFF]/20 backdrop:blur-md px-3 py-5 rounded-lg">
                    <h3 className="text-white font-secondaryFont font-[500] text-[1.2vw]">
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
                    <h3 className="font-secondaryFont text-[1.2vw] font-[500]">
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
              <div className="flex justify-center w-full gap-5">
                <div className="flex-1 flex flex-col justify-center items-start gap-1 h-full bg-[#FFFFFF]/20 backdrop:blur-md px-3 py-0 rounded-lg">
                  <h3 className="font-secondaryFont text-[1.2vw] font-[500] mt-3">
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
                <div className="flex-1 flex flex-col justify-center items-start gap-1 h-full bg-[#FFFFFF]/20 backdrop:blur-md px-3 py-0 rounded-lg">
                  <h3 className="font-secondaryFont text-[1.2vw] font-[500] mt-3">
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
                <div className="flex-1 flex flex-col justify-center items-start gap-1 h-full bg-[#FFFFFF]/20 backdrop:blur-md px-3 py-5 rounded-lg">
                  <h3 className="font-secondaryFont text-[1.2vw] font-[500]">
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
