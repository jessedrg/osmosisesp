export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  images?: string[]
}

// Catálogo de productos OSMOSIS ESP
// Precios en céntimos de euro
export const PRODUCTS: Product[] = [
  // Sistema Compacto
  {
    id: 'compacto-solo',
    name: 'Sistema Compacto 500GPD - Solo Equipo',
    description: 'Sistema de ósmosis inversa compacto con pantalla LED táctil, 3 etapas de filtración y tecnología sin tanque.',
    priceInCents: 50800, // 508€
  },
  {
    id: 'compacto-instalacion',
    name: 'Sistema Compacto 500GPD - Con Instalación',
    description: 'Sistema de ósmosis inversa compacto con pantalla LED táctil, 3 etapas de filtración, tecnología sin tanque e instalación profesional incluida.',
    priceInCents: 58700, // 587€
  },
  // Sistema 5 Etapas
  {
    id: '5etapas-solo',
    name: 'Sistema 5 Etapas Premium - Solo Equipo',
    description: 'Sistema de ósmosis inversa de 5 etapas con grifo cromado premium incluido. Máxima purificación. Envio gratis.',
    priceInCents: 27000, // 270€
  },
  {
    id: '5etapas-instalacion',
    name: 'Sistema 5 Etapas Premium - Con Instalación',
    description: 'Sistema de ósmosis inversa de 5 etapas con grifo cromado premium e instalación profesional incluida.',
    priceInCents: 34900, // 349€
  },
  // Sistema Acuarios
  {
    id: 'acuarios-solo',
    name: 'Sistema Acuarios 3 Etapas - Solo Equipo',
    description: 'Sistema de ósmosis inversa compacto de 3 etapas diseñado especialmente para acuarios y acuariofilia.',
    priceInCents: 18900, // 189€
  },
  {
    id: 'acuarios-instalacion',
    name: 'Sistema Acuarios 3 Etapas - Con Instalación',
    description: 'Sistema de ósmosis inversa compacto de 3 etapas para acuarios con instalación profesional incluida.',
    priceInCents: 26800, // 268€
  },
]

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id)
}

export function getProductsByCategory(category: 'compacto' | '5etapas' | 'acuarios'): { solo: Product; instalacion: Product } {
  const solo = PRODUCTS.find(p => p.id === `${category}-solo`)!
  const instalacion = PRODUCTS.find(p => p.id === `${category}-instalacion`)!
  return { solo, instalacion }
}
