import React from 'react'
import AboutUsLanding from '@/components/AboutUs/AboutUsLanding'
import AboutUsAnimation from "@/components/AboutUs/AboutUsAnimation";
import AboutUsTestimonial from "@/components/AboutUs/AboutUsTestimonial";
import AboutUsBanner from "@/components/AboutUs/AboutUsBanner";
import FooterTwo from "@/components/common/Footer/FooterTwo";

const AboutUs = () => {
  return (
    <div>
      <AboutUsLanding />
      {/* About Us Animated Card Section */}
      <AboutUsAnimation />
      {/* About Us Testimonial Section */}
      <AboutUsTestimonial />
      {/* About Us Banner Section */}
      <AboutUsBanner />
      {/* About Us Footer Section */}
      <FooterTwo />
    </div>

  )
}

export default AboutUs
