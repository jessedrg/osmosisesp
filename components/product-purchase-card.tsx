'use client'

import { useState, useCallback } from 'react'
import { ShoppingBag, Check, X } from 'lucide-react'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { startCheckoutSession } from '@/app/actions/stripe'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface ProductPurchaseCardProps {
  category: 'compacto' | '5etapas' | 'acuarios'
  soloPrice: number
  instalacionPrice: number
  originalPrice?: number
  features: string[]
  tag?: string
}

export default function ProductPurchaseCard({
  category,
  soloPrice,
  instalacionPrice,
  originalPrice,
  features,
  tag,
}: ProductPurchaseCardProps) {
  const [withInstallation, setWithInstallation] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  
  const currentPrice = withInstallation ? instalacionPrice : soloPrice
  const productId = withInstallation ? `${category}-instalacion` : `${category}-solo`
  
  const fetchClientSecret = useCallback(
    () => startCheckoutSession(productId),
    [productId]
  )

  if (showCheckout) {
    return (
      <div className="bg-card p-8 border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-xl">Finalizar Compra</h3>
          <button
            onClick={() => setShowCheckout(false)}
            className="p-2 hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div id="checkout" className="min-h-[400px]">
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret: fetchClientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card p-8 border border-border">
      {/* Tag */}
      {tag && (
        <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
          {tag}
        </span>
      )}
      
      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-5xl">{currentPrice}€</span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              {originalPrice}€
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">IVA incluido</p>
      </div>

      {/* Installation Toggle */}
      <div className="mb-8">
        <div className="flex items-center justify-between p-4 bg-secondary">
          <div>
            <p className="text-sm font-medium">
              {withInstallation ? 'Con Instalación Profesional' : 'Solo Equipo'}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {withInstallation 
                ? 'Incluye instalación por técnico certificado'
                : 'Tú realizas la instalación'
              }
            </p>
          </div>
          <button
            onClick={() => setWithInstallation(!withInstallation)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
              withInstallation ? 'bg-foreground' : 'bg-border'
            }`}
            aria-label={withInstallation ? 'Cambiar a solo equipo' : 'Añadir instalación'}
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-background rounded-full transition-transform duration-300 ${
                withInstallation ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check className="w-4 h-4 mt-0.5 text-foreground flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
        {withInstallation && (
          <li className="flex items-start gap-3 text-sm text-foreground font-medium">
            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>Instalación profesional incluida</span>
          </li>
        )}
      </ul>

      {/* CTA */}
      <button
        onClick={() => setShowCheckout(true)}
        className="group w-full inline-flex items-center justify-center gap-3 bg-foreground text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-all duration-300"
      >
        <ShoppingBag className="w-4 h-4" />
        Comprar Ahora
      </button>

      {/* Trust badges */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <span>Pago seguro</span>
          <span>•</span>
          <span>Envío 24-48h</span>
          <span>•</span>
          <span>2 años garantía</span>
        </div>
      </div>
    </div>
  )
}
