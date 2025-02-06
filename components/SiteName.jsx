const SiteSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://jashoreinstallationservice.com",
          name: "Jashore Installation Service",
          description:
            "Google Workspace, Office 365, DNS Management, CC Camera Install and Maintenance, Electric, Office Network Service Provider Remotely or Onsite",
        }),
      }}
    />
  );
};

export default SiteSchema;
