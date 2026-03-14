import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    id: "osmosis-inversa",
    title: "Osmosis inversa",
    desc: "Sistema completo de purificacion de agua. Elimina cal, cloro, metales pesados y contaminantes.",
    img: "/osmosis_inversa.png",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "osmosis-domestica",
    title: "Osmosis domestica",
    desc: "Sistemas compactos para debajo del fregadero. Ideal para pisos y casas.",
    img: "/osmosis-inversa-domestica-carbotecnia.jpg",
    span: "",
  },
  {
    id: "filtro-agua",
    title: "Filtros de agua",
    desc: "Filtros de sedimentos, carbon activo y membranas. Cambio y mantenimiento.",
    img: "https://images.unsplash.com/photo-1669211659202-722981df44f8?q=80&w=2070&auto=format&fit=crop",
    span: "",
  },
  {
    id: "descalcificador",
    title: "Descalcificadores",
    desc: "Protege tus tuberias y electrodomesticos. Elimina la cal del agua.",
    img: "/descalcificador-de-sal-12-litros.jpg",
    span: "",
  },
  {
    id: "mantenimiento-osmosis",
    title: "Mantenimiento",
    desc: "Cambio de filtros, revision anual, limpieza. Mantén tu sistema al 100%.",
    img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2071&auto=format&fit=crop",
    span: "",
  },
  {
    id: "reparacion-osmosis",
    title: "Reparacion",
    desc: "Fugas, baja presion, ruidos. Reparamos cualquier averia de tu sistema.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-2",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="relative border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
              Servicios
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[0.95] text-balance">
              Agua pura
              <br />
              <span className="italic font-light text-muted-foreground">para tu hogar</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Instalacion, mantenimiento y reparacion de sistemas de osmosis inversa en toda Espana.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-4 gap-px bg-border">
          {services.map((svc) => (
            <Link
              key={svc.id}
              href={`/${svc.id}/`}
              className={`group relative overflow-hidden bg-background aspect-[4/3] ${svc.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={svc.img}
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-10 bg-foreground/30 group-hover:bg-foreground/50 transition-colors duration-500">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-xl sm:text-2xl text-background">{svc.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-background/40 group-hover:text-background group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-xs text-background/60 group-hover:text-background/80 transition-colors duration-500 max-w-xs font-sans leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
