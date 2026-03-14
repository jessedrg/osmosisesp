import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Home, ArrowRight, Search, ShoppingBag } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* 404 Number */}
            <div className="mb-8">
              <span className="font-serif text-[clamp(8rem,20vw,14rem)] leading-none text-gradient-water opacity-80">
                404
              </span>
            </div>
            
            {/* Message */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground mb-4">
              Pagina no encontrada
            </h1>
            <p className="text-muted-foreground font-sans text-base sm:text-lg leading-relaxed mb-10 max-w-md mx-auto">
              Lo sentimos, la pagina que buscas no existe o ha sido movida. 
              Pero no te preocupes, puedes encontrar lo que necesitas aqui:
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link 
                href="/"
                className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-accent/90 transition-all duration-300"
              >
                <Home className="w-4 h-4" />
                Volver al Inicio
              </Link>
              <Link 
                href="/productos"
                className="group inline-flex items-center gap-3 border border-accent/30 text-foreground px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans hover:border-accent hover:text-accent transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Ver Productos
              </Link>
            </div>
            
            {/* Quick Links */}
            <div className="border-t border-border pt-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Enlaces Utiles
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <Link 
                  href="/productos/compacto"
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Sistema Compacto
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/productos/5-etapas"
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Sistema 5 Etapas
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/blog"
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Blog
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/instalacion/madrid"
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Instalacion Madrid
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Help Section */}
        <section className="border-t border-border bg-secondary/30 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Search className="w-5 h-5 text-accent" />
              <h2 className="font-serif text-xl text-foreground">
                ¿Necesitas ayuda?
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Si buscabas algo especifico y no lo encuentras, contactanos por WhatsApp y te ayudamos.
            </p>
            <a 
              href="https://wa.me/34624396415?text=Hola,%20estaba%20buscando%20informacion%20en%20vuestra%20web%20y%20no%20la%20encuentro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              Escribenos por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
