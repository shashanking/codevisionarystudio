"use client";
import React, { useRef, useEffect } from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import {
  // useScroll,
  // useTransform,
  motion, 
  // useSpring,
  useAnimation,
} from "framer-motion";

// Define the AboutUsAnimation component
const AboutUsAnimation = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const containerRef = useRef(null); // Create a ref for the container

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get current scroll position
      const viewportHeight = window.innerHeight; // Get viewport height
      const triggerPoint = viewportHeight * 0.2; // Set trigger point at 20% of viewport height

      // Check if scroll position is past the trigger point
      if (scrollY > triggerPoint) {
        // Start animations for each div with different speeds and durations
        controls1.start({
          y: -scrollY * 0.55,
          transition: { duration: 0.8, ease: "easeOut" },
        });
        controls2.start({
          y: -scrollY * 0.6,
          transition: { duration: 1, ease: "easeOut" },
        });
        controls3.start({
          y: -scrollY * 0.5,
          transition: { duration: 0.8, ease: "easeOut" },
        });
      } else {
        // Reset divs to their original positions
        controls1.start({ y: 0 });
        controls2.start({ y: 0 });
        controls3.start({ y: 0 });
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Clean up event listener on component unmount
  }, [controls1, controls2, controls3]);

  // const mainWrapper = useRef<HTMLDivElement | null>(null);
  // const { scrollYProgress } = useScroll({
  //   target: mainWrapper,
  //   offset: ["start -10%", "start center"],
  // });
  // Start at the top and end at the middle of the screen
  // Adjust the animation to start at the current position and end in the middle of the screen
  // const translateY = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // // For smooth transitions
  // const translateYSmooth = useSpring(translateY, {
  //   stiffness: 100,
  //   damping: 20,
  // });
  // const opacitySmooth = useSpring(opacity, { stiffness: 100, damping: 20 });

  return (
    <div className="h-[110vh] mt-32 md:mt-80 flex flex-col lg:flex-row justify-around gap-y-10 gap-x-8">
        {/* Card Section Start */}
        <div
          ref={containerRef}
          className="w-[90vw] sm:w-[70vw] lg:w-[55vw] flex justify-around items-center flex-col lg:flex-row"
        >
          {/* Three animated divs with different controls */}
          <motion.div
            className="w-[250px] sm:w-[306px] h-[300px] sm:h-[470px] relative lg:-right-36 lg:-top-8 bg-rose-500 rounded-2xl"
            animate={controls1}
          />
          <motion.div
            className="w-[250px] sm:w-[306px] h-[300px] sm:h-[470px] relative lg:-bottom-10 bg-slate-500 rounded-2xl"
            animate={controls2}
          />
          <motion.div
            className="w-[250px] sm:w-[306px] h-[300px] sm:h-[470px] relative lg:-left-36 lg:-bottom-6 bg-yellow-500 rounded-2xl"
            animate={controls3}
          />
        </div>
        {/* Card Section End */}

        {/* Text Section Start */}
        <div
          ref={containerRef}
          className="w-[90vw] sm:w-[70vw] lg:w-[45vw] flex flex-col justify-center gap-y-10"
        >
          <motion.div
            style={{ fontFamily: mainFont.style.fontFamily }}
            className="w-full sm:w-[653px] h-[100px] sm:h-[140px] text-3xl sm:text-5xl uppercase"
            animate={controls1}
          >
            We create impactful digital experiences that drive success
          </motion.div>
          <motion.p className="w-full sm:w-[653px] h-[100px] sm:h-[120px] text-base sm:text-lg" animate={controls3}>
            Code Visionary Studios is dedicated to creating impactful digital
            experiences. With a focus on web design, app development, branding,
            and digital marketing, we provide comprehensive solutions tailored to
            your needs. Explore our values, our approach, and the team that makes
            it all happen.
          </motion.p>
        </div>
        {/* Text Section End */}
      </div>
    // <div ref={mainWrapper} className="h-[100vh]">
    //   {" "}
    //   <motion.div
    //     style={{ y: translateYSmooth, opacity: opacitySmooth }}
    //     className="h-[30vh] w-[20vw] bg-blue-500"
    //   >
    //     {" "}
    //     Scroll to animate me!{" "}
    //   </motion.div>{" "}
    // </div>
  );
};

export default AboutUsAnimation;

// Here, we define a functional component called AboutUsAnimation. We then create three animation controls (controls1, controls2, controls3) for our three divs and a reference (containerRef) to the container holding the divs.                                                                                        We use the useEffect hook to run some code when the component mounts. Inside it, we define a function called handleScroll that runs whenever the user scrolls. scrollY gets the current vertical scroll position, viewportHeight gets the height of the viewport, and triggerPoint is 20% of the viewport height.                                                                                                Each motion.div is a regular div but with animation capabilities provided by framer-motion. The animate prop connects the divs to their respective animation controls.
