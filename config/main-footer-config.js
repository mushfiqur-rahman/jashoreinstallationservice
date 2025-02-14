import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const mainFooterConfig = {
  categories: [
    { title: "Technology", slug: "technology" },
    { title: "Business", slug: "business" },
    { title: "Lifestyle", slug: "lifestyle" },
    { title: "Education", slug: "education" },
  ],
  pages: [
    { title: "Home", slug: "/" },
    { title: "Service", slug: "/service" },
    { title: "Blog", slug: "/blog" },
    { title: "Changelogs", slug: "/" },
    { title: "Contact", slug: "/contact" },
  ],
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/JashoreInstallationService",
      icon: FaFacebook,
    },
    {
      name: "Linkedin ",
      url: "https://www.linkedin.com/company/jashore-installation-service",
      icon: FaLinkedin,
    },
    { name: "Twitter", url: "https://x.com/jashoreis", icon: FaXTwitter },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@jashore-installation-service",
      icon: FaYoutube,
    },
  ],
  legals: [
    { title: "Terms", slug: "/terms" },
    { title: "Policy", slug: "/policy" },
  ],
  copyright: "© 2024 - 2025 Jashore Installation Service. All rights reserved.",
};

export default mainFooterConfig;
