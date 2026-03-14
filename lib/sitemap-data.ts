// =============================================================================
// SITEMAP DATA - OSMOSIS ESP
// Solo "Instalacion de osmosis en [ciudad]" - sin canibalizacion
// =============================================================================

// Ciudades principales de Espana (80+ ciudades)
export const CITIES = [
  // Andalucia
  { name: "Sevilla", slug: "sevilla", province: "Sevilla" },
  { name: "Malaga", slug: "malaga", province: "Malaga" },
  { name: "Granada", slug: "granada", province: "Granada" },
  { name: "Cordoba", slug: "cordoba", province: "Cordoba" },
  { name: "Cadiz", slug: "cadiz", province: "Cadiz" },
  { name: "Almeria", slug: "almeria", province: "Almeria" },
  { name: "Huelva", slug: "huelva", province: "Huelva" },
  { name: "Jaen", slug: "jaen", province: "Jaen" },
  { name: "Marbella", slug: "marbella", province: "Malaga" },
  { name: "Jerez de la Frontera", slug: "jerez", province: "Cadiz" },
  // Cataluna
  { name: "Barcelona", slug: "barcelona", province: "Barcelona" },
  { name: "Tarragona", slug: "tarragona", province: "Tarragona" },
  { name: "Girona", slug: "girona", province: "Girona" },
  { name: "Lleida", slug: "lleida", province: "Lleida" },
  { name: "Hospitalet de Llobregat", slug: "hospitalet", province: "Barcelona" },
  { name: "Badalona", slug: "badalona", province: "Barcelona" },
  { name: "Terrassa", slug: "terrassa", province: "Barcelona" },
  { name: "Sabadell", slug: "sabadell", province: "Barcelona" },
  // Madrid
  { name: "Madrid", slug: "madrid", province: "Madrid" },
  { name: "Alcala de Henares", slug: "alcala-de-henares", province: "Madrid" },
  { name: "Mostoles", slug: "mostoles", province: "Madrid" },
  { name: "Fuenlabrada", slug: "fuenlabrada", province: "Madrid" },
  { name: "Leganes", slug: "leganes", province: "Madrid" },
  { name: "Getafe", slug: "getafe", province: "Madrid" },
  { name: "Alcorcon", slug: "alcorcon", province: "Madrid" },
  { name: "Torrejon de Ardoz", slug: "torrejon", province: "Madrid" },
  { name: "Parla", slug: "parla", province: "Madrid" },
  { name: "Alcobendas", slug: "alcobendas", province: "Madrid" },
  // Comunidad Valenciana
  { name: "Valencia", slug: "valencia", province: "Valencia" },
  { name: "Alicante", slug: "alicante", province: "Alicante" },
  { name: "Castellon", slug: "castellon", province: "Castellon" },
  { name: "Elche", slug: "elche", province: "Alicante" },
  { name: "Torrevieja", slug: "torrevieja", province: "Alicante" },
  { name: "Benidorm", slug: "benidorm", province: "Alicante" },
  { name: "Gandia", slug: "gandia", province: "Valencia" },
  // Pais Vasco
  { name: "Bilbao", slug: "bilbao", province: "Vizcaya" },
  { name: "San Sebastian", slug: "san-sebastian", province: "Guipuzcoa" },
  { name: "Vitoria", slug: "vitoria", province: "Alava" },
  { name: "Barakaldo", slug: "barakaldo", province: "Vizcaya" },
  // Galicia
  { name: "A Coruna", slug: "a-coruna", province: "A Coruna" },
  { name: "Vigo", slug: "vigo", province: "Pontevedra" },
  { name: "Santiago de Compostela", slug: "santiago", province: "A Coruna" },
  { name: "Ourense", slug: "ourense", province: "Ourense" },
  { name: "Lugo", slug: "lugo", province: "Lugo" },
  { name: "Pontevedra", slug: "pontevedra", province: "Pontevedra" },
  // Castilla y Leon
  { name: "Valladolid", slug: "valladolid", province: "Valladolid" },
  { name: "Burgos", slug: "burgos", province: "Burgos" },
  { name: "Salamanca", slug: "salamanca", province: "Salamanca" },
  { name: "Leon", slug: "leon", province: "Leon" },
  { name: "Palencia", slug: "palencia", province: "Palencia" },
  { name: "Zamora", slug: "zamora", province: "Zamora" },
  { name: "Segovia", slug: "segovia", province: "Segovia" },
  { name: "Avila", slug: "avila", province: "Avila" },
  { name: "Soria", slug: "soria", province: "Soria" },
  // Castilla-La Mancha
  { name: "Toledo", slug: "toledo", province: "Toledo" },
  { name: "Albacete", slug: "albacete", province: "Albacete" },
  { name: "Ciudad Real", slug: "ciudad-real", province: "Ciudad Real" },
  { name: "Guadalajara", slug: "guadalajara", province: "Guadalajara" },
  { name: "Cuenca", slug: "cuenca", province: "Cuenca" },
  { name: "Talavera de la Reina", slug: "talavera", province: "Toledo" },
  // Aragon
  { name: "Zaragoza", slug: "zaragoza", province: "Zaragoza" },
  { name: "Huesca", slug: "huesca", province: "Huesca" },
  { name: "Teruel", slug: "teruel", province: "Teruel" },
  // Region de Murcia
  { name: "Murcia", slug: "murcia", province: "Murcia" },
  { name: "Cartagena", slug: "cartagena", province: "Murcia" },
  { name: "Lorca", slug: "lorca", province: "Murcia" },
  // Islas Baleares
  { name: "Palma de Mallorca", slug: "palma", province: "Baleares" },
  { name: "Ibiza", slug: "ibiza", province: "Baleares" },
  { name: "Manacor", slug: "manacor", province: "Baleares" },
  // Islas Canarias
  { name: "Las Palmas", slug: "las-palmas", province: "Las Palmas" },
  { name: "Santa Cruz de Tenerife", slug: "tenerife", province: "Tenerife" },
  { name: "La Laguna", slug: "la-laguna", province: "Tenerife" },
  // Extremadura
  { name: "Badajoz", slug: "badajoz", province: "Badajoz" },
  { name: "Caceres", slug: "caceres", province: "Caceres" },
  { name: "Merida", slug: "merida", province: "Badajoz" },
  // Navarra
  { name: "Pamplona", slug: "pamplona", province: "Navarra" },
  // La Rioja
  { name: "Logrono", slug: "logrono", province: "La Rioja" },
  // Cantabria
  { name: "Santander", slug: "santander", province: "Cantabria" },
  // Asturias
  { name: "Oviedo", slug: "oviedo", province: "Asturias" },
  { name: "Gijon", slug: "gijon", province: "Asturias" },
] as const

