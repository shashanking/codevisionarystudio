import Image from "next/image";
import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Link from "next/link";

const AboutUsBanner = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center h-[100vh] mt-20 md:mt-48 relative overflow-x-hidden">
        {/* Blur background - adjusted for mobile */}
        <div className="relative md:h-[725px] md:w-[725px] h-[266px] w-[266px] left-[62px] md:left-auto top-[140px] md:top-auto bg-[#007FA9] md:bg-[#0726306b] opacity-20 md:opacity-100 blur-[110px] md:blur-xl rounded-full mx-auto"></div>

        {/* Banner container */}
        <div className="absolute rounded-2xl w-[90%] sm:w-[368px] md:w-[84%] max-w-full min-h-[420px] md:h-[500px] object-cover bg-[url(/assets/bannerBg.png)] bg-cover bg-center flex flex-col md:flex-row justify-evenly left-1/2 -translate-x-1/2">
          {/* Image section */}
          <div className="order-first md:order-last w-full md:w-[55%] flex justify-center items-end md:mt-0 relative">
            {/* Shadow div for laptop */}
            <div className="absolute w-full sm:w-[445.49px] h-[249.03px] left-0 sm:left-[-12%] top-[-96px] opacity-60 blur-2xl bg-[#000000] rounded-[20px] md:hidden"></div>
            {/* Main image */}
            <Image
              src="/assets/WebDesignDevelopImg.png"
              alt="Floating Laptop Image"
              width={925}
              height={787}
              className="w-[90%] sm:w-[445.49px] md:w-[925px] h-auto relative left-[-10%] sm:left-[-12%] md:left-auto top-[-106px] md:top-auto drop-shadow-2xl"
            />
          </div>

          {/* Text content */}
          <div className="order-last md:order-first w-full md:w-[50%] flex flex-col justify-start md:justify-center gap-6 md:gap-8 p-4 md:pl-20 -mt-12 md:mt-0">
            <h1 className="text-[36px] leading-[44px] md:text-5xl font-bold text-white max-w-[252px] md:max-w-none">
              Let's Start a Conversation
            </h1>
            <p className="text-[14px] leading-[21px] md:text-xl text-white max-w-[326px] md:max-w-none font-secondaryFont">
              Whether you're starting a new project or looking to enhance your
              current digital strategy, Code Visionary Studios is here to
              assist you. Reach out to us today to learn more about our
              services and how we can help your business succeed.
            </p>
            <div className="flex justify-start">
              <Link href="/contact_us">
                <button
                  style={{ fontFamily: mainFont.style.fontFamily }}
                  className="flex items-center uppercase bg-white text-[#C44F56] justify-center rounded-[47px] w-[123px] h-[42px] md:w-[166px] md:h-[50px] text-[14px] md:text-base hover:bg-[#d14641] hover:text-white transition-colors duration-300"
                >
                  Connect
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
