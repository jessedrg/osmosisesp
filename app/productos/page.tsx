import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MessageCircle, CheckCircle, Droplets, Shield, Clock, Wrench } from "lucide-react"

const WA_URL = "https://wa.me/34711267223?text=Hola%2C%20me%20interesa%20instalar%20un%20sistema%20de%20%C3%B3smosis%20inversa."

export const metadata: Metadata = {
  title: "Sistema de Ósmosis Inversa Compacto | 499€ Todo Incluido | osmosis esp",
  description: "Sistema de ósmosis inversa 5 etapas con panel LED, filtros click & twist, grifo incluido. 499€ con instalación profesional. Garantía 2 años. Mantenimiento 79€/año.",
  keywords: "osmosis inversa, sistema osmosis, equipo osmosis, comprar osmosis inversa, osmosis inversa precio, osmosis inversa casa, filtro agua osmosis",
  openGraph: {
    title: "Sistema de Ósmosis Inversa Compacto | 499€",
    description: "Equipo de ósmosis inversa de última generación. 499€ todo incluido. Garantía 2 años.",
    type: "website",
  },
}

export default function ProductosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                {/* Discount badge */}
                <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 text-xs font-sans font-bold mb-6">
                  🔥 OFERTA LIMITADA -30%
                </div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-background/40 mb-4 font-sans">Nuestro equipo</p>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight text-background leading-[0.95]">
                  Sistema de Ósmosis Inversa Compacto
                </h1>
                <p className="text-sm sm:text-base text-background/60 mt-6 max-w-lg font-sans leading-relaxed">
                  Equipo de última generación con panel táctil LED, filtros de cambio rápido y diseño minimalista que cabe bajo cualquier fregadero.
                </p>
                <div className="mt-8 flex items-end gap-4">
                  <span className="font-serif text-5xl sm:text-6xl text-background">508€</span>
                  <span className="text-xl text-background/40 line-through font-sans mb-2">725€</span>
                  <span className="text-sm text-background/50 font-sans mb-2">IVA incl.</span>
                </div>
                <p className="text-xs text-background/40 font-sans mt-2">Instalación 79€ aparte · Garantía 2 años</p>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 text-sm font-sans font-medium hover:opacity-90 transition-opacity">
                  <MessageCircle className="w-4 h-4" /> Pedir presupuesto gratis
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 bg-neutral-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/He23d99f93a3040acb8720554edb60e11k.jpg" 
                    alt="Sistema de ósmosis inversa completo con filtros, grifo y accesorios" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-neutral-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/H47aa1cc1901e4e8cb35c7a857893eb64H.jpg" 
                    alt="Equipo de ósmosis inversa con panel LED táctil" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-neutral-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/He931e67f2b5b4d5999ed74d013fdd560w.jpg" 
                    alt="Interior del equipo con filtros de cambio rápido" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Características</p>
            <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground">
              Tecnología de última generación
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Droplets, title: "5 etapas de filtración", desc: "Elimina el 99% de contaminantes, cal, cloro y metales pesados" },
              { icon: Shield, title: "Garantía 2 años", desc: "Cobertura completa del equipo y la instalación" },
              { icon: Clock, title: "Filtros click & twist", desc: "Cambio en segundos sin herramientas ni técnico" },
              { icon: Wrench, title: "Panel LED inteligente", desc: "Indica el estado de cada filtro en tiempo real" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 mx-auto border border-border flex items-center justify-center">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-sm font-sans font-medium text-foreground mt-4">{title}</h3>
                <p className="text-xs text-muted-foreground font-sans mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's included */}
        <section className="bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Qué incluye</p>
                <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground">
                  Todo lo que incluye el equipo
                </h2>
                <ul className="mt-8 space-y-4">
                  {[
                    "Equipo de ósmosis inversa 5 etapas con bomba",
                    "Panel LED táctil indicador de filtros",
                    "Grifo de diseño cromado incluido",
                    "3 filtros de repuesto (sedimentos, carbón, post-filtro)",
                    "Kit completo de instalación (tubos, conexiones, válvulas)",
                    "Manual de uso y mantenimiento",
                    "Garantía de 2 años",
                    "Soporte técnico por WhatsApp",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm font-sans text-foreground">
                      <CheckCircle className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/Hcf00d47e29d248aea5b93fb38aeef5a4J.jpg" 
                  alt="Interior del equipo mostrando los filtros" 
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Plan */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="border border-border p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Mantenimiento</p>
                <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
                  Plan anual de filtros
                </h2>
                <p className="text-sm text-muted-foreground font-sans mt-4 leading-relaxed">
                  Suscripción anual que incluye cambio de todos los filtros, revisión completa del equipo, 
                  desinfección del depósito y verificación de la membrana. Visita de técnico incluida.
                </p>
                <ul className="mt-6 space-y-2">
                  {["Cambio de 3 filtros", "Revisión completa", "Desinfección depósito", "Visita técnico incluida"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs font-sans text-foreground">
                      <CheckCircle className="w-3 h-3 text-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center sm:text-right">
                <p className="font-serif text-5xl text-foreground">79€</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">/año</p>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-xs font-sans font-medium hover:opacity-90 transition-opacity">
                  Contratar plan
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl tracking-tight text-background">
              Agua pura en tu casa,
              <br />
              <span className="italic font-light">desde hoy.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 text-sm font-sans font-medium hover:opacity-90 transition-opacity">
                <MessageCircle className="w-4 h-4" /> Pedir presupuesto
              </a>
              <Link href="/" className="inline-flex items-center justify-center gap-2 border border-background/20 text-background px-8 py-4 text-sm font-sans hover:border-background/50 transition-colors">
                Ver ciudades
              </Link>
            </div>
          </div>
        </section>

        {/* Schema.org */}
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Product",
          name: "Sistema de Ósmosis Inversa Compacto",
          description: "Sistema de ósmosis inversa 5 etapas con panel LED, filtros click & twist, grifo incluido. Instalación profesional incluida. Garantía 2 años.",
          brand: { "@type": "Brand", name: "osmosis esp" },
          image: ["https://osmosisesp.com/He23d99f93a3040acb8720554edb60e11k.jpg", "https://osmosisesp.com/H47aa1cc1901e4e8cb35c7a857893eb64H.jpg", "https://osmosisesp.com/He931e67f2b5b4d5999ed74d013fdd560w.jpg"],
          offers: { "@type": "Offer", price: "508", priceCurrency: "EUR", availability: "https://schema.org/InStock", priceValidUntil: "2026-12-31", itemCondition: "https://schema.org/NewCondition" },
        })}} />
      </main>
      <Footer />
    </div>
  )
}
