import { mainFont } from "@/components/UI/Mainfontt";
import { HomepageTagIconSvg } from "@/styles/Svgs/AllSvgs";

export const Testimonials = () => {
  return (
    <>
      <div>
        <div className="max-w-=[1920px] min-h-[100vh] mx-auto flex justify-center items-center">
          <div className="w-[85%] mx-auto  flex justify-between items-center gap-4">
            <div className="flex-1 bg-green-900">the slider div</div>
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
                our web design, app development, branding, and digital marketing
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
