export {};

declare global {
  interface Window {
    fbq: (
      type: 'init' | 'track' | 'trackCustom',
      eventName: string,
      params?: Record<string, any>
    ) => void;
    _fbq: any;
  }
}
