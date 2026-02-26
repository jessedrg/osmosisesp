import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceCityContent } from "@/components/service-city-content"
import { VALID_SERVICES, MODIFIERS, CITIES, type Service } from "@/lib/sitemap-data"

export const dynamicParams = true
export const revalidate = 604800

const KNOWN_MODIFIERS = MODIFIERS.filter(m => m !== "").map(m => m.slice(1)) as string[]

const SERVICE_NAMES: Record<Service, { name: string; title: string; singular: string }> = {
  "osmosis-inversa": { name: "Ósmosis Inversa", title: "Ósmosis Inversa", singular: "ósmosis inversa" },
  "osmosis-domestica": { name: "Ósmosis Doméstica", title: "Ósmosis Doméstica", singular: "ósmosis doméstica" },
  "filtro-agua": { name: "Filtro de Agua", title: "Filtros de Agua", singular: "filtro de agua" },
  "descalcificador": { name: "Descalcificador", title: "Descalcificadores", singular: "descalcificador" },
  "mantenimiento-osmosis": { name: "Mantenimiento Ósmosis", title: "Mantenimiento de Ósmosis", singular: "mantenimiento de ósmosis" },
  "reparacion-osmosis": { name: "Reparación Ósmosis", title: "Reparación de Ósmosis", singular: "reparación de ósmosis" },
}

function parseServiceAndModifier(rawService: string): { serviceId: Service | null; modifier?: string } {
  if (VALID_SERVICES.includes(rawService as Service)) return { serviceId: rawService as Service }
  for (const mod of KNOWN_MODIFIERS) {
    const suffix = `-${mod}`
    if (rawService.endsWith(suffix)) {
      const serviceId = rawService.slice(0, -suffix.length)
      if (VALID_SERVICES.includes(serviceId as Service)) return { serviceId: serviceId as Service, modifier: mod }
    }
  }
  return { serviceId: null }
}

function getCityDisplayName(slug: string): string {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

function formatModifier(modifier: string): string {
  const map: Record<string, string> = {
    "precios": "Precios", "barata": "Barato", "economica": "Económico",
    "cuanto-cuesta": "Cuánto Cuesta", "presupuesto": "Presupuesto",
    "presupuesto-online": "Presupuesto Online",
    "urgente": "Urgente", "rapida": "Rápida", "hoy": "Hoy", "24-horas": "24 Horas",
    "mejor": "Mejor", "calidad-precio": "Calidad-Precio", "profesional": "Profesional",
    "de-confianza": "de Confianza", "mejor-valorada": "Mejor Valorado",
    "recomendada": "Recomendado", "instalacion": "Instalación",
    "mantenimiento": "Mantenimiento", "reparacion": "Reparación",
    "cambio-filtros": "Cambio de Filtros", "atl": "ATL", "hidrosalud": "Hidrosalud",
    "culligan": "Culligan", "aquasana": "Aquasana",
    "cerca-de-mi": "Cerca de Mí", "a-domicilio": "a Domicilio",
  }
  return map[modifier] || modifier.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
}

interface PageProps { params: Promise<{ service: string; city: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: rawService, city: citySlug } = await params
  const { serviceId, modifier } = parseServiceAndModifier(rawService)
  if (!serviceId) return { title: "No encontrado" }

  const serviceName = SERVICE_NAMES[serviceId]
  const cityName = getCityDisplayName(citySlug)
  const modifierText = modifier ? ` ${formatModifier(modifier)}` : ""
  const fullTitle = `${serviceName.title}${modifierText} en ${cityName}`

  return {
    title: `${fullTitle} | Instaladores Certificados | osmosis esp`,
    description: `${serviceName.title}${modifierText.toLowerCase()} en ${cityName}. Instaladores certificados. Presupuesto GRATIS. Contacta por WhatsApp.`,
    alternates: { canonical: `https://osmosisespaña.com/${rawService}/${citySlug}/` },
    openGraph: { title: fullTitle, description: `Instalación de ${serviceName.singular} en ${cityName}. Presupuestos gratis.`, type: "website", siteName: "osmosis esp" },
  }
}

export default async function ServiceCityPage({ params }: PageProps) {
  const { service: rawService, city: citySlug } = await params
  const { serviceId, modifier } = parseServiceAndModifier(rawService)
  if (!serviceId) notFound()

  const serviceName = SERVICE_NAMES[serviceId as Service]
  const cityName = getCityDisplayName(citySlug)
  const modifierText = modifier ? formatModifier(modifier) : ""
  const pageTitle = modifier ? `${serviceName.title} ${modifierText} en ${cityName}` : `${serviceName.title} en ${cityName}`

  const cityIndex = CITIES.indexOf(citySlug)
  const nearbyCities = CITIES.slice(Math.max(0, cityIndex - 5), Math.min(CITIES.length, cityIndex + 6)).filter(c => c !== citySlug).slice(0, 5)
  const relatedServices = VALID_SERVICES.filter(s => s !== serviceId).slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <ServiceCityContent
          pageTitle={pageTitle} serviceName={serviceName} cityName={cityName}
          citySlug={citySlug} serviceId={serviceId as Service} modifierText={modifierText}
          nearbyCities={nearbyCities} relatedServices={relatedServices} serviceNames={SERVICE_NAMES}
        />
      </main>
      <Footer />
    </div>
  )
}
