import React from "react";
import { mainFont } from "../UI/Mainfontt";
import Image from "next/image";

const services = [
    {
        title: "Website Design & Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/service-sol-1.jpeg"
    },
    {
        title: "Mobile Application Design & Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/service-sol-2.png"
    },
    {
        title: "Branding",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/service-sol-3.png"
    },
    {
        title: "Digital Marketing / Performance Marketing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/service-sol-4.png"
    },
    {
        title: "UI/UX",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/service-sol-5.jpeg"
    },
    {
        title: "Web Application",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/service-sol-2.jpeg"
    },
    {
        title: "Search Engine Optimization (SEO)",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/service-sol-1.jpeg"
    },
    {
        title: "Social Media Marketing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/assets/service-sol-3.jpeg"
    },
];

const OurServicesSolution = () => {
    return (
        <div className="min-h-[100vh] mt-10 md:mt-20 mb-20 md:mb-40 bg-dark text-white py-8 md:py-16 px-4 md:px-8">
            <h2 
                style={{ fontFamily: mainFont.style.fontFamily, color: "#ffffff" }} 
                className="text-center text-2xl md:text-4xl mb-8 md:mb-12 tracking-wide font-bold px-4"
            >
                YOUR ONE-STOP SOLUTION FOR <br className="hidden md:block" />
                DIGITAL EXCELLENCE
            </h2>

            <div className="">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-row border-t border-gray-500 py-4 md:py-6 relative group"
                    >
                        {/* Desktop View - Only visible on md and above */}
                        <div className="hidden md:flex justify-between items-center mx-auto w-[84vw] relative z-10">
                            <div className="flex items-center max-w-[80%] gap-4">
                                <h3 className="text-2xl font-bold font-secondaryFont w-[22vw] break-words">
                                    {service.title}
                                </h3>
                                <p className="text-base font-secondaryFont w-[28vw] break-words text-gray-300">
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

                        {/* Mobile View - Only visible below md */}
                        <div className="block md:hidden">
                            <div className="flex flex-col mx-auto w-[92%] relative z-10">
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
                        </div>

                        {/* Desktop Hover Image - Only visible on md and above */}
                        <div className="hidden md:block absolute right-[20%] top-[50%] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={309}
                                height={217}
                                className="w-[309px] h-[217px] object-cover object-center rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServicesSolution;