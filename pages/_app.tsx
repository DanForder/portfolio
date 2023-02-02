import { Lato, Playfair_Display } from "@next/font/google";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../lib/ThemeContext";
import "../styles/globals.scss";

const lato = Lato({ weight: "700", display: "swap" });
const playFairDisplay = Playfair_Display({ weight: "700", display: "swap" });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <style jsx global>{`
        html,
        body {
          font-family: ${lato.style.fontFamily};
          scroll-behavior: smooth;
        }

        h1,
        .sansSerif {
          font-family: ${playFairDisplay.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
