import React from "react";
import Head from "next/head";
import { Navbar } from "@/components/common/Navbar/Navbar";
import FooterTwo from "@/components/common/Footer/FooterTwo";

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services - Code Visionary Studio</title>
        <meta
          name="description"
          content="Explore our comprehensive range of services including web development, mobile app development, UI/UX design, and digital marketing solutions."
        />
      </Head>
      <main className="w-full min-h-screen bg-[#000D0F] overflow-x-hidden">
        <Navbar />
        <div className="pt-32 pb-16">
          {/* Services content will be added here */}
          <div className="w-[85%] md:w-[90%] mx-auto">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
              Our Services
            </h1>
            <p className="text-white/80 text-lg mb-16">
              Transforming ideas into digital excellence
            </p>
          </div>
        </div>
        <FooterTwo />
      </main>
    </>
  );
};

export default Services;
