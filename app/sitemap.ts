import { MetadataRoute } from "next"
import { CITIES, STATIC_URLS } from "@/lib/sitemap-data"
import { BLOG_POSTS } from "@/lib/blog-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://xn--osmosisespaa-khb.com"
  
  // URLs estaticas
  const staticUrls = STATIC_URLS.map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: url === "/" ? 1 : 0.8,
  }))
  
  // URLs dinamicas de instalacion por ciudad
  const cityUrls = CITIES.map((city) => ({
    url: `${baseUrl}/instalacion/${city}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // URLs de blog
  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))
  
  return [...staticUrls, ...cityUrls, ...blogUrls]
}
