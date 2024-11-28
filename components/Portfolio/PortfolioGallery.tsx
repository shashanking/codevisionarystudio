import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { mainFont } from '../UI/Mainfontt';

interface ProjectDetails {
  title: string;
  description: string;
  work: string;
  duration: string;
  techStack: string;
  link: string;
}

const projects: ProjectDetails[] = [
  {
    title: "Money blaster",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum risus, fermentum tincidunt eleifend quis, efficitur convallis lectus. Donec mattis orci est, vel tincidunt odio dignissim in.",
    work: "UI/UX Design, Application and dashboard development.",
    duration: "45 Days",
    techStack: "Flutter, firebase, git, flutter flow",
    link: "www.example.com"
  },
  {
    title: "Car repair",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum risus, fermentum tincidunt eleifend quis, efficitur convallis lectus. Donec mattis orci est, vel tincidunt odio dignissim in.",
    work: "UI/UX Design, Application and dashboard development.",
    duration: "45 Days",
    techStack: "Flutter, firebase, git, flutter flow",
    link: "www.example.com"
  },
  {
    title: "Contract crafters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum risus, fermentum tincidunt eleifend quis, efficitur convallis lectus. Donec mattis orci est, vel tincidunt odio dignissim in.",
    work: "UI/UX Design, Application and dashboard development.",
    duration: "45 Days",
    techStack: "Flutter, firebase, git, flutter flow",
    link: "www.example.com"
  }
];

const PortfolioGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Custom snap points
  const snapPoints = [0.333333333333333, 0.666666666666666, 1];
  const snapThreshold = 0.06; // Reduced from 0.1 for gentler snap

  // Custom progress mapping
  const getMappedProgress = (progress: number) => {
    const closest = snapPoints.reduce((prev, curr) => {
      return Math.abs(curr - progress) < Math.abs(prev - progress) ? curr : prev;
    });

    const distance = Math.abs(closest - progress);
    if (distance < snapThreshold) {
      // Gentler magnetic effect with cubic easing
      return closest + (progress - closest) * Math.pow(distance / snapThreshold, 3);
    }
    return progress;
  };

  // Enhanced spring config for snappier movement
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,     // Increased for smoother deceleration
    stiffness: 55,   // Reduced for less aggressive movement
    mass: 1,         // Increased for more inertia
    restDelta: 0.0005 // More precise stopping point
  });

  // Create mapped progress
  const snappedProgress = useTransform(smoothProgress, (latest) => getMappedProgress(latest));

  const leftImagesY = useTransform(snappedProgress, [0, 1], ['-210vh', '0vh']);
  const rightImagesY = useTransform(snappedProgress, [0, 1], ['40vh', '-170vh']);
  
  // Initial fade in only at the start
  const detailsOpacity = useTransform(snappedProgress, [0.2, 0.333333333333333], [0, 1]);
  
  // Separate transforms for title and description with matching scroll distances
  const titleScrollY = useTransform(
    snappedProgress,
    [0.333333333333333, 0.666666666666666, 1],
    ['0px', '-120px', '-240px']  // Matched with description scroll
  );

  const descScrollY = useTransform(
    snappedProgress,
    [0.333333333333333, 0.666666666666666, 1],
    ['0px', '-120px', '-240px']
  );

  // Add horizontal scroll transform for details
  const detailsScrollX = useTransform(
    snappedProgress,
    [0.333333333333333, 0.666666666666666, 1],
    ['0px', '-100%', '-200%']
  );

  // Spring configuration for smooth scrolling
  const springTransition = {
    duration: 0.6,
    ease: [0.32, 0.72, 0, 1]
  };

  const getCurrentIndex = (progress: number) => {
    if (progress < 0.333333333333333) return 0;
    if (progress < 0.666666666666666) return 1;
    return 2;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300vh] bg-[#000D0F]"
      style={{ zIndex: 40 }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {/* Left side images */}
          <motion.div
            className="absolute w-1/2 h-[210vh] left-0 flex flex-col"
            style={{ y: leftImagesY }}
          >
            {[3, 2, 1].map((num) => (
              <div key={`left-${num}`} className="relative w-full h-[70vh] flex-shrink-0">
                <Image
                  src={`/assets/pgimg${num}.jpeg`}
                  alt={`Portfolio ${num}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="right center"
                  priority={true}
                  className="transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>

          {/* Right side images */}
          <motion.div
            className="absolute w-1/2 h-[210vh] right-0 flex flex-col pt-[30vh]"
            style={{ y: rightImagesY }}
          >
            {[1, 2, 3].map((num) => (
              <div key={`right-${num}`} className="relative w-full h-[70vh] flex-shrink-0">
                <Image
                  src={`/assets/pgimg${num}-part.jpeg`}
                  alt={`Portfolio ${num}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left center"
                  priority={true}
                  className="transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>

          {/* Bottom Overlay */}
          <div
            className="absolute bottom-0 left-0 w-full h-[31vh] bg-[#000D0F]"
            style={{ zIndex: 50 }}
          />

          {/* Project Details */}
          <motion.div
            className="absolute bottom-0 left-[8%] right-[8%] w-[100%] h-[31vh] text-white flex gap-20"
            style={{ 
              opacity: detailsOpacity, 
              zIndex: 51 
            }}
          >
            {/* Left side with separate title and description containers */}
            <div className="flex-1 pr-4 pt-8">
              {/* Titles Container */}
              <div className="h-[60px] mb-6 overflow-hidden"> {/* Increased height */}
                <motion.div
                  className="relative"
                  style={{ y: titleScrollY }}
                  transition={springTransition}
                >
                  {projects.map((project, index) => (
                    <motion.h2
                      key={`title-${project.title}`}
                      className="font-[Earth Orbiter Bold] text-[48px] leading-[48px] text-white absolute w-full"
                      style={{ 
                        fontFamily: mainFont.style.fontFamily,
                        top: `${index * 120}px`, // Matched spacing with descriptions
                        maxWidth: "90%"
                      }}
                    >
                      {project.title}
                    </motion.h2>
                  ))}
                </motion.div>
              </div>

              {/* Description Container */}
              <div className="h-[120px] overflow-hidden">
                <motion.div
                  className="relative"
                  style={{ y: descScrollY }}
                  transition={springTransition}
                >
                  {projects.map((project, index) => (
                    <motion.p
                      key={`desc-${project.title}`}
                      className="font-secondaryFont text-xl leading-[30px] text-white absolute w-full"
                      style={{ 
                        top: `${index * 120}px`, 
                        maxWidth: "90%"
                      }}
                    >
                      {project.description}
                    </motion.p>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Right side - Project Details Grid */}
            <div className="flex-1 pt-8 overflow-hidden">
              <motion.div 
                className="relative flex"
                style={{ 
                  x: detailsScrollX
                }}
                transition={springTransition}
              >
                {projects.map((project) => (
                  <div 
                    key={`details-${project.title}`} 
                    className="min-w-full grid grid-cols-2 gap-6"
                  >
                    <div className="space-y-2">
                      <h3 className="font-secondaryFont font-bold text-2xl text-white">Work</h3>
                      <p className="font-secondaryFont text-xl text-white">{project.work}</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-secondaryFont font-bold text-2xl text-white">Duration</h3>
                      <p className="font-secondaryFont text-xl text-white">{project.duration}</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-secondaryFont font-bold text-2xl text-white">Tech Stack</h3>
                      <p className="font-secondaryFont text-xl text-white">{project.techStack}</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-secondaryFont font-bold text-2xl text-white">Link</h3>
                      <p className="font-secondaryFont text-xl text-white">{project.link}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Progress Indicator */}

        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery;
