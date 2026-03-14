"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: "compacto",
    name: "Sistema Compacto",
    subtitle: "El mas vendido",
    description: "Sistema de osmosis inversa compacto con pantalla LED tactil. Perfecto para espacios reducidos.",
    price: "508",
    image: "/He23d99f93a3040acb8720554edb60e11k.jpg",
    href: "/productos/compacto",
    badge: "Popular"
  },
  {
    id: "5-etapas",
    name: "Sistema 5 Etapas",
    subtitle: "Maxima purificacion",
    description: "Sistema profesional de 5 etapas con grifo premium. Filtracion avanzada para agua perfecta.",
    price: "429",
    image: "/osmosis-casa.jpg",
    href: "/productos/5-etapas",
    badge: "Premium"
  },
  {
    id: "acuarios",
    name: "Sistema Acuarios",
    subtitle: "Agua perfecta para peces",
    description: "Sistema compacto de 3 etapas disenado para acuarios. Elimina cloro, metales y sedimentos.",
    price: "189",
    image: "/osmosis-acuario.jpg",
    href: "/productos/acuarios",
    badge: null
  },
]

export default function ProductosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground font-sans">
                Catalogo
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-light mt-4 mb-6 text-balance">
                Nuestros Sistemas
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Cada sistema esta disenado para ofrecer agua de la maxima pureza. 
                Elige el que mejor se adapte a tus necesidades.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={product.href} className="group block">
                    <div className="relative aspect-square bg-secondary overflow-hidden mb-6">
                      {product.badge && (
                        <span className="absolute top-4 left-4 z-10 text-[10px] tracking-[0.2em] uppercase bg-foreground text-background px-3 py-1.5">
                          {product.badge}
                        </span>
                      )}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="space-y-3">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                        {product.subtitle}
                      </span>
                      <h2 className="font-serif text-2xl">{product.name}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-lg">
                          Desde <span className="font-medium">{product.price}€</span>
                        </span>
                        <span className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                          Ver producto <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="py-20 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-serif text-4xl mb-2">2</div>
                <div className="text-sm text-background/60">Anos de garantia</div>
              </div>
              <div>
                <div className="font-serif text-4xl mb-2">1,200+</div>
                <div className="text-sm text-background/60">Instalaciones</div>
              </div>
              <div>
                <div className="font-serif text-4xl mb-2">48h</div>
                <div className="text-sm text-background/60">Envio express</div>
              </div>
              <div>
                <div className="font-serif text-4xl mb-2">99.9%</div>
                <div className="text-sm text-background/60">Pureza garantizada</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
