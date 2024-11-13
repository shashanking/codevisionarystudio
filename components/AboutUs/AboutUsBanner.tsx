import Image from "next/image";
import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Link from "next/link";

const AboutUsBanner = () => {
  return (
    <div>
      <div className="w-full  flex items-center justify-center h-full mt-48 ">
        <div className="relative h-[725px] w-[725px] bg-[#0726306b] blur-xl rounded-full mx-auto"></div>
        {/* bannerBg Image is small for larger screen  */}
        <div className="absolute  rounded-2xl w-[84%] max-w-full h-[500px] object-cover bg-[url(/assets/bannerBg.png)]   flex flex-row justify-evenly">
          <div className="w-[50%] flex flex-col justify-center gap-8 p-4 pl-20">
            <h1 className="text-5xl text-nowrap  font-bold  text-white ">
              Lets Start a Conversation
            </h1>
            <p className="text-xl font-secondaryFont text-left text-white ">
              Whether you’re starting a new project or looking to enhance your
              current digital strategy, Code Visionary Studios is here to
              assist you. Reach out to us today to learn more about our
              services and how we can help your business succeed.
            </p>
            <Link href="/contact_us">
            <button
              style={{ fontFamily: mainFont.style.fontFamily }}
              className="flex items-center uppercase bg-white text-[#d14641] justify-center rounded-full  w-[166px] h-[50px] mx-0"
            >
              Connect
            </button>
            </Link>
            
          </div>

          <div className=" w-[55%] flex justify-center items-end ">
            <Image
              src="/assets/WebDesignDevelopImg.png"
              alt="Floating Laptop Image"
              width={925}
              height={787}
              className="w-[925px]  h-auto  backdrop-filter: blur(20px)"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUsBanner;
