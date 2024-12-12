import React from "react";
import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";

const OurServicesLanding = () => {
  return (
    <div>
      <div className="relative min-h-screen md:min-h-[110vh] w-full bg-[#000D0F] mx-auto flex justify-center overflow-hidden">
        <div className="absolute -z-1 rounded-2xl w-full h-full object-cover bg-[url(/assets/servicesbghero.png)] opacity-[5%] bg-repeat-x"></div>
        <div className="w-full px-5 md:pl-[8%] md:pr-0">
          {/* Hero Content */}
          <div className="mt-24 md:mt-[8%] w-full md:w-[84%]">
            <div 
              style={{ fontFamily: mainFont.style.fontFamily, color: "#ffffff" }} 
              className="text-3xl md:text-7xl font-bold leading-tight mb-4"
            >
              Your Partner in Digital Innovation
            </div>
            <p className="text-sm md:text-lg leading-relaxed md:leading-normal font-secondaryFont text-white/90 mb-12 md:mb-16">
              Explore the diverse services offered by Code Visionary Studios. We
              specialize in creating custom web designs, developing cutting-edge
              applications, crafting unique brand identities, and driving growth through
              digital marketing.
            </p>
          </div>

          {/* Services Content */}
          <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-10 md:absolute md:z-10 w-full md:w-auto">
            {/* Services List */}
            <div className="w-full md:w-[456px] rounded-2xl md:rounded-[5em] bg-gradient-to-br from-[#ef5151] to-[#71060b] p-6 md:p-8 md:px-16">
              <h1 
                style={{ fontFamily: mainFont.style.fontFamily, color: "#ffffff" }} 
                className="text-2xl md:text-4xl leading-tight md:leading-[47px] mb-5 md:mb-0"
              >
                Our services
              </h1>
              <ul className="text-base md:text-xl leading-loose md:leading-[29px] list-disc flex flex-col gap-2 md:gap-0 md:justify-evenly w-full md:w-[406px] font-secondaryFont text-white/90 pl-5 md:pl-0">
                <li>Website Design & Development</li>
                <li>Mobile Application Design & Development</li>
                <li>Branding</li>
                <li>Digital Marketing / Performance Marketing</li>
                <li>UI/UX</li>
                <li>Web Application</li>
                <li>Search Engine Optimisation (SEO)</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-auto">
              <Image 
                src="/assets/serviceshero.png" 
                alt="hero section image" 
                width={1000} 
                height={436} 
                className="rounded-2xl md:rounded-l-[10em] h-[240px] md:h-[436px] object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesLanding;
