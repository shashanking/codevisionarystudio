import Head from 'next/head';
import ContactUsResponsive from '../components/ContactUs/ContactUsResponsive';
import FooterTwo from '../components/common/Footer/FooterTwo';
import Pixel from '../components/Pixel';

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Code Visionary Studio</title>
        <style>{`
          body {
            margin: 0;
            padding: 0;
          }
          #__next {
            overflow-x: hidden;
          }
        `}</style>
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" trackLead={true} />
      <div className="w-full bg-[#000D0F]">
        <ContactUsResponsive type="landing" />
        <ContactUsResponsive type="form" />
        <FooterTwo useBlackBackground={true} />
      </div>
    </>
  );
};

export default ContactUsPage;
