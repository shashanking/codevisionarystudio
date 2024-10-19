import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="fixed z-50 top-0 w-full">
        <div className="max-w-[1920px] w-full mx-auto">
          <div className="px-3 py-4 w-[85%] mx-auto flex justify-between items-center">
            <div>
              <Image
                src="/assets/NavLogo.png"
                alt="code-visonary-studio"
                height={150}
                width={200}
              />
            </div>
            <div className="flex justify-end px-2 items-center gap-7 w-[50%]">
              <button className="bg-white/20 rounded-full border-none outline-none h-12 w-12 flex flex-col justify-center items-center gap-2">
                <div className="w-5 h-1 bg-white rounded-md mr-[15%]" />
                <div className="w-5 h-1 bg-white rounded-md ml-[15%]" />
              </button>
              <button className="w-[30%] px-4 flex justify-between items-center gap-5 outline-none rounded-3xl py-2 bg-[#C44F56] border-4 border-white">
                <span
                  style={{
                    fontFamily: mainFont.style.fontFamily,
                  }}
                  className="text-[1.1vw] font-[700]"
                >
                  Contact Us
                </span>{" "}
                <div className="h-2 w-2 rounded-full bg-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
