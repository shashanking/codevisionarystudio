import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import CounterUp from "./CounterUp";
// import { div } from "framer-motion/client";

// Component to display testimonials and statistics in the About Us section
const AboutUsTestimonial = () => {
  return (
    // Main container with full width and screen height
    <div className="w-[100%]  h-screen flex justify-center ">
      {/* Content wrapper with 80% width */}
      <div className=" w-[80%]  h-screen flex gap-20 justify-between">
        {/* Left section containing testimonial cards */}
        <div className="h-full py-20 ">
          <div className="flex flex-col gap-6 justify-center items-center px-0">
            {/* Main heading with custom font */}
            <div
              style={{ fontFamily: mainFont.style.fontFamily }}
              className="font-semibold text-4xl uppercase w-[94%] max-w-[788px] h-[120px] text-left"
            >
              We Value Integrity and Transparency
            </div>
            {/* First testimonial card */}
            <div className="w-[90%] max-w-[788px] h-[120px] border border-[#007FA9] rounded-xl flex items-center justify-between pl-8 text-4xl font-bold hover:bg-white hover:text-black group">
              <div className="flex flex-col justify-center gap-20">
                <span className="group-hover:-translate-x-4 group-hover:-translate-y-2 group-hover:scale-90 transition-all translate-x-5">
                  Excellence
                  <div className="text-[16px] font-light leading-[20px] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quaerat obcaecati incidunt eveniet nisi illo pariatur?
                  </div>
                </span>
              </div>
              <div className="pr-8 w-[30%]">
                <img src="/assets/review_1.png" alt="Review" className="group-hover:invert" />
              </div>
            </div>

            {/* Second testimonial card */}
            <div className="w-[90%] max-w-[788px] h-[120px] border border-[#007FA9] rounded-xl flex items-center justify-between pl-8 text-4xl font-bold hover:bg-white hover:text-black group">
              <div className="flex flex-col justify-center gap-20">
                <span className="group-hover:-translate-x-4 group-hover:-translate-y-2 group-hover:scale-90 transition-all translate-x-5">
                  Innovation
                  <div className="text-[16px] font-light leading-[20px] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quaerat obcaecati incidunt eveniet nisi illo pariatur?
                  </div>
                </span>
              </div>
              <div className="pr-8 w-[30%]">
                <img src="/assets/review_2.png" alt="Review" className="group-hover:invert" />
              </div>
            </div>

            {/* Third testimonial card */}
            <div className="w-[90%] max-w-[788px] h-[120px] border border-[#007FA9] rounded-xl flex items-center justify-between pl-8 text-4xl font-bold hover:bg-white hover:text-black group">
              <div className="flex flex-col justify-center gap-20">
                <span className="group-hover:-translate-x-4 group-hover:-translate-y-2 group-hover:scale-90 transition-all translate-x-5">
                  Integrity
                  <div className="text-[16px] font-light leading-[20px] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quaerat obcaecati incidunt eveniet nisi illo pariatur?
                  </div>
                </span>
              </div>
              <div className="pr-8 w-[30%]">
                <img src="/assets/review_3.png" alt="Review" className="group-hover:invert" />
              </div>
            </div>
          </div>
        </div>
        {/* Right section containing statistics */}
        <div className="h-full w-1/2 flex items-center justify-center relative">
          {/* Background blur effect */}
          <div className="relative mt-24 h-[400px] w-[400px] bg-[#0726306b] backdrop-blur-2xl rounded-full blur-xl mx-auto" />
  
          {/* Statistics Grid Container */}
          <div className="absolute w-full max-w-[675px]">
            <div className="grid grid-cols-2 gap-x-16 gap-y-20">
              {/* Years of Experience */}
              <div className="text-center">
                <h1 style={{ fontFamily: mainFont.style.fontFamily }}
                    className="text-7xl uppercase font-bold">
                  <CounterUp endCountNum={4} duration={6} />
                </h1>
                <div className="text-xl uppercase">Years of Experience</div>
              </div>

              {/* Projects */}
              <div className="text-center">
                <h1 style={{ fontFamily: mainFont.style.fontFamily }}
                    className="text-7xl uppercase font-bold">
                  <CounterUp endCountNum={100} duration={6} />
                </h1>
                <div className="text-xl uppercase">Projects</div>
              </div>

              {/* Satisfied Customers */}
              <div className="text-center">
                <h1 style={{ fontFamily: mainFont.style.fontFamily }}
                    className="text-7xl uppercase font-bold">
                  <CounterUp endCountNum={20} duration={6} />
                </h1>
                <div className="text-xl uppercase">Satisfied Customers</div>
              </div>

              {/* Hours Invested */}
              <div className="text-center">
                <h1 style={{ fontFamily: mainFont.style.fontFamily }}
                    className="text-7xl uppercase font-bold">
                  <CounterUp endCountNum={1500} duration={6} />
                </h1>
                <div className="text-xl uppercase">Hours Invested</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTestimonial;