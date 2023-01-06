import { Lato, Playfair_Display } from "@next/font/google";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

const lato = Lato({ weight: "700", display: "swap" });
const playFairDisplay = Playfair_Display({ weight: "700", display: "swap" });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          font-family: ${lato.style.fontFamily};
        }

        h1 {
          font-family: ${playFairDisplay.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
