import { VALID_SERVICES, CITIES, type Service } from "@/lib/sitemap-data"

const BASE = "https://osmosisesp.com"

function buildUrlEntry(loc: string) {
  return `<url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const rawSlug = (await params).slug
  const slug = rawSlug.replace(/\.xml$/, "")
  const urls: string[] = []

  if (slug === "service-landings") {
    // Solo servicios base, sin modificadores
    for (const service of VALID_SERVICES) {
      urls.push(buildUrlEntry(`${BASE}/${service}/`))
    }
  } else if (VALID_SERVICES.includes(slug as Service)) {
    // Páginas de servicio + ciudad (sin modificadores)
    for (const city of CITIES) {
      urls.push(buildUrlEntry(`${BASE}/${slug}/${city}/`))
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`

  return new Response(xml, { headers: { "Content-Type": "application/xml" } })
}
