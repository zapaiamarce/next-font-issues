import localFont from "@next/font/local";

export const silka = localFont({
  src: [
    {
      path: "./silka/silka-regular.woff2",
      weight: "400",
    },
    {
      path: "./silka/silka-bold.woff",
      weight: "700",
    },
  ],
  variable: "--silka",
});
