'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Star, Truck } from 'lucide-react'

interface BlogProductBannerProps {
  variant?: 'compacto' | '5etapas' | 'acuarios'
  style?: 'full' | 'mini' | 'inline'
}

const PRODUCT_DATA = {
  compacto: {
    name: 'Sistema Compacto 500GPD',
    price: 508,
    originalPrice: 649,
    href: '/productos/compacto',
    image: '/He23d99f93a3040acb8720554edb60e11k.jpg',
    features: ['Flujo directo sin depósito', 'Pantalla LED táctil', 'Autolimpieza automática'],
    tag: 'Más vendido',
  },
  '5etapas': {
    name: 'Sistema 5 Etapas Premium',
    price: 429,
    originalPrice: 549,
    href: '/productos/5-etapas',
    image: '/osmosis-casa.jpg',
    features: ['5 etapas de filtración', 'Grifo premium incluido', 'Depósito 12L'],
    tag: 'Mejor calidad-precio',
  },
  acuarios: {
    name: 'Sistema Acuarios 3 Etapas',
    price: 189,
    originalPrice: 249,
    href: '/productos/acuarios',
    image: '/osmosis-acuario.jpg',
    features: ['Especial acuariofilia', 'Compacto y portátil', 'Fácil instalación'],
    tag: 'Para acuarios',
  },
}

export function BlogProductBanner({ variant = 'compacto', style = 'full' }: BlogProductBannerProps) {
  const product = PRODUCT_DATA[variant]

  if (style === 'mini') {
    return (
      <Link 
        href={product.href}
        className="group flex items-center gap-4 p-4 bg-secondary border border-border hover:border-foreground/20 transition-all my-8"
      >
        <div className="w-16 h-16 bg-background flex items-center justify-center flex-shrink-0 overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.name} 
            width={64} 
            height={64} 
            className="w-full h-full object-contain p-1" 
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">{product.tag}</p>
          <p className="text-sm font-serif text-foreground truncate">{product.name}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="font-serif text-lg text-foreground">{product.price}€</span>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    )
  }

  if (style === 'inline') {
    return (
      <div className="flex items-center justify-between p-3 bg-accent/5 border-l-2 border-accent my-6">
        <span className="text-sm text-foreground">
          <span className="font-medium">{product.name}</span> — desde <span className="text-accent font-serif">{product.price}€</span>
        </span>
        <Link 
          href={product.href}
          className="text-xs text-accent hover:underline flex items-center gap-1"
        >
          Ver producto <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    )
  }

  // Full banner
  return (
    <div className="my-12 bg-secondary border border-border overflow-hidden">
      <div className="grid lg:grid-cols-[240px_1fr_auto] gap-0">
        {/* Left: Product image */}
        <div className="bg-background flex items-center justify-center p-6 lg:p-8">
          <Image 
            src={product.image} 
            alt={product.name} 
            width={200} 
            height={200} 
            className="w-full max-w-[180px] h-auto object-contain" 
          />
        </div>

        {/* Center: Product info */}
        <div className="p-6 lg:p-8">
          <span className="inline-block px-2 py-1 bg-foreground text-background text-[10px] tracking-[0.15em] uppercase mb-3">
            {product.tag}
          </span>
          <h3 className="font-serif text-xl lg:text-2xl text-foreground">{product.name}</h3>
          <ul className="mt-4 space-y-2">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
            <Truck className="w-3.5 h-3.5" />
            <span>Envío gratuito · 2 años de garantía</span>
          </div>
        </div>

        {/* Right: Price & CTA */}
        <div className="p-6 lg:p-8 flex flex-col items-start lg:items-end justify-center border-t lg:border-t-0 lg:border-l border-border">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl lg:text-4xl text-foreground">{product.price}€</span>
            <span className="text-sm text-muted-foreground line-through">{product.originalPrice}€</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">IVA incluido</p>
          <Link
            href={product.href}
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-[11px] tracking-[0.15em] uppercase mt-4 hover:bg-foreground/90 transition-colors"
          >
            Comprar Ahora
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