export type City = (typeof CITIES)[number]

// URLs estaticas principales
export const STATIC_URLS = [
  "/",
  "/productos",
  "/productos/compacto",
  "/productos/5-etapas",
  "/productos/acuarios",
] as const

// Generar todas las URLs dinamicas (instalacion + ciudad)
export function generateAllUrls(): string[] {
  const urls: string[] = [...STATIC_URLS]
  
  for (const city of CITIES) {
    urls.push(`/instalacion/${city.slug}`)
  }
  
  return urls
}

// Helper para obtener metadata SEO de una pagina de instalacion
export function getInstallationCityMeta(citySlug: string) {
  const city = CITIES.find(c => c.slug === citySlug)
  
  if (!city) return null
  
  return {
    city,
    title: `Instalacion de Osmosis Inversa en ${city.name} | OSMOSIS ESP`,
    description: `Servicio profesional de instalacion de sistemas de osmosis inversa en ${city.name}, ${city.province}. Instaladores certificados, 2 anos de garantia. Solicita tu cita.`,
    h1: `Instalacion de Osmosis en ${city.name}`,
    keywords: [
      `instalacion osmosis ${city.name}`,
      `osmosis inversa ${city.name}`,
      `purificador agua ${city.name}`,
      `instalador osmosis ${city.province}`,
      `osmosis domestica ${city.name}`,
    ],
  }
}

// Obtener ciudad por slug
export function getCityBySlug(slug: string) {
  return CITIES.find(c => c.slug === slug) || null
}
