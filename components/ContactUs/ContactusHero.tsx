import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";

const ContactusHero = () => {
  return (
    <div className="w-full bg-[#000D0F] overflow-hidden h-[100vh] flex justify-center ">
      {/* Grid Overlay with lower z-index for background */}
      <div className="relative w-full inset-0 z-10 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] grid-rows-[repeat(auto-fill,minmax(100px,1fr))] mix-blend-soft-light pointer-events-auto">
        {[...Array(100)].map((_, index) => (
          <div
            key={index}
            className="border border-[#389ba4] transition-colors duration-300 hover:bg-[#389ba4]"
          />
        ))}
      </div>
      {/* Gradient overlay for fade effect */}
      <div className="absolute inset-x-0 bottom-0 h-[50vh] z-20 bg-gradient-to-t from-[#000D0F] to-transparent pointer-events-none"></div>
      {/* Content Section with Higher z-index */}
      <div className="absolute z-30 text-center flex flex-col justify-start mt-[15%] h-full w-[80%]">
        <div
          style={{ fontFamily: mainFont.style.fontFamily }}
          className="text-7xl text-white leading-[100px] font-bold"
        >
          Get in Touch with Code Visionary Studios
        </div>
        <div className="text-lg leading-[30px] w-[100%] mt-5">
          Stay ahead in the digital world with our expert insights, industry
          trends, and creative inspiration. Explore our blog <br /> for valuable
          tips, thought leadership, and the latest innovations from Code
          Visionary Studios.
        </div>
      </div>

      <div className="flex justify-center items-center w-[100%] absolute z-40">
        {/* Call Us Button */}
        <a
          href="tel:+1234567890"
          className="relative w-[72px] h-[72px] rounded-full flex items-center justify-start hover:w-[186px] transition-all duration-300 pl-2 hover:bg-white hover:text-black group ml-4"
        >
          <div className="flex items-center justify-center">
            <span className="flex items-center h-full group-hover:text-black transition-all duration-300">
              <Image
                src="/assets/call.png"
                alt="Call Icon"
                className="group-hover:invert bg-white h-[46px] w-[46px] rounded-full p-2"
                width={25}
                height={25}
              />
              <div
                className="font-semibold text-xl h-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2"
                style={{ fontFamily: mainFont.style.fontFamily }}
              >
                Call Us
              </div>
            </span>
          </div>
        </a>

        {/* Chat/Contact Us Button */}
        <a
          href="#contact-form"
          className="relative w-[72px] h-[72px] rounded-full flex items-center justify-start hover:w-[280px] transition-all duration-300 pl-2 hover:bg-white hover:text-black group ml-4"
        >
          <div className="flex items-center justify-center">
            <span className="flex items-center h-full group-hover:text-black transition-all duration-300">
              <Image
                src="/assets/chat.png"
                alt="Chat Icon"
                className="group-hover:invert bg-white h-[46px] w-[46px] rounded-full p-2"
                width={25}
                height={25}
              />
              <div
                className="font-semibold text-xl text-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2"
                style={{ fontFamily: mainFont.style.fontFamily }}
              >
                Contact With Us
              </div>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactusHero;