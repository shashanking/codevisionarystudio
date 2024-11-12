//  1. Image height of hersection must  be smaller 

import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";
import React from "react";

const AboutUsLanding = () => {
  return (
    <>
      <div className="w-full flex items-center relative">
        {/* Dynamic half-circle blur effect */}
        <div
          className="absolute w-[80%] h-[700px] -top-[460px] left-1/2 -translate-x-1/2 opacity-[0.7]"
          style={{
            background: "#007FA9",
            borderRadius: "100%",
            filter: "blur(300px)",
          }}
        />

        {/* Content section with higher z-index */}
        <div className="w-full flex flex-col relative z-10">
          <div className="mt-[10%] mx-auto w-[76%]">
            {/* Heading text */}
            <div
              style={{ fontFamily: mainFont.style.fontFamily }}
              className="font-semibold text-[72px] leading-[72px] uppercase"
            >
              We Believe in Innovation and Creativity
            </div>
            <p className="py-4 text-xl">
              At Code Visionary Studios, we believe in the power of innovation
              and creativity. Our team excels in web design, app development,
              branding, and digital marketing, delivering solutions that drive
              success. Learn more about our philosophy, our journey, and the
              people who make it all possible.
            </p>
          </div>

          {/* Image container */}
          <div className="mt-4 mx-auto w-[80%]  ">
            <Image
              src="/assets/abouthero.jpeg"
              alt="hero section image"
              width={1600}
              height={239}
              // layout="responsive"
              // priority
              className="rounded-3xl shadow-[0px_0px_4px_0px_#89E2FF33] object-cover object-bottom mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsLanding;
