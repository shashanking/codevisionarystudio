//  1. Image height of hersection must  be smaller 

import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";
import React from "react";

const AboutUsLanding = () => {
  return (
    <>
      <div className="w-full h flex items-center relative">
        {/* Dynamic half-circle blur effect */}
        <div
          className="absolute w-[80%] md:h-[700px] h-[343px] md:-top-[460px] -top-[200px] left-1/2 -translate-x-1/2 opacity-80 bg-gradient-to-t from-transparent via-[#007fa97e] to-transparent rounded-full blur-md md:blur-xl"
          
        />

        {/* Content section with higher z-index */}
        <div className="w-full flex flex-col relative z-10">
          <div className="md:mt-[10%] mt-[215px] mx-auto md:w-[76%] w-[90%]">
            {/* Heading text */}
            <div
              style={{ fontFamily: mainFont.style.fontFamily }}
              className="font-semibold md:text-[72px] text-[40px] md:leading-[72px] leading-[40px] uppercase text-white"
            >
              We Believe in <span style={{color: "#C44F56"}}>Innovation</span> and <span style={{color: "#007FA9"}}>Creativity</span>
            </div>
            <p className="md:py-4 pt-[26px] pb-[50px] md:text-xl text-[14px] text-white md:leading-normal leading-[21px]">
              At Code Visionary Studios, we believe in the power of innovation
              and creativity. Our team excels in web design, application development,
              branding, and digital marketing, delivering solutions that drive
              success. Learn more about our philosophy, our journey, and the
              people who make it all possible.
            </p>
          </div>

          {/* Image container */}
          <div className="md:mt-4 -mt-4 mx-auto md:w-[80%] w-[90%]">
            <Image
              src="/assets/abouthero.jpeg"
              alt="hero section image"
              width={1600}
              height={239}
              className="rounded-3xl shadow-[0px_0px_4px_rgba(137,226,255,0.2)] object-cover object-bottom mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsLanding;
