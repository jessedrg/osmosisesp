import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VALID_SERVICES, CITIES, type Service } from "@/lib/sitemap-data"
import { MessageCircle, ArrowRight, MapPin, Droplets, CheckCircle } from "lucide-react"

export const dynamicParams = true
export const revalidate = 604800

const WA_URL = "https://wa.me/34711267223?text=Hola%2C%20me%20interesa%20instalar%20un%20sistema%20de%20%C3%B3smosis%20inversa."

interface ServiceInfo {
  name: string
  title: string
  singular: string
  description: string
  benefits: string[]
  process: { step: string; desc: string }[]
  tips: string[]
  duration: string
  guarantee: string
}

const SERVICE_INFO: Record<Service, ServiceInfo> = {
  "osmosis-inversa": {
    name: "Ósmosis Inversa", title: "Ósmosis Inversa", singular: "ósmosis inversa",
    description: "La ósmosis inversa es el sistema más avanzado de purificación de agua doméstica. Elimina hasta el 99% de contaminantes: cal, cloro, metales pesados, nitratos, pesticidas y microplásticos. Agua pura directamente del grifo.",
    benefits: ["Elimina el 99% de contaminantes", "Agua sin cal ni cloro", "Mejor sabor que el agua embotellada", "Ahorro vs garrafas: hasta 500€/año", "Instalación rápida sin obras", "Mantenimiento sencillo"],
    process: [
      { step: "Análisis del agua", desc: "Analizamos la dureza y calidad del agua de tu zona para recomendar el sistema ideal." },
      { step: "Presupuesto personalizado", desc: "Te presentamos opciones adaptadas a tu consumo y presupuesto. Sin compromiso." },
      { step: "Instalación profesional", desc: "Instalamos el equipo bajo el fregadero en 2-3 horas. Sin obras ni molestias." },
      { step: "Puesta en marcha", desc: "Configuramos el sistema, verificamos el funcionamiento y te explicamos el uso." },
    ],
    tips: ["Comprueba el espacio bajo tu fregadero (mínimo 40x40cm)", "La ósmosis necesita desagüe cerca", "El mantenimiento es anual: cambio de filtros", "Consume poca electricidad (algunos modelos ninguna)", "El agua sobrante se puede usar para regar"],
    duration: "2-3 horas", guarantee: "2-5 años"
  },
  "osmosis-domestica": {
    name: "Ósmosis Doméstica", title: "Ósmosis Doméstica", singular: "ósmosis doméstica",
    description: "Sistemas de ósmosis compactos diseñados para hogares. Se instalan bajo el fregadero y proporcionan agua purificada a través de un grifo independiente. Ideales para pisos, casas y familias de cualquier tamaño.",
    benefits: ["Diseño compacto bajo fregadero", "Grifo independiente incluido", "Depósito de 8-12 litros", "Silencioso y eficiente", "Fácil cambio de filtros", "Compatible con cualquier cocina"],
    process: [
      { step: "Visita técnica", desc: "Verificamos el espacio disponible y las conexiones necesarias." },
      { step: "Selección del equipo", desc: "Recomendamos el modelo ideal según tu consumo y espacio." },
      { step: "Instalación", desc: "Conectamos el equipo a la toma de agua y desagüe. Instalamos el grifo." },
      { step: "Formación", desc: "Te enseñamos a usar el sistema y cuándo cambiar los filtros." },
    ],
    tips: ["Para una familia de 4 personas, un depósito de 10L es suficiente", "El grifo de ósmosis se instala junto al principal", "Los filtros duran entre 6 y 12 meses", "Algunos modelos tienen indicador de cambio de filtro", "El agua de ósmosis es ideal para cocinar"],
    duration: "2-3 horas", guarantee: "2-3 años"
  },
  "filtro-agua": {
    name: "Filtro de Agua", title: "Filtros de Agua", singular: "filtro de agua",
    description: "Los filtros de agua mejoran el sabor y eliminan impurezas básicas como cloro, sedimentos y olores. Son la opción más económica para mejorar la calidad del agua. Ideales como primer paso o complemento a otros sistemas.",
    benefits: ["Solución económica", "Instalación muy sencilla", "Mejora el sabor del agua", "Elimina cloro y sedimentos", "Bajo mantenimiento", "Compatible con jarras y grifos"],
    process: [
      { step: "Evaluación", desc: "Determinamos qué tipo de filtro necesitas según tu agua y uso." },
      { step: "Instalación", desc: "Colocamos el filtro en línea o en el grifo según el modelo." },
      { step: "Verificación", desc: "Comprobamos el flujo y la calidad del agua filtrada." },
    ],
    tips: ["Los filtros de carbón activo eliminan cloro y mejoran el sabor", "Cambia el filtro según las indicaciones del fabricante", "Un filtro de sedimentos protege los electrodomésticos", "Los filtros no eliminan cal ni minerite", "Combina filtros para mejor resultado"],
    duration: "30-60 minutos", guarantee: "1 año"
  },
  "descalcificador": {
    name: "Descalcificador", title: "Descalcificadores", singular: "descalcificador",
    description: "Los descalcificadores eliminan la cal del agua de toda la casa. Protegen tuberías, electrodomésticos y grifería. El agua descalcificada es más suave para la piel y el cabello, y reduce el consumo de jabón y detergente.",
    benefits: ["Protege tuberías y electrodomésticos", "Alarga la vida de calentadores", "Piel y cabello más suaves", "Menos cal en mamparas y grifos", "Ahorro en jabón y detergente", "Ropa más suave al lavar"],
    process: [
      { step: "Análisis de dureza", desc: "Medimos la dureza del agua para dimensionar el equipo correctamente." },
      { step: "Ubicación", desc: "Determinamos el mejor lugar para instalar el descalcificador." },
      { step: "Instalación", desc: "Conectamos el equipo a la entrada general de agua de la vivienda." },
      { step: "Programación", desc: "Configuramos los ciclos de regeneración según tu consumo." },
    ],
    tips: ["El descalcificador se instala en la entrada de agua", "Necesita desagüe para la regeneración", "Usa sal específica para descalcificadores", "La regeneración es automática, normalmente de noche", "Combínalo con ósmosis para agua perfecta"],
    duration: "3-4 horas", guarantee: "2-5 años"
  },
  "mantenimiento-osmosis": {
    name: "Mantenimiento Ósmosis", title: "Mantenimiento de Ósmosis", singular: "mantenimiento de ósmosis",
    description: "El mantenimiento regular de tu sistema de ósmosis garantiza agua pura y alarga la vida del equipo. Incluye cambio de filtros, limpieza del depósito, verificación de la membrana y comprobación de fugas.",
    benefits: ["Agua siempre pura", "Alarga la vida del equipo", "Previene averías", "Incluye todos los filtros", "Técnico especializado", "Precio cerrado sin sorpresas"],
    process: [
      { step: "Revisión general", desc: "Inspeccionamos el estado del equipo, conexiones y posibles fugas." },
      { step: "Cambio de filtros", desc: "Sustituimos los filtros de sedimentos, carbón y post-filtro." },
      { step: "Limpieza", desc: "Desinfectamos el depósito y limpiamos los componentes." },
      { step: "Verificación", desc: "Comprobamos la calidad del agua y el correcto funcionamiento." },
    ],
    tips: ["El mantenimiento se recomienda cada 12 meses", "La membrana dura 2-4 años si se mantiene bien", "Guarda los filtros originales como referencia", "Si notas mal sabor, adelanta el mantenimiento", "Un buen mantenimiento ahorra reparaciones"],
    duration: "45-60 minutos", guarantee: "6 meses"
  },
  "reparacion-osmosis": {
    name: "Reparación Ósmosis", title: "Reparación de Ósmosis", singular: "reparación de ósmosis",
    description: "Reparamos cualquier avería de tu sistema de ósmosis: fugas, baja presión, ruidos, agua con mal sabor o equipo que no funciona. Diagnóstico rápido y reparación con piezas originales o compatibles de calidad.",
    benefits: ["Diagnóstico rápido", "Piezas originales o compatibles", "Técnicos especializados", "Presupuesto antes de reparar", "Garantía en la reparación", "Servicio urgente disponible"],
    process: [
      { step: "Diagnóstico", desc: "Identificamos la avería y te explicamos el problema." },
      { step: "Presupuesto", desc: "Te damos precio cerrado antes de reparar. Sin sorpresas." },
      { step: "Reparación", desc: "Sustituimos las piezas dañadas y verificamos el funcionamiento." },
      { step: "Pruebas", desc: "Comprobamos que todo funciona correctamente antes de irnos." },
    ],
    tips: ["Si hay fuga, cierra la llave de paso del equipo", "Anota el modelo de tu ósmosis para agilizar", "Las averías más comunes son fugas y baja presión", "A veces solo hace falta cambiar un filtro", "Si el equipo es muy antiguo, valora sustituirlo"],
    duration: "1-2 horas", guarantee: "3-6 meses"
  },
}


