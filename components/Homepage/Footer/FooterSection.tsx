import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <div className="h-[806px] w-full bg-gradient-to-br from-[#E44F58] via-[#BF242d] to-[#5F0006] rounded-t-[60px]">
      <div className="w-full flex justify-center">
        <div className="w-[80%] mt-20">
          <h1
            style={{
              fontFamily: mainFont.style.fontFamily,
            }}
            className="w-[309px] h-[48px] text-nowrap font-bold text-black uppercase text-5xl"
          >
            Contact Us
          </h1>
          <div className="flex justify-evenly gap-5 mt-12">
            <form action="">
              <input
                type="text"
                className="w-full h-[36px] leading-6 text-xl text-black bg-transparent border-b-2 border-black "
                placeholder="Your Name"
              />
            </form>
            <form action="">
              <input
                type="email"
                className="w-full h-[36px] leading-6 text-xl text-black bg-transparent border-b-2 border-black "
                placeholder="Email Id"
              />
            </form>
            <form action="">
              <input
                type="text"
                className="w-full h-[36px] leading-6 text-xl text-black bg-transparent border-b-2 border-black "
                placeholder="Phone Number"
              />
            </form>
            <form action="">
              <select
                name="Subjects"
                id=""
                className="w-full h-[36px] leading-6 text-xl text-black"
                bg-transparent
                border-b-2
                border-black
              >
                <option value="">Subjects </option>
                <option value="Shasank">Shasank</option>
                <option value="Sayan">Sayan</option>
                <option value="Sahil">Sahil</option>
                <option value="Shashank">Shashank</option>
              </select>
            </form>
          </div>
          <div>
            <button
              style={{
                fontFamily: mainFont.style.fontFamily,
              }}
              className="bg-black text-pink-400 w-full mt-16 h-[72px] rounded-full text-xl leading-6 font-semibold uppercase"
            >
              Submit
              {/* <Image 
              src="/assets/bxs_paper-plane.png"
              alt="Floating Laptop Image"
              width={240}
              height={82}
              className="" /> */}
            </button>
          </div>
          <div className="flex justify-around gap-10 mt-20">
            <div className=" flex flex-col gap-10 w-[45%]">
              <Image
                src="/assets/NavLogo.png"
                alt="Floating Laptop Image"
                width={240}
                height={82}
                className=""
              />
              <div className="text-xl font-medium font-secondaryFont leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam beatae ipsum officia cumque amet magni, veritatis,
                voluptatem, eligendi ipsam quod quia numquam suscipit neque quas
                ab earum nobis porro asperiores?
              </div>
            </div>

            <div className="w-[45%] flex justify-around font-secondaryFont">
              <div className="flex flex-col gap-3 w-[126px] h-[224px]">
                <h1 className="text-2xl leading-6 font-medium">Menu</h1>
                <ul className="text-xl leading-6 flex flex-col gap-3">
                  <li>About Us</li>
                  <li>Our Services</li>
                  <li> Portfolio</li>
                  <li> Blogs</li>
                  <li> Contact Us</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 w-[309px] h-[168px]">
                <h2 className="text-2xl leading-6 font-medium">Contact Info</h2>
                <div className="text-xl leading-6 flex flex-col gap-3">
                  +91-1234567890 <br />
                  <p>Address, Kolkata, West Bengal, 700040</p>
                  <p>Codevisionary@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <div className="flex items-center text-center">
            <marquee behavior="slide" direction="left"  style={{
                    fontFamily: mainFont.style.fontFamily,
                  }} className='uppercase h-[127px] w-full text-[128px] leading-[128px]' >Code Visionarty Studio</marquee>
          </div>
    </div>
  );
};
