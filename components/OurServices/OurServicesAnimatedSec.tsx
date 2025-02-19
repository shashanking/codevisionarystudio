import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";

const services = [
  {
    title: "Website Design & Development",
    description: "Crafting visually stunning and user-centered websites tailored to enhance your brand's online presence",
    image: "/assets/service-sol-1.jpeg",
  },
  {
    title: "Mobile Application Design & Development",
    description: "Creating seamless and engaging mobile experiences that connect users to your brand effectively.",
    image: "/assets/service-sol-2.png",
  },
  {
    title: "Branding",
    description: "Developing a unique and memorable brand identity that resonates with your audience and sets you apart.",
    image: "/assets/service-sol-3.png",
  },
  {
    title: "Digital Marketing / Performance Marketing",
    description: "Driving growth with data-driven strategies that maximize ROI and elevate your brand's online visibility.",
    image: "/assets/service-sol-4.png"
  },
  {
    title: "UI/UX",
    description: "Designing intuitive and visually engaging user experiences that captivate and retain audiences.",
    image: "/assets/service-sol-5.jpeg"
  },
  {
    title: "Web Application",
    description: "Creating powerful and scalable web applications tailored to meet your business objectives.",
    image: "/assets/service-sol-2.png"
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Optimizing your digital presence to enhance visibility, boost traffic, and improve search engine rankings.",
    image: "/assets/service-sol-1.jpeg"
  },
  {
    title: "Social Media Marketing",
    description: "Building and managing social media strategies that engage audiences and foster brand loyalty.",
    image: "/assets/service-sol-3.png"
  },
  {
    title: "Advertising",
    description: " Design. Print. Impress!  Crafting Stunning Brochures, Cards & Advertising Materials!",
    image: "/assets/Advertising.png"
  },
  {
    title: "Production",
    description: "Concept. Camera. Click! Khichak – Capturing Every Frame, Every Moment with Expert Photography & Videography Services!",
    image: "/assets/Production.png"
  },
];

const OurServicesAnimatedSec = () => {
  return (
    <div className="min-h-[100vh] mt-60 mb-40 bg-dark text-white py-16 px-8">
      <h2
        style={{ fontFamily: mainFont.style.fontFamily, color: "#ffffff" }}
        className="text-center text-4xl mb-12 tracking-wide font-bold"
      >
        YOUR ONE-STOP SOLUTION FOR <br />
        DIGITAL EXCELLENCE
      </h2>

      <div>
        {services.map((service, index) => {

          const rotationDeg = index % 2 === 0 ? '5deg' : '-5deg';

          return (
            <div
              key={index}
              className="service-row border-t border-gray-500 py-6 relative group"
            >
              {/* Desktop View */}
              <div className="hidden md:flex justify-between items-center mx-auto w-[84vw] relative z-10">
                <div className="flex items-center max-w-[80%] gap-4">
                  <h3 className="text-2xl font-bold font-secondaryFont w-[22vw] break-words my-auto">
                    {service.title}
                  </h3>
                  <p className="text-base font-secondaryFont w-[28vw] break-words my-auto">
                    {service.description}
                  </p>
                </div>
                <div className="relative">
                  <button className="flex items-center justify-center w-[84px] h-[84px] border border-gray-400 rounded-full transition group-hover:bg-red-500 group-hover:border-red-500">
                    <Image
                      src="/assets/arrow-right.png"
                      alt="arrow"
                      width={54}
                      height={54}
                      className="w-[54px] h-[54px] transition-all duration-300 group-hover:[filter:invert(1)] group-hover:rotate-[-45deg]"
                    />
                  </button>
                </div>
              </div>

              {/* Mobile View */}
              <div className="flex md:hidden flex-col mx-auto w-[92%] relative z-10">
                <div className="flex gap-3 items-start">
                  <div className="flex-1">
                    <h3 className="text-base font-bold font-secondaryFont mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-[11px] leading-[16px] font-secondaryFont text-gray-300">
                      {service.description}
                    </p>
                  </div>
                  <button className="flex-shrink-0 flex items-center justify-center w-[28px] h-[28px] border border-gray-400 rounded-full">
                    <Image
                      src="/assets/arrow-right.png"
                      alt="arrow"
                      width={54}
                      height={54}
                      className="w-[16px] h-[16px]"
                    />
                  </button>
                </div>
                
                <div className="w-full h-[120px] mt-3 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={309}
                    height={217}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className="absolute right-[20%] -top-[20%] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 hidden md:block"
                style={{
                  transform: `rotate(${rotationDeg})`,
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={309}
                  height={217}
                  className="w-[309px] h-[217px] object-cover object-center rounded-lg shadow-2xl"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServicesAnimatedSec;
