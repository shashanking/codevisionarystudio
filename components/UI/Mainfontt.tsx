import localFont from "next/font/local";

export const mainFont = localFont({
  src: [
    {
      path: "../../public/fonts/earthorbiter.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/earthorbiterbold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-earth-orbiter",
});
