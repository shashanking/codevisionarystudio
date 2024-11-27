import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";

const ContactUsLandingMobile = () => {
  return (
    <div className="relative h-[100vh] w-full bg-[#000D0F] overflow-hidden">
      {/* Grid background with larger cells for mobile */}
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
      <div className="absolute z-20 text-center flex flex-col items-center px-4 h-full">
        <div className="justify-center my-auto">
          <div
            style={{ fontFamily: mainFont.style.fontFamily }}
            className="text-[44px] text-white leading-tight font-bold"
          >
            <h1>Get in Touch with Code Visionary Studios</h1>
          </div>
          <div className="text-base leading-[24px] text-white mt-4">
            Specializing in software development, React and Flutter applications, and cutting-edge IT solutions,
            we craft tailored web and mobile applications designed for scalability and innovation.
          </div>

          {/* Contact buttons - Below subtitle */}
          <div className="mt-12 flex flex-col space-y-4 items-center w-full">
            <a href="tel:+918240833838"
              className="w-[186px] h-[72px] rounded-full flex items-center justify-start pl-2 bg-white text-black">
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
                    className="font-semibold text-[20px] h-full text-center ml-2"
                    style={{ fontFamily: mainFont.style.fontFamily }}
                  >
                    Call Us
                  </div>
                </span>
              </div>
            </a>

            <a href="#contact-form"
              className="w-[280px] h-[72px] rounded-full flex items-center justify-start pl-2 bg-white text-black">
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
                    className="font-semibold text-[20px] text-center h-full ml-2"
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

export default ContactUsLandingMobile;
