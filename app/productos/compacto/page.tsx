import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ProductSelector from "@/components/product-selector"
import { Droplets, Shield, Clock, Zap, ArrowLeft, Gauge, Ruler, Weight, Timer, Leaf, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Sistema Compacto 500GPD con Pantalla LED | OSMOSIS ESP",
  description: "Sistema de osmosis inversa compacto de 500GPD con pantalla LED tactil. Sin tanque, autolimpieza, 3 etapas de filtracion. El mas vendido. Desde 508€.",
  keywords: "osmosis inversa compacta, sistema osmosis LED, filtro agua 500GPD, purificador agua sin tanque, osmosis autolimpieza",
  openGraph: {
    title: "Sistema Compacto 500GPD | OSMOSIS ESP",
    description: "Sistema compacto con pantalla LED y autolimpieza. Desde 508€.",
    type: "website",
  },
}

const specs = [
  { label: "Tasa de flujo", value: "500 GPD", sublabel: "2L/min de agua pura" },
  { label: "Etapas de filtracion", value: "3", sublabel: "Prefiltro + RO + Postfiltro" },
  { label: "Vida membrana RO", value: "24 meses", sublabel: "Dependiendo del uso" },
  { label: "Finura de filtrado", value: "0.0001 micras", sublabel: "99.9% de pureza" },
  { label: "Presion de entrada", value: "0.1-0.4 MPa", sublabel: "Funciona sin bomba" },
  { label: "Tipo de instalacion", value: "Bajo fregadero", sublabel: "Oculto y discreto" },
  { label: "Dimensiones", value: "449x152x350mm", sublabel: "Ultra compacto" },
  { label: "Garantia", value: "2 anos", sublabel: "Cobertura total" },
]

const howItWorks = [
  {
    step: "01",
    title: "Prefiltro de Sedimentos",
    description: "El agua entra al sistema y pasa por el primer filtro que elimina particulas solidas como arena, oxido y sedimentos mayores a 5 micras. Protege la membrana RO."
  },
  {
    step: "02", 
    title: "Membrana de Osmosis Inversa",
    description: "El corazon del sistema. Una membrana semipermeable de 0.0001 micras filtra el 99.9% de contaminantes: cloro, metales pesados, nitratos, bacterias y microplasticos."
  },
  {
    step: "03",
    title: "Postfiltro de Carbon Activo",
    description: "El agua purificada pasa por un filtro de carbon que elimina cualquier sabor u olor residual, dejando el agua con un sabor fresco y natural."
  },
]

