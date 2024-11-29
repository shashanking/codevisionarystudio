import React, { useEffect, useState } from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";
import Link from "next/link";
import MenuPage from "../Menu/MenuPage";

export const Navbar = () => {
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollPosition = () => {
    setCurrentScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition);
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`fixed z-50 top-0 w-full bg-transparent ${
          currentScrollPosition > 5
            ? "bg-white/20 backdrop-blur-none"
            : "bg-transparent backdrop-blur-none"
        }`}
      >
        <div className="max-w-[1920px] w-full mx-auto">
          <div className="py-2 w-[85%] md:w-[95%] mx-auto flex justify-between items-center">
            <div>
              <Link href="/">
                <Image
                  src="/assets/NewLogo.png"
                  alt="code-visonary-studio"
                  height={90}
                  width={90}
                />
              </Link>
            </div>
            <div className="flex justify-end items-center gap-7 w-[50%]">
              <button 
                onClick={toggleMenu}
                className="relative z-50 bg-white/20 rounded-full border-none outline-none h-10 w-10 flex flex-col justify-center items-center gap-2 cursor-pointer"
              >
                <div className={`w-4 h-1 bg-white rounded-md transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mr-[15%]'}`} />
                <div className={`w-4 h-1 bg-white rounded-md transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : 'ml-[15%]'}`} />
              </button>
              <div className="hidden md:block relative">
                {/* Don't be shy text - outside button */}
                <div
                  style={{
                    fontFamily: mainFont.style.fontFamily,
                  }}
                  className="absolute h-[18px] left-[52.97px] -top-[64.34px] text-[24px] leading-[24px] text-white text-center opacity-0 group-hover:opacity-100 transform rotate-[11.24deg] transition-all duration-300 z-20"
                >
                  Don&apos;t be shy
                </div>

                <div className="relative w-[200px] h-[62px] group">
                  {/* White border/background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-white rounded-[58px]" />

                  {/* Red background */}
                  <div className="absolute top-[4px] left-[4px] right-[4px] bottom-[4px] bg-[#C44F56] rounded-[58px]" />

                  {/* Content container */}
                  <Link
                    href="/contact_us"
                    className="absolute inset-0 flex items-center"
                  >
                    {/* Contact us text */}
                    <span
                      style={{
                        fontFamily: mainFont.style.fontFamily,
                      }}
                      className="text-[18px] leading-[24px] text-white z-10 ml-6"
                    >
                      Contact us
                    </span>

                    {/* White dot */}
                    <div className="absolute right-[20px] w-[16px] h-[16px] bg-white rounded-full group-hover:opacity-0 transition-all duration-300" />

                    {/* Arrow icon */}
                    <div className="absolute right-[20px] w-[22px] h-[22px] opacity-0 group-hover:opacity-100 transform rotate-90 transition-all duration-300">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                      >
                        <path
                          d="M11 3L11 19M11 3L17 9M11 3L5 9"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Page */}
      <MenuPage isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
