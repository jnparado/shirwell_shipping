function normalizeUrl(url: string): string {
  return url.replace(/\/$/, "") || "https://shirwell-shipping.vercel.app";
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Shirwell Shipping",
  url: normalizeUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://shirwell-shipping.vercel.app",
  ),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "shirwellenterprices@gmail.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+1 (234) 567-890",
  tagline: "Fast • Reliable • Worldwide Shipping",
  description:
    "Shirwell Shipping — fast, reliable shipping and logistics worldwide. Track shipments, book sea freight, air freight, and land freight, and get cost-effective delivery for every business.",
  keywords: [
    "Shirwell Shipping",
    "shirwell shipping",
    "shipping",
    "shipping company",
    "shipping services",
    "track shipping",
    "track shipment",
    "freight shipping",
    "sea shipping",
    "air shipping",
    "land shipping",
    "international shipping",
    "domestic shipping",
    "logistics shipping",
    "courier shipping",
    "e-commerce shipping",
    "freight forwarding",
    "shipping rate calculator",
  ],
};

export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url;
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
