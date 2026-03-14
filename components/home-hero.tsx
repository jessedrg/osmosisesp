"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HomeHero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const opacity = Math.max(0, 1 - scrollY / 600)
        const translateY = scrollY * 0.3
        heroRef.current.style.opacity = String(opacity)
        heroRef.current.style.transform = `translateY(${translateY}px)`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-border" />
      <div className="absolute top-24 left-12 hidden lg:block">
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans writing-mode-vertical rotate-180" style={{ writingMode: "vertical-rl" }}>
          Pureza absoluta
        </span>
      </div>
      <div className="absolute top-24 right-12 hidden lg:block">
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans" style={{ writingMode: "vertical-rl" }}>
          Desde 2018
        </span>
      </div>

      {/* Main Content */}
      <div ref={heroRef} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full">
        <div className="text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-border" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans">
              Sistemas de Purificacion
            </span>
            <div className="h-px w-12 bg-border" />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-[clamp(2.5rem,8vw,8rem)] leading-[0.9] tracking-tight text-foreground text-balance">
            Agua pura,
            <br />
            <span className="italic font-light text-muted-foreground">diseño impecable</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl mx-auto mt-8 text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
            Sistemas de osmosis inversa de ultima generacion que transforman tu agua del grifo en pureza absoluta. Sin compromisos.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link 
              href="#productos"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-all duration-300"
            >
              Descubrir Productos
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </Link>
            <Link 
              href="#proceso"
              className="inline-flex items-center gap-3 border border-foreground/20 text-foreground px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:border-foreground transition-all duration-300"
            >
              Como Funciona
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 lg:mt-32 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="font-serif text-3xl sm:text-4xl text-foreground">99.9%</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">Pureza</p>
            </div>
            <div className="text-center border-x border-border">
              <p className="font-serif text-3xl sm:text-4xl text-foreground">1,200+</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">Instalaciones</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl sm:text-4xl text-foreground">2</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">Años Garantia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-pulse">
        <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-border" />
      </div>
    </section>
  )
}
