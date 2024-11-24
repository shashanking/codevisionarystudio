import Script from 'next/script';
import Image from 'next/image';
import { useEffect } from 'react';
import * as fbq from '../Pixel/facebook/pixel-1';

interface MetaPixelProps {
  trackLead?: boolean;
}

const MetaPixel = ({ trackLead = false }: MetaPixelProps) => {
  useEffect(() => {
    // Skip during SSR
    if (typeof window === 'undefined') return;

    // Handle route changes
    const handleRouteChange = () => {
      fbq.pageview();
    };

    // Initial page load
    fbq.pageview();
    if (trackLead) {
      fbq.lead();
    }

    // Add route change listener
    window.addEventListener('routechangecomplete', handleRouteChange);

    return () => {
      window.removeEventListener('routechangecomplete', handleRouteChange);
    };
  }, [trackLead]);

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
        <div style={{ position: 'absolute' }}>
          <Image
            width={1}
            height={1}
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
            unoptimized
          />
        </div>
      </noscript>
    </>
  );
};

export default MetaPixel;
