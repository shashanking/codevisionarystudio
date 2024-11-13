import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
const formFields = [
  //   { type: "text", placeholder: "Last Name", name: "lName" },
  //   { type: "text", placeholder: "First Name", name: "fName" },
  { type: "email", placeholder: "Email Id", name: "email" },
  { type: "text", placeholder: "Phone Number", name: "phoneNumber" },
  //   { type: "text", placeholder: "Message", name: "message" },
];

const ContactUs = () => {
  return (
    <div className="w-full h-screen text-center gap-20 flex flex-col justify-center">
      <div className="">
        <h1
          className=" text-7xl font-extrabold leading-[100px] bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#24a3bf] inline-block text-transparent bg-clip-text"
          style={{ fontFamily: mainFont.style.fontFamily }}
        >
          Get in touch
        </h1>
        <p className="text-xl leading-7">
          Reach out, and lets create a universe of possibilities together!
        </p>
      </div>
      <div className="w-full flex justify-center relative ">
        <div className="absolute bg-[#24a3bf3a] rounded-full blur-3xl h-[252px] w-[252px] left-[7%] -top-[20%] -z-10 "></div>
        <div className="absolute bg-[#24a3bf3a] rounded-full blur-3xl h-[252px] w-[252px] right-[7%] -top-[20%] -z-10 "></div>
        <div className="absolute bg-[#24a3bf3a] rounded-full blur-3xl h-[252px] w-[252px] left-[7%] -bottom-[40%] -z-10 "></div>
        <div
          className=" relative  z-10 flex justify-around items-center w-[75%] shadow-[backdrop-filter: blur(380px)] border-[#0A0D170D] bg-[#ffffff11] h-[120%] rounded-lg "
        >
          <div className="flex flex-col justify-between gap-4  w-[35%] ">
            <div className="text-left">
              <h1
                style={{ fontFamily: mainFont.style.fontFamily }}
                className="text-3xl leading-9 w-full"
              >
                Let’s connect constellations
              </h1>
              <p className="text-lg w-full">
                Lets align our constellations! Reach out and let the magic of
                collaboration illuminate our skies.
              </p>
            </div>
            <div className="flex w-full gap-6">
              <form action="">
                {" "}
                <input
                  type="text"
                  placeholder="First Name"
                  className=" h-[50px] pl-6 font-secondaryFont leading-6 text-md rounded-lg border-[#FFFFFF33] text-white bg-[#FFFFFF0D] border-b border-white focus:outline-none placeholder:text-white placeholder:text-sm"
                />
              </form>
              <form action="">
                {" "}
                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-[50px]  pl-6 font-secondaryFont leading-6 text-md rounded-lg border-[#FFFFFF33] text-white bg-[#FFFFFF0D] border-b border-white focus:outline-none placeholder:text-white placeholder:text-sm"
                />
              </form>{" "}
            </div>
            {formFields.map((field, index) => (
              <form key={index} className="flex-1">
                <input
                  type={field.type}
                  name={field.name}
                  className="w-full h-[50px] pl-6 font-secondaryFont leading-6 text-md rounded-lg border-[#FFFFFF33] text-white bg-[#FFFFFF0D] border-b border-white focus:outline-none placeholder:text-white placeholder:text-sm"
                  placeholder={field.placeholder}
                />
              </form>
            ))}{" "}
            <form action="">
              {" "}
              <input
                type="text"
                placeholder="Message"
                className=" h-[150px] w-full pl-6 font-secondaryFont leading-6 text-md rounded-lg border-[#FFFFFF33] text-white bg-[#FFFFFF0D] border-b border-white focus:outline-none placeholder:text-white placeholder:text-sm"
              />
            </form>
            <button className=" w-full h-[50px] font-secondaryFont bg-gradient-to-r from-[#E44F58] via-[#BF242d] to-[#5F0006] rounded-lg ">
              {" "}
              Submit
            </button>
          </div>
          <div>
            <img src="/assets/Imagebox.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
