export const GTM_ID = 'AW-16644368488'

export const gtmPageView = (props: Record<string, any>) => {
  window.dataLayer?.push({
    event: "page_view",
    url: window.location.href,
    ...props,
  });
};
