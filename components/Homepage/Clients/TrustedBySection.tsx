import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";

const TrustedBySection = () => {
  return (
    <div  >
      <div className="flex flex-col lg:flex-row  items-center ">
        <div
          style={{ fontFamily: mainFont.style.fontFamily, color: "#ffffff" }}
          className=" w-full font-bold 2xl:text-[2.4vw] xl:text-[2.4vw] lg:text-[2.4vw] md:portrait:text-[3.5vw] md:landscape:text-[2.4vw] text-[5.5vw] flex justify-center items-center"
        >
          {" "}
          Trusted By{" "}
        </div>
        <div className="w-full flex start-0 portrait:justify-center  mt-10" >
        <div className=" flex flex-col md:flex-row items-center justify-around   gap-4  ">
          <div>
            <Image
              src="/assets/Kaltech.png"
              alt="arrow"
              width={54}
              height={54}
              className="w-[250px] h-[110px] rounded-xl bg-white p-2 "
            />
          </div>
          <div>
            <Image
              src="/assets/COG.png"
              alt="arrow"
              width={254}
              height={254}
              className="w-[140px] h-[110px] bg-white rounded-xl "
            />
          </div>
          <div>
            <Image
              src="/assets/Ekdant.png"
              alt="arrow"
              width={54}
              height={54}
              className="w-[150px] h-[110px] bg-white rounded-xl "
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
