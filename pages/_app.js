import SiteSchema from "@/components/SiteName";
import "@/styles/globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
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
      <GoogleAnalytics gaId="G-SZB80V6SBQ" />
      <GoogleTagManager gtmId="GTM-NDMM4NHD" />
    </ThemeProvider>
  );
}
