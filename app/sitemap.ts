import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/** Public sitemap for Search Console + AdSense crawlability. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
    { path: "/", changeFrequency: "daily", priority: 1 },
    { path: "/home", changeFrequency: "daily", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/shipping-guide", changeFrequency: "weekly", priority: 0.85 },
    { path: "/track", changeFrequency: "weekly", priority: 0.9 },
    { path: "/book", changeFrequency: "monthly", priority: 0.8 },
    { path: "/calculator", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.5 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.5 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
