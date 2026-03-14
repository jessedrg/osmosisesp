import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CITIES, getInstallationCityMeta, getCityBySlug } from "@/lib/sitemap-data"
import { Check, MapPin, Clock, Shield, Phone, ArrowRight, Droplets, Star } from "lucide-react"

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({
    city: city.slug,
  }))
}

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

  const benefits = [
    { icon: Clock, title: "Instalacion en 2h", desc: "Nuestros tecnicos completan la instalacion en menos de 2 horas" },
    { icon: Shield, title: "2 Anos Garantia", desc: "Garantia completa en equipo e instalacion" },
    { icon: MapPin, title: `Servicio en ${city.name}`, desc: `Cobertura total en ${city.name} y alrededores` },
  ]

  const steps = [
    { num: "01", title: "Contacto", desc: "Nos contactas por WhatsApp o telefono" },
    { num: "02", title: "Cita", desc: "Acordamos fecha y hora para la instalacion" },
    { num: "03", title: "Instalacion", desc: "Nuestro tecnico instala el equipo en tu hogar" },
    { num: "04", title: "Disfruta", desc: "Agua pura desde el primer momento" },
  ]

  const faqs = [
    {
      q: `Cuanto cuesta la instalacion de osmosis en ${city.name}?`,
      a: `El precio de instalacion profesional en ${city.name} es de 79€, incluido en nuestros packs con instalacion. Si compras solo el equipo, puedes anadir la instalacion posteriormente.`,
    },
    {
      q: "Cuanto tiempo tarda la instalacion?",
      a: "La instalacion completa tarda entre 1.5 y 2 horas. Nuestros tecnicos se encargan de todo: conexion al agua, montaje del grifo y configuracion del equipo.",
    },
    {
      q: `Que zonas cubris en ${city.province}?`,
      a: `Cubrimos toda la provincia de ${city.province}, incluyendo ${city.name} y localidades cercanas. Contactanos para confirmar disponibilidad en tu zona.`,
    },
    {
      q: "Que incluye el servicio de instalacion?",
      a: "Incluye: instalacion completa del equipo, conexion al suministro de agua, montaje del grifo, pruebas de funcionamiento y explicacion de uso y mantenimiento.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mb-6 block">
                Servicio Profesional
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6 text-balance">
                {meta.h1}
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-lg">
                Instaladores certificados en {city.name}, {city.province}. Servicio rapido, limpio y con garantia de 2 anos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/34711267223?text=Hola%2C%20me%20interesa%20la%20instalacion%20de%20osmosis%20en%20${encodeURIComponent(city.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Solicitar Cita
                </a>
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans hover:border-foreground transition-all duration-300"
                >
                  Ver Equipos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <Droplets className="w-16 h-16 mx-auto mb-6 text-foreground/20" />
                  <p className="font-serif text-2xl mb-2">Instalacion Profesional</p>
                  <p className="text-muted-foreground text-sm">{city.name}, {city.province}</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-foreground text-background p-6">
                <p className="text-3xl font-serif">79€</p>
                <p className="text-[10px] tracking-wider uppercase">Instalacion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center p-8">
                <benefit.icon className="w-8 h-8 mx-auto mb-4 text-foreground" />
                <h3 className="font-serif text-xl mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mb-4 block">
              Nuestros Equipos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Elige tu Sistema de Osmosis
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Compacto */}
            <Link href="/productos/compacto" className="group block bg-card border border-border p-8 hover:border-foreground transition-all duration-300">
              <div className="aspect-square bg-secondary mb-6 flex items-center justify-center">
                <img src="/He23d99f93a3040acb8720554edb60e11k.jpg" alt="Sistema Compacto" className="w-3/4 h-3/4 object-contain" />
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Mas Vendido</span>
              <h3 className="font-serif text-xl mt-2 mb-2">Sistema Compacto 500GPD</h3>
              <p className="text-sm text-muted-foreground mb-4">Pantalla LED, sin tanque, autolimpieza</p>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl">587€</span>
                <span className="text-sm text-muted-foreground">con instalacion</span>
              </div>
            </Link>

            {/* 5 Etapas */}
            <Link href="/productos/5-etapas" className="group block bg-card border border-border p-8 hover:border-foreground transition-all duration-300">
              <div className="aspect-square bg-secondary mb-6 flex items-center justify-center">
                <img src="/osmosis-casa.jpg" alt="Sistema 5 Etapas" className="w-3/4 h-3/4 object-contain" />
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Premium</span>
              <h3 className="font-serif text-xl mt-2 mb-2">Sistema 5 Etapas</h3>
              <p className="text-sm text-muted-foreground mb-4">Maxima purificacion, deposito 12L</p>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl">508€</span>
                <span className="text-sm text-muted-foreground">con instalacion</span>
              </div>
            </Link>

            {/* Acuarios */}
            <Link href="/productos/acuarios" className="group block bg-card border border-border p-8 hover:border-foreground transition-all duration-300">
              <div className="aspect-square bg-secondary mb-6 flex items-center justify-center">
                <img src="/osmosis-acuario.jpg" alt="Sistema Acuarios" className="w-3/4 h-3/4 object-contain" />
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Especializado</span>
              <h3 className="font-serif text-xl mt-2 mb-2">Sistema para Acuarios</h3>
              <p className="text-sm text-muted-foreground mb-4">Agua perfecta para peces y plantas</p>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl">268€</span>
                <span className="text-sm text-muted-foreground">con instalacion</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-background/60 font-sans mb-4 block">
              Proceso
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Como Funciona
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <span className="font-serif text-5xl text-background/20 block mb-4">{step.num}</span>
                <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-background/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans mb-4 block">
              FAQ
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Preguntas Frecuentes
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border pb-6">
                <h3 className="font-serif text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Instalacion de Osmosis en {city.name}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactanos hoy y disfruta de agua pura en tu hogar. Servicio profesional con garantia de 2 anos.
          </p>
          <a
            href={`https://wa.me/34711267223?text=Hola%2C%20quiero%20instalar%20un%20sistema%20de%20osmosis%20en%20${encodeURIComponent(city.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Contactar Ahora
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
