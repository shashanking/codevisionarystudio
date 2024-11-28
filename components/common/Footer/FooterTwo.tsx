import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mainFont } from "@/components/UI/Mainfontt";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const FooterTwo = ({ useBlackBackground = false }) => {
  return (
    <div className={`w-full h-[467px] ${useBlackBackground ? 'bg-[#000D0F]' : 'bg-gradient-to-b from-[#590005] via-[#AB000A] to-[#650006]'} flex flex-col justify-center gap-12 items-center `}>
      <Image
        src="/assets/NewLogo.png"
        alt="Floating Laptop Image"
        width={200}
        height={72}
        className="cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      <div>
        <ul className="flex justify-center gap-10 font-secondaryFont text-white text-base flex-wrap">
          <li className="hover:text-[#89E2FF] transition-colors"><Link href="/">Home</Link></li>
          <li className="hover:text-[#89E2FF] transition-colors"><Link href="/about_us">About Us</Link></li>
          <li className="hover:text-[#89E2FF] transition-colors"><Link href="/our_services">Our Services</Link></li>
          <li className="hover:text-[#89E2FF] transition-colors"><Link href="/portfolio">Portfolio</Link></li>
          <li className="hover:text-[#89E2FF] transition-colors"><Link href="/contact_us">Contact Us</Link></li>
          <li className="hover:text-[#89E2FF] transition-colors"><a href="https://forms.gle/vaN1SWi8zK7HXCRi9">Join Us</a></li>
        </ul>
      </div>

      <div className="flex justify-center items-center gap-10 text-white">
        <Link href="https://www.facebook.com/profile.php?id=61564480971649" target="_blank" rel="noopener noreferrer">
          <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#000D0F] transition-all">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
          </div>
        </Link>
        <Link href="https://www.instagram.com/codevisionarystudio/" target="_blank" rel="noopener noreferrer">
          <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#000D0F] transition-all">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/company/104408508/" target="_blank" rel="noopener noreferrer">
          <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#000D0F] transition-all">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </div>
        </Link>
        <Link href="https://youtube.com/@codevisionarystudio?si=SovfCVSejRX4Gpun" target="_blank" rel="noopener noreferrer">
          <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#000D0F] transition-all">
            <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
          </div>
        </Link>
      </div>

      <div className="w-full h-[1px] bg-white/30"></div>

      <div
        style={{ fontFamily: mainFont.style.fontFamily }}
        className="text-center text-white/90"
      >
        2024 | All rights reserved by <span className="text-white">Code Visionary Studio</span>
      </div>
    </div>
  );
};

export default FooterTwo;
