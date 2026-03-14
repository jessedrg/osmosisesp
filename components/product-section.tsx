"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: "compacto",
    name: "Sistema Compacto",
    subtitle: "El mas vendido",
    description: "Sistema con pantalla LED tactil. Perfecto para espacios reducidos.",
    price: "508",
    image: "/He23d99f93a3040acb8720554edb60e11k.jpg",
    href: "/productos/compacto",
  },
  {
    id: "5-etapas",
    name: "Sistema 5 Etapas",
    subtitle: "Maxima purificacion",
    description: "Sistema profesional con grifo premium. Filtracion avanzada.",
    price: "429",
    image: "/osmosis-casa.jpg",
    href: "/productos/5-etapas",
  },
  {
    id: "acuarios",
    name: "Acuarios",
    subtitle: "Agua perfecta para peces",
    description: "Sistema compacto de 3 etapas. Elimina cloro y metales.",
    price: "189",
    image: "/osmosis-acuario.jpg",
    href: "/productos/acuarios",
  },
]

export function ProductSection() {
  return (
    <section id="productos" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-6">
            Nuestros Sistemas
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight text-foreground leading-[0.95]">
            Elige tu
            <br />
            <span className="italic font-light text-muted-foreground">solucion</span>
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {products.map((product) => (
            <Link 
              key={product.id}
              href={product.href}
              className="group bg-background p-6 lg:p-10 flex flex-col items-center text-center hover:bg-secondary transition-colors duration-500"
            >
              <div className="aspect-square w-full bg-secondary overflow-hidden group-hover:bg-muted transition-colors duration-500">
                <Image 
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-contain p-6 lg:p-8 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-6 lg:mt-8">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-2">
                  {product.subtitle}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl tracking-tight text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground font-sans mt-3 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-center gap-3 mt-6">
                  <span className="font-serif text-xl text-foreground">Desde {product.price}€</span>
                  <ArrowRight className="w-4 h-4 text-foreground group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-border">
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-sans">Envio gratis</span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-sans">2 anos garantia</span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-sans">14 dias devolucion</span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-sans">Instalacion opcional</span>
        </div>
      </div>
    </section>
  )
}
