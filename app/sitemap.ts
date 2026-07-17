import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const publicRoutes: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/track", changeFrequency: "weekly", priority: 0.9 },
    { path: "/book", changeFrequency: "monthly", priority: 0.8 },
    { path: "/calculator", changeFrequency: "monthly", priority: 0.8 },
    { path: "/login", changeFrequency: "yearly", priority: 0.3 },
  ];

  return publicRoutes.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
