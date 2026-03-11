"use client"

import Link from "next/link"
import { MessageCircle, CheckCircle } from "lucide-react"

const WA_URL = "https://wa.me/34711267223?text=Hola%2C%20me%20interesa%20instalar%20un%20sistema%20de%20%C3%B3smosis%20inversa."

export function ProductSection() {
  return (
    <section id="producto" className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Product Images */}
        <div>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/He23d99f93a3040acb8720554edb60e11k.jpg" 
                alt="Sistema de ósmosis inversa completo con filtros, grifo y accesorios" 
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/H47aa1cc1901e4e8cb35c7a857893eb64H.jpg" 
                alt="Equipo de ósmosis inversa con panel LED táctil" 
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/He931e67f2b5b4d5999ed74d013fdd560w.jpg" 
                alt="Interior del equipo con filtros de cambio rápido" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Product Info + Price */}
        <div>
          {/* Discount badge */}
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 text-xs font-sans font-bold mb-4">
            🔥 OFERTA LIMITADA -30%
          </div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">Nuestro equipo</p>
          <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground leading-[1.1]">
            Sistema de Ósmosis Inversa Compacto
          </h2>
          <p className="text-sm text-muted-foreground mt-4 font-sans leading-relaxed">
            Equipo de última generación con panel táctil LED, filtros de cambio rápido y diseño minimalista. Cabe bajo cualquier fregadero.
          </p>

          {/* Price Card */}
          <div className="mt-8 border-2 border-foreground p-6 sm:p-8">
            <div className="flex items-end gap-3">
              <span className="font-serif text-4xl sm:text-5xl text-foreground">508€</span>
              <span className="text-xl text-muted-foreground/50 line-through font-sans mb-1">725€</span>
              <span className="text-sm text-muted-foreground font-sans mb-1">IVA incl.</span>
            </div>
            
            <ul className="mt-6 space-y-3">
              {[
                "Equipo ósmosis 5 etapas con bomba",
                "Panel LED indicador de filtros",
                "Grifo de diseño incluido",
                "Filtros de cambio rápido click & twist",
                "Garantía 2 años",
                "Soporte WhatsApp",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-xs font-sans text-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-foreground flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 text-sm font-sans font-medium hover:opacity-90 transition-opacity">
              <MessageCircle className="w-4 h-4" /> Pedir presupuesto gratis
            </a>
          </div>

          {/* Installation */}
          <div className="mt-4 border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-sans font-medium text-foreground">Instalación profesional</p>
                <p className="text-[10px] text-muted-foreground font-sans mt-1">Técnico certificado · 2-3 horas · Sin obras</p>
              </div>
              <p className="font-serif text-2xl text-foreground">79€</p>
            </div>
          </div>

          {/* Maintenance */}
          <div className="mt-4 border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-sans font-medium text-foreground">Mantenimiento anual</p>
                <p className="text-[10px] text-muted-foreground font-sans mt-1">Cambio de filtros + revisión + visita técnico</p>
              </div>
              <p className="font-serif text-2xl text-foreground">79€<span className="text-sm text-muted-foreground">/año</span></p>
            </div>
          </div>

          <Link href="/productos" className="mt-6 inline-flex items-center text-xs font-sans text-muted-foreground hover:text-foreground transition-colors">
            Ver más detalles del producto →
          </Link>
        </div>
      </div>
    </section>
  )
}
