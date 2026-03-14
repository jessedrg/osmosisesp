import { ArrowRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    num: "01",
    title: "Elige tu opcion",
    desc: "Selecciona el equipo solo o con instalacion profesional incluida. Pago seguro online.",
  },
  {
    num: "02",
    title: "Recibe tu equipo",
    desc: "Envio gratuito a toda Espana. Tu sistema llega en 24-48 horas perfectamente embalado.",
  },
  {
    num: "03",
    title: "Instalacion experta",
    desc: "Si elegiste instalacion, un tecnico certificado lo instala en 2-3 horas. Sin obras ni complicaciones.",
  },
  {
    num: "04",
    title: "Disfruta agua pura",
    desc: "Desde el primer momento, agua cristalina directamente de tu grifo. Pureza garantizada.",
  },
]

export function HowItWorks() {
  return (
    <section id="proceso" className="relative bg-foreground text-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-6">
            <span className="text-[10px] tracking-[0.4em] uppercase text-background/40 font-sans block mb-4">
              El Proceso
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-background leading-[0.95] text-balance">
              Cuatro pasos hacia
              <br />
              <span className="italic font-light text-background/60">agua perfecta</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <Link 
              href="#productos"
              className="group inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-background font-sans"
            >
              Empezar ahora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10">
          {steps.map((step) => (
            <div 
              key={step.num} 
              className="bg-foreground p-8 lg:p-10 group hover:bg-background/5 transition-colors duration-500"
            >
              <span className="font-serif text-6xl lg:text-7xl text-background/10 block mb-8 group-hover:text-background/20 transition-colors duration-500">
                {step.num}
              </span>
              <h3 className="text-lg font-serif text-background mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-background/50 font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <p className="text-sm text-background/50 font-sans mb-6">
            Mas de 1,200 hogares ya disfrutan de agua pura
          </p>
          <Link 
            href="#productos"
            className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-background/90 transition-all duration-300"
          >
            Ver Producto
          </Link>
        </div>
      </div>
    </section>
  )
}
