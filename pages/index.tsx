import { AboutSecondSection } from "@/components/Homepage/AboutSec/AboutSecondSection";
import { AboutSection } from "@/components/Homepage/AboutSec/AboutSection";
import TrustedBySection from "@/components/Homepage/Clients/TrustedBySection";
import Work_With_Clients from "@/components/Homepage/Clients/Work_With_Clients";
import { FooterSection } from "@/components/Homepage/Footer/FooterSection";
import { GallerySection } from "@/components/Homepage/GallerySection/GallerySection";

import { HeroSection } from "@/components/Homepage/HeroSec/HeroSection";
import { OurServices } from "@/components/Homepage/OurServices/OurServices";
import { OurTeam } from "@/components/Homepage/OurTeam/OurTeam";
import { Testimonials } from "@/components/Homepage/Testimonials/Testimonials";

import { WhatWeDo } from "@/components/Homepage/WhatWeDo/WhatWeDo";
import { WhyUsSection } from "@/components/Homepage/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <Work_With_Clients />
      <AboutSection />
      <AboutSecondSection />
      <WhatWeDo />
      <OurServices />
      <WhyUsSection />
      {/* <div className="hidden "> */}

        {/* <GallerySection />  */}
      {/* </div> */}
      <OurTeam />
      <Testimonials />
      <FooterSection />
    </>
  );
}
