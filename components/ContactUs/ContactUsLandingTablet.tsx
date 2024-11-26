import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";

const ContactUsLandingTablet = () => {
  return (
    <div className="relative h-[100vh] w-full bg-[#000D0F] overflow-hidden">
      {/* Grid background with medium cells for tablet */}
      <div className="absolute inset-0 z-30 grid grid-cols-[repeat(auto-fill,minmax(75px,1fr))] grid-rows-[repeat(auto-fill,minmax(75px,1fr))] mix-blend-soft-light pointer-events-auto">
        {[...Array(100)].map((_, index) => (
          <div
            key={index}
            className="border border-[#389ba4] transition-colors duration-300 hover:bg-[#389ba4]"
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[30vh] z-30 bg-gradient-to-t from-[#000D0F] to-transparent pointer-events-none"></div>

      {/* Main content */}
      <div className="absolute z-20 text-center flex flex-col items-center px-8 h-full">
        <div className="h-[70%] justify-center my-auto max-w-[95%]">
          <div
            style={{ fontFamily: mainFont.style.fontFamily }}
            className="text-[64px] text-white leading-[1.3] font-bold"
          >
            <h1>Get in Touch with Code Visionary Studios</h1>
          </div>
          <div className="text-[16px] leading-[28px] text-white mt-5">
            Specializing in software development, React and Flutter applications, and cutting-edge IT solutions,
            we craft tailored web and mobile applications designed for scalability and innovation.
          </div>

          {/* Contact buttons - Horizontal layout for tablet */}
          <div className="mt-20 flex flex-row justify-between items-center w-full">
            <a href="tel:+918240833838"
              className="h-[72px] rounded-full flex items-center justify-start pl-2 pr-10 bg-white text-black mx-auto">
              <div className="flex items-center justify-center">
                <span className="flex items-center h-full">
                  <Image
                    src="/assets/call.png"
                    alt="Call Icon"
                    className="invert bg-white h-[46px] w-[46px] rounded-full p-2"
                    width={25}
                    height={25}
                  />
                  <div
                    className="font-semibold text-[24px] h-full text-center ml-2"
                    style={{ fontFamily: mainFont.style.fontFamily }}
                  >
                    Call Us
                  </div>
                </span>
              </div>
            </a>

            <a href="#contact-form"
              className="pl-2 pr-10 h-[72px] rounded-full flex items-center justify-start bg-white text-black mx-auto">
              <div className="flex items-center justify-center">
                <span className="flex items-center h-full">
                  <Image
                    src="/assets/chat.png"
                    alt="Chat Icon"
                    className="invert bg-white h-[46px] w-[46px] rounded-full p-2"
                    width={25}
                    height={25}
                  />
                  <div
                    className="font-semibold text-[24px] text-center h-full ml-2"
                    style={{ fontFamily: mainFont.style.fontFamily }}
                  >
                    Contact With Us
                  </div>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsLandingTablet;
