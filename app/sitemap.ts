import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

// Required alongside this project's `output: "export"` static export mode -
// without it, Next.js can't statically generate this route at build time.
export const dynamic = "force-static";

const BASE_URL = "https://docwizard.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/docs`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/docs/quickstart`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/docs/api-reference`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/docs/api-reference/templates`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/docs/api-reference/documents`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/docs/api-reference/jobs`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/legal/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/legal/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];

  // Sourced from the same content/blog/*.mdx files the blog pipeline itself reads -
  // a new post picks up a sitemap entry automatically, nothing to maintain by hand.
  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes];
}
