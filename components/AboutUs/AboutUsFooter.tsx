

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
import Link from "next/link";
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
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about_us">About Us</Link></li>
          <li><Link href="/our_services">Our Services</Link></li>
          {/* <li><Link href="/portfolio">Portfolio</Link></li> */}
          <li><a href="https://forms.gle/vaN1SWi8zK7HXCRi9">Join Us</a></li>
        </ul>
      </div>
      <div className="flex justify-center w-[267px] h-[48px]  gap-10   ">
        {/* Icon size very small  */}
        <Link href="https://www.facebook.com/profile.php?id=61564480971649" target="_blank" rel="noopener noreferrer" legacyBehavior>
          <a><FontAwesomeIcon icon={faFacebook} /></a>
        </Link>
        <Link href="https://www.instagram.com/codevisionarystudio/" target="_blank" rel="noopener noreferrer" legacyBehavior>
          <a><FontAwesomeIcon icon={faInstagram} /></a>
        </Link>
        <Link href="https://www.linkedin.com/company/104408508/" target="_blank" rel="noopener noreferrer" legacyBehavior>
          <a><FontAwesomeIcon icon={faLinkedin} /></a>
        </Link> </div>
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
