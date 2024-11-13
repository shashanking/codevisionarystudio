import React from "react";
import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";
const OurServicesLanding = () => {
  return (
    <div>
      <div className="relative h-[100vh] w-full bg-[#000D0F]  mx-auto flex justify-center ">
        <div className="absolute -z-1  rounded-2xl  w-full h-full object-cover  bg-[url(/assets/servicesbghero.png)] opacity-[5%] bg-repeat-x "></div>
        <div className="pl-[8%] ">
          <div className=" mt-[8%] py-6 w-[84%] ">
            <div style={{ fontFamily: mainFont.style.fontFamily ,color: "#ffffff"}} className=" text-7xl font-bold">Your Partner in Digital Innovation</div>
            <p className="text-lg py-10 font-secondaryFont text-white ">
              Explore the diverse services offered by Code Visionary Studios. We
              specialize in creating custom web designs, developing cutting-edge
              applications, crafting unique brand identities, and driving growth through
              digital marketing.
            </p>
          </div>
          <div className="flex justify-center gap-10 absolute z-10">
            <div className=" w-[456px] h-[436px] rounded-[5em] bg-gradient-to-b from-[#C44F56] to-[#5E2629] py-8 px-16">
              <h1 style={{ fontFamily: mainFont.style.fontFamily ,color: "#ffffff"}} className="text-4xl leading-[47px]">Our services</h1>
              <ul className="text-xl leading-[29px] list-disc flex flex-col justify-evenly w-[406px] h-[323px] font-secondaryFont text-white ">
                <li>Website Design & Development</li>
                <li>Mobile Application <br /> Design & Development</li>
                <li>Branding </li>
                <li>Digital Marketing / Performance Marketing </li>
                <li>UI UX</li>
                <li>Web Application</li>
                <li>Search Engine Optimisation (SEO)</li>
                <li>Social Media Marketing </li>
              </ul>
            </div>
            <div className="  ">

              <Image src="/assets/serviceshero.png" alt="hero section image" width={1000} height={436} className="rounded-l-[10em]  h-[436px] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesLanding;
