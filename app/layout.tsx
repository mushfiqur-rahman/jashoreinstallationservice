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
    "যশোর এবং পার্শ্ববর্তী এলাকায় সিসি ক্যামেরা, সোলার, ইলেকট্রিক, অফিস এবং ইন্ডাস্ট্রির নেটওয়ার্ক সেটাপ, আইটি সেবা প্রদান কারি প্রতিষ্ঠান। ",
  keywords:
    "যশোরে সিসি ক্যামেরা সেটআপ, সোলার, ইলেকট্রিক,যশোরে সোলার সিস্টেম ইনস্টলেশন সেবা,যশোরে অফিস এবং ইন্ডাস্ট্রির নেটওয়ার্ক সেটাপ, যশোরে আইটি সেবা প্রদান কারি প্রতিষ্ঠান,যশোরে ইলেকট্রিশিয়ান যশোর, ওয়েব সাইট যশোর, সিসি ক্যামেরা যশোর, আইটি সার্ভিস যশোর",
  applicationName: "IT Service Near at You",
  authors: [{ name: "যশোর ইন্সটলেশন সার্ভিস" }],
  creator: "যশোর ইন্সটলেশন সার্ভিস",
  publisher: "যশোর ইন্সটলেশন সার্ভিস",
  robots: "index, follow, noodp, noydir",
  metadataBase: new URL("https://jashoreinstallationservice.com"),
  openGraph: {
    type: "website",
    url: "https://jashoreinstallationservice.com",
    title: "যশোর ইন্সটলেশন সার্ভিস",
    description:
      "যশোর এবং পার্শ্ববর্তী এলাকায় সিসি ক্যামেরা, সোলার, ইলেকট্রিক, অফিস এবং ইন্ডাস্ট্রির নেটওয়ার্ক সেটাপ, আইটি সেবা প্রদান কারি প্রতিষ্ঠান। ",
    siteName: "যশোর ইন্সটলেশন সার্ভিস",
    images: [
      {
        url: "https://res.cloudinary.com/depyaowh3/image/upload/v1737855025/jashore_installation_service_r3v1sc.png",
        width: 1200,
        height: 628,
        alt: "যশোর ইন্সটলেশন সার্ভিস Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jashoreis",
    title: "যশোর ইন্সটলেশন সার্ভিস",
    description:
      "যশোর এবং পার্শ্ববর্তী এলাকায় সিসি ক্যামেরা, সোলার, ইলেকট্রিক, অফিস এবং ইন্ডাস্ট্রির নেটওয়ার্ক সেটাপ, আইটি সেবা প্রদান কারি প্রতিষ্ঠান। ",
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
    "fb:app_id": "1171222251317643",
    "ia:markup_url": "https://jashoreinstallationservice.com/blog",
    "ia:markup_url_dev": "https://jashoreinstallationservice.com/blog",
    "ia:rules_url": "https://jashoreinstallationservice.com/blog",
    "ia:rules_url_dev": "https://jashoreinstallationservice.com/blog",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
