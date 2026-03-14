// =============================================================================
// SITEMAP DATA - OSMOSIS ESP
// Productos reales + Ciudades principales de Espana
// =============================================================================

export const PRODUCTS = [
  {
    id: "compacto",
    name: "Sistema Compacto 500GPD",
    slug: "osmosis-compacta",
    description: "Sistema de osmosis inversa compacto con pantalla LED tactil. Sin tanque, autolimpieza, 3 etapas.",
    priceBase: 508,
    priceInstall: 587,
    category: "hogar",
    keywords: ["osmosis compacta", "osmosis sin tanque", "osmosis LED", "osmosis 500GPD"],
  },
  {
    id: "5etapas",
    name: "Sistema 5 Etapas Premium",
    slug: "osmosis-5-etapas",
    description: "Sistema de osmosis inversa de 5 etapas con deposito de 12L. Maxima purificacion.",
    priceBase: 429,
    priceInstall: 508,
    category: "hogar",
    keywords: ["osmosis 5 etapas", "osmosis premium", "osmosis profesional", "osmosis con deposito"],
  },
  {
    id: "acuarios",
    name: "Sistema para Acuarios",
    slug: "osmosis-acuarios",
    description: "Sistema compacto de 3 etapas especial para acuarios de agua dulce y salada.",
    priceBase: 189,
    priceInstall: 268,
    category: "acuarios",
    keywords: ["osmosis acuarios", "osmosis peces", "osmosis acuario marino", "agua destilada acuario"],
  },
] as const

export type Product = (typeof PRODUCTS)[number]

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

// Generar todas las URLs dinamicas (producto + ciudad)
export function generateAllUrls(): string[] {
  const urls: string[] = [...STATIC_URLS]
  
  for (const product of PRODUCTS) {
    for (const city of CITIES) {
      urls.push(`/${product.slug}/${city.slug}`)
    }
  }
  
  return urls
}

// Helper para obtener metadata SEO de una pagina dinamica
export function getProductCityMeta(productSlug: string, citySlug: string) {
  const product = PRODUCTS.find(p => p.slug === productSlug)
  const city = CITIES.find(c => c.slug === citySlug)
  
  if (!product || !city) return null
  
  return {
    product,
    city,
    title: `${product.name} en ${city.name} | Instalacion Profesional | OSMOSIS ESP`,
    description: `Instalacion de ${product.name.toLowerCase()} en ${city.name}, ${city.province}. ${product.description} Envio gratis y 2 anos de garantia.`,
    h1: `${product.name} en ${city.name}`,
    keywords: [
      ...product.keywords,
      `osmosis inversa ${city.name}`,
      `instalacion osmosis ${city.name}`,
      `purificador agua ${city.province}`,
    ],
  }
}

// Obtener producto por slug
export function getProductBySlug(slug: string) {
  return PRODUCTS.find(p => p.slug === slug) || null
}

// Obtener ciudad por slug
export function getCityBySlug(slug: string) {
  return CITIES.find(c => c.slug === slug) || null
}
