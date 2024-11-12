import React, { useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { mainFont } from "@/components/UI/Mainfontt";
import { HomeAboutSecSvg, HomepageTagIconSvg } from "@/styles/Svgs/AllSvgs";
import { useInView } from "@/hooks/useInView";

const teamList = [
  {
    image: "/assets/TeamImg1.png",
    name: "Vikash Jha",
    position: "Lead Technical Consultant",
  },
  {
    image: "/assets/TeamImg1.png",
    name: "Rini Chakraborty",
    position: "Marketing Director",
  },
  

  {
    image: "/assets/TeamImg4.png",
    // name: "Sayan Choudhury",
    position: "Strategic Consultant",
  },
  {
    image: "/assets/TeamImg2.png",
    name: "Sahil Biswas",
    position: "Lead Frontend Developer",
  },
  {
    image: "/assets/TeamImg3.png",
    // name: "Shashank Singh",
    position: "Lead UX/UI Designer",
  },
  {
    image: "/assets/TeamImg1.png",
    name: "Pradip Choudhury",
    position: "Marketing Director",
  },
  
];

export const OurTeam = () => {
  const [scope, animate] = useAnimate();

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handelanimation = async () => {
    await animate(
      scope.current,
      {
        x: ["200%", 0],
      },
      {
        duration: 1.5,
        ease: "backInOut",
        delay: 0.4,
      }
    );

    /* This part of the code is checking if the `scope.current` exists (not null or undefined). If it
    does exist, it retrieves the children elements of the `scope.current` element. Then, it iterates
    over each child element and extracts the numerical id from the element's id attribute (assuming
    the id is in the format "ID-someNumber"). */
    if (scope.current) {
      const children = scope.current.children;

      Array.from(children).forEach((item: any) => {
        const id = Number(item.id.split("-")[1]);

        if (id % 2 === 0) {
          animate(
            `#ID-${id}`,
            {
              y: "2%",
            },
            {
              duration: 0.8,
              ease: "circInOut",
              delay: 0.6,
            }
          );
        } else {
          animate(
            `#ID-${id}`,
            {
              y: "-2%",
            },
            {
              duration: 0.8,
              ease: "circInOut",
              delay: 0.6,
            }
          );
        }
      });
    }
  };

  useInView(sectionRef, handelanimation);
  return (
    <>
      <div ref={sectionRef}>
        <div className="max-w-[1920px] mx-auto min-h-[100vh] relative flex justify-center items-end">
          <HomeAboutSecSvg />
          <div className="absolute top-0  left-0 w-full h-full flex justify-center items-center">
            <div className="w-[85%] ">
              <div className="flex justify-center items-center gap-4 my-3 w-[40%] mx-auto">
                <HomepageTagIconSvg />
                <h4
                  className="text-[1.1vw] font-bold uppercase"
                  style={{
                    fontFamily: mainFont.style.fontFamily,
                  }}
                >
                  Our Team
                </h4>
              </div>
              <div className="mx-auto w-[80%] my-[1.5%]">
                <p className="text-white font-secondaryFont font-[400] text-[1vw] text-center">
                  Meet the passionate professionals who drive the success of
                  Code Visionary Studios. Our team&apos;s diverse backgrounds and
                  expertise come together to create powerful, integrated
                  solutions that help our clients thrive in the digital world.
                </p>
              </div>
              <motion.div
                ref={scope}
                drag="x"
                dragConstraints={{
                  left: -1000,
                  right: 400,
                }}
                // dragConstraints={dragConstraints}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
                dragElastic={0.5}
                className="flex items-center w-full gap-6 my-[3%]"
              >
                {/* customMargin */}
                {teamList.map((cur, id) => (
                  <motion.div
                    initial={{ filter: "grayscale(1)" }}
                    whileHover={{ filter: "grayscale(0)" }}
                    transition={{ ease: "circInOut", duration: 0.2 }}
                    className="flex-shrink-0 cursor-grab active:cursor-grabbing selection:bg-transparent "
                    key={id}
                    id={`ID-${id + 1}`}
                  >
                    <div className="relative  lg:landscape:w-[300px] lg:landscape:h-[390px]">
                      <Image
                        height={500}
                        width={400}
                        src={cur.image}
                        alt="neelImg"
                        className="z-0"
                      />
                      <div className="absolute w-full h-full bg-transparent z-10 top-0 left-0" />
                    </div>
                    <h4 className="font-secondaryFont font-[500] text-[1.3vw] text-[#FFF] mt-1">
                      {cur.name}
                    </h4>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
