import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="relative h-[100vh] w-full bg-[#000D0F] mx-auto flex justify-center">
      <div className="absolute -z-1  rounded-2xl  w-full h-full object-cover  bg-[url(/assets/tilesbg.png)] opacity-[50%] "></div>
      <div className="absolute z-10 text-center flex flex-col justify-center h-full w-[80%]">
        <div
          style={{ fontFamily: mainFont.style.fontFamily }}
          className="text-7xl text-white leading-[100px] font-bold "
        >
          Get in Touch with Code Visionary Studios
        </div>
        <div className="text-xl leading-[30px] w-[100%] mt-5">
          Stay ahead in the digital world with our expert insights, industry
          trends, and creative inspiration. Explore our blog <br /> for valuable
          tips, thought leadership, and the latest innovations from Code
          Visionary Studios.
        </div>
        <div className=" flex justify-center  items-center w-[100%] mt-10 ">
          <div className="w-[12%]  h-[72px]  rounded-full flex items-center justify-between pl-8   hover:bg-white hover:text-black group">
            <div className="flex items-center justify-between ">
              <span className="flex justify-between items-center h-full group-hover:text-black group-hover:-translate-x-4  transition-all translate-x-5">
                <Image
                  src="/assets/phonecall1.png"
                  alt="Message"
                  className="group-hover:invert bg-white h-[56px] w-[56px] rounded-full scale-75"
                  width={25}
                  height={25}
                />
                <div
                  className="font-semibold text-xl h-full text-center  opacity-0 group-hover:opacity-100 transition-all "
                  style={{ fontFamily: mainFont.style.fontFamily }}
                >
                  Call Us
                </div>
              </span>
            </div>
          </div>

          <div className="min-w-[17%] w-[24%] h-[72px]  rounded-full flex items-center justify-between pl-8  hover:bg-white hover:text-black group">
            <div className="flex flex-col justify-center gap-20">
              <span className="flex justify-between items-center h-full group-hover:text-black group-hover:-translate-x-4  transition-all translate-x-5">
                <Image
                  src="/assets/chat1.png"
                  alt="Message"
                  className="group-hover:invert bg-white h-[56px] w-[56px] rounded-full scale-75"
                  width={25}
                  height={25}
                />
                <div
                  className="font-semibold text-xl text-center h-full  opacity-0 group-hover:opacity-100 transition-all "
                  style={{ fontFamily: mainFont.style.fontFamily }}
                >
                  Contact With Us
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
