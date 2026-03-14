import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ProductSelector from "@/components/product-selector"
import { Check, Droplets, Shield, Wrench, Sparkles, ArrowRight, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Sistema 5 Etapas Premium | OSMOSIS ESP",
  description: "Sistema profesional de osmosis inversa de 5 etapas con grifo premium. Maxima purificacion para hogares exigentes. Desde 429€. Envio gratuito.",
  keywords: "osmosis inversa 5 etapas, sistema osmosis profesional, purificador agua premium, osmosis maxima filtracion, agua ultrapura",
  openGraph: {
    title: "Sistema 5 Etapas Premium | OSMOSIS ESP",
    description: "Sistema profesional de 5 etapas. Desde 429€. Maxima purificacion.",
    type: "website",
  },
}

export default function CincoEtapasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 lg:pt-32">
          <Link 
            href="/productos" 
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Todos los productos
          </Link>
        </div>

        {/* Hero */}
        <section className="relative pt-8 pb-20 lg:pt-12 lg:pb-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Product Images */}
              <div className="order-2 lg:order-1 space-y-4">
                <div className="aspect-square bg-secondary overflow-hidden relative">
                  <span className="absolute top-4 left-4 z-10 text-[10px] tracking-[0.2em] uppercase bg-foreground text-background px-3 py-1.5">
                    Premium
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/osmosis-casa.jpg" 
                    alt="Sistema de osmosis inversa 5 etapas" 
                    className="w-full h-full object-contain p-8 lg:p-12"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 lg:order-2 lg:sticky lg:top-32">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                  Maxima Purificacion
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[0.95]">
                  Sistema
                  <br />
                  <span className="italic font-light text-muted-foreground">5 Etapas</span>
                </h1>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-6 max-w-md">
                  Sistema profesional de 5 etapas de filtracion con grifo premium incluido. La solucion definitiva para hogares que exigen la maxima pureza del agua.
                </p>

                {/* Product Selector with Switch */}
                <div className="mt-10">
                  <ProductSelector
                    soloEquipo={{
                      id: "5etapas-solo",
                      label: "Sistema 5 Etapas - Solo Equipo",
                      price: 429,
                      originalPrice: 599,
                    }}
                    conInstalacion={{
                      id: "5etapas-instalacion",
                      label: "Sistema 5 Etapas - Con Instalacion",
                      price: 508,
                      originalPrice: 699,
                    }}
                    features={[
                      "5 etapas de filtracion profesional",
                      "Grifo premium cromado incluido",
                      "Deposito presurizado de 12L",
                      "Maxima pureza 99.9%",
                      "2 anos de garantia completa",
                    ]}
                    included={[
                      "Sistema completo 5 etapas",
                      "Grifo cromado premium",
                      "Deposito 12 litros",
                      "Kit instalacion completo",
                      "5 filtros de primera carga",
                    ]}
                  />
                  <p className="text-[10px] text-muted-foreground font-sans text-center mt-4">
                    Envio gratuito · Garantia 2 anos · 14 dias devolucion
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 gap-4">
                  {[
                    { icon: Droplets, text: "5 etapas filtracion" },
                    { icon: Shield, text: "2 anos garantia" },
                    { icon: Sparkles, text: "Grifo premium" },
                    { icon: Wrench, text: "Facil instalacion" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Stages Explanation */}
        <section className="border-t border-border bg-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="text-center mb-16 lg:mb-20">
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                Proceso de Filtracion
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
                Las 5 etapas
              </h2>
            </div>
            <div className="grid sm:grid-cols-5 gap-8">
              {[
                { num: "01", title: "Sedimentos", desc: "Elimina particulas, arena, oxido y suciedad hasta 5 micras" },
                { num: "02", title: "Carbon GAC", desc: "Absorbe cloro, quimicos organicos y mejora el sabor" },
                { num: "03", title: "Carbon Block", desc: "Filtracion fina de cloro residual y compuestos volatiles" },
                { num: "04", title: "Membrana RO", desc: "Osmosis inversa que elimina el 99.9% de contaminantes" },
                { num: "05", title: "Post-Carbon", desc: "Pulido final del agua para sabor cristalino perfecto" },
              ].map(({ num, title, desc }) => (
                <div key={num} className="text-center">
                  <span className="font-serif text-4xl lg:text-5xl text-foreground/20">{num}</span>
                  <h3 className="text-sm font-sans font-medium text-foreground mt-4">{title}</h3>
                  <p className="text-xs text-muted-foreground font-sans mt-2 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="text-center mb-16 lg:mb-24">
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                Caracteristicas
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
                Calidad profesional
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {[
                { icon: Droplets, title: "5 etapas completas", desc: "Sistema de filtracion profesional para agua ultrapura" },
                { icon: Sparkles, title: "Grifo premium", desc: "Grifo de diseno cromado de alta calidad incluido" },
                { icon: Shield, title: "Garantia 2 anos", desc: "Cobertura completa y servicio tecnico gratuito" },
                { icon: Wrench, title: "Facil instalacion", desc: "Kit completo con instrucciones paso a paso" },
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
                  El Pack Incluye
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[0.95]">
                  Todo lo que
                  <br />
                  <span className="italic font-light text-muted-foreground">necesitas</span>
                </h2>
                <ul className="mt-10 space-y-4">
                  {[
                    "Sistema de osmosis inversa 5 etapas completo",
                    "Membrana RO de alta capacidad 75 GPD",
                    "Grifo cromado premium de diseno",
                    "Deposito presurizado de 12 litros",
                    "5 filtros iniciales instalados",
                    "Kit completo de instalacion con tubos y conexiones",
                    "Manual de uso y mantenimiento",
                    "Garantia de 2 anos completa",
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
                  src="/osmosis-casa.jpg" 
                  alt="Sistema 5 etapas completo" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance */}
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
                    Suscripcion que incluye cambio de los 5 filtros, revision completa y visita tecnica.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {["Kit de 5 filtros incluido", "Revision completa del sistema", "Comprobacion de presion y caudal", "Visita de tecnico a domicilio"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs font-sans text-foreground">
                        <Check className="w-3 h-3 text-foreground" strokeWidth={1.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center sm:text-right">
                  <p className="font-serif text-5xl lg:text-6xl text-foreground">89€</p>
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
              Maxima pureza
              <br />
              <span className="italic font-light text-background/60">para tu hogar</span>
            </h2>
            <p className="text-sm text-background/50 font-sans mt-6 max-w-md mx-auto">
              El sistema mas completo para hogares que no hacen concesiones en calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a 
                href="https://wa.me/34711267223?text=Hola%2C%20me%20interesa%20el%20Sistema%205%20Etapas%20Premium"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-background text-foreground px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-background/90 transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Comprar Ahora
              </a>
              <Link 
                href="/productos/acuarios"
                className="inline-flex items-center justify-center gap-3 border border-background/30 text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:border-background transition-all duration-300"
              >
                Ver Acuarios
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
