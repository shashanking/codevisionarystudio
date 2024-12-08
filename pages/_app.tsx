import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/common/Navbar/Navbar";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "@/styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleTagManager } from '@next/third-parties/google';
import { GTM_ID, gtmPageView } from "@/lib/gtm";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const props = {
      page_title: pageProps.title || null,
      page_path: window.location.pathname,
    };
    gtmPageView(props);
  }, [pageProps]);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer />
      <GoogleTagManager gtmId={GTM_ID} />
    </>
  );
}
