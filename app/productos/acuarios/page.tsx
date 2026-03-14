import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ProductPurchaseCard from "@/components/product-purchase-card"
import { Check, Droplets, Shield, Fish, Leaf, ArrowRight, ArrowLeft, ShoppingBag } from "lucide-react"

export const metadata: Metadata = {
  title: "Osmosis Inversa para Acuarios | OSMOSIS ESP",
  description: "Sistema de osmosis inversa compacto de 3 etapas para acuarios. Agua sin cloro ni metales para peces y plantas. Desde 189€. Envio gratuito.",
  keywords: "osmosis acuarios, filtro agua acuario, osmosis inversa peces, agua pura acuario, osmosis acuariofilia",
  openGraph: {
    title: "Osmosis Inversa para Acuarios | OSMOSIS ESP",
    description: "Sistema compacto de 3 etapas para acuarios. Desde 189€. Envio gratuito.",
    type: "website",
  },
}

export default function AcuariosPage() {
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
              <div className="order-1 lg:order-1 space-y-4">
                <div className="aspect-square bg-secondary overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/osmosis-acuario.jpg" 
                    alt="Sistema de osmosis inversa para acuarios" 
                    className="w-full h-full object-contain p-8 lg:p-16"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-secondary overflow-hidden flex items-center justify-center">
                    <div className="text-center p-4">
                      <Fish className="w-8 h-8 text-foreground mx-auto mb-2" strokeWidth={1} />
                      <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Ideal para peces</span>
                    </div>
                  </div>
                  <div className="aspect-video bg-secondary overflow-hidden flex items-center justify-center">
                    <div className="text-center p-4">
                      <Leaf className="w-8 h-8 text-foreground mx-auto mb-2" strokeWidth={1} />
                      <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Plantas sanas</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="order-2 lg:order-2 lg:sticky lg:top-32">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                  Sistema Compacto
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[0.95]">
                  Osmosis Inversa
                  <br />
                  <span className="italic font-light text-muted-foreground">Acuarios</span>
                </h1>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-6 max-w-md">
                  Sistema de 3 etapas diseñado especificamente para acuariofilia. Elimina cloro, cloraminas, metales pesados y contaminantes que afectan la salud de tus peces y plantas.
                </p>

                {/* Product Selector with Switch */}
                <div className="mt-10">
                  <ProductPurchaseCard
                    category="acuarios"
                    soloPrice={189}
                    instalacionPrice={268}
                    originalPrice={269}
                    features={[
                      "3 etapas de filtracion",
                      "Elimina cloro y cloraminas al 100%",
                      "TDS resultante 0-10 ppm",
                      "Para agua dulce y salada",
                      "2 años de garantia completa",
                    ]}
                  />
                </div>

                {/* Key Benefits */}
                <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 gap-4">
                  {[
                    { icon: Droplets, text: "3 etapas filtracion" },
                    { icon: Shield, text: "2 años garantia" },
                    { icon: Fish, text: "Para agua dulce y salada" },
                    { icon: Leaf, text: "Plantas mas sanas" },
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

        {/* Why for aquariums */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                  Por que osmosis
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[0.95]">
                  Agua perfecta para
                  <br />
                  <span className="italic font-light text-muted-foreground">la vida acuatica</span>
                </h2>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-6 max-w-md">
                  El agua del grifo contiene cloro, cloraminas, metales pesados y minerales que pueden ser dañinos para peces y plantas. La osmosis inversa elimina hasta el 99% de estos contaminantes.
                </p>
              </div>
              <div className="grid gap-6">
                {[
                  {
                    title: "Elimina cloro y cloraminas",
                    desc: "El cloro es toxico para los peces incluso en pequeñas cantidades. Nuestro sistema lo elimina completamente.",
                  },
                  {
                    title: "Sin metales pesados",
                    desc: "Cobre, plomo y zinc pueden acumularse en tus peces. El agua RO los elimina por completo.",
                  },
                  {
                    title: "Control total del GH/KH",
                    desc: "Parte de agua pura para remineralizar segun las necesidades de tus especies.",
                  },
                  {
                    title: "Plantas mas saludables",
                    desc: "Sin contaminantes, tus plantas absorben mejor los nutrientes y crecen mas fuertes.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="border-l-2 border-foreground pl-6">
                    <h3 className="text-sm font-sans font-medium text-foreground">{title}</h3>
                    <p className="text-xs text-muted-foreground font-sans mt-2 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-t border-border bg-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="text-center mb-16 lg:mb-24">
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                Especificaciones
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
                Caracteristicas tecnicas
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {[
                { title: "Capacidad", value: "75-100 GPD", desc: "Litros por dia suficientes para cualquier acuario" },
                { title: "Etapas", value: "3", desc: "Sedimentos, carbon activo, membrana RO" },
                { title: "Eliminacion", value: "99%", desc: "Cloro, cloraminas, metales, nitratos" },
                { title: "TDS resultante", value: "0-10 ppm", desc: "Agua practicamente pura para remineralizar" },
                { title: "Conexion", value: "Universal", desc: "Compatible con cualquier grifo estandar" },
                { title: "Tamaño", value: "Compacto", desc: "Ideal para espacios reducidos" },
              ].map(({ title, value, desc }) => (
                <div key={title} className="bg-background p-8 lg:p-10">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans">{title}</span>
                  <p className="font-serif text-3xl text-foreground mt-2">{value}</p>
                  <p className="text-xs text-muted-foreground font-sans mt-2">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="aspect-square bg-secondary overflow-hidden order-2 lg:order-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/osmosis-acuario.jpg" 
                  alt="Contenido del pack de osmosis para acuarios" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                  El Pack Incluye
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[0.95]">
                  Listo para
                  <br />
                  <span className="italic font-light text-muted-foreground">usar</span>
                </h2>
                <ul className="mt-10 space-y-4">
                  {[
                    "Equipo de osmosis inversa 3 etapas compacto",
                    "Filtro de sedimentos (PP 5 micras)",
                    "Filtro de carbon activo (CTO)",
                    "Membrana de osmosis inversa 75 GPD",
                    "Llave de paso y conexiones universales",
                    "Tubos de silicona de grado alimentario",
                    "Herramienta para cambio de filtros",
                    "Manual de instalacion ilustrado",
                    "Garantia de 2 años",
                    "Soporte tecnico por WhatsApp",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm font-sans text-foreground">
                      <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance */}
        <section className="border-t border-border bg-secondary">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="border border-border bg-background p-10 lg:p-16">
              <div className="grid sm:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                    Opcional
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
                    Kit de filtros anuales
                  </h2>
                  <p className="text-sm text-muted-foreground font-sans mt-4 leading-relaxed">
                    Pack con todos los filtros de repuesto para un año completo de uso. Incluye instrucciones de cambio.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {["2 filtros de sedimentos PP", "2 filtros carbon CTO", "1 membrana RO 75GPD"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs font-sans text-foreground">
                        <Check className="w-3 h-3 text-foreground" strokeWidth={1.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center sm:text-right">
                  <p className="font-serif text-5xl lg:text-6xl text-foreground">49€</p>
                  <p className="text-sm text-muted-foreground font-sans mt-1">/año</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground text-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-background leading-[0.95]">
              Agua pura para
              <br />
              <span className="italic font-light text-background/60">tus peces y plantas</span>
            </h2>
            <p className="text-sm text-background/50 font-sans mt-6 max-w-md mx-auto">
              Cientos de acuaristas ya confian en nosotros para mantener sus acuarios saludables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a 
                href="https://wa.me/34711267223?text=Hola%2C%20me%20interesa%20el%20Sistema%20de%20Osmosis%20para%20Acuarios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-background text-foreground px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-background/90 transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Comprar Ahora
              </a>
              <Link 
                href="/productos/compacto"
                className="inline-flex items-center justify-center gap-3 border border-background/30 text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:border-background transition-all duration-300"
              >
                Ver Compacto
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
