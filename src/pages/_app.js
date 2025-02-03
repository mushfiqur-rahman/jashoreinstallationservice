import { GoogleTagManager } from "@next/third-parties/google";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="G-SZB80V6SBQ" />
    </>
  );
}
