import { HomeAboutSecSvg } from "@/styles/Svgs/AllSvgs";
import React from "react";

export const OurServices: React.FC = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute -bottom-[35%] -left-[20%] flex justify-end items-end">
          <HomeAboutSecSvg />
        </div>
        <div className="absolute -top-[35%] flex justify-start items-start -right-[20%]">
          <HomeAboutSecSvg />
        </div>
        <div className="max-w-[1920px] min-h-[100vh] mx-auto relative z-40 flex justify-center">
          <div className="w-[85%] mx-auto flex flex-col items-center justify-center text-[5vw]">
            <h3>the our service section</h3>
          </div>
        </div>
      </div>
    </>
  );
};
