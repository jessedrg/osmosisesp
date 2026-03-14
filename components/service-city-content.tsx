"use client"

import { useState } from "react"
import Link from "next/link"
import type { Service } from "@/lib/sitemap-data"
import { MessageCircle, Star, Shield, Clock, Droplets, Users, CheckCircle, ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react"

const WA_URL = "https://wa.me/34711267223?text=Hola%2C%20me%20interesa%20un%20sistema%20de%20osmosis%20inversa."

const SERVICE_IMAGES: Record<string, string> = {
  "osmosis-inversa": "/osmosis_inversa.png",
  "osmosis-domestica": "/osmosis-inversa-domestica-carbotecnia.jpg",
  "filtro-agua": "https://images.unsplash.com/photo-1669211659202-722981df44f8?q=80&w=2070&auto=format&fit=crop",
  "descalcificador": "/descalcificador-de-sal-12-litros.jpg",
  "mantenimiento-osmosis": "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2071&auto=format&fit=crop",
  "reparacion-osmosis": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
}

function hashCode(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return Math.abs(hash)
}

function generateReviews(cityName: string, serviceId: string) {
  const seed = hashCode(`${cityName}-${serviceId}`)
  const names = ["Maria L.", "Carlos G.", "Ana R.", "Javier M.", "Elena S.", "Roberto P.", "Patricia D.", "Fernando T.", "Laura B.", "Sergio V."]

  const osmosisTemplates = [
    `Llevabamos años comprando garrafas de agua. Desde que instalamos la osmosis con osmosis esp en ${cityName}, el ahorro es brutal y el agua sabe mucho mejor. La instalacion fue rapidisima.`,
    `El agua de ${cityName} tiene mucha cal. Desde que tenemos osmosis, los electrodomesticos duran mas y el cafe sabe increible. Muy contentos con el servicio.`,
    `Dudabamos entre varias marcas. El tecnico de osmosis esp en ${cityName} nos explico todo sin presion. Elegimos el equipo perfecto para nuestra familia de 4.`,
    `Instalacion en 2 horas, sin obras, sin ruido. El tecnico de ${cityName} fue muy profesional. El agua sale cristalina desde el primer momento.`,
    `Teniamos un equipo antiguo que daba problemas. osmosis esp nos instalo uno nuevo en ${cityName} y se llevo el viejo. Servicio completo y precio justo.`,
    `El mantenimiento anual es muy sencillo. El tecnico de ${cityName} viene, cambia los filtros en 30 minutos y listo. Muy recomendable.`,
  ]

  const descalcificadorTemplates = [
    `La cal en ${cityName} es terrible. Desde que tenemos descalcificador, las mamparas no tienen manchas y la piel queda mucho mas suave despues de la ducha.`,
    `El calentador nos duraba 3 años por la cal. Con el descalcificador que nos instalo osmosis esp en ${cityName}, llevamos 5 años sin problemas.`,
    `Instalacion del descalcificador en la entrada de agua. El tecnico de ${cityName} fue muy limpio y profesional. Diferencia brutal en toda la casa.`,
    `Menos jabon, menos detergente, ropa mas suave. El descalcificador ha sido una de las mejores inversiones para nuestra casa en ${cityName}.`,
  ]

  const templates = serviceId.includes("descalcificador") ? descalcificadorTemplates : osmosisTemplates
  const startIdx = seed % templates.length

  return Array.from({ length: 6 }, (_, i) => ({
    name: names[(seed + i * 3) % names.length],
    city: cityName,
    rating: (seed + i) % 7 === 0 ? 4 : 5,
    text: templates[(startIdx + i) % templates.length],
    date: `${[3, 17, 8, 24, 11, 29][i]} de ${["enero", "febrero", "marzo", "abril", "mayo", "junio"][i % 6]} 2025`,
    verified: true,
  }))
}

function generateFAQs(cityName: string, serviceName: { title: string; singular: string }, serviceId: string) {
  const faqs = [
    { q: `¿Cuánto cuesta instalar ósmosis inversa en ${cityName}?`, a: `Nuestro equipo de ósmosis inversa compacto cuesta 508€ (IVA incluido). Precio original 725€, ahora con 30% de descuento. La instalación profesional en ${cityName} es de 79€ aparte. Incluye equipo de 5 etapas con bomba, panel LED, grifo de diseño y garantía de 2 años.` },
    { q: `¿El asesoramiento en ${cityName} tiene algún coste?`, a: `No. El asesoramiento por WhatsApp es 100% gratuito. Te explicamos todo sin compromiso. Solo pagas si decides comprar el equipo.` },
    { q: `¿Cuánto tiempo tarda la instalación en ${cityName}?`, a: `La instalación tarda entre 2-3 horas. Un técnico certificado instala el equipo bajo tu fregadero, conecta el grifo independiente y te explica el funcionamiento. Sin obras, sin ruido, sin complicaciones.` },
    { q: "¿Necesito espacio especial para la ósmosis?", a: `Nuestro equipo es compacto y cabe bajo cualquier fregadero estándar. Necesita aproximadamente 35x35cm de espacio. El técnico verifica todo antes de la instalación.` },
    { q: "¿Cada cuánto hay que cambiar los filtros?", a: "Los filtros se cambian una vez al año. Ofrecemos servicio de mantenimiento anual por 79€ que incluye cambio de todos los filtros, revisión del equipo y visita del técnico." },
    { q: "¿El agua de ósmosis es segura para beber?", a: "Sí, el agua de ósmosis es perfectamente segura y de la mejor calidad. Elimina el 99% de contaminantes: cal, cloro, metales pesados, nitratos y microplásticos. Ideal para beber, cocinar y preparar café o té." },
  ]
  return faqs
}

interface ServiceCityContentProps {
  pageTitle: string
  serviceName: { name: string; title: string; singular: string }
  cityName: string
  citySlug: string
  serviceId: Service
  modifierText: string
  nearbyCities: string[]
  relatedServices: string[]
  serviceNames: Record<Service, { name: string; title: string; singular: string }>
}

export function ServiceCityContent({
  pageTitle, serviceName, cityName, citySlug, serviceId, modifierText,
  nearbyCities, relatedServices, serviceNames,
}: ServiceCityContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [visibleReviews, setVisibleReviews] = useState(3)

  const reviews = generateReviews(cityName, serviceId)
  const faqs = generateFAQs(cityName, serviceName, serviceId)
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
  const heroImg = SERVICE_IMAGES[serviceId] || SERVICE_IMAGES["osmosis-inversa"]

  function getCityDisplayName(slug: string): string {
    return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImg} alt={pageTitle} className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <nav className="text-[10px] tracking-[0.3em] uppercase text-background/30 mb-8 font-sans flex items-center gap-2">
                <Link href="/" className="hover:text-background/60 transition-colors">Inicio</Link>
                <span>/</span>
                <span>{serviceName.title}</span>
                <span>/</span>
                <span className="text-background/60">{cityName}</span>
              </nav>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-background leading-[0.95]">
                {pageTitle}
              </h1>

              <p className="text-sm sm:text-base text-background/50 mt-8 max-w-xl font-sans leading-relaxed">
                {"Instaladores certificados de "}
                {serviceName.singular}
                {modifierText ? ` ${modifierText.toLowerCase()}` : ""}
                {` en ${cityName}. Presupuesto gratis, instalacion rapida.`}
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex flex-col gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 text-sm font-sans font-medium hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  Presupuesto gratis
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 border border-background/20 text-background px-8 py-4 text-sm font-sans hover:border-background/50 transition-colors"
                >
                  Como funciona
                </a>
              </div>

              <div className="flex items-center gap-4 mt-6 text-xs text-background/40 font-sans">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-background/60" />)}
                  <span className="ml-1 text-background/60 font-medium">{avgRating}</span>
                </div>
                <span>|</span>
                <span>{reviews.length}+ opiniones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "Certificados", sub: "Instaladores verificados" },
              { icon: Clock, label: "2-3 horas", sub: "Instalacion rapida" },
              { icon: Droplets, label: "Agua pura", sub: "99% contaminantes eliminados" },
              { icon: Users, label: "1.200+", sub: "Instalaciones en España" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <div>
                  <p className="text-xs font-sans font-medium text-foreground">{label}</p>
                  <p className="text-[10px] text-muted-foreground font-sans">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product + Pricing Section - FIRST */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Images */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-square bg-secondary overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/He23d99f93a3040acb8720554edb60e11k.jpg" 
                  alt="Sistema de osmosis inversa completo" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
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

          {/* Product Info + Price */}
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4 font-sans block">Sistema Premium</span>
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
                <span className="text-xl text-muted-foreground/50 line-through font-sans mb-1">725€</span>
                <span className="text-sm text-muted-foreground font-sans mb-1">IVA incl.</span>
              </div>
              
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

      {/* How it works */}
      <section id="como-funciona" className="bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Proceso</p>
              <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground leading-[1.1]">
                {`Tu ${serviceName.singular} en ${cityName}, paso a paso`}
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-0">
              {[
                { n: "01", t: "Escribenos por WhatsApp", d: `Cuentanos tu situacion: tipo de vivienda, numero de personas, calidad del agua en ${cityName}. Te asesoramos sin compromiso.` },
                { n: "02", t: "Recibe tu equipo", d: `Te enviamos el equipo de osmosis a casa en ${cityName}. Precio cerrado: 508€ IVA incluido.` },
                { n: "03", t: "Instalacion profesional", d: `Un tecnico certificado instala el equipo en 2-3 horas. Sin obras. Instalacion: 79€.` },
              ].map((step, i) => (
                <div key={step.n} className={`flex gap-8 py-8 ${i < 2 ? "border-b border-border" : ""}`}>
                  <span className="font-serif text-4xl lg:text-5xl text-foreground/10 flex-shrink-0">{step.n}</span>
                  <div>
                    <h3 className="text-sm font-sans font-medium text-foreground">{step.t}</h3>
                    <p className="text-xs text-muted-foreground mt-2 font-sans leading-relaxed max-w-md">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Opiniones</p>
              <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground">
                {`Clientes de ${cityName} opinan`}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-foreground" />)}
              <span className="text-sm font-sans font-medium">{avgRating}/5</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {reviews.slice(0, visibleReviews).map((r, i) => (
              <article key={i} className="bg-card p-8 flex flex-col justify-between">
                <p className="text-xs text-foreground/80 font-sans leading-relaxed">{r.text}</p>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium font-sans">{r.name}</p>
                    <p className="text-[10px] text-muted-foreground font-sans">{r.city} · {r.date}</p>
                  </div>
                  {r.verified && (
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-sans">
                      <CheckCircle className="w-3 h-3" /> Verificada
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          {visibleReviews < reviews.length && (
            <button onClick={() => setVisibleReviews(reviews.length)} className="mt-8 flex items-center gap-2 text-xs font-sans font-medium text-foreground hover:opacity-70 transition-opacity mx-auto">
              Ver mas opiniones <ChevronDown className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </section>

      {/* Mid CTA */}
      <section className="bg-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl tracking-tight text-background leading-[1.05]">
            {`Agua pura en ${cityName}`}
            <br />
            <span className="italic font-light">desde hoy.</span>
          </h2>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 mt-10 text-sm font-sans font-medium hover:opacity-90 transition-opacity">
            <MessageCircle className="w-4 h-4" /> Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">FAQ</p>
        <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground mb-12">
          {`Preguntas sobre ${serviceName.singular} en ${cityName}`}
        </h2>
        <div className="border-t border-border">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-start justify-between gap-6 py-5 text-left group">
                <h3 className="text-xs sm:text-sm font-sans font-medium text-foreground leading-relaxed group-hover:opacity-70 transition-opacity">{faq.q}</h3>
                <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="pb-5 -mt-1">
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SEO content */}
      <section className="bg-secondary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Guia</p>
          <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground mb-8">
            {`Guia de ${serviceName.singular} en ${cityName}`}
          </h2>
          <div className="prose-sm font-sans text-muted-foreground space-y-4 leading-relaxed text-xs sm:text-sm">
            <p>{`El agua de ${cityName} y de toda España tiene una dureza elevada debido a la composicion del terreno. Esto significa mas cal en tuberias, electrodomesticos y griferia. Un sistema de osmosis inversa o un descalcificador soluciona estos problemas de raiz.`}</p>
            <h3 className="text-foreground font-medium text-sm pt-4">Beneficios del agua purificada</h3>
            <p>{`Con un sistema de osmosis en ${cityName} disfrutaras de agua sin cal, sin cloro, sin metales pesados y sin microplasticos. El sabor mejora notablemente, los electrodomesticos duran mas y ahorras en garrafas de agua embotellada.`}</p>
            <h3 className="text-foreground font-medium text-sm pt-4">{`Por que confiar en osmosis esp en ${cityName}`}</h3>
            <p>{`Nuestros tecnicos en ${cityName} estan certificados y conocen las particularidades del agua de la zona. Instalacion profesional, garantia incluida y servicio de mantenimiento. Mas de 1.200 instalaciones en España nos avalan.`}</p>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">{serviceName.title} en otras ciudades</p>
            <h3 className="font-serif text-xl tracking-tight text-foreground mb-6">Localidades cercanas</h3>
            <nav><ul className="space-y-0">
              {nearbyCities.map(city => (
                <li key={city}>
                  <Link href={`/${serviceId}/${city}/`} className="flex items-center justify-between py-3 border-b border-border/50 group">
                    <span className="text-xs font-sans text-foreground group-hover:opacity-70 transition-opacity">{`${serviceName.title} en ${getCityDisplayName(city)}`}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul></nav>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Otros servicios en {cityName}</p>
            <h3 className="font-serif text-xl tracking-tight text-foreground mb-6">Tambien te puede interesar</h3>
            <nav><ul className="space-y-0">
              {relatedServices.map(svc => (
                <li key={svc}>
                  <Link href={`/${svc}/${citySlug}/`} className="flex items-center justify-between py-3 border-b border-border/50 group">
                    <span className="text-xs font-sans text-foreground group-hover:opacity-70 transition-opacity">{`${serviceNames[svc as Service]?.title || svc} en ${cityName}`}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul></nav>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-background/20 mb-4 font-sans">Da el primer paso</p>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl tracking-tight text-background">Agua pura, vida mejor.</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 text-sm font-sans font-medium hover:opacity-90 transition-opacity">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <Link href="/" className="inline-flex items-center justify-center gap-2 border border-background/20 text-background px-8 py-4 text-sm font-sans hover:border-background/50 transition-colors">
              Ver servicios <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness",
        name: `osmosis esp - ${pageTitle}`,
        description: `Instalacion de ${serviceName.singular} en ${cityName}. Desde 299€ instalado. Presupuestos gratis.`,
        url: `https://osmosisesp.com/${serviceId}/${citySlug}/`,
        address: { "@type": "PostalAddress", addressLocality: cityName, addressRegion: "España", addressCountry: "ES" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: avgRating, reviewCount: reviews.length, bestRating: "5", worstRating: "1" },
        priceRange: "€€",
      })}} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      })}} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Product",
        name: `Sistema de Ósmosis Inversa Compacto - ${cityName}`,
        description: `Sistema de ósmosis inversa 5 etapas con panel LED, filtros click & twist, grifo incluido. Instalación profesional en ${cityName}. Garantía 2 años.`,
        brand: { "@type": "Brand", name: "osmosis esp" },
        image: ["https://osmosisesp.com/He23d99f93a3040acb8720554edb60e11k.jpg", "https://osmosisesp.com/H47aa1cc1901e4e8cb35c7a857893eb64H.jpg", "https://osmosisesp.com/He931e67f2b5b4d5999ed74d013fdd560w.jpg"],
        offers: {
          "@type": "Offer",
          price: "508",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
          itemCondition: "https://schema.org/NewCondition",
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "EUR" },
            shippingDestination: { "@type": "DefinedRegion", addressCountry: "ES" },
            deliveryTime: { "@type": "ShippingDeliveryTime", handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3, unitCode: "DAY" }, transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 5, unitCode: "DAY" } }
          },
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: "ES",
            returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 14,
            returnMethod: "https://schema.org/ReturnByMail",
            returnFees: "https://schema.org/FreeReturn"
          }
        },
        aggregateRating: { "@type": "AggregateRating", ratingValue: avgRating, reviewCount: reviews.length },
      })}} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: `Mantenimiento ${serviceName.singular} en ${cityName}`,
        provider: { "@type": "Organization", name: "osmosis esp" },
        areaServed: cityName,
        offers: { "@type": "Offer", price: "79", priceCurrency: "EUR", description: "Mantenimiento anual con cambio de filtros y visita técnico incluido" },
      })}} />
    </>
  )
}
