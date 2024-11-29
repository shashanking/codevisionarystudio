import { mainFont } from "@/components/UI/Mainfontt";
import { HomepageTagIconSvg } from "@/styles/Svgs/AllSvgs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { useRef } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export const testimonials = [
  {
    id: 1,
    name: "Jane S.",
    position: "Small Business Owner",
    testimonial: "Working with Code Visionary Studio has been a game-changer for my business. The intuitive design and exceptional support made the transition seamless. I have seen a noticeable increase in productivity and customer satisfaction since we started using it. Highly recommend!"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    testimonial: "The results speak for themselves.Code Visionary Studio has significantly boosted our marketing efforts, allowing us to reach a wider audience more effectively. The team is knowledgeable, responsive, and dedicated to our success. It is been an invaluable asset to our strategy."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Freelancer",
    testimonial: "As a freelancer, efficiency is key. Code Visionary Studio has streamlined my workflow and saved me countless hours each week. The user-friendly interface and reliable performance make it an essential tool for my daily operations. I can not imagine working without it!",
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Operations Manager",
    testimonial: "The digital marketing strategy developed by Code Visionary Studios helped us achieve unprecedented growth. Their data-driven approach and creative execution delivered measurable results for our business."
  },
  {
    id: 5,
    name: "Lisa Zhang",
    position: "Product Lead",
    testimonial: "From concept to execution, CVS demonstrated exceptional skill in understanding our requirements. Their comprehensive service suite helped us launch our product successfully in record time."
  }
];


export const Testimonials = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <div>
        <div className="max-w-[1920px] min-h-[100vh] mx-auto flex justify-center items-center">
          <div className="w-[95%] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
            <div className="flex-1 p-2 text-center md:text-left w-full md:w-auto order-1 md:order-2">
              <div className="flex justify-center md:justify-start items-center gap-4 my-3">
                <HomepageTagIconSvg />
                <h4
                  className="text-base md:text-[1.1vw] font-bold uppercase"
                  style={{
                    fontFamily: mainFont.style.fontFamily,
                    color: "#fff",
                  }}
                >
                  Testimonials
                </h4>
              </div>
              <h3
                style={{
                  fontFamily: mainFont.style.fontFamily,
                }}
                className="text-white font-[700] text-2xl md:text-[2.5vw] customLine__height mb-4 md:mb-0"
              >
                What Our Clients Say
              </h3>
              <p className="text-white font-secondaryFont text-sm md:text-[1vw] font-[400] my-[3%]">
                Discover how Code Visionary Studios has made a difference for
                our clients. Our testimonials showcase the positive impact of
                our web design, application development, branding, and digital marketing
                services.
              </p>
            </div>

            <div className="flex-1 w-full md:w-auto overflow-hidden flex justify-between items-center mt-8 md:mt-0 order-2 md:order-1">
              <button
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className="w-8 md:w-10 h-8 md:h-10 relative z-40 rounded-full bg-white/60 flex justify-center items-center"
              >
                <ArrowLeft className="text-black w-4 md:w-6 h-4 md:h-6" />
              </button>
              <div className="w-[80%] md:w-[60%] mx-auto">
                <Swiper
                  effect={"cards"}
                  grabCursor={false}
                  modules={[EffectCards]}
                  className="mySwiper"
                  ref={swiperRef}
                >
                  {testimonials.map((testimonial, id) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="min-h-[350px] rounded-lg w-full bg-white/40 brightness-75 backdrop-blur-3xl p-8 mx-2 md:p-5">
                        <div className="flex justify-center items-center gap-5">
                          <div className="flex-1">
                            <h4 className="text-white text-lg md:text-[1.4vw] font-[600] font-secondaryFont">
                              {testimonial.name}
                            </h4>
                            <p className="text-white font-secondaryFont text-sm md:text-[.9vw] font-[500] customLine__height">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                        <p className="font-secondaryFont font-[400] mt-[8%] text-base md:text-[1.1vw] text-white">
                          {testimonial.testimonial}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <button
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className="w-8 md:w-10 h-8 md:h-10 relative z-40 rounded-full bg-white/60 flex justify-center mx-2 items-center"
              >
                <ArrowRight className="text-black w-4 md:w-6 h-4 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
