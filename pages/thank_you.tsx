import Head from "next/head";
import FooterTwo from "@/components/common/Footer/FooterTwo";
import ThankYouContent from "@/components/ThankYou/ThankYouContent";
import MetaPixel from "@/components/common/MetaPixel";

const ThankYouPage = () => {
  return (
    <>
      <Head>
        <title>Thank You - Code Visionary Studio</title>
        <MetaPixel trackLead={true} />
      </Head>
      <div className="min-h-screen bg-[#000D0F] flex flex-col">
        <ThankYouContent />
        <FooterTwo useBlackBackground={true} />
      </div>
    </>
  );
};

export default ThankYouPage;
