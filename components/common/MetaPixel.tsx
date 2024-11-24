import Script from 'next/script';
import * as fbq from '../Pixel/facebook/pixel-1';

interface MetaPixelProps {
  trackLead?: boolean;
}

const MetaPixel = ({ trackLead = false }: MetaPixelProps) => {
  // Move router and event tracking to client-side only
  if (typeof window !== 'undefined') {
    import('next/router').then(({ useRouter }) => {
      const router = useRouter();

      router.events?.on('routeChangeComplete', () => {
        fbq.pageview();
      });

      // Initial page load
      fbq.pageview();
      if (trackLead) {
        fbq.lead();
      }
    });
  }

  return (
    <>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fbq.FB_PIXEL_ID}');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
};

export default MetaPixel;
