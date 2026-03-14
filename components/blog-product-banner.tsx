'use client'

import Link from 'next/link'
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
    features: ['Flujo directo sin deposito', 'Pantalla LED tactil', 'Autolimpieza automatica'],
    tag: 'Mas vendido',
  },
  '5etapas': {
    name: 'Sistema 5 Etapas Premium',
    price: 429,
    originalPrice: 549,
    href: '/productos/5-etapas',
    features: ['5 etapas de filtracion', 'Grifo premium incluido', 'Deposito 12L'],
    tag: 'Mejor calidad-precio',
  },
  acuarios: {
    name: 'Sistema Acuarios 3 Etapas',
    price: 189,
    originalPrice: 249,
    href: '/productos/acuarios',
    features: ['Especial acuariofilia', 'Compacto y portatil', 'Facil instalacion'],
    tag: 'Para acuarios',
  },
}

export function BlogProductBanner({ variant = 'compacto', style = 'full' }: BlogProductBannerProps) {
  const product = PRODUCT_DATA[variant]

  if (style === 'mini') {
    return (
      <Link 
        href={product.href}
        className="group flex items-center gap-4 p-4 bg-secondary border border-accent/20 hover:border-accent/40 transition-all my-8"
      >
        <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Star className="w-5 h-5 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-accent font-medium">{product.tag}</p>
          <p className="text-sm font-serif text-foreground truncate">{product.name}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="font-serif text-lg text-accent">{product.price}€</span>
          <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
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
    <div className="my-12 p-6 lg:p-8 bg-secondary border border-border">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        {/* Left: Product info */}
        <div className="flex-1">
          <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-[10px] tracking-[0.15em] uppercase mb-3">
            {product.tag}
          </span>
          <h3 className="font-serif text-xl lg:text-2xl text-foreground">{product.name}</h3>
          <ul className="mt-4 space-y-2">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
            <Truck className="w-3.5 h-3.5" />
            <span>Entrega ~1 semana | 2 años garantia</span>
          </div>
        </div>

        {/* Right: Price & CTA */}
        <div className="lg:text-right">
          <div className="flex items-baseline gap-2 lg:justify-end">
            <span className="font-serif text-3xl lg:text-4xl text-accent">{product.price}€</span>
            <span className="text-sm text-muted-foreground line-through">{product.originalPrice}€</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">IVA incluido</p>
          <Link
            href={product.href}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-[11px] tracking-[0.15em] uppercase mt-4 hover:bg-accent/90 transition-colors"
          >
            Comprar Ahora
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
