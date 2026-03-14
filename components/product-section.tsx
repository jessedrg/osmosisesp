"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ProductSection() {
  return (
    <section id="productos" className="relative">
      {/* Top decorative line */}
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

        {/* Product Categories */}
        <div className="grid lg:grid-cols-2 gap-px bg-border">
          {/* Hogar */}
          <Link 
            href="/productos/hogar"
            className="group bg-background p-8 lg:p-16 flex flex-col items-center text-center hover:bg-secondary transition-colors duration-500"
          >
            <div className="aspect-square w-full max-w-md bg-secondary overflow-hidden group-hover:bg-muted transition-colors duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/osmosis-casa.jpg" 
                alt="Sistema de osmosis inversa para hogar" 
                className="w-full h-full object-contain p-8 lg:p-12 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-8 lg:mt-12">
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-3">
                Uso Domestico
              </span>
              <h3 className="font-serif text-3xl lg:text-4xl tracking-tight text-foreground">
                Hogar
              </h3>
              <p className="text-sm text-muted-foreground font-sans mt-4 max-w-sm mx-auto leading-relaxed">
                Sistema completo de 5 etapas con panel LED tactil para toda la familia. Agua pura ilimitada.
              </p>
              <div className="flex items-center justify-center gap-4 mt-8">
                <span className="font-serif text-2xl text-foreground">Desde 508€</span>
                <ArrowRight className="w-5 h-5 text-foreground group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          {/* Acuarios */}
          <Link 
            href="/productos/acuarios"
            className="group bg-background p-8 lg:p-16 flex flex-col items-center text-center hover:bg-secondary transition-colors duration-500"
          >
            <div className="aspect-square w-full max-w-md bg-secondary overflow-hidden group-hover:bg-muted transition-colors duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/osmosis-acuario.jpg" 
                alt="Sistema de osmosis inversa para acuarios" 
                className="w-full h-full object-contain p-8 lg:p-12 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-8 lg:mt-12">
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-3">
                Acuariofilia
              </span>
              <h3 className="font-serif text-3xl lg:text-4xl tracking-tight text-foreground">
                Acuarios
              </h3>
              <p className="text-sm text-muted-foreground font-sans mt-4 max-w-sm mx-auto leading-relaxed">
                Sistema compacto de 3 etapas optimizado para acuarios. Agua sin cloro para peces y plantas.
              </p>
              <div className="flex items-center justify-center gap-4 mt-8">
                <span className="font-serif text-2xl text-foreground">Desde 189€</span>
                <ArrowRight className="w-5 h-5 text-foreground group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>
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
