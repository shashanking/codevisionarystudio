

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mainFont } from "@/components/UI/Mainfontt";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
const AboutUsFooter = () => {
  return (
    <div className=" w-full h-[467px] bg-gradient-to-b from-[#590005] via-[#AB000A] to-[#650006] flex flex-col justify-center gap-12 items-center ">
      <Image
        src="/assets/NewLogo.png"
        alt="Floating Laptop Image"
        width={200}
        height={72}
        className=""
      />

      <div>
        <ul className="flex justify-center gap-10 font-secondaryFont">
          <li><a href="/">Home</a></li>
          <li><a href="/about_us">About Us</a></li>
          <li><a href="/services">Our Services</a></li>
          {/* <li><a href="/portfolio">Portfolio</a></li> */}
          <li><a href="https://forms.gle/vaN1SWi8zK7HXCRi9">Join Us</a></li>
        </ul>
      </div>
      <div className="flex justify-center w-[267px] h-[48px]  gap-10   ">
        <a href="https://www.facebook.com/profile.php?id=61564480971649" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.instagram.com/codevisionarystudio/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/company/104408508/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>      </div>
      <div className="w-full h-[1px] bg-white mx-auto "></div>
      <div
        style={{ fontFamily: mainFont.style.fontFamily }}
        className="text-center  "
      >
        2024 | All rights reserved by <span> Code visonary studio</span>
      </div>
    </div>
  );
};

export default AboutUsFooter;
