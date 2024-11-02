import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/common/Navbar/Navbar";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "@/styles/globals.scss";

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
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
