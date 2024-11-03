import { mainFont } from "@/components/UI/Mainfontt";
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
      <div className="max-w-[1920px] min-h-[100vh] mx-auto relative flex justify-center items-center">
        {/* <div className="absolute w-full h-full">
          <iframe
            src="https://my.spline.design/webbg-2027e265eca50f4533c337593fa82e2a"
            frameBorder="0"
            width="100%"
            height="100%"
            title="Background Animation"
          ></iframe>
          <div className="absolute bottom-0 left-0 w-full bg-green-5 homePage__heroSectionOverlay h-[20%]" />
        </div> */}
        <div className=" flex flex-col justify-center items-center w-[85%] gap-1 mx-auto relative">
          <h1
            style={{
              fontFamily: mainFont.style.fontFamily,
            }}
            className="text-[5vw] uppercase text-white font-bold customLine__height"
          >
            Transforming Ideas into
          </h1>
          <h2
            style={{
              fontFamily: mainFont.style.fontFamily,
            }}
            className="text-[5vw] uppercase font-bold customLine__height gradient_text"
          >
            Digital Reality
          </h2>
          <p className="2xl:text-[1.5vw] xl:text-[1.6vw] lg:text-[1.9vw] md:text-[2.2vw] text-[2.5vw] font-secondaryFont font-medium my-7 text-white">
            Web Design, App Development, Branding & Marketing Services.
          </p>

          <button
            style={{
              fontFamily: mainFont.style.fontFamily,
            }}
            className="uppercase text-[#C44F56] bg-white rounded-full border-none outline-none px-6 py-2.5 text-[1.5vw] mt-7 font-bold"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
