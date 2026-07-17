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
  tagline: "Fast Delivery & Logistics",
  description:
    "Shirwell Shipping provides cost-effective logistic solutions for every business. Track shipments, book sea/air/land freight, and get reliable domestic and international delivery.",
  keywords: [
    "Shirwell Shipping",
    "shipping company",
    "track shipment",
    "freight forwarding",
    "sea freight",
    "air freight",
    "land freight",
    "logistics",
    "courier",
    "e-commerce logistics",
    "international shipping",
    "domestic shipping",
    "rate calculator",
  ],
};

export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url;
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
