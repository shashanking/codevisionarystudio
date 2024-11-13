import React from "react";
import { mainFont } from "../UI/Mainfontt";
import Link from "next/link";

const OurServicesConnect = () => {
    return (
        <div className="min-h-[100vh] mb-20 flex items-center">
            <div
                className="our-services-connect w-full flex"
                style={{
                    backgroundImage: 'url("/assets/service_connect_banner_bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '120px 0',
                    color: 'white',
                }}
            >
                <div id="main" className="pl-20 w-[40%] flex flex-col items-start">
                    <h1
                        style={{
                            fontFamily: mainFont.style.fontFamily,
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            letterSpacing: '0.05em',
                            marginBottom: '30px',
                            textAlign: 'left',
                        }}
                    >
                        YOU&apos;VE GOT AN IDEA? LET&apos;S TALK!
                    </h1>
                    <p className="font-secondaryFont"
                        style={{
                            fontSize: '1.2rem',
                            marginBottom: '40px',
                            textAlign: 'left',
                        }}
                    >
                        Get a free consultation on your project - leave a request on the website or contact me in any convenient way.
                    </p>
                    <Link href="/contact_us">
                        <button
                            style={{
                                fontFamily: mainFont.style.fontFamily,
                                padding: '0px 15px',
                            }}
                            className="flex items-center uppercase bg-white text-[#a92500]  justify-center rounded-full  w-[236px] h-[50px] "

                        >
                            Let&apos;s have a chat
                        </button></Link>
                </div>
            </div>
        </div>
    );
};

export default OurServicesConnect;
