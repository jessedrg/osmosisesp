'use client'

import { useState, useCallback } from 'react'
import { ShoppingBag, Check, X, ArrowLeft, Shield, Truck, Award, CreditCard, Smartphone } from 'lucide-react'
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
  productName?: string
}

export default function ProductPurchaseCard({
  category,
  soloPrice,
  instalacionPrice,
  originalPrice,
  features,
  tag,
  productName = 'Producto',
}: ProductPurchaseCardProps) {
  const [withInstallation, setWithInstallation] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [checkoutComplete, setCheckoutComplete] = useState(false)
  
  const currentPrice = withInstallation ? instalacionPrice : soloPrice
  const productId = withInstallation ? `${category}-instalacion` : `${category}-solo`
  
  const fetchClientSecret = useCallback(
    () => startCheckoutSession(productId),
    [productId]
  )

  const handleCheckoutComplete = useCallback(() => {
    // Google Ads Conversion Tracking
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16741652529/YiAVCI7M1NkbELGwha8-',
        'value': currentPrice,
        'currency': 'EUR',
        'transaction_id': Date.now().toString(),
      })
    }
    setCheckoutComplete(true)
  }, [currentPrice])

  // Success state after payment
  if (checkoutComplete) {
    return (
      <div className="bg-card p-8 border border-border">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-serif text-2xl mb-3">Pedido Confirmado</h3>
          <p className="text-muted-foreground mb-6">
            Gracias por tu compra. Recibiras un email con los detalles de tu pedido.
          </p>
          <div className="bg-secondary p-4 mb-6">
            <p className="text-sm font-medium">{productName}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {withInstallation ? 'Con instalacion profesional' : 'Solo equipo'}
            </p>
            <p className="font-serif text-2xl mt-2">{currentPrice}€</p>
          </div>
          <button
            onClick={() => {
              setShowCheckout(false)
              setCheckoutComplete(false)
            }}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    )
  }

  // Checkout view
  if (showCheckout) {
    return (
      <div className="bg-card border border-border overflow-hidden">
        {/* Header */}
        <div className="bg-secondary px-6 py-4 border-b border-border">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowCheckout(false)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </button>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Pago 100% seguro</span>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="px-6 py-4 border-b border-border bg-background">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{productName}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {withInstallation ? 'Con instalacion profesional' : 'Solo equipo'}
              </p>
            </div>
            <p className="font-serif text-xl">{currentPrice}€</p>
          </div>
        </div>

        {/* Payment Methods Info */}
        <div className="px-6 py-3 border-b border-border bg-secondary/50">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Tarjeta</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Apple Pay</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Google Pay</span>
            </div>
          </div>
        </div>

        {/* Embedded Checkout */}
        <div className="p-6">
          <div id="checkout" className="min-h-[400px]">
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ 
                fetchClientSecret,
                onComplete: handleCheckoutComplete
              }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="px-6 py-4 border-t border-border bg-secondary/30">
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>SSL Seguro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5" />
              <span>Entrega ~1 semana</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>2 años garantía</span>
            </div>
          </div>
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
          <span>Entrega ~1 semana</span>
          <span>•</span>
          <span>2 años garantía</span>
        </div>
      </div>
    </div>
  )
}
