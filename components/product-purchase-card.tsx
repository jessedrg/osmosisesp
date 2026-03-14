'use client'

import { useState, useCallback, useEffect } from 'react'
import { ShoppingBag, Check, X, ArrowLeft, Shield, Truck, Award, CreditCard, Smartphone, Clock, Eye, Flame, Gift, RotateCcw } from 'lucide-react'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { startCheckoutSession } from '@/app/actions/stripe'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

// Simulated stock and viewers (consistent per session)
const getRandomStock = () => Math.floor(Math.random() * 5) + 3 // 3-7 units
const getRandomViewers = () => Math.floor(Math.random() * 8) + 4 // 4-11 viewers

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
  const [stock] = useState(() => getRandomStock())
  const [viewers] = useState(() => getRandomViewers())
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 33 })
  
  // Countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  
  const currentPrice = withInstallation ? instalacionPrice : soloPrice
  const productId = withInstallation ? `${category}-instalacion` : `${category}-solo`
  const savings = originalPrice ? originalPrice - currentPrice : 0
  const savingsPercent = originalPrice ? Math.round((savings / originalPrice) * 100) : 0
  
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
              <span>Entrega 7-14 dias</span>
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
    <div className="bg-card p-8 border border-border relative overflow-hidden">
      {/* Discount Badge */}
      {savingsPercent > 0 && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1.5">
          -{savingsPercent}%
        </div>
      )}

      {/* Tag */}
      {tag && (
        <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-accent font-medium mb-4">
          {tag}
        </span>
      )}

      {/* Urgency: Limited Time Offer */}
      <div className="bg-red-50 border border-red-200 p-3 mb-6">
        <div className="flex items-center gap-2 text-red-600 mb-1">
          <Clock className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wide">Oferta por tiempo limitado</span>
        </div>
        <div className="flex items-center gap-1 text-red-700 font-mono text-lg font-bold">
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span>:</span>
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span>:</span>
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      </div>
      
      {/* Price */}
      <div className="mb-4">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-5xl text-gradient-water">{currentPrice}€</span>
          {originalPrice && (
            <span className="text-xl text-muted-foreground line-through">
              {originalPrice}€
            </span>
          )}
        </div>
        {savings > 0 && (
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1">
              AHORRAS {savings}€
            </span>
          </div>
        )}
        <p className="text-sm text-muted-foreground mt-2">IVA incluido - Envio GRATIS</p>
      </div>

      {/* Social Proof: Viewers & Stock */}
      <div className="flex items-center gap-4 mb-6 text-sm">
        <div className="flex items-center gap-1.5 text-orange-600">
          <Eye className="w-4 h-4" />
          <span className="font-medium">{viewers} personas mirando ahora</span>
        </div>
        <div className="flex items-center gap-1.5 text-red-600">
          <Flame className="w-4 h-4" />
          <span className="font-medium">Solo {stock} unidades</span>
        </div>
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
        className="group w-full relative inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-accent/90 transition-all duration-300 overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-3">
          <ShoppingBag className="w-4 h-4" />
          Comprar Ahora - {currentPrice}€
        </span>
        <span className="absolute inset-0 water-shimmer" />
      </button>

      {/* Money Back Guarantee */}
      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-green-600">
        <RotateCcw className="w-4 h-4" />
        <span className="font-medium">14 dias de devolucion garantizada</span>
      </div>

      {/* Trust badges */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-[10px] text-muted-foreground">Pago seguro</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Truck className="w-5 h-5 text-accent" />
            <span className="text-[10px] text-muted-foreground">Envio 7-14 dias</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-[10px] text-muted-foreground">2 años garantia</span>
          </div>
        </div>
      </div>

      {/* Recent Purchase Notification */}
      <div className="mt-4 bg-secondary p-3 flex items-start gap-3">
        <Gift className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
        <div className="text-xs">
          <p className="font-medium">Maria de Madrid compro hace 2 horas</p>
          <p className="text-muted-foreground">Sistema Compacto con instalacion</p>
        </div>
      </div>
    </div>
  )
}
