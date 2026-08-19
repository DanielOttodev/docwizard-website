import type { MetadataRoute } from "next";

// Required alongside this project's `output: "export"` static export mode -
// without it, Next.js can't statically generate this route at build time.
export const dynamic = "force-static";

const BASE_URL = "https://docwizard.co";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
