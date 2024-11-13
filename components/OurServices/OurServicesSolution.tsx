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
        <div className="min-h-[100vh] mt-20 mb-40 bg-dark text-white py-16 px-8">
            <h2 style={{ fontFamily: mainFont.style.fontFamily }} className="text-center text-4xl mb-12 tracking-wide font-bold">
                YOUR ONE-STOP SOLUTION FOR <br />
                DIGITAL EXCELLENCE
            </h2>

            <div className="">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-row border-t border-gray-500 py-6 relative group"
                    >
                        <div className="flex justify-between items-center mx-auto w-[84vw] relative z-10">
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
                                        width={54
                                        }
                                        height={54}
                                        className="w-[54px] h-[54px] transition-all duration-300 group-hover:[filter:invert(1)] group-hover:rotate-[-45deg]"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="absolute right-[20%] top-[50%] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={309}
                                height={217}
                                className="w-[309px] h-[217px] object-cover object-center rounded-lg shadow-2xl "
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServicesSolution;