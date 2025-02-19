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
    image: "/assets/Dentist_Clinic.png",
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
    image: "/assets/Dorji.png",
  },
  {
    image: "/assets/Dorji.png",
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
      <div className="w-full flex justify-center mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-[90%] ">
          {logos.map((logo, index) => {
            return (
              <div
                key={index}
                //   className="service-row border-t border-gray-500 py-6 relative group"
              >
                <Image
                  src={logo.image}
                  alt={`Client logo ${index + 1}`}
                  width={200}
                  height={150}
                  className="w-[250px] h-[250px] object-contain"
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
