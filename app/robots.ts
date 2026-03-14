import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Old/deprecated pages
          "/old/",
          "/legacy/",
          "/temp/",
          "/test/",
          "/draft/",
          // Admin/internal
          "/admin/",
          "/api/",
          "/_next/",
          // Search/filter pages that may create duplicate content
          "/*?*",
        ],
      },
    ],
    sitemap: [
      "https://xn--osmosisespaa-khb.com/sitemap.xml",
    ],
  }
}
