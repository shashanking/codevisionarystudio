import React from "react";
import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";
const OurServicesLanding = () => {
  return (
    <div>
      <div className="relative h-[100vh] w-full bg-[#000D0F]  mx-auto flex justify-center ">
        <div className="absolute -z-1  rounded-2xl  w-full h-full object-cover  bg-[url(/assets/servicesbghero.png)] opacity-[60%] bg-repeat-x "></div>
        <div className="pl-[12%] ">
          <div className=" mt-[8%] py-6 w-[75%] ">
            <div  style={{ fontFamily: mainFont.style.fontFamily }} className=" text-7xl font-bold">Your Partner in Digital Innovation</div>
            <p className="text-xl py-10">
              Explore the diverse services offered by Code Visionary Studios. We
              specialize in creating custom web designs, developing cutting-edge
              apps, crafting unique brand identities, and driving growth through
              digital marketing.
            </p>
          </div>
          <div className="flex justify-center gap-10 absolute z-10">
            <div className=" w-1/3 h-[486px] rounded-[5em] bg-gradient-to-b from-[#C44F56] to-[#5E2629] py-12 px-20">
              <h1  style={{ fontFamily: mainFont.style.fontFamily }} className="text-4xl leading-[47px]">Our services</h1>
              <ul className="text-xl leading-[29px] list-disc flex flex-col justify-evenly w-[406px] h-[303px]">
                <li>Website Design & Development</li>
                <li>Mobile Application <br /> Design & Development</li>
                <li>Branding </li>
                <li>Digital marketing</li>
                <li>ui ux</li>
                <li>Web apps</li>
              </ul>
            </div>
            <div className="  ">
             
              <img src="/assets/serviceshero.png"  alt="hero section image" className="rounded-l-[10em]  h-[486px] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesLanding;
