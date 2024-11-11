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
        src="/assets/CVlogo.png"
        alt="Floating Laptop Image"
        width={240}
        height={82}
        className=""
      />

      <div>
        <ul className="flex justify-center gap-10">
          <li>Home</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="flex justify-center w-[267px] h-[48px]  gap-10   ">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faSquareXTwitter} />
      </div>
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
