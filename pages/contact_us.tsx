import Head from 'next/head';
import ContactUs from '../components/ContactUs/ContactUsLanding';
import ContactUsFormSec from '../components/ContactUs/ContactUsFormSec';
import FooterTwo from '../components/common/Footer/FooterTwo';
import Pixel from '../components/Pixel';

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Code Visionary Studio</title>
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" trackLead={true} />
      <div className="min-h-screen bg-[#000D0F] flex flex-col">
        <ContactUs />
        <ContactUsFormSec />
        <FooterTwo useBlackBackground={true} />
      </div>
    </>
  );
};

export default ContactUsPage;
