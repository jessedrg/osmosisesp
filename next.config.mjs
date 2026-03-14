/** @type {import('next').NextConfig} */

// Modificadores antiguos que se redirigen a la página principal
const OLD_MODIFIERS = [
  "precios", "barata", "economica", "cuanto-cuesta",
  "presupuesto", "presupuesto-online",
  "urgente", "rapida", "hoy", "24-horas",
  "mejor", "calidad-precio", "profesional", "de-confianza",
  "mejor-valorada", "recomendada",
  "instalacion", "mantenimiento", "reparacion", "cambio-filtros",
  "atl", "hidrosalud", "culligan", "aquasana",
  "cerca-de-mi", "a-domicilio",
]

const SERVICES = [
  "osmosis-inversa",
  "osmosis-domestica",
  "filtro-agua",
  "descalcificador",
  "mantenimiento-osmosis",
  "reparacion-osmosis",
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    const redirects = []
    
    // Redirecciones 301 para URLs antiguas con modificadores
    for (const service of SERVICES) {
      for (const modifier of OLD_MODIFIERS) {
        redirects.push({
          source: `/${service}-${modifier}/:city`,
          destination: `/${service}/:city/`,
          permanent: true, // 301 redirect
        })
        redirects.push({
          source: `/${service}-${modifier}/:city/`,
          destination: `/${service}/:city/`,
          permanent: true,
        })
      }
    }
    
    return redirects
  },
}

export default nextConfig
