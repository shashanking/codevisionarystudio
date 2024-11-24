import './types';

export const FB_PIXEL_ID = '1103833424699689';

export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const lead = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
};

// https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options);
  }
};
