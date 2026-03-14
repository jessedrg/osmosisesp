"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    name: "Marta L.",
    city: "Barcelona",
    text: "Llevabamos anos comprando garrafas de agua. Desde que instalamos la osmosis el ahorro es brutal y el agua sabe mucho mejor. La instalacion fue rapidisima.",
    rating: 5,
    date: "Enero 2026"
  },
  {
    name: "Carlos y Ana",
    city: "Terrassa",
    text: "El agua de Terrassa tiene mucha cal. Desde que tenemos osmosis, los electrodomesticos duran mas y el cafe sabe increible. Muy contentos.",
    rating: 5,
    date: "Diciembre 2025"
  },
  {
    name: "Elena R.",
    city: "Sabadell",
    text: "Dudabamos entre varias marcas. El equipo de OSMOSIS ESP nos explico todo sin presion. Elegimos el equipo perfecto para nuestra familia.",
    rating: 5,
    date: "Noviembre 2025"
  },
  {
    name: "Javier M.",
    city: "Badalona",
    text: "Instalacion en 2 horas, sin obras, sin ruido. El tecnico fue muy profesional. El agua sale cristalina desde el primer momento.",
    rating: 5,
    date: "Octubre 2025"
  },
  {
    name: "Patricia S.",
    city: "Mataro",
    text: "Teniamos un equipo antiguo que daba problemas. Nos instalaron uno nuevo y se llevaron el viejo. Servicio completo y precio justo.",
    rating: 5,
    date: "Septiembre 2025"
  },
  {
    name: "Roberto G.",
    city: "Granollers",
    text: "El mantenimiento anual es muy sencillo. El tecnico viene, cambia los filtros en 30 minutos y listo. Muy recomendable.",
    rating: 5,
    date: "Agosto 2025"
  },
]

export function ReviewsSection() {
  return (
    <section id="opiniones" className="relative bg-secondary">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
              Testimonios
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[0.95]">
              Lo que dicen
              <br />
              <span className="italic font-light text-muted-foreground">nuestros clientes</span>
            </h2>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 flex flex-col justify-end items-start lg:items-end">
            <div className="text-right">
              <p className="font-serif text-5xl lg:text-6xl text-foreground">4.9</p>
              <div className="flex gap-1 mt-2 justify-start lg:justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-3">
                1,200+ clientes satisfechos
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {reviews.map((review, i) => (
            <article 
              key={i} 
              className="bg-background p-8 lg:p-10 flex flex-col justify-between group hover:bg-foreground transition-colors duration-500"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-foreground text-foreground group-hover:fill-background group-hover:text-background transition-colors duration-500" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm text-foreground group-hover:text-background font-sans leading-relaxed transition-colors duration-500">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              {/* Author */}
              <div className="mt-8 pt-6 border-t border-border group-hover:border-background/20 transition-colors duration-500">
                <p className="text-xs font-medium text-foreground group-hover:text-background font-sans transition-colors duration-500">
                  {review.name}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-[10px] text-muted-foreground group-hover:text-background/60 font-sans transition-colors duration-500">
                    {review.city}
                  </p>
                  <p className="text-[10px] text-muted-foreground group-hover:text-background/60 font-sans transition-colors duration-500">
                    {review.date}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
