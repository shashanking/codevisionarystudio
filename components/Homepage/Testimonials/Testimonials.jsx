import { mainFont } from "@/components/UI/Mainfontt";
import { HomepageTagIconSvg } from "@/styles/Svgs/AllSvgs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { useRef } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export const Testimonials = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <div>
        <div className="max-w-=[1920px] min-h-[100vh] mx-auto flex justify-center items-center">
          <div className="w-[85%] mx-auto  flex justify-between items-center gap-4">
            <div className="flex-1  overflow-hidden flex justify-between items-center">
              <button
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className="w-10 h-10 relative z-40 rounded-full bg-white/60 flex justify-center items-center"
              >
                <ArrowLeft className="text-black" />
              </button>
              <div className="w-[60%] mx-auto">
                <Swiper
                  effect={"cards"}
                  grabCursor={false}
                  modules={[EffectCards]}
                  className="mySwiper"
                  ref={swiperRef}
                >
                  {[1, 2, 3, 4, 5].map((cur, id) => (
                    <SwiperSlide key={id}>
                      <div className="min-h-[350px] rounded-lg w-full bg-white/40 brightness-75 backdrop-blur-3xl p-5">
                        <div className="flex justify-center items-center gap-5">
                          <div className="relative h-14 w-14">
                            <Image
                              src="/assets/TeamImg1.png"
                              fill
                              className="rounded-full object-cover object-top "
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white text-[1.4vw] font-[600] font-secondaryFont">
                              John Doe {id + 1}
                            </h4>
                            <p className="text-white font-secondaryFont text-[.9vw] font-[500] customLine__height">
                              Team Lead
                            </p>
                          </div>
                        </div>
                        <p className="font-secondaryFont font-[400] mt-[8%] text-[1.1vw]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nulla et varius magna, at facilisis lorem.
                          Aenean cursus lectus eget diam maximus imperdiet.
                          Proin pretium purus in urna iaculis maximus. Aenean
                          cursus lectus eget diam.Magna, diam.
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <button
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className="w-10 h-10 relative z-40 rounded-full bg-white/60 flex justify-center items-center"
              >
                <ArrowRight className="text-black" />
              </button>
            </div>
            <div className="flex-1 p-2">
              <div className="flex justify-start items-center gap-4 my-3">
                <HomepageTagIconSvg />
                <h4
                  className="text-[1.1vw] font-bold uppercase"
                  style={{
                    fontFamily: mainFont.style.fontFamily,
                  }}
                >
                  Testimonials
                </h4>
              </div>
              <h3
                style={{
                  fontFamily: mainFont.style.fontFamily,
                }}
                className="text-white font-[700] text-[2.5vw] customLine__height"
              >
                What Our Clients Say
              </h3>
              <p className="text-white font-secondaryFont text-[1vw] font-[400] my-[3%]">
                Discover how Code Visionary Studios has made a difference for
                our clients. Our testimonials showcase the positive impact of
                our web design, application development, branding, and digital marketing
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
