"use client"

import { useState } from "react"
import { Check, ShoppingBag } from "lucide-react"
import Link from "next/link"

const features = [
  "Sistema de 5 etapas con bomba integrada",
  "Panel LED tactil con indicadores",
  "Grifo de diseno minimalista incluido",
  "Filtros click & twist de cambio rapido",
  "Garantia de 2 anos completa",
  "Soporte tecnico prioritario",
]

export function ProductSection() {
  const [withInstall, setWithInstall] = useState(true)

  return (
    <section id="productos" className="relative">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
              Nuestro Sistema
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[0.95] text-balance">
              Osmosis Inversa
              <br />
              <span className="italic font-light text-muted-foreground">Compacto</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 flex items-end">
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Tecnologia de purificacion avanzada en un diseno que se integra perfectamente bajo cualquier fregadero. Sin compromisos en calidad ni estetica.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/He23d99f93a3040acb8720554edb60e11k.jpg" 
                alt="Sistema de osmosis inversa completo con filtros, grifo y accesorios" 
                className="w-full h-full object-contain p-8 lg:p-16 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-secondary overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/H47aa1cc1901e4e8cb35c7a857893eb64H.jpg" 
                  alt="Panel LED tactil del equipo" 
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square bg-secondary overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/He931e67f2b5b4d5999ed74d013fdd560w.jpg" 
                  alt="Interior con filtros de cambio rapido" 
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-32">
            {/* Price Toggle */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setWithInstall(false)}
                className={`text-[11px] tracking-[0.15em] uppercase font-sans px-6 py-3 border transition-all duration-300 ${!withInstall ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}
              >
                Solo Equipo
              </button>
              <button
                onClick={() => setWithInstall(true)}
                className={`text-[11px] tracking-[0.15em] uppercase font-sans px-6 py-3 border transition-all duration-300 ${withInstall ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}
              >
                Con Instalacion
              </button>
            </div>

            {/* Price */}
            <div className="mb-10">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-6xl sm:text-7xl text-foreground">
                  {withInstall ? "587" : "508"}€
                </span>
                <div className="flex flex-col">
                  <span className="text-lg text-muted-foreground/50 line-through font-sans">
                    {withInstall ? "804" : "725"}€
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">IVA incluido</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-sans mt-3">
                {withInstall 
                  ? "Incluye equipo completo + instalacion profesional (2-3h)" 
                  : "Envio gratuito a toda Espana · Instalacion: 79€ adicionales"
                }
              </p>
            </div>

            {/* Features */}
            <div className="border-t border-border pt-8 mb-10">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans block mb-6">
                Incluido
              </span>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-sans text-foreground">
                    <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link
              href="#checkout"
              className="group w-full inline-flex items-center justify-center gap-3 bg-foreground text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-all duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Comprar Ahora
            </Link>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-border">
              <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-sans">Envio gratis</span>
              <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-sans">2 anos garantia</span>
              <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-sans">14 dias devolucion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
