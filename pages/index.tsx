import { AboutSecondSection } from "@/components/Homepage/AboutSec/AboutSecondSection";
import { AboutSection } from "@/components/Homepage/AboutSec/AboutSection";
import { HeroSection } from "@/components/Homepage/HeroSec/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AboutSecondSection />
      <div className="h-screen bg-red-800 text-white flex justify-center items-center">
        the Next section
      </div>
    </>
  );
}
