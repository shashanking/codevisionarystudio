import Head from "next/head";
import FooterTwo from "@/components/common/Footer/FooterTwo";
import ThankYouContent from "@/components/ThankYou/ThankYouContent";
import Pixel from "@/components/Pixel";

const ThankYouPage = () => {
  return (
    <>
      <Head>
        <title>Thank You - Code Visionary Studio</title>
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" trackLead={false} />
      <div className="min-h-screen bg-[#000D0F] flex flex-col">
        <ThankYouContent />
        <FooterTwo useBlackBackground={true} />
      </div>
    </>
  );
};

export default ThankYouPage;
