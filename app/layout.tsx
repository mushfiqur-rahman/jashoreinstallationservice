import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const popins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jashore Installation Service",
  description:
    "Google Workspace, Office 365, DNS Management, CC Camera Install and Maintenance, Electric, Office Network Install, website Develop & Maintenance. Service Provider Remotely or Onsite",
  keywords:
    "app development, cc camera jashore, ip camera jashore, electrician jashore, ইলেকট্রিশিয়ান যশোর, ওয়েব সাইট যশোর, সিসি ক্যামেরা যশোর, আইটি সার্ভিস যশোর",
  applicationName: "IT Service Near at You",
  authors: [{ name: "Jashore Installation Service" }],
  creator: "Jashore Installation Service",
  publisher: "Jashore Installation Service",
  robots: "index, follow, noodp, noydir",
  metadataBase: new URL("https://jashoreinstallationservice.com"),
  openGraph: {
    type: "website",
    url: "https://jashoreinstallationservice.com",
    title: "Jashore Installation Service",
    description:
      "Google Workspace, Office 365, DNS Management, CC Camera Install and Maintenance, Electric, Office Network Install, website Develop & Maintenance. Service Provider Remotely or Onsite",
    siteName: "Jashore Installation Service",
    images: [
      {
        url: "https://res.cloudinary.com/depyaowh3/image/upload/v1737855025/jashore_installation_service_r3v1sc.png",
        width: 1200,
        height: 628,
        alt: "Jashore Installation Service Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jashoreis",
    title: "Jashore Installation Service",
    description:
      "Google Workspace, Office 365, DNS Management, CC Camera Install and Maintenance, Electric, Office Network Install, website Develop & Maintenance. Service Provider Remotely or Onsite",
    images:
      "https://res.cloudinary.com/depyaowh3/image/upload/v1737855025/jashore_installation_service_r3v1sc.png",
  },
  verification: {
    google: "UviZELNJ6Xu6G42kgGmKtVzRXpoc61MYCLpWmoV1uzA",
    yandex: "84a79664d64cb28e",
    me: ["3EA8D19855F5F7D04AEABD2C2A95FA33"],
  },
  other: {
    "facebook-domain-verification": "h5fuk99pcbco5lw2guzjhc4vq04rdc",
    "msvalidate.01": "3EA8D19855F5F7D04AEABD2C2A95FA33",
    "p:domain_verify": "2a1276bd93e5e1054bc5f45a8a1c3823",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-SZB80V6SBQ" />
      <GoogleTagManager gtmId="GTM-NDMM4NHD" />
      <body className={`${popins.variable} antialiased`}>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
