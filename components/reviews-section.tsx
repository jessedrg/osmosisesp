import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Marta L.",
    city: "Barcelona",
    text: "Llevabamos años comprando garrafas de agua. Desde que instalamos la osmosis con osmosis esp el ahorro es brutal y el agua sabe mucho mejor. La instalacion fue rapidisima.",
    rating: 5,
  },
  {
    name: "Carlos y Ana",
    city: "Terrassa",
    text: "El agua de Terrassa tiene mucha cal. Desde que tenemos osmosis, los electrodomesticos duran mas y el cafe sabe increible. Muy contentos con el servicio.",
    rating: 5,
  },
  {
    name: "Elena R.",
    city: "Sabadell",
    text: "Dudabamos entre varias marcas. El tecnico de osmosis esp nos explico todo sin presion. Elegimos el equipo perfecto para nuestra familia de 4.",
    rating: 5,
  },
  {
    name: "Javier M.",
    city: "Badalona",
    text: "Instalacion en 2 horas, sin obras, sin ruido. El tecnico fue muy profesional. El agua sale cristalina desde el primer momento.",
    rating: 5,
  },
  {
    name: "Patricia S.",
    city: "Mataro",
    text: "Teniamos un equipo antiguo que daba problemas. osmosis esp nos instalo uno nuevo y se llevo el viejo. Servicio completo y precio justo.",
    rating: 5,
  },
  {
    name: "Roberto G.",
    city: "Granollers",
    text: "El mantenimiento anual es muy sencillo. El tecnico viene, cambia los filtros en 30 minutos y listo. Muy recomendable.",
    rating: 4,
  },
]

export function ReviewsSection() {
  return (
    <section id="opiniones" className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-4 mb-16 lg:mb-24">
        <div className="lg:col-span-5">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Opiniones</p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.05]">
            Clientes satisfechos.
          </h2>
        </div>
        <div className="lg:col-span-3 lg:col-start-8 flex items-end">
          <div>
            <p className="font-serif text-5xl text-foreground">4.9</p>
            <div className="flex gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-foreground" />)}
            </div>
            <p className="text-xs text-muted-foreground mt-1 font-sans">1.200+ instalaciones</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {reviews.map((r, i) => (
          <article key={i} className="bg-secondary p-8 sm:p-10 flex flex-col justify-between group hover:bg-foreground transition-colors duration-500">
            <div>
              <Quote className="w-6 h-6 text-border group-hover:text-background/20 transition-colors duration-500 mb-6" />
              <p className="text-sm text-foreground group-hover:text-background transition-colors duration-500 font-sans leading-relaxed">
                {r.text}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/50 group-hover:border-background/10 transition-colors duration-500 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-foreground group-hover:text-background transition-colors duration-500 font-sans">{r.name}</p>
                <p className="text-[10px] text-muted-foreground group-hover:text-background/50 transition-colors duration-500 font-sans mt-0.5">{r.city}</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-current text-foreground/30 group-hover:text-background/30 transition-colors duration-500" />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
