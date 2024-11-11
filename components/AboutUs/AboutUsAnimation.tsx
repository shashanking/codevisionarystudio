import { mainFont } from "@/components/UI/Mainfontt";

const AboutUsAnimation = () => {
  return (
    <div className="h-[110vh] mt-32 md:mt-80 flex flex-col lg:flex-row justify-around gap-y-10 gap-x-4 w-[84%] mx-auto">
      {/* Card Section Start */}
      <div className="w-[90vw] sm:w-[70vw] lg:w-[50vw] flex justify-center items-center gap-x-5 lg:gap-x-8 relative">
        {/* Yellow Card - Base position */}
        <div className="w-[336px] sm:w-[371px] lg:w-[336px] h-[350px] sm:h-[370px] lg:h-[371px] relative lg:-right-10 rounded-2xl shadow-lg transform transition-transform">
          <img src="/assets/aboutoneimg.png" alt="About One" className="w-full h-full object-cover rounded-2xl" />
        </div>

        {/* Pink Card - 10px below yellow */}
        <div className="w-[336px] sm:w-[371px] lg:w-[336px] h-[350px] sm:h-[370px] lg:h-[371px] relative top-[20px] left-[-60px] lg:-right-5 rounded-2xl shadow-lg transform transition-transform">
          <img src="/assets/abouttwoimg.jpeg" alt="About Two" className="w-full h-full object-cover rounded-2xl" />
        </div>

        {/* Grey Card - 10px below pink */}
        <div className="w-[336px] sm:w-[371px] lg:w-[336px] h-[350px] sm:h-[370px] lg:h-[371px] relative top-[40px] left-[-165px] rounded-2xl shadow-lg transform transition-transform">
          <img src="/assets/aboutthreeimg.png" alt="About Three" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
      {/* Card Section End */}

      {/* Text Section Start */}
      <div className="w-[90vw] sm:w-[70vw] lg:w-[40vw] flex flex-col justify-center gap-y-10">
        <div
          style={{ fontFamily: mainFont.style.fontFamily }}
          className="w-full text-2xl sm:text-4xl uppercase leading-tight font-bold"
        >
          We create impactful digital experiences that drive success
        </div>
        <p className="w-full text-sm sm:text-base leading-relaxed">
          Code Visionary Studios is dedicated to creating impactful digital
          experiences. With a focus on web design, app development, branding,
          and digital marketing, we provide comprehensive solutions tailored to
          your needs. Explore our values, our approach, and the team that makes
          it all happen.
        </p>
      </div>
      {/* Text Section End */}
    </div>
  );
};

export default AboutUsAnimation;
