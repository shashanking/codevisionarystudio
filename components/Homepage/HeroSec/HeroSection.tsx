import { mainFont } from "@/components/UI/Mainfontt";
import Link from "next/link";
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-full">
        <iframe
          src="https://my.spline.design/webbg-2027e265eca50f4533c337593fa82e2a"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Background Animation"
        ></iframe>
        <div className="absolute bottom-0 left-0 w-full bg-green-5 homePage__heroSectionOverlay h-[20%]" />
      </div>
      <div className="max-w-[1920px] min-h-[100vh] mx-auto relative flex justify-center 2xl:items-center xl:items-center lg:items-center md:landscape:items-center md:portrait:items-center items-end py-16">
        <div className="flex flex-col justify-center items-center 2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:portrait:w-[95%] md:landscape:w-[85%] w-[95%] gap-1 mx-auto relative">
          <h1
            style={{
              fontFamily: mainFont.style.fontFamily,
            }}
            className="2xl:text-[5vw] xl:text-[5vw] lg:text-[5vw] md:portrait:text-[5vw] md:landscape:text-[5vw] text-[6vw] uppercase text-white font-bold customLine__height"
          >
            Transforming Ideas into
          </h1>
          <h2
            style={{
              fontFamily: mainFont.style.fontFamily,
            }}
            className="2xl:text-[5vw] xl:text-[5vw] lg:text-[5vw] md:portrait:text-[5vw] md:landscape:text-[5vw] text-[6vw] uppercase font-bold customLine__height gradient_text"
          >
            Digital Reality
          </h2>
          <p className="2xl:text-[1.5vw] xl:text-[1.6vw] lg:text-[1.9vw] md:text-[2.2vw] text-[3.3vw] text-center font-secondaryFont font-medium my-7 text-white">
            Web Design, Application Development, Branding & Marketing Solutions.
          </p>
          <Link href="/contact_us">
            <button
              style={{
                fontFamily: mainFont.style.fontFamily,
              }}
              className="uppercase text-[#C44F56] bg-white rounded-full border-none outline-none px-6 py-2.5 2xl:text-[1.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:portrait:text-[2.5vw] md:landscape:text-[1.5vw] text-[4.5vw]  mt-7 font-bold"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
