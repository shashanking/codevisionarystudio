import React from "react";
import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";

const logos = [
  {
    image: "/assets/Dorji.png",
  },
  {
    image: "/assets/Salankara.png",
  },
  {
    image: "/assets/The_Art_of_Eating.png",
  },
  {
    image: "/assets/Sukhoneer.png",
  },
  {
    image: "/assets/Dental_Clinic.png",
  },
  {
    image: "/assets/Toto_Wala.png",
  },
  {
    image: "/assets/Riqsa.png",
  },
  {
    image: "/assets/Shop_infinity.png",
  },
  {
    image: "/assets/Money_Blaster.png",
  },
  {
    image: "/assets/Upwealth.png",
  },
  {
    image: "/assets/Car_Repair.png",
  },
  {
    image: "/assets/Photo_Fest.png",
  },
];

const Work_With_Clients = () => {
  return (
    <div>
      <div className="mt-24 md:mt-[8%] w-full">
        <div
          style={{ fontFamily: mainFont.style.fontFamily, color: "#ffffff" }}
          className="text-3xl text-center md:text-7xl font-bold leading-tight mb-4"
        >
          Clients We Have Worked With
        </div>
      </div>
      <div className=" flex justify-center items-center mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-8 px-4  ">
          {logos.map((logo, index) => {
            return (
              <div
                key={index}
              >
                <Image
                  src={logo.image}
                  alt={`Client logo ${index + 1}`}
                  width={200}
                  height={150}
                  className="w-[200px] h-[200px] object-contain rounded-xl"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work_With_Clients;
