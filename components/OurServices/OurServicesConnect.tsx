import React from "react";
import { mainFont } from "../UI/Mainfontt";
import Link from "next/link";

const OurServicesConnect = () => {
    return (
        <div className="min-h-[50vh] md:min-h-[100vh] mb-10 md:mb-20 flex items-center">
            <div
                className="our-services-connect w-full flex items-center"
                style={{
                    backgroundImage: 'url("/assets/service_connect_banner_bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '60px 0',
                    color: 'white',
                }}
            >
                <div className="px-6 md:pl-20 w-full md:w-[50%] lg:w-[40%] flex flex-col items-start">
                    <h1
                        style={{
                            fontFamily: mainFont.style.fontFamily,
                            letterSpacing: '0.05em',
                        }}
                        className="text-[28px] md:text-[3rem] font-bold mb-5 md:mb-8 text-left leading-tight"
                    >
                        YOU&apos;VE GOT AN IDEA?
                        <br className="hidden md:block" />
                        LET&apos;S TALK!
                    </h1>
                    <p 
                        className="font-secondaryFont text-sm md:text-[1.2rem] mb-8 md:mb-10 text-left leading-relaxed text-white/90"
                    >
                        Get a free consultation on your project - leave a request on the website or contact me in any convenient way.
                    </p>
                    <Link href="/contact_us" className="w-full md:w-auto">
                        <button
                            style={{
                                fontFamily: mainFont.style.fontFamily,
                            }}
                            className="flex w-full md:w-[236px] h-[45px] md:h-[50px] items-center uppercase bg-white text-[#a92500] justify-center rounded-full text-sm md:text-base hover:bg-[#a92500] hover:text-white transition-colors duration-300"
                        >
                            Let&apos;s have a chat
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurServicesConnect;
