import { mainFont } from "@/components/UI/Mainfontt";
import { HomepageTagIconSvg } from "@/styles/Svgs/AllSvgs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export const testimonials = [
  {
    id: 1,
    name: "Jane S.",
    position: "Small Business Owner",
    testimonial: "Working with Code Visionary Studio has been a game-changer for my business. The intuitive design and exceptional support made the transition seamless. I have seen a noticeable increase in productivity and customer satisfaction since we started using it. Highly recommend!",
    image:"/assets/vik_pic.jpg"
  },
  { 
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    testimonial: "The results speak for themselves. Code Visionary Studio has significantly boosted our marketing efforts, allowing us to reach a wider audience more effectively. The team is knowledgeable, responsive, and dedicated to our success. It is been an invaluable asset to our strategy.",
    image:"/assets/vik_pic.jpg"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Freelancer",
    testimonial: "As a freelancer, efficiency is key. Code Visionary Studio has streamlined my workflow and saved me countless hours each week. The user-friendly interface and reliable performance make it an essential tool for my daily operations. I can not imagine working without it!",
    image: "/assets/vik_pic.jpg"
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Operations Manager",
    testimonial: "The digital marketing strategy developed by Code Visionary Studios helped us achieve unprecedented growth. Their data-driven approach and creative execution delivered measurable results for our business.",
    image:"/assets/vik_pic.jpg"
  },
  {
    id: 5,
    name: "Lisa Zhang",
    position: "Product Lead",
    testimonial: "From concept to execution, CVS demonstrated exceptional skill in understanding our requirements. Their comprehensive service suite helped us launch our product successfully in record time.",
    image: "/assets/vik_pic.jpg"
  }
];


export const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="relative py-16 md:py-24">
        {/* World Map Background */}
        {/* <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
          <div className="relative max-w-[1200px] mx-auto">
            <Image 
              src="/assets/worldmap.png" 
              alt="World Map" 
              width={1200}
              height={400}
              className="object-contain object-center rounded-2xl"
              priority
            />
          </div>
        </div> */}

        <div className="max-w-[1920px] mx-auto flex justify-center items-center relative z-10">
          <div className="w-[95%] mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
            {/* Testimonial Header */}
            <div className="flex-1 p-2 text-center md:text-left w-full md:w-auto">
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

            {/* Testimonial Carousel */}
            <div className="flex-1 w-full md:w-auto overflow-hidden mt-8 md:mt-0">
              <div className="relative w-full mx-auto px-10">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    bulletActiveClass: 'swiper-pagination-bullet-active bg-white',
                  }}
                  navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="testimonialSwiper"
                  ref={swiperRef}
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg bg-black/40 backdrop-blur-md mx-auto max-w-4xl">
                        {/* Profile Image */}
                        <div className="w-20 h-20 md:w-24 md:h-24 relative overflow-hidden rounded-full border-2 border-white/30 flex-shrink-0 mx-auto md:mx-0">
                          <Image 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              e.target.src = '/assets/default-avatar.jpg';
                            }}
                          />
                        </div>
                        
                        {/* Testimonial Content */}
                        <div className="flex-1">
                          <div className="mb-3">
                            <h4 className="text-white text-lg md:text-[1.4vw] font-[600] font-secondaryFont">
                              {testimonial.name}
                            </h4>
                            <p className="text-white font-secondaryFont text-sm md:text-[.9vw] font-[500] customLine__height">
                              {testimonial.position}
                            </p>
                          </div>
                          <p className="font-secondaryFont font-[400] text-base md:text-[1.1vw] text-white">
                            {testimonial.testimonial}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Custom Navigation Buttons */}
                <button
                  onClick={() => swiperRef.current?.swiper.slidePrev()}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 md:w-10 h-8 md:h-10 rounded-full bg-white/60 flex justify-center items-center shadow-md hover:bg-white/80 transition-all duration-300"
                >
                  <ArrowLeft className="text-[#1e90ff] w-4 md:w-5 h-4 md:h-5" />
                </button>
                <button
                  onClick={() => swiperRef.current?.swiper.slideNext()}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 md:w-10 h-8 md:h-10 rounded-full bg-white/60 flex justify-center items-center shadow-md hover:bg-white/80 transition-all duration-300"
                >
                  <ArrowRight className="text-[#1e90ff] w-4 md:w-5 h-4 md:h-5" />
                </button>
                
                {/* Add custom styles for pagination bullets */}
                <style jsx global>{`
                  .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.5);
                    opacity: 1;
                  }
                  .swiper-pagination-bullet-active {
                    background: white !important;
                  }
                  .swiper-button-prev::after,
                  .swiper-button-next::after {
                    display: none;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
