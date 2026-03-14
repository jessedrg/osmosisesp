import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Productos | OSMOSIS ESP",
  description: "Sistemas de osmosis inversa premium para hogar y acuarios. Tecnologia de purificacion avanzada. Envio gratuito en toda Espana.",
  keywords: "osmosis inversa, purificacion agua, filtro agua casa, osmosis acuarios, agua pura",
  openGraph: {
    title: "Productos | OSMOSIS ESP",
    description: "Sistemas de osmosis inversa premium para hogar y acuarios.",
    type: "website",
  },
}

export default function ProductosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 lg:mb-24">
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-6">
                Nuestros Sistemas
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight text-foreground leading-[0.95]">
                Elige tu
                <br />
                <span className="italic font-light text-muted-foreground">solucion</span>
              </h1>
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
                  <h2 className="font-serif text-3xl lg:text-4xl tracking-tight text-foreground">
                    Hogar
                  </h2>
                  <p className="text-sm text-muted-foreground font-sans mt-4 max-w-sm mx-auto leading-relaxed">
                    Sistema completo de 5 etapas con panel LED tactil para toda la familia. Agua pura ilimitada desde el grifo.
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
                  <h2 className="font-serif text-3xl lg:text-4xl tracking-tight text-foreground">
                    Acuarios
                  </h2>
                  <p className="text-sm text-muted-foreground font-sans mt-4 max-w-sm mx-auto leading-relaxed">
                    Sistema compacto de 3 etapas optimizado para acuarios. Agua sin cloro ni metales para tus peces y plantas.
                  </p>
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <span className="font-serif text-2xl text-foreground">Desde 189€</span>
                    <ArrowRight className="w-5 h-5 text-foreground group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-border bg-foreground text-background">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
              {[
                { value: "99.9%", label: "Pureza" },
                { value: "2", label: "Anos garantia" },
                { value: "1,200+", label: "Clientes satisfechos" },
                { value: "0€", label: "Envio" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <span className="font-serif text-3xl lg:text-5xl text-background">{value}</span>
                  <span className="block text-[10px] tracking-[0.2em] uppercase text-background/50 font-sans mt-2">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
