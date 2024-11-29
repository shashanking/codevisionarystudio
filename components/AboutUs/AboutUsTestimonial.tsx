import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import CounterUp from "./CounterUp";
import Image from "next/image";

// Component to display testimonials and statistics in the About Us section
const AboutUsTestimonial = () => {
  return (
    // Main container with full width and screen height
    <div className="w-full py-20 md:py-32">
      {/* Content wrapper with 80% width */}
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col lg:flex-row lg:gap-20 justify-between">
        {/* Left section containing testimonial cards */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-6 justify-center items-center">
            {/* Main heading with custom font */}
            <div
              style={{ fontFamily: mainFont.style.fontFamily }}
              className="font-semibold text-[32px] md:text-4xl uppercase w-full text-white mb-4"
            >
              We Value Integrity and Transparency
            </div>
            {/* First testimonial card */}
            <div className="w-full max-w-[788px] h-[140px] border border-[#007FA9] rounded-xl flex flex-col md:flex-row items-center justify-center md:justify-between pl-6 md:pl-10 pr-4 md:pr-6 text-2xl md:text-4xl font-bold hover:bg-white hover:text-black group">
              <div className="md:hidden w-[30%] -mb-2">
                <Image
                  src="/assets/review_1.png"
                  alt="Review"
                  className="group-hover:invert w-full h-auto"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center gap-20">
                <span className="text-white text-center md:text-left group-hover:text-black md:group-hover:-translate-x-4 md:group-hover:-translate-y-2 md:group-hover:scale-90 transition-all md:translate-x-5">
                  Excellence
                  <div className="hidden md:block text-[14px] md:text-[16px] font-light leading-[20px] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-5 pr-4 md:pr-8">
                    We strive for the highest quality in every project, ensuring
                    precision and client satisfaction through exceptional
                    service and attention to detail.
                  </div>
                </span>
              </div>
              <div className="hidden md:block w-[25%] md:w-[30%] pl-4">
                <Image
                  src="/assets/review_1.png"
                  alt="Review"
                  className="group-hover:invert w-full h-auto"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            {/* Second testimonial card */}
            <div className="w-full max-w-[788px] h-[140px] border border-[#007FA9] rounded-xl flex flex-col md:flex-row items-center justify-center md:justify-between pl-6 md:pl-10 pr-4 md:pr-6 text-2xl md:text-4xl font-bold hover:bg-white hover:text-black group">
              <div className="md:hidden w-[30%] -mb-2">
                <Image
                  src="/assets/review_2.png"
                  alt="Review"
                  className="group-hover:invert w-full h-auto"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center gap-20">
                <span className="text-white text-center md:text-left group-hover:text-black md:group-hover:-translate-x-4 md:group-hover:-translate-y-2 md:group-hover:scale-90 transition-all md:translate-x-5">
                  Innovation
                  <div className="hidden md:block text-[14px] md:text-[16px] font-light leading-[20px] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-5 pr-4 md:pr-8">
                    By embracing the latest technology and creative solutions,
                    we craft unique, impactful digital experiences that set our
                    clients apart.
                  </div>
                </span>
              </div>
              <div className="hidden md:block w-[25%] md:w-[30%] pl-4">
                <Image
                  src="/assets/review_2.png"
                  alt="Review"
                  className="group-hover:invert w-full h-auto"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            {/* Third testimonial card */}
            <div className="w-full max-w-[788px] h-[140px] border border-[#007FA9] rounded-xl flex flex-col md:flex-row items-center justify-center md:justify-between pl-6 md:pl-10 pr-4 md:pr-6 text-2xl md:text-4xl font-bold hover:bg-white hover:text-black group">
              <div className="md:hidden w-[30%] -mb-2">
                <Image
                  src="/assets/review_3.png"
                  alt="Review"
                  className="group-hover:invert w-full h-auto"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center gap-20">
                <span className="text-white text-center md:text-left group-hover:text-black md:group-hover:-translate-x-4 md:group-hover:-translate-y-2 md:group-hover:scale-90 transition-all md:translate-x-5">
                  Integrity
                  <div className="hidden md:block text-[14px] md:text-[16px] font-light leading-[20px] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-5 pr-4 md:pr-8">
                    We prioritize honesty, transparency, and ethical practices,
                    building trusted partnerships and delivering on promises
                    with accountability.
                  </div>
                </span>
              </div>
              <div className="hidden md:block w-[25%] md:w-[30%] pl-4">
                <Image
                  src="/assets/review_3.png"
                  alt="Review"
                  className="group-hover:invert w-full h-auto"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right section containing statistics */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 relative">
          {/* Background blur effect */}
          <div className="relative h-[300px] md:h-[400px] w-[300px] md:w-[400px] bg-[#0726306b] backdrop-blur-2xl rounded-full blur-xl mx-auto" />

          {/* Statistics Grid Container */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-[675px] mx-auto">
              <div className="grid grid-cols-2 gap-x-8 md:gap-x-16 gap-y-12 md:gap-y-20">
                {/* Years of Experience */}
                <div className="text-center">
                  <h1
                    style={{ fontFamily: mainFont.style.fontFamily }}
                    className="text-4xl md:text-7xl uppercase font-bold text-white"
                  >
                    <CounterUp endCountNum={4} duration={6} />
                  </h1>
                  <div className="text-base md:text-xl uppercase text-white">Years of Experience</div>
                </div>

                {/* Projects */}
                <div className="text-center">
                  <h1
                    style={{ fontFamily: mainFont.style.fontFamily }}
                    className="text-4xl md:text-7xl uppercase font-bold text-white"
                  >
                    <CounterUp endCountNum={100} duration={6} />
                  </h1>
                  <div className="text-base md:text-xl uppercase text-white">Projects</div>
                </div>

                {/* Satisfied Customers */}
                <div className="text-center">
                  <h1
                    style={{ fontFamily: mainFont.style.fontFamily }}
                    className="text-4xl md:text-7xl uppercase font-bold text-white"
                  >
                    <CounterUp endCountNum={20} duration={6} />
                  </h1>
                  <div className="text-base md:text-xl uppercase text-white">Satisfied Customers</div>
                </div>

                {/* Hours Invested */}
                <div className="text-center">
                  <h1
                    style={{ fontFamily: mainFont.style.fontFamily }}
                    className="text-4xl md:text-7xl uppercase font-bold text-white"
                  >
                    <CounterUp endCountNum={1500} duration={6} />
                  </h1>
                  <div className="text-base md:text-xl uppercase text-white">Hours Invested</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTestimonial;
