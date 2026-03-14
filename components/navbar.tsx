"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <span className="text-xs tracking-[0.3em] uppercase font-sans font-medium text-foreground">
            OSMOSIS<span className="text-muted-foreground">ESP</span>
          </span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
              Productos
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div className="bg-background border border-border shadow-lg min-w-[220px]">
                  <Link 
                    href="/productos/compacto" 
                    className="block px-6 py-4 text-[11px] tracking-[0.15em] uppercase text-foreground hover:bg-secondary transition-colors border-b border-border"
                  >
                    Sistema Compacto
                    <span className="block text-[9px] text-muted-foreground tracking-normal normal-case mt-1">El mas vendido · Desde 508€</span>
                  </Link>
                  <Link 
                    href="/productos/5-etapas" 
                    className="block px-6 py-4 text-[11px] tracking-[0.15em] uppercase text-foreground hover:bg-secondary transition-colors border-b border-border"
                  >
                    Sistema 5 Etapas
                    <span className="block text-[9px] text-muted-foreground tracking-normal normal-case mt-1">Maxima purificacion · Desde 429€</span>
                  </Link>
                  <Link 
                    href="/productos/acuarios" 
                    className="block px-6 py-4 text-[11px] tracking-[0.15em] uppercase text-foreground hover:bg-secondary transition-colors"
                  >
                    Acuarios
                    <span className="block text-[9px] text-muted-foreground tracking-normal normal-case mt-1">Agua perfecta para peces · Desde 189€</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/#proceso" className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Proceso
          </Link>
          <Link href="/#opiniones" className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Opiniones
          </Link>
          <Link href="/#faq" className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            FAQ
          </Link>
          <Link href="/blog" className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Blog
          </Link>
        </div>

        {/* Right - CTA */}
        <div className="hidden lg:flex items-center">
          <Link 
            href="/productos" 
            className="text-[11px] tracking-[0.15em] uppercase text-foreground border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Comprar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2 relative z-10">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 bg-background z-40 flex flex-col justify-center items-center">
          <nav className="flex flex-col items-center gap-8">
            <div className="text-center">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4">Productos</span>
              <Link href="/productos/compacto" onClick={() => setOpen(false)} className="block text-2xl font-serif text-foreground mb-2">
                Sistema Compacto
              </Link>
              <Link href="/productos/5-etapas" onClick={() => setOpen(false)} className="block text-2xl font-serif text-foreground mb-2">
                Sistema 5 Etapas
              </Link>
              <Link href="/productos/acuarios" onClick={() => setOpen(false)} className="block text-2xl font-serif text-foreground">
                Acuarios
              </Link>
            </div>
            <div className="h-px w-12 bg-border" />
            <Link href="/#proceso" onClick={() => setOpen(false)} className="text-xl font-serif text-muted-foreground">
              Proceso
            </Link>
            <Link href="/#opiniones" onClick={() => setOpen(false)} className="text-xl font-serif text-muted-foreground">
              Opiniones
            </Link>
            <Link href="/#faq" onClick={() => setOpen(false)} className="text-xl font-serif text-muted-foreground">
              FAQ
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="text-xl font-serif text-muted-foreground">
              Blog
            </Link>
            <div className="h-px w-12 bg-border my-4" />
            <Link 
              href="/productos" 
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.15em] uppercase text-foreground border border-foreground px-8 py-4"
            >
              Ver Productos
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
