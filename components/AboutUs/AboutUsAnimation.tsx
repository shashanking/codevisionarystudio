
import { mainFont } from "@/components/UI/Mainfontt";

const AboutUsAnimation = () => {

  return (
    <div className="h-[110vh] mt-32 md:mt-80 flex flex-col lg:flex-row justify-around gap-y-10 gap-x-8">
        {/* Card Section Start */}
        <div
        
          className="w-[90vw] sm:w-[70vw] lg:w-[55vw] flex justify-around items-center flex-col lg:flex-row"
        >
          {/* Three animated divs with different controls */}
          <div
            className="w-[250px] sm:w-[306px] h-[300px] sm:h-[470px] relative lg:-right-36 lg:-top-8 bg-rose-500 rounded-2xl"
          
          />
          <div
            className="w-[250px] sm:w-[306px] h-[300px] sm:h-[470px] relative lg:-bottom-10 bg-slate-500 rounded-2xl"
     
          />
          <div
            className="w-[250px] sm:w-[306px] h-[300px] sm:h-[470px] relative lg:-left-36 lg:-bottom-6 bg-yellow-500 rounded-2xl"
           
          />
        </div>
        {/* Card Section End */}

        {/* Text Section Start */}
        <div
    
          className="w-[90vw] sm:w-[70vw] lg:w-[45vw] flex flex-col justify-center gap-y-10"
        >
          <div
            style={{ fontFamily: mainFont.style.fontFamily }}
            className="w-full sm:w-[653px] h-[100px] sm:h-[140px] text-3xl sm:text-5xl uppercase"
         
          >
            We create impactful digital experiences that drive success
          </div>
          <p className="w-full sm:w-[653px] h-[100px] sm:h-[120px] text-base sm:text-lg" >
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

// Here, we define a functional component called AboutUsAnimation. We then create three animation controls (controls1, controls2, controls3) for our three divs and a reference (containerRef) to the container holding the divs.                                                                                        We use the useEffect hook to run some code when the component mounts. Inside it, we define a function called handleScroll that runs whenever the user scrolls. scrollY gets the current vertical scroll position, viewportHeight gets the height of the viewport, and triggerPoint is 20% of the viewport height.                                                                                                Each motion.div is a regular div but with animation capabilities provided by framer-motion. The animate prop connects the divs to their respective animation controls.
