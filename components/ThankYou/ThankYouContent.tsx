import { mainFont } from "@/components/UI/Mainfontt";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const ThankYouContent = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-[#000D0F] px-4 md:px-6 lg:px-8 py-8 flex items-center justify-center">
      <div className="relative w-full max-w-[1600px] min-h-[500px] lg:h-[817px] bg-[#000D0F] shadow-[0px_0px_4px_rgba(137,226,255,0.2)] rounded-[32px] overflow-hidden mt-12 mx-auto">
        <div className="absolute inset-0 bg-[url('/assets/thank_you_bg.png')] opacity-80" />

        <div className="flex flex-col lg:flex-row justify-between items-center h-full relative p-6 lg:p-0">
          <div className="w-full lg:flex-1 relative flex items-center justify-center order-1 lg:order-2 mb-0 lg:mb-0 lg:pt-0">
            <Image
              src="/assets/thank_you.png"
              alt="Thank You"
              width={644}
              height={721}
              className="relative z-10 transform matrix-[0.99,0.14,-0.14,0.99,0,0] w-[280px] md:w-[419.34px] lg:w-[644px]"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div className="absolute w-[250px] h-[250px] md:w-[259.33px] md:h-[264.45px] lg:w-full lg:h-full bg-[#007FA9] opacity-15 blur-[80px] lg:blur-[150px] rounded-[50px]"></div>
          </div>

          <div className="hidden lg:block absolute left-[55%] top-[60px] w-[2px] h-[697px] bg-gradient-to-b from-[#000D0F] to-[#007FA9] opacity-50 rounded-[6px]"></div>

          <div className="block lg:hidden w-[90%] h-[2px] mx-auto order-2 bg-gradient-to-r from-[#000D0F] via-[#007FA9] to-[#000D0F] opacity-50 rounded-[6px] my-6"></div>

          <div className="w-[80%] lg:flex-1 lg:pl-[60px] z-10 order-3 lg:order-1">
            <div className="flex flex-col gap-[32px] w-full lg:w-[746px]">
              <h1
                className="text-[32px] sm:text-[60px] lg:text-[48px] leading-[1.2] lg:leading-[80px] text-white font-bold text-center lg:text-left"
                style={{ fontFamily: mainFont.style.fontFamily }}
              >
                <span className="text-[#C44F56]">Thank You</span> for
                <br />
                Reaching Out to us
              </h1>
              <div className="text-[16px] lg:text-[20px] leading-[1.5] lg:leading-[30px] text-white font-montserrat text-center lg:text-left">
                <p>Our team will contact you shortly.</p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/"
                  className="flex justify-center items-center w-full sm:w-[312px] h-[50px] lg:h-[60px] bg-white rounded-[44px] text-[16px] lg:text-[20px] text-[#000D0F] hover:scale-105 transition-transform"
                  style={{ fontFamily: mainFont.style.fontFamily }}
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYouContent;
