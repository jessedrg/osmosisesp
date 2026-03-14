'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ShoppingBag, Check, Star } from 'lucide-react'

const products = [
  {
    id: 'compacto',
    name: 'Sistema Compacto 500GPD',
    tag: 'Mas Vendido',
    description: 'Pantalla LED tactil, sin tanque, autolimpieza',
    price: 587,
    originalPrice: 665,
    image: '/He23d99f93a3040acb8720554edb60e11k.jpg',
    href: '/productos/compacto',
    features: ['Sin tanque', 'Pantalla LED', 'Autolimpieza'],
    rating: 4.9,
    reviews: 127,
  },
  {
    id: '5-etapas',
    name: 'Sistema 5 Etapas Premium',
    tag: 'Premium',
    description: 'Maxima purificacion, deposito 12L',
    price: 508,
    originalPrice: 586,
    image: '/osmosis-casa.jpg',
    href: '/productos/5-etapas',
    features: ['5 etapas', 'Deposito 12L', 'Grifo premium'],
    rating: 4.8,
    reviews: 94,
  },
  {
    id: 'acuarios',
    name: 'Sistema para Acuarios',
    tag: 'Especializado',
    description: 'Agua perfecta para peces y plantas',
    price: 268,
    originalPrice: 346,
    image: '/osmosis-acuario.jpg',
    href: '/productos/acuarios',
    features: ['3 etapas', 'Compacto', 'Acuariofilia'],
    rating: 4.9,
    reviews: 56,
  },
]

interface Props {
  cityName: string
}

export function InstallationProductCarousel({ cityName }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const currentProduct = products[currentIndex]

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Product Image */}
        <div className="relative aspect-square bg-secondary overflow-hidden group">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Tag */}
          <span className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 text-[10px] tracking-[0.2em] uppercase">
            {currentProduct.tag}
          </span>

          {/* Navigation Arrows - Desktop */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Producto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Producto siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:py-8">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(currentProduct.rating) ? 'fill-accent text-accent' : 'text-border'}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {currentProduct.rating} ({currentProduct.reviews} opiniones)
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl mb-3">{currentProduct.name}</h2>
          <p className="text-muted-foreground mb-6">{currentProduct.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 mb-6">
            {currentProduct.features.map((feature, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 bg-secondary px-3 py-1.5 text-xs">
                <Check className="w-3 h-3 text-accent" />
                {feature}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-4xl text-accent">{currentProduct.price}€</span>
              <span className="text-lg text-muted-foreground line-through">{currentProduct.originalPrice}€</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Con instalacion profesional en {cityName}
            </p>
          </div>

          {/* CTA */}
          <Link
            href={currentProduct.href}
            className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-accent/90 transition-all duration-300 w-full sm:w-auto"
          >
            <ShoppingBag className="w-4 h-4" />
            Comprar Ahora
          </Link>

          {/* Trust badges */}
          <div className="flex items-center gap-6 mt-6 text-xs text-muted-foreground">
            <span>Instalacion incluida</span>
            <span>•</span>
            <span>2 años garantia</span>
            <span>•</span>
            <span>Pago seguro</span>
          </div>
        </div>
      </div>

      {/* Dots + Mobile Nav */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="lg:hidden w-10 h-10 border border-border flex items-center justify-center hover:border-accent transition-colors"
          aria-label="Producto anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-accent w-6' : 'bg-border'
              }`}
              aria-label={`Ver producto ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="lg:hidden w-10 h-10 border border-border flex items-center justify-center hover:border-accent transition-colors"
          aria-label="Producto siguiente"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Product Thumbnails */}
      <div className="hidden lg:grid grid-cols-3 gap-4 mt-8">
        {products.map((product, index) => (
          <button
            key={product.id}
            onClick={() => setCurrentIndex(index)}
            className={`flex items-center gap-4 p-4 border transition-all duration-300 text-left ${
              index === currentIndex 
                ? 'border-accent bg-accent/5' 
                : 'border-border hover:border-accent/50'
            }`}
          >
            <div className="w-16 h-16 bg-secondary flex-shrink-0">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{product.name}</p>
              <p className="text-accent font-serif">{product.price}€</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
