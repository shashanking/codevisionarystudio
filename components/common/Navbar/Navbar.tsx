import React, { useEffect, useState } from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  const handleScrollPosition = () => {
    setCurrentScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition);
  }, []);

  return (
    <>
      <div
        className={`fixed z-50 top-0 w-full bg-transparent ${currentScrollPosition > 5
            ? "bg-white/20 backdrop-blur-none"
            : "bg-transparent backdrop-blur-none"
          }`}
      >
        <div className="max-w-[1920px] w-full mx-auto ">
          <div className=" py-2 w-[85%] md:w-[95%] mx-auto flex justify-between items-center">
            <div>
              <Link href="/">
                <Image
                  src="/assets/NewLogo.png"
                  alt="code-visonary-studio"
                  height={90}
                  width={90}
                />
              </Link>
            </div>{" "}
            <div className="flex justify-end items-center gap-7 w-[50%]">
              <button className="bg-white/20 rounded-full border-none outline-none h-10 w-10 flex flex-col justify-center items-center gap-2">
                <div className="w-4 h-1 bg-white rounded-md mr-[15%]" />
                <div className="w-4 h-1 bg-white rounded-md ml-[15%]" />
              </button>
              <div className="hidden md:block">
                <Link
                  href="/contact_us"
                  className="w-[170px] px-4 py-2 flex justify-between items-center gap-5 outline-none rounded-3xl  bg-[#C44F56] border-4 border-white"
                >
                  <span
                    style={{
                      fontFamily: mainFont.style.fontFamily,
                    }}
                    className="text-[1.1vw] font-[700]"
                  >
                    Contact Us
                  </span>
                  <div className="h-2 w-2 rounded-full bg-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
