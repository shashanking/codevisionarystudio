import React from 'react'
import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";
import { FooterSection } from '@/components/Homepage/Footer/FooterSection';
import { global } from "styled-jsx/css";
const privacy_policy = () => {
  return (
     <div>
           <div className="w-full h flex items-center relative">
                  {/* Dynamic half-circle blur effect */}
                  <div
                    className="absolute w-[80%] md:h-[700px] h-[343px] md:-top-[460px] -top-[200px] left-1/2 -translate-x-1/2 opacity-80 bg-gradient-to-t from-transparent via-[#007fa97e] to-transparent rounded-full blur-md md:blur-xl"
                    
                  />
          
                  {/* Content section with higher z-index */}
                  <div className="w-full flex flex-col relative z-10">
                    <div className="md:mt-[10%] text-center mt-[215px] mx-auto md:w-[76%] w-[90%]">
                      {/* Heading text */}
                      <div
                        style={{ fontFamily: mainFont.style.fontFamily }}
                        className="font-semibold md:text-[72px]  text-[40px] md:leading-[72px] leading-[40px] uppercase text-white"
                      >
                       Privacy Policy
                      </div>
                      <p className="md:py-4 pt-[26px] pb-[50px] md:text-3xl text-[14px] text-white md:leading-normal leading-[21px]">
                      Choose the perfect plan for your journey
                      </p>
                    </div>
          
                    {/* Price Card  */}
    
                  </div>
                 
                </div>
                <FooterSection />
        </div>
  )
}

export default privacy_policy
