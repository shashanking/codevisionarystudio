
import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";
import React from "react";
import AboutUsAnimation from "./AboutUsAnimation";
import AboutUsTestimonial from "./AboutUsTestimonial";
import AboutUsBanner from "./AboutUsBanner";
import AboutUsFooter from "./AboutUsFooter";

const AboutUsLanding = () => {
  return (
    <>
      {/* Fragment to wrap the component without adding extra nodes to the DOM */}
      <div className="w-[100%] h-screen flex items-center">
        
        <div className="w-full flex flex-col  bg-[url(/assets/Vector1.png)]">
          {/* Background image container with padding and flex layout */}
          <div className="">
          <div className="mt-[10%] mx-auto w-[80%]   ">
            {/* Container for the text content */}
            <div
              style={{ fontFamily: mainFont.style.fontFamily }} // Applying the main font style
              className="font-semibold text-[72px] leading-[72px] uppercase  "
            >
              {/* Styling the text */}
              We Believe in Innovation and Creativity
            </div>
            <p className="py-4 text-xl ">
              At Code Visionary Studios, we believe in the power of innovation
              and creativity. Our team excels in web design, app development,
              branding, and digital marketing, delivering solutions that drive
              success. Learn more about our philosophy, our journey, and the
              people who make it all possible.
            </p>
          </div>
          {/* Image container */}
          <div className="mt-4 mx-auto w-[80%] ">
            <Image
              src="/assets/herobottom.jpg"
              alt="html system image"
              width={1600}
              height={739}
              layout="responsive"
              priority
              className="rounded-3xl  shadow-[0px_0px_4px_0px_#89E2FF33] mx-auto"
            />
            {/* <img src="/herobottom.jpg" alt="" className="rounded-t-3xl  shadow-[0px_0px_4px_0px_#89E2FF33] mx-auto"/> */}
          </div></div>
        </div>
      </div>
    
      {/* About Us Animated Card Section */}
      <AboutUsAnimation />
      {/* About Us Testimonial Section */}
      <AboutUsTestimonial /> 
      {/* About Us Banner Section */}
      <AboutUsBanner />
      {/* About Us Footer Section */}
      <AboutUsFooter />
    </>
  )
}

export default AboutUsLanding