const MAIN_CITIES = [
  "barcelona", "terrassa", "sabadell", "badalona", "mataro", "granollers",
  "hospitalet-de-llobregat", "sant-cugat-del-valles", "manresa", "rubi",
  "vilanova-i-la-geltru", "viladecans", "castelldefels", "cornella-de-llobregat",
  "sant-boi-de-llobregat", "cerdanyola-del-valles", "mollet-del-valles", "gava",
  "esplugues-de-llobregat", "sant-feliu-de-llobregat", "vic", "igualada",
  "sitges", "ripollet", "sant-adria-de-besos", "montcada-i-reixac",
  "sant-joan-despi", "berga", "martorell", "calella",
  "premia-de-mar", "sant-pere-de-ribes", "palleja", "molins-de-rei",
  "cardedeu", "sant-celoni", "arenys-de-mar", "pineda-de-mar",
  "sant-andreu-de-la-barca", "barbera-del-valles", "vilafranca-del-penedes", "manlleu",
]

function getCityDisplayName(slug: string): string {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

interface PageProps { params: Promise<{ service: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceId } = await params
  if (!VALID_SERVICES.includes(serviceId as Service)) return { title: "No encontrado" }

  const serviceInfo = SERVICE_INFO[serviceId as Service]
  return {
    title: `${serviceInfo.title} en España | Instaladores Certificados | osmosis esp`,
    description: `${serviceInfo.description} Servicio en toda España. Presupuestos gratis.`,
    alternates: { canonical: `https://osmosisespaña.com/${serviceId}/` },
    openGraph: { title: `${serviceInfo.title} en España`, description: serviceInfo.description, type: "website", siteName: "osmosis esp" },
  }
}

export default async function ServiceHubPage({ params }: PageProps) {
  const { service: serviceId } = await params
  if (!VALID_SERVICES.includes(serviceId as Service)) notFound()

  const serviceInfo = SERVICE_INFO[serviceId as Service]
  const relatedServices = VALID_SERVICES.filter(s => s !== serviceId).slice(0, 5)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero - Clean design without image */}
        <section className="bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
            <nav className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-8 font-sans flex items-center gap-2">
              <Link href="/" className="hover:text-foreground transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-foreground">{serviceInfo.title}</span>
            </nav>
            
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[0.95]">
                  {serviceInfo.title}
                  <br />
                  <span className="italic font-light text-muted-foreground">en España</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mt-8 font-sans leading-relaxed max-w-xl">
                  {serviceInfo.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-10">
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-sans font-medium hover:opacity-90 transition-opacity">
                    <MessageCircle className="w-4 h-4" /> Presupuesto gratis
                  </a>
                  <a href="#ciudades" className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 text-sm font-sans hover:border-foreground/50 hover:bg-background transition-all">
                    Ver ciudades <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              
              <div className="lg:col-span-5">
                <div className="bg-background p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-sans">Servicio profesional</p>
                      <p className="text-sm font-medium text-foreground font-sans">Instaladores certificados</p>
                    </div>
                  </div>
                  <div className="space-y-4 border-t border-border pt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground font-sans">Duración</span>
                      <span className="text-sm font-medium text-foreground font-sans">{serviceInfo.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground font-sans">Garantía</span>
                      <span className="text-sm font-medium text-foreground font-sans">{serviceInfo.guarantee}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground font-sans">Presupuesto</span>
                      <span className="text-sm font-medium text-foreground font-sans">Gratis</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground font-sans">Cobertura</span>
                      <span className="text-sm font-medium text-foreground font-sans">+300 ciudades</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product + Pricing Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 border-b border-border">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Product Images */}
            <div>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/He23d99f93a3040acb8720554edb60e11k.jpg" 
                    alt="Sistema de ósmosis inversa completo con filtros, grifo y accesorios" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/H47aa1cc1901e4e8cb35c7a857893eb64H.jpg" 
                    alt="Equipo de ósmosis inversa con panel LED táctil" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/He931e67f2b5b4d5999ed74d013fdd560w.jpg" 
                    alt="Interior del equipo con filtros de cambio rápido" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Product Info + Price */}
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Nuestro equipo</p>
              <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground leading-[1.1]">
                Sistema de Ósmosis Inversa Compacto
              </h2>
              <p className="text-sm text-muted-foreground mt-4 font-sans leading-relaxed">
                Equipo de última generación con panel táctil LED, filtros de cambio rápido y diseño minimalista. Cabe bajo cualquier fregadero.
              </p>

              {/* Price Card */}
              <div className="mt-8 border-2 border-foreground p-6 sm:p-8">
                <div className="flex items-end gap-3">
                  <span className="font-serif text-4xl sm:text-5xl text-foreground">508€</span>
                  <span className="text-sm text-muted-foreground font-sans mb-1">IVA incluido</span>
                </div>
                <p className="text-xs text-muted-foreground font-sans mt-2">420€ + 21% IVA</p>
                
                <ul className="mt-6 space-y-3">
                  {[
                    "Equipo ósmosis 5 etapas con bomba",
                    "Panel LED indicador de filtros",
                    "Grifo de diseño incluido",
                    "Filtros de cambio rápido click & twist",
                    "Garantía 2 años",
                    "Soporte WhatsApp",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs font-sans text-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-foreground flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 text-sm font-sans font-medium hover:opacity-90 transition-opacity">
                  <MessageCircle className="w-4 h-4" /> Pedir presupuesto gratis
                </a>
              </div>

              {/* Installation */}
              <div className="mt-4 border border-border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-sans font-medium text-foreground">Instalación profesional</p>
                    <p className="text-[10px] text-muted-foreground font-sans mt-1">Técnico certificado · 2-3 horas · Sin obras</p>
                  </div>
                  <p className="font-serif text-2xl text-foreground">79€</p>
                </div>
              </div>

              {/* Maintenance */}
              <div className="mt-4 border border-border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-sans font-medium text-foreground">Mantenimiento anual</p>
                    <p className="text-[10px] text-muted-foreground font-sans mt-1">Cambio de filtros + revisión + visita técnico</p>
                  </div>
                  <p className="font-serif text-2xl text-foreground">79€<span className="text-sm text-muted-foreground">/año</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ventajas */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 border-b border-border">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Ventajas</p>
              <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground leading-[1.05]">
                ¿Por qué elegir {serviceInfo.singular}?
              </h2>
              <p className="text-sm text-muted-foreground mt-4 font-sans leading-relaxed">
                Instaladores certificados con experiencia en sistemas de tratamiento de agua.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="grid sm:grid-cols-2 gap-4">
                {serviceInfo.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-secondary/50">
                    <span className="text-xs text-muted-foreground font-mono mt-0.5">0{i + 1}</span>
                    <span className="text-sm text-foreground font-sans">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 border-b border-border">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">El proceso</p>
              <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground leading-[1.05]">
                Cómo trabajamos
              </h2>
              <p className="text-sm text-muted-foreground mt-4 font-sans leading-relaxed">
                Proceso sencillo y transparente para que disfrutes de agua pura cuanto antes.
              </p>
              <div className="mt-6 p-4 bg-secondary/50">
                <p className="text-xs text-muted-foreground font-sans">Duración estimada</p>
                <p className="text-lg font-serif text-foreground mt-1">{serviceInfo.duration}</p>
                <p className="text-xs text-muted-foreground font-sans mt-3">Garantía</p>
                <p className="text-lg font-serif text-foreground mt-1">{serviceInfo.guarantee}</p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-6">
                {serviceInfo.process.map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-foreground text-background flex items-center justify-center font-serif text-lg">
                      {i + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-base font-sans font-medium text-foreground">{step.step}</h3>
                      <p className="text-sm text-muted-foreground mt-2 font-sans leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Consejos */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 border-b border-border">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Consejos</p>
              <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground leading-[1.05]">
                Lo que debes saber
              </h2>
              <p className="text-sm text-muted-foreground mt-4 font-sans leading-relaxed">
                Información útil antes de instalar tu sistema de tratamiento de agua:
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="space-y-4">
                {serviceInfo.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 border border-border">
                    <svg className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-foreground font-sans">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Ciudades principales */}
        <section id="ciudades" className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-4 mb-16">
            <div className="lg:col-span-5">
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Ciudades</p>
              <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-foreground leading-[1.05]">
                {serviceInfo.title}
                <br />
                <span className="italic font-light">cerca de ti</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Selecciona tu ciudad para ver instaladores en tu zona. Servicio en más de 300 municipios de Cataluña.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {MAIN_CITIES.map(city => (
              <Link
                key={city}
                href={`/${serviceId}/${city}/`}
                className="group flex items-center gap-2 p-4 border border-border hover:border-foreground/30 hover:bg-secondary transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                <span className="text-sm font-sans text-foreground truncate">{getCityDisplayName(city)}</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground font-sans">
              ¿No encuentras tu ciudad? <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:no-underline">Escríbenos por WhatsApp</a> y te conectamos con instaladores de tu zona.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl tracking-tight text-background leading-[1.05]">
              Agua pura en tu hogar
              <br />
              <span className="italic font-light">desde hoy</span>
            </h2>
            <p className="text-sm text-background/50 mt-6 font-sans max-w-md mx-auto">
              Instaladores certificados. Presupuestos gratis. Garantía incluida.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 mt-10 text-sm font-sans font-medium hover:opacity-90 transition-opacity">
              <MessageCircle className="w-4 h-4" /> Contactar ahora
            </a>
          </div>
        </section>

        {/* Otros servicios */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Otros servicios</p>
          <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground mb-12">También te puede interesar</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedServices.map(svc => (
              <Link
                key={svc}
                href={`/${svc}/`}
                className="group p-6 border border-border hover:border-foreground/30 hover:bg-secondary transition-all"
              >
                <h3 className="text-sm font-sans font-medium text-foreground group-hover:underline">{SERVICE_INFO[svc as Service]?.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{SERVICE_INFO[svc as Service]?.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
