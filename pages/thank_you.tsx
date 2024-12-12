import Head from "next/head";
import FooterTwo from "@/components/common/Footer/FooterTwo";
import ThankYouContent from "@/components/ThankYou/ThankYouContent";
import Pixel from "@/components/Pixel";

const ThankYouPage = () => {
  return (
    <>
      <Head>
        <title>Thank You - Code Visionary Studio</title>
        <script>
          {`
        gtag('event', 'conversion', {'send_to': 'AW-16644368488/1_CuCNKz1_QZEOjQ04A-'});
        `}
        </script>
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" trackLead={false} />
      <div className=" w-full bg-[#000D0F] flex flex-col">
        <ThankYouContent />
        <FooterTwo useBlackBackground={true} />
      </div>
    </>
  );
};

export default ThankYouPage;
