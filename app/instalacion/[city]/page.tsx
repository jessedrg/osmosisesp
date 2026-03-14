import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CITIES, getInstallationCityMeta, getCityBySlug } from "@/lib/sitemap-data"
import { MapPin, Clock, Shield, ArrowRight, Droplets, Check, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react"
import { InstallationProductCarousel } from "@/components/installation-product-carousel"

type Props = {
  params: Promise<{ city: string }>
}

export const dynamicParams = true
export const revalidate = 86400 // revalidate every 24h

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const meta = getInstallationCityMeta(city)
  
  if (!meta) {
    return { title: "Pagina no encontrada" }
  }
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.join(", "),
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
    },
  }
}

export default async function InstallationCityPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)
  const meta = getInstallationCityMeta(citySlug)
  
  if (!city || !meta) {
    notFound()
  }

  const cityName = city.name

  const benefits = [
    { icon: Clock, title: "Instalacion en 2h", desc: "Nuestros tecnicos completan la instalacion en menos de 2 horas" },
    { icon: Shield, title: "2 Años Garantia", desc: "Garantia completa en equipo e instalacion" },
    { icon: MapPin, title: `Cobertura ${cityName}`, desc: `Servicio en ${cityName} y alrededores` },
  ]

  const steps = [
    { num: "01", title: "Elige tu Equipo", desc: "Selecciona el sistema ideal para tu hogar" },
    { num: "02", title: "Compra Online", desc: "Pago seguro con envio incluido" },
    { num: "03", title: "Coordinamos Cita", desc: "Te contactamos para agendar instalacion" },
    { num: "04", title: "Disfruta", desc: "Agua pura desde el primer momento" },
  ]

  const faqs = [
    {
      q: `Cuanto cuesta la instalacion de osmosis en ${cityName}?`,
      a: `El precio de instalacion profesional en ${cityName} esta incluido en nuestros packs "Con Instalacion". Por ejemplo, el Sistema Compacto con instalacion cuesta 587€ (ahorro de 79€ vs contratar instalacion aparte).`,
    },
    {
      q: "Cuanto tiempo tarda la instalacion?",
      a: "La instalacion completa tarda entre 1.5 y 2 horas. Nuestros tecnicos se encargan de todo: conexion al agua, montaje del grifo y configuracion del equipo.",
    },
    {
      q: `Que zonas cubris cerca de ${cityName}?`,
      a: `Cubrimos ${cityName} y todas las localidades cercanas. Nuestro servicio de instalacion esta disponible en toda la zona metropolitana.`,
    },
    {
      q: "Que incluye el servicio de instalacion?",
      a: "Incluye: instalacion completa del equipo, conexion al suministro de agua, montaje del grifo, pruebas de funcionamiento y explicacion de uso y mantenimiento.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero with Carousel */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-accent font-sans mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Instalacion Profesional en {cityName}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6 text-balance">
              Osmosis Inversa
              <br />
              <span className="italic text-gradient-water">con Instalacion Incluida</span>
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Compra tu sistema de osmosis y nosotros lo instalamos en tu hogar en {cityName}. Tecnicos certificados, garantia de 2 años.
            </p>
          </div>

          {/* Product Carousel */}
          <InstallationProductCarousel cityName={cityName} />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-sans mb-4 block">
              Proceso Simple
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Compra Hoy, Instalamos Pronto
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <span className="font-serif text-5xl text-accent/40 block mb-4">{step.num}</span>
                <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-background/60">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              href="#productos"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-accent/90 transition-all duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Ver Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Products Detail */}
      <section id="productos" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-sans mb-4 block">
              Nuestros Equipos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Elige tu Sistema con Instalacion
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Todos los precios incluyen instalacion profesional en {cityName}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Compacto */}
            <div className="bg-card border border-border group hover:border-accent/50 transition-all duration-300">
              <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden">
                <img 
                  src="/He23d99f93a3040acb8720554edb60e11k.jpg" 
                  alt="Sistema Compacto" 
                  className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8">
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-accent mb-2">Mas Vendido</span>
                <h3 className="font-serif text-2xl mb-2">Sistema Compacto 500GPD</h3>
                <p className="text-sm text-muted-foreground mb-6">Pantalla LED tactil, sin tanque, autolimpieza. Ideal para cocinas modernas.</p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    Instalacion profesional incluida
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    Grifo premium incluido
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    2 años de garantia
                  </li>
                </ul>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif text-3xl text-accent">587€</span>
                  <span className="text-sm text-muted-foreground line-through">665€</span>
                </div>

                <Link 
                  href="/productos/compacto"
                  className="w-full inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-accent/90 transition-all duration-300"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Comprar Ahora
                </Link>
              </div>
            </div>

            {/* 5 Etapas */}
            <div className="bg-card border border-border group hover:border-accent/50 transition-all duration-300">
              <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden">
                <img 
                  src="/osmosis-casa.jpg" 
                  alt="Sistema 5 Etapas" 
                  className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8">
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-accent mb-2">Premium</span>
                <h3 className="font-serif text-2xl mb-2">Sistema 5 Etapas</h3>
                <p className="text-sm text-muted-foreground mb-6">Maxima purificacion con deposito de 12L. Filtracion profesional de 5 etapas.</p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    Instalacion profesional incluida
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    Grifo cromado premium
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    2 años de garantia
                  </li>
                </ul>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif text-3xl text-accent">508€</span>
                  <span className="text-sm text-muted-foreground line-through">586€</span>
                </div>

                <Link 
                  href="/productos/5-etapas"
                  className="w-full inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-accent/90 transition-all duration-300"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Comprar Ahora
                </Link>
              </div>
            </div>

            {/* Acuarios */}
            <div className="bg-card border border-border group hover:border-accent/50 transition-all duration-300">
              <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden">
                <img 
                  src="/osmosis-acuario.jpg" 
                  alt="Sistema Acuarios" 
                  className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8">
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-accent mb-2">Especializado</span>
                <h3 className="font-serif text-2xl mb-2">Sistema para Acuarios</h3>
                <p className="text-sm text-muted-foreground mb-6">Agua perfecta para peces y plantas. Diseñado para acuariofilia.</p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    Instalacion profesional incluida
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    Grifo incluido
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    2 años de garantia
                  </li>
                </ul>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif text-3xl text-accent">268€</span>
                  <span className="text-sm text-muted-foreground line-through">346€</span>
                </div>

                <Link 
                  href="/productos/acuarios"
                  className="w-full inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-accent/90 transition-all duration-300"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Comprar Ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-sans mb-4 block">
              Preguntas Frecuentes
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Sobre la Instalacion en {cityName}
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border p-6">
                <h3 className="font-serif text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Droplets className="w-12 h-12 mx-auto mb-6 text-accent" />
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Agua Pura en {cityName}
          </h2>
          <p className="text-background/60 mb-8 max-w-2xl mx-auto">
            Compra hoy tu sistema de osmosis con instalacion incluida. Tecnicos certificados, garantia de 2 años y atencion personalizada.
          </p>
          <Link
            href="#productos"
            className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-accent/90 transition-all duration-300"
          >
            <ShoppingBag className="w-4 h-4" />
            Ver Productos y Comprar
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
