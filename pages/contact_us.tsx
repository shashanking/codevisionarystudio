import ContactUsFormSec from "@/components/ContactUs/ContactUsFormSec";
import ContactUs from "@/components/ContactUs/ContactUsLanding";
import FooterTwo from "@/components/common/Footer/FooterTwo";
import Head from "next/head";
import MetaPixel from "@/components/common/MetaPixel";

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Code Visionary Studio</title>
        <MetaPixel trackLead={true} />
      </Head>
      <div className="min-h-screen bg-[#000D0F] flex flex-col">
        <ContactUs />
        <ContactUsFormSec />
        <FooterTwo useBlackBackground={true} />
      </div>
    </>
  );
};

export default ContactUsPage;
