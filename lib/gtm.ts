export const GTM_ID = 'AW-16644368488'
export const GA_ID = 'G-EMJ07F358Y'

export const gtmPageView = (props: Record<string, any>) => {
  window.dataLayer?.push({
    event: "page_view",
    url: window.location.href,
    ...props,
  });
};

// Helper function for GA events
export const gaEvent = (action: string, params: Record<string, any>) => {
  window.gtag?.('event', action, params);
};
