import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/** Public sitemap — /home is the primary landing page. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/home"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: absoluteUrl("/track"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/book"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/calculator"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
