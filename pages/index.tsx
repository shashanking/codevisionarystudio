import { AboutSecondSection } from "@/components/Homepage/AboutSec/AboutSecondSection";
import { AboutSection } from "@/components/Homepage/AboutSec/AboutSection";
import { HeroSection } from "@/components/Homepage/HeroSec/HeroSection";
import { OurServices } from "@/components/Homepage/OurServices/OurServices";
import { WhatWeDo } from "@/components/Homepage/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AboutSecondSection />
      <WhatWeDo />
      <OurServices />
    </>
  );
}
