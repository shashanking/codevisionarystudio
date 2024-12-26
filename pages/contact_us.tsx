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
        <script>
          {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-16644368488/kzckCOaN1PQZEOjQ04A-',
                'event_callback': callback
            });
            return false;
          }
        `}
        </script>
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" trackLead={true} />
      <div className="w-full bg-[#000D0F] flex flex-col gap-y-32 ">
        <ContactUsResponsive type="landing" />
        <ContactUsResponsive type="form" />
        <FooterTwo useBlackBackground={true} />
      </div>
    </>
  );
};

export default ContactUsPage;
