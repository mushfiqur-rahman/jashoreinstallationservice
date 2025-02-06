import SiteSchema from "@/components/SiteName";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SiteSchema />
      <Component {...pageProps} />
      <GoogleAnalytics gtmId="G-SZB80V6SBQ" />
    </ThemeProvider>
  );
}
