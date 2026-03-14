// =============================================================================
// SITEMAP DATA - OSMOSIS ESP
// =============================================================================
// Catalogo de productos de sistemas de osmosis inversa
// =============================================================================

export const PRODUCTS = [
  {
    id: "compacto",
    name: "Sistema Compacto 500GPD",
    slug: "compacto",
    description: "Sistema de osmosis inversa compacto con pantalla LED tactil. Sin tanque, autolimpieza, 3 etapas.",
    priceBase: 508,
    priceInstall: 587,
    category: "hogar",
  },
  {
    id: "5etapas",
    name: "Sistema 5 Etapas Premium",
    slug: "5-etapas",
    description: "Sistema de osmosis inversa de 5 etapas con deposito de 12L. Maxima purificacion.",
    priceBase: 429,
    priceInstall: 508,
    category: "hogar",
  },
  {
    id: "acuarios",
    name: "Sistema Acuarios",
    slug: "acuarios",
    description: "Sistema compacto de 3 etapas especial para acuarios de agua dulce y salada.",
    priceBase: 189,
    priceInstall: 268,
    category: "acuarios",
  },
] as const

export type Product = typeof PRODUCTS[number]

// URLs estaticas del sitemap
export const STATIC_URLS = [
  "/",
  "/productos",
  "/productos/compacto",
  "/productos/5-etapas",
  "/productos/acuarios",
] as const

// Keywords SEO principales
export const SEO_KEYWORDS = [
  "osmosis inversa",
  "purificador agua",
  "filtro agua domestico",
  "sistema osmosis hogar",
  "agua pura sin cal",
  "osmosis acuarios",
] as const
