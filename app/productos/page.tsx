import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check, Droplets, Shield, Clock, Wrench, ShoppingBag, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Sistema de Osmosis Inversa Premium | OSMOSIS ESP",
  description: "Sistema de osmosis inversa de alta gama con panel LED tactil, filtros de cambio rapido y diseno minimalista. Desde 508€. Garantia 2 anos. Envio gratuito.",
  keywords: "osmosis inversa premium, sistema osmosis, equipo osmosis, comprar osmosis inversa, osmosis inversa precio, osmosis inversa casa",
  openGraph: {
    title: "Sistema de Osmosis Inversa Premium | OSMOSIS ESP",
    description: "Equipo de osmosis inversa de alta gama. Desde 508€. Garantia 2 anos.",
    type: "website",
  },
}

export default function ProductosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Product Images */}
              <div className="order-2 lg:order-1 space-y-4">
                <div className="aspect-square bg-secondary overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/He23d99f93a3040acb8720554edb60e11k.jpg" 
                    alt="Sistema de osmosis inversa completo" 
                    className="w-full h-full object-contain p-8 lg:p-16"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-secondary overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="/H47aa1cc1901e4e8cb35c7a857893eb64H.jpg" 
                      alt="Panel LED tactil" 
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="aspect-square bg-secondary overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="/He931e67f2b5b4d5999ed74d013fdd560w.jpg" 
                      alt="Filtros de cambio rapido" 
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 lg:order-2 lg:sticky lg:top-32">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                  Sistema Premium
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[0.95]">
                  Osmosis Inversa
                  <br />
                  <span className="italic font-light text-muted-foreground">Compacto</span>
                </h1>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-6 max-w-md">
                  Tecnologia de purificacion avanzada en un diseno que se integra perfectamente bajo cualquier fregadero.
                </p>

                {/* Price */}
                <div className="mt-10 pb-8 border-b border-border">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-5xl sm:text-6xl text-foreground">508€</span>
                    <div className="flex flex-col">
                      <span className="text-lg text-muted-foreground/50 line-through font-sans">725€</span>
                      <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">IVA incluido</span>
                    </div>
                  </div>
                </div>

                {/* Options */}
                <div className="py-8 border-b border-border">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans block mb-4">
                    Opciones
                  </span>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-foreground">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-foreground flex items-center justify-center">
                          <div className="w-2 h-2 bg-foreground" />
                        </div>
                        <span className="text-sm font-sans text-foreground">Solo equipo</span>
                      </div>
                      <span className="font-serif text-lg text-foreground">508€</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border hover:border-foreground transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border border-muted-foreground" />
                        <div>
                          <span className="text-sm font-sans text-foreground">Con instalacion profesional</span>
                          <span className="text-[10px] text-muted-foreground block">Tecnico certificado, 2-3h</span>
                        </div>
                      </div>
                      <span className="font-serif text-lg text-foreground">587€</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-8">
                  <Link
                    href="#checkout"
                    className="group w-full inline-flex items-center justify-center gap-3 bg-foreground text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-all duration-300"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Comprar Ahora
                  </Link>
                  <p className="text-[10px] text-muted-foreground font-sans text-center mt-4">
                    Envio gratuito · Garantia 2 anos · 14 dias devolucion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="text-center mb-16 lg:mb-24">
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                Caracteristicas
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
                Tecnologia de ultima generacion
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {[
                { icon: Droplets, title: "5 etapas de filtracion", desc: "Elimina el 99.9% de contaminantes, cal, cloro y metales pesados" },
                { icon: Shield, title: "Garantia 2 anos", desc: "Cobertura completa del equipo y servicio tecnico sin coste adicional" },
                { icon: Clock, title: "Filtros click & twist", desc: "Cambio en segundos sin herramientas ni necesidad de tecnico" },
                { icon: Wrench, title: "Panel LED tactil", desc: "Indica el estado de cada filtro y la calidad del agua en tiempo real" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-background p-8 lg:p-12 text-center">
                  <div className="w-14 h-14 mx-auto border border-border flex items-center justify-center">
                    <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-sans font-medium text-foreground mt-6">{title}</h3>
                  <p className="text-xs text-muted-foreground font-sans mt-3 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                  Incluido
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[0.95]">
                  Todo lo que
                  <br />
                  <span className="italic font-light text-muted-foreground">necesitas</span>
                </h2>
                <ul className="mt-10 space-y-4">
                  {[
                    "Equipo de osmosis inversa 5 etapas con bomba",
                    "Panel LED tactil indicador de filtros",
                    "Grifo de diseno cromado incluido",
                    "3 filtros de repuesto (sedimentos, carbon, post-filtro)",
                    "Kit completo de instalacion",
                    "Manual de uso y mantenimiento",
                    "Garantia de 2 anos",
                    "Soporte tecnico prioritario",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm font-sans text-foreground">
                      <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-square bg-muted overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/He23d99f93a3040acb8720554edb60e11k.jpg" 
                  alt="Contenido del equipo de osmosis" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Plan */}
        <section className="border-t border-border">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="border border-border p-10 lg:p-16">
              <div className="grid sm:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                    Opcional
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
                    Mantenimiento anual
                  </h2>
                  <p className="text-sm text-muted-foreground font-sans mt-4 leading-relaxed">
                    Suscripcion anual que incluye cambio de todos los filtros, revision completa del equipo y visita de tecnico certificado.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {["Cambio de 3 filtros", "Revision completa", "Desinfeccion deposito", "Visita tecnico incluida"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs font-sans text-foreground">
                        <Check className="w-3 h-3 text-foreground" strokeWidth={1.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center sm:text-right">
                  <p className="font-serif text-5xl lg:text-6xl text-foreground">79€</p>
                  <p className="text-sm text-muted-foreground font-sans mt-1">/ano</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground text-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-background leading-[0.95]">
              Agua pura desde
              <br />
              <span className="italic font-light text-background/60">el primer dia</span>
            </h2>
            <p className="text-sm text-background/50 font-sans mt-6 max-w-md mx-auto">
              Mas de 1,200 hogares ya disfrutan de agua cristalina. Unete a ellos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link 
                href="#checkout"
                className="inline-flex items-center justify-center gap-3 bg-background text-foreground px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-background/90 transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Comprar Ahora
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center justify-center gap-3 border border-background/30 text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:border-background transition-all duration-300"
              >
                Volver al inicio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
