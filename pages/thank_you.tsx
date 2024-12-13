import Head from "next/head";
import FooterTwo from "@/components/common/Footer/FooterTwo";
import ThankYouContent from "@/components/ThankYou/ThankYouContent";
import Pixel from "@/components/Pixel";

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ThankYouPage = () => {

  const router = useRouter();

  useEffect(() => {
    // Check if the query parameter indicates navigation from Contact Us
    if (!router.query.fromContactUs) {
      router.push("/contact_us"); // Redirect to Contact Us if the query is missing
    }
  }, [router]);

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-16644368488/1_CuCNKz1_QZEOjQ04A-'
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Thank You - Code Visionary Studio</title>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-6QYVQYQVXG`}></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'YOUR_TRACKING_ID');
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
