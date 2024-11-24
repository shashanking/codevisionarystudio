import React from 'react'
import Head from 'next/head'
import FacebookPixel from './facebook/pixel-1';


interface PixelProps {
  name: string;
  trackLead?: boolean;
}

const Pixel: React.FC<PixelProps> = ({ name, trackLead }) => {
  return (
    <Head>
      {name === 'FACEBOOK_PIXEL_1' && <FacebookPixel />}
      {trackLead && (
        <script dangerouslySetInnerHTML={{
          __html: `
          if (typeof window !== 'undefined' && window.fbq) {
            fbq('track', 'Lead');
          }
        ` }} />
      )}
    </Head>
  )
}

export default Pixel
