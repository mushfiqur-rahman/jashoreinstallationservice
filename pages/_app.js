import "@/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
      <GoogleTagManager gtmId="G-SZB80V6SBQ" />
    </ThemeProvider>
  );
}
