import type { MetadataRoute } from "next";

const SITE_URL = "https://dacoder.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "monthly", priority: 1.0 },
    { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/youtube", changeFrequency: "weekly", priority: 0.8 },
    { path: "/roadmap", changeFrequency: "weekly", priority: 0.7 },
    { path: "/community", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
