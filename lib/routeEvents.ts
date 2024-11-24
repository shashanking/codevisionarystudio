import Router from 'next/router';

// Create a custom event for route changes
const routeChangeEvent = new Event('routechangecomplete');

// Listen to Next.js route changes and dispatch our custom event
Router.events.on('routeChangeComplete', () => {
  window.dispatchEvent(routeChangeEvent);
});