export default function CompactoPage() {
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
                    Popular
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/He23d99f93a3040acb8720554edb60e11k.jpg" 
                    alt="Sistema compacto de osmosis inversa 500GPD" 
                    className="w-full h-full object-contain p-8 lg:p-16"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-secondary overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="/H47aa1cc1901e4e8cb35c7a857893eb64H.jpg" 
                      alt="Panel LED tactil con indicadores" 
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="aspect-square bg-secondary overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="/He931e67f2b5b4d5999ed74d013fdd560w.jpg" 
                      alt="Filtros de cambio rapido click and twist" 
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 lg:order-2 lg:sticky lg:top-32">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                  El Mas Vendido · 500GPD
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[0.95]">
                  Sistema
                  <br />
                  <span className="italic font-light text-muted-foreground">Compacto</span>
                </h1>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-6 max-w-md">
                  Sistema de osmosis inversa de alto flujo sin tanque. Pantalla LED tactil que muestra el estado de cada filtro en tiempo real. Funcion de autolimpieza automatica para maxima durabilidad.
                </p>

                {/* Key Highlights */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Sin tanque", "500GPD", "Autolimpieza", "3 etapas"].map(tag => (
                    <span key={tag} className="text-[9px] tracking-[0.15em] uppercase bg-secondary text-foreground px-3 py-1.5 font-sans">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Product Selector with Switch */}
                <div className="mt-10">
                  <ProductSelector
                    soloEquipo={{
                      id: "compacto-solo",
                      label: "Sistema Compacto - Solo Equipo",
                      price: 508,
                      originalPrice: 725,
                    }}
                    conInstalacion={{
                      id: "compacto-instalacion",
                      label: "Sistema Compacto - Con Instalacion",
                      price: 587,
                      originalPrice: 804,
                    }}
                    features={[
                      "Pantalla LED tactil con control inteligente",
                      "Autolimpieza automatica programable",
                      "Sin tanque - produccion directa 500GPD",
                      "Filtros click & twist de cambio rapido",
                      "2 anos de garantia completa",
                    ]}
                    included={[
                      "Equipo de osmosis compacto",
                      "Grifo premium cromado",
                      "Kit de conexiones completo",
                      "Filtros de primera carga",
                      "Manual en espanol",
                    ]}
                  />
                  <p className="text-[10px] text-muted-foreground font-sans text-center mt-4">
                    Envio gratuito · Garantia 2 anos · 14 dias devolucion
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 gap-4">
                  {[
                    { icon: Zap, text: "Pantalla LED tactil" },
                    { icon: Shield, text: "2 anos garantia" },
                    { icon: Leaf, text: "Ecologico, sin residuos" },
                    { icon: Droplets, text: "99.9% pureza" },
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

        {/* How it Works */}
        <section className="bg-foreground text-background">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="text-center mb-16 lg:mb-24">
              <span className="text-[10px] tracking-[0.4em] uppercase text-background/50 font-sans block mb-4">
                Tecnologia
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-background">
                Como funciona la osmosis inversa
              </h2>
              <p className="text-sm text-background/50 font-sans mt-6 max-w-xl mx-auto leading-relaxed">
                El proceso de filtracion mas avanzado para agua potable. Cada gota pasa por 3 etapas de purificacion para eliminar el 99.9% de contaminantes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-background/10">
              {howItWorks.map(({ step, title, description }) => (
                <div key={step} className="bg-foreground p-8 lg:p-12">
                  <span className="font-serif text-6xl lg:text-7xl text-background/10">{step}</span>
                  <h3 className="font-serif text-xl lg:text-2xl text-background mt-4">{title}</h3>
                  <p className="text-sm text-background/60 font-sans mt-4 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 lg:p-12 border border-background/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-2xl text-background">Autolimpieza automatica</h3>
                  <p className="text-sm text-background/60 font-sans mt-4 leading-relaxed">
                    El sistema realiza ciclos de autolimpieza automaticos para mantener la membrana RO en optimas condiciones. Esto prolonga la vida util del equipo y garantiza agua pura siempre.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <Sparkles className="w-10 h-10 text-background/30 mx-auto" strokeWidth={1} />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-background/50 mt-3">Autolimpieza</p>
                  </div>
                  <div className="text-center">
                    <Timer className="w-10 h-10 text-background/30 mx-auto" strokeWidth={1} />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-background/50 mt-3">Programable</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-10 h-10 text-background/30 mx-auto" strokeWidth={1} />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-background/50 mt-3">Proteccion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                  Especificaciones Tecnicas
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[0.95]">
                  Detalles que
                  <br />
                  <span className="italic font-light text-muted-foreground">importan</span>
                </h2>
                <p className="text-sm text-muted-foreground font-sans mt-6 leading-relaxed">
                  Disenado para instalarse debajo del fregadero de forma discreta. Sin tanque de almacenamiento, lo que significa agua fresca siempre y ahorro de espacio.
                </p>
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                    <span className="text-xs text-muted-foreground">Ultra compacto</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                    <span className="text-xs text-muted-foreground">Alto rendimiento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Weight className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                    <span className="text-xs text-muted-foreground">Solo 15kg</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-border">
                {specs.map(({ label, value, sublabel }) => (
                  <div key={label} className="bg-background p-6 lg:p-8">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-sans">{label}</p>
                    <p className="font-serif text-2xl lg:text-3xl text-foreground mt-2">{value}</p>
                    <p className="text-[10px] text-muted-foreground font-sans mt-1">{sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="text-center mb-16 lg:mb-24">
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                Caracteristicas
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
                Compacto pero potente
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {[
                { icon: Zap, title: "Pantalla LED tactil", desc: "Muestra el estado de cada filtro, TDS del agua y alertas de mantenimiento en tiempo real" },
                { icon: Shield, title: "Garantia 2 anos", desc: "Cobertura completa del equipo y servicio tecnico sin coste adicional" },
                { icon: Clock, title: "Filtros click & twist", desc: "Sistema de cambio rapido. Sin herramientas, sin tecnico, sin complicaciones" },
                { icon: Droplets, title: "99.9% pureza", desc: "Elimina cal, cloro, metales pesados, bacterias, virus y microplasticos" },
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
        <section className="border-t border-border">
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
                    "Equipo de osmosis compacto 500GPD sin tanque",
                    "Pantalla LED tactil con indicadores",
                    "Membrana RO de alto rendimiento (24 meses)",
                    "Filtros de sedimentos y carbon activo",
                    "Grifo de diseno cromado de alta calidad",
                    "Kit completo de instalacion con conectores rapidos",
                    "Manual de uso e instalacion en espanol",
                    "Garantia de 2 anos y soporte tecnico",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm font-sans text-foreground">
                      <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-square bg-secondary overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/H47aa1cc1901e4e8cb35c7a857893eb64H.jpg" 
                  alt="Contenido del pack compacto" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance */}
        <section className="bg-secondary">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="bg-background border border-border p-10 lg:p-16">
              <div className="grid sm:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                    Opcional
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
                    Mantenimiento anual
                  </h2>
                  <p className="text-sm text-muted-foreground font-sans mt-4 leading-relaxed">
                    Suscripcion que incluye cambio de filtros, revision completa y visita de tecnico certificado.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {["Cambio de filtros incluido", "Revision completa del equipo", "Desinfeccion del sistema", "Visita de tecnico a domicilio"].map(item => (
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
              El favorito de
              <br />
              <span className="italic font-light text-background/60">nuestros clientes</span>
            </h2>
            <p className="text-sm text-background/50 font-sans mt-6 max-w-md mx-auto">
              El sistema mas vendido por su relacion calidad-precio, tecnologia avanzada y facilidad de uso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a 
                href="https://wa.me/34711267223?text=Hola%2C%20me%20interesa%20el%20Sistema%20Compacto%20500GPD%20con%20pantalla%20LED"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-background text-foreground px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-background/90 transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Comprar Ahora
              </a>
              <Link 
                href="/productos/5-etapas"
                className="inline-flex items-center justify-center gap-3 border border-background/30 text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:border-background transition-all duration-300"
              >
                Ver 5 Etapas
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
