import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";

const AboutUsAnimation = () => {
  return (
    <div className="min-h-screen md:h-[110vh] mt-20 md:mt-32 lg:mt-80 flex flex-col lg:flex-row justify-around gap-y-10 gap-x-4 w-[90%] md:w-[84%] mx-auto">
      {/* Text Section Start */}
      <div className="w-full lg:w-[40vw] flex flex-col justify-center gap-y-6 sm:gap-y-2 md:gap-y-10 order-1 lg:order-2">
        <div
          style={{ fontFamily: mainFont.style.fontFamily }}
          className="w-full text-[32px] md:text-3xl lg:text-5xl uppercase leading-[32px] md:leading-tight font-bold text-white"
        >
          We create impactful digital experiences that drive success
        </div>
        <p className="w-full text-[14px] md:text-lg font-secondaryFont leading-[21px] md:leading-relaxed text-white">
          Code Visionary Studios is dedicated to creating impactful digital
          experiences. With a focus on web design, application development, branding,
          and digital marketing, we provide comprehensive solutions tailored to
          your needs. Explore our values, our approach, and the team that makes
          it all happen.
        </p>
      </div>
      {/* Text Section End */}

      {/* Card Section Start */}
      <div className=" hidden lg:flex w-[50vw] justify-center items-center gap-x-5 lg:gap-x-8 relative order-2 lg:order-1 mt-8 lg:mt-0 overflow-x-hidden">
        {/* Yellow Card - Base position */}
        <div className="w-[358px] sm:w-[371px] lg:w-[336px] h-[350px] sm:h-[370px] lg:h-[371px] relative lg:-right-10 rounded-2xl shadow-lg transform transition-transform">
          <Image
            src="/assets/aboutoneimg.png"
            alt="About One"
            className="w-full h-full object-cover rounded-2xl"
            width={536}
            height={350}
            priority
          />
        </div>

        {/* Pink Card - 10px below yellow */}
        <div className="w-[358px] sm:w-[371px] lg:w-[336px] h-[350px] sm:h-[370px] lg:h-[371px] relative top-[20px] left-[-60px] lg:-right-5 rounded-2xl shadow-lg transform transition-transform">
          <Image
            src="/assets/abouttwoimg.jpeg"
            alt="About Two"
            className="w-full h-full object-cover rounded-2xl"
            width={536}
            height={350}
          />
        </div>

        {/* Grey Card - 10px below pink */}
        <div className="w-[358px] sm:w-[371px] lg:w-[336px] h-[350px] sm:h-[370px] lg:h-[371px] relative top-[40px] left-[-165px] rounded-2xl shadow-lg transform transition-transform">
          <Image
            src="/assets/aboutthreeimg.png"
            alt="About Three"
            className="w-full h-full object-cover rounded-2xl"
            width={536}
            height={350}
          />
        </div>
      </div>
      {/* Card Section End */}

      <div className="lg:hidden w-full flex justify-center items-center relative order-2 overflow-hidden pb-8">
        {/* Yellow Card - Base position */}
        <div className="w-[150px] h-[210px] relative -right-2 rounded-2xl shadow-lg transform transition-transform overflow-hidden">
          <Image
            src="/assets/aboutoneimg.png"
            alt="About One"
            className="w-full h-full object-cover rounded-2xl"
            width={150}
            height={240}
            priority
          />
        </div>

        {/* Pink Card - 10px below yellow */}
        <div className="w-[150px] h-[210px] relative top-[20px]  rounded-2xl shadow-lg transform transition-transform overflow-hidden">
          <Image
            src="/assets/abouttwoimg.jpeg"
            alt="About Two"
            className="w-full h-full object-cover rounded-2xl"
            width={150}
            height={240}
          />
        </div>

        {/* Grey Card - 10px below pink */}
        <div className="w-[150px] h-[210px] relative top-[40px] right-2 rounded-2xl shadow-lg transform transition-transform overflow-hidden">
          <Image
            src="/assets/aboutthreeimg.png"
            alt="About Three"
            className="w-full h-full object-cover rounded-2xl"
            width={150}
            height={240}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutUsAnimation;
