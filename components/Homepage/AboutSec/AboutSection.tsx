import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import { HomeAboutSecSvg, HomepageTagIconSvg } from "@/styles/Svgs/AllSvgs";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div>
      <div className="max-w-[1920px] mx-auto min-h-[200vh] relative">
        <div className="sticky top-0 w-full h-screen flex justify-center items-center">
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
                <p className="text-[#8F98A8] font-secondaryFont font-[400] text-[.95vw]">
                  At Code Visionary Studio, we combine creativity, technology,
                  and strategic thinking to craft unique digital experiences.
                  Our talented team is committed to delivering high-quality web
                  design, app development, branding, and marketing services
                  tailored to meet your specific needs.
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="relative rounded-xl overflow-hidden opacity-85 h-[300px] w-[85%] mx-auto flex justify-center items-center">
                <Image
                  src="/assets/img2.jpeg"
                  fill
                  alt="our-projects-shorts"
                  className="object-cover"
                />
              </div>

              <div className="relative rounded-xl overflow-hidden opacity-85 ml-[8%] h-[250px] w-[65%]">
                <Image src="/assets/img7.jpeg" fill alt="our-projects-shorts" />
              </div>

              <div className="relative rounded-xl overflow-hidden opacity-100 -mt-[60px] h-[250px] w-[60%] ml-auto">
                <Image src="/assets/img5.jpeg" fill alt="our-projects-shorts" />
              </div>

              <div className="relative rounded-xl overflow-hidden opacity-85 h-[250px] -mt-[40px] w-[70%] ml-auto flex justify-center items-center">
                <Image src="/assets/img1.jpeg" fill alt="our-projects-shorts" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
