import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceCityContent } from "@/components/service-city-content"
import { VALID_SERVICES, CITIES, type Service } from "@/lib/sitemap-data"

export const dynamicParams = true
export const revalidate = 604800

const SERVICE_NAMES: Record<Service, { name: string; title: string; singular: string }> = {
  "osmosis-inversa": { name: "Ósmosis Inversa", title: "Ósmosis Inversa", singular: "ósmosis inversa" },
  "osmosis-domestica": { name: "Ósmosis Doméstica", title: "Ósmosis Doméstica", singular: "ósmosis doméstica" },
  "filtro-agua": { name: "Filtro de Agua", title: "Filtros de Agua", singular: "filtro de agua" },
  "descalcificador": { name: "Descalcificador", title: "Descalcificadores", singular: "descalcificador" },
  "mantenimiento-osmosis": { name: "Mantenimiento Ósmosis", title: "Mantenimiento de Ósmosis", singular: "mantenimiento de ósmosis" },
  "reparacion-osmosis": { name: "Reparación Ósmosis", title: "Reparación de Ósmosis", singular: "reparación de ósmosis" },
}

function getCityDisplayName(slug: string): string {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

interface PageProps { params: Promise<{ service: string; city: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceId, city: citySlug } = await params
  if (!VALID_SERVICES.includes(serviceId as Service)) return { title: "No encontrado" }

  const serviceName = SERVICE_NAMES[serviceId as Service]
  const cityName = getCityDisplayName(citySlug)
  const cityLower = cityName.toLowerCase()

  // Keywords exhaustivas de alta intención
  const keywords = [
    // Base + ciudad
    `${serviceName.singular} ${cityLower}`,
    `${serviceName.singular} en ${cityLower}`,
    // Precio / Presupuesto
    `${serviceName.singular} precio ${cityLower}`,
    `${serviceName.singular} precios ${cityLower}`,
    `cuanto cuesta ${serviceName.singular} ${cityLower}`,
    `precio instalar ${serviceName.singular} ${cityLower}`,
    `${serviceName.singular} barata ${cityLower}`,
    `${serviceName.singular} economica ${cityLower}`,
    `${serviceName.singular} barato ${cityLower}`,
    `presupuesto ${serviceName.singular} ${cityLower}`,
    `presupuesto gratis ${serviceName.singular} ${cityLower}`,
    // Instalación
    `instalar ${serviceName.singular} ${cityLower}`,
    `instalacion ${serviceName.singular} ${cityLower}`,
    `instaladores ${serviceName.singular} ${cityLower}`,
    `empresa instalacion ${serviceName.singular} ${cityLower}`,
    `poner ${serviceName.singular} ${cityLower}`,
    // Urgencia
    `${serviceName.singular} urgente ${cityLower}`,
    `${serviceName.singular} rapido ${cityLower}`,
    `${serviceName.singular} hoy ${cityLower}`,
    `${serviceName.singular} 24 horas ${cityLower}`,
    // Calidad / Confianza
    `mejor ${serviceName.singular} ${cityLower}`,
    `${serviceName.singular} calidad ${cityLower}`,
    `${serviceName.singular} profesional ${cityLower}`,
    `${serviceName.singular} de confianza ${cityLower}`,
    `${serviceName.singular} recomendado ${cityLower}`,
    `${serviceName.singular} garantia ${cityLower}`,
    // Ubicación
    `${serviceName.singular} cerca de mi`,
    `${serviceName.singular} a domicilio ${cityLower}`,
    // Marcas
    `${serviceName.singular} atl ${cityLower}`,
    `${serviceName.singular} hidrosalud ${cityLower}`,
    `${serviceName.singular} culligan ${cityLower}`,
    // Servicios relacionados
    `mantenimiento ${serviceName.singular} ${cityLower}`,
    `reparacion ${serviceName.singular} ${cityLower}`,
    `cambio filtros ${serviceName.singular} ${cityLower}`,
    // Problemas / Necesidades
    `agua con cal ${cityLower}`,
    `agua dura ${cityLower}`,
    `mejorar agua grifo ${cityLower}`,
    `purificar agua casa ${cityLower}`,
    `filtrar agua ${cityLower}`,
    // Comparativas
    `comparar ${serviceName.singular} ${cityLower}`,
    `opiniones ${serviceName.singular} ${cityLower}`,
  ].join(", ")

  return {
    title: `${serviceName.title} ${cityName} | Desde 499€ Instalado | Presupuesto GRATIS`,
    description: `【${serviceName.title} en ${cityName}】✅ Desde 499€ instalado ✅ Presupuesto GRATIS en 24h ✅ Instalación urgente ✅ Garantía 2 años ✅ Mantenimiento 79€/año ✅ Profesionales certificados. ¡WhatsApp directo!`,
    keywords,
    alternates: { canonical: `https://osmosisesp.com/${serviceId}/${citySlug}/` },
    openGraph: {
      title: `${serviceName.title} ${cityName} | Desde 499€ | Presupuesto GRATIS`,
      description: `Instalación de ${serviceName.singular} en ${cityName}. Desde 499€ instalado. Garantía 2 años. Servicio urgente 24h. Profesionales certificados.`,
      type: "website",
      siteName: "Ósmosis ESP",
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceName.title} ${cityName} | Desde 499€`,
      description: `${serviceName.title} en ${cityName}. Presupuesto GRATIS. Instalación profesional desde 499€. Garantía 2 años.`,
    },
  }
}

export default async function ServiceCityPage({ params }: PageProps) {
  const { service: serviceId, city: citySlug } = await params
  if (!VALID_SERVICES.includes(serviceId as Service)) notFound()

  const serviceName = SERVICE_NAMES[serviceId as Service]
  const cityName = getCityDisplayName(citySlug)
  const pageTitle = `${serviceName.title} en ${cityName}`

  const cityIndex = CITIES.indexOf(citySlug)
  const nearbyCities = CITIES.slice(Math.max(0, cityIndex - 5), Math.min(CITIES.length, cityIndex + 6)).filter(c => c !== citySlug).slice(0, 5)
  const relatedServices = VALID_SERVICES.filter(s => s !== serviceId).slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <ServiceCityContent
          pageTitle={pageTitle} serviceName={serviceName} cityName={cityName}
          citySlug={citySlug} serviceId={serviceId as Service} modifierText=""
          nearbyCities={nearbyCities} relatedServices={relatedServices} serviceNames={SERVICE_NAMES}
        />
      </main>
      <Footer />
    </div>
  )
}
