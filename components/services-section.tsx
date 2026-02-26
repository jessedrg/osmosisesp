import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    id: "osmosis-inversa",
    title: "Ósmosis inversa",
    desc: "Sistema completo de purificación de agua. Elimina cal, cloro, metales pesados y contaminantes. Agua pura del grifo.",
    img: "/osmosis_inversa.png",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "osmosis-domestica",
    title: "Ósmosis doméstica",
    desc: "Sistemas compactos para debajo del fregadero. Ideal para pisos y casas.",
    img: "/osmosis-inversa-domestica-carbotecnia.jpg",
    span: "",
  },
  {
    id: "filtro-agua",
    title: "Filtros de agua",
    desc: "Filtros de sedimentos, carbón activo y membranas. Cambio y mantenimiento.",
    img: "https://images.unsplash.com/photo-1669211659202-722981df44f8?q=80&w=2070&auto=format&fit=crop",
    span: "",
  },
  {
    id: "descalcificador",
    title: "Descalcificadores",
    desc: "Protege tus tuberías y electrodomésticos. Elimina la cal del agua de toda la casa.",
    img: "/descalcificador-de-sal-12-litros.jpg",
    span: "",
  },
  {
    id: "mantenimiento-osmosis",
    title: "Mantenimiento",
    desc: "Cambio de filtros, revisión anual, limpieza de depósito. Mantén tu sistema al 100%.",
    img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2071&auto=format&fit=crop",
    span: "",
  },
  {
    id: "reparacion-osmosis",
    title: "Reparación",
    desc: "Fugas, baja presión, ruidos. Reparamos cualquier avería de tu sistema de ósmosis.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-2",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-4 mb-16 lg:mb-24">
        <div className="lg:col-span-5">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Servicios</p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.05]">
            Agua pura para tu hogar
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-8 flex items-end">
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            Instalación, mantenimiento y reparación de sistemas de ósmosis inversa y tratamiento de agua en toda Cataluña.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-3">
        {services.map((svc) => (
          <Link
            key={svc.id}
            href={`/${svc.id}/`}
            className={`group relative overflow-hidden bg-secondary aspect-[4/3] ${svc.span}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={svc.img}
              alt={svc.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 bg-foreground/40 group-hover:bg-foreground/60 transition-colors duration-500">
              <div className="flex justify-between items-start">
                <h3 className="font-serif text-xl sm:text-2xl text-background transition-colors duration-500">{svc.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-background/60 group-hover:text-background transition-colors duration-500" />
              </div>
              <p className="text-xs text-background/70 group-hover:text-background/90 transition-colors duration-500 max-w-xs font-sans">
                {svc.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
