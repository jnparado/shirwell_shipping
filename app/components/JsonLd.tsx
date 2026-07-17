import { absoluteUrl, siteConfig } from "@/lib/site";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/logo.png"),
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    telephone: siteConfig.contactPhone,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contactPhone,
      email: siteConfig.contactEmail,
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: absoluteUrl("/logo.png"),
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/track?code={tracking_code}`,
      },
      "query-input": "required name=tracking_code",
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Freight & Logistics Services",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    description: siteConfig.description,
    areaServed: "Worldwide",
    serviceType: [
      "Sea Freight",
      "Air Freight",
      "Land Freight",
      "Shipment Tracking",
      "E-commerce Logistics",
    ],
    url: siteConfig.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}
