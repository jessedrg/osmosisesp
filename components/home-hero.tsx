import { MessageCircle, Droplets, ArrowRight } from "lucide-react"

const WA_URL = "https://wa.me/34711267223?text=Hola%2C%20me%20interesa%20instalar%20un%20sistema%20de%20%C3%B3smosis%20inversa."

export function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=2070&auto=format&fit=crop"
          alt="Agua cristalina"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24 pt-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-xs font-medium mb-8 backdrop-blur-sm">
            <Droplets className="w-3.5 h-3.5" />
            Servicio en toda España
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-background leading-[1.0]">
            Agua pura
            <br />
            <span className="italic font-light opacity-80">en cada gota.</span>
          </h1>
          <p className="text-base sm:text-lg text-background/70 mt-8 font-sans leading-relaxed max-w-xl">
            Instalación profesional de sistemas de ósmosis inversa. Sin cal, sin impurezas, sin preocupaciones. Presupuesto gratuito en 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-sans font-medium hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              Pedir presupuesto
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 bg-background/10 backdrop-blur-sm text-background border border-background/20 px-8 py-4 rounded-full text-sm font-sans hover:bg-background/20 transition-colors"
            >
              Descubrir más
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 pt-10 border-t border-background/10">
          {[
            { value: "8.000+", label: "Municipios" },
            { value: "2-3h", label: "Instalación" },
            { value: "4.9★", label: "Valoración" },
            { value: "100%", label: "Garantía" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-serif text-2xl sm:text-3xl text-background">{value}</p>
              <p className="text-xs text-background/50 mt-1 font-sans">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
