"use client"

import { useState } from "react"
import { ShoppingBag, Check, X } from "lucide-react"
import Checkout from "./checkout"

interface ProductOption {
  id: string
  label: string
  price: number
  originalPrice?: number
}

interface ProductSelectorProps {
  soloEquipo: ProductOption
  conInstalacion: ProductOption
  features: string[]
  included: string[]
}

export default function ProductSelector({
  soloEquipo,
  conInstalacion,
  features,
  included,
}: ProductSelectorProps) {
  const [withInstallation, setWithInstallation] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const currentOption = withInstallation ? conInstalacion : soloEquipo
  const currentProductId = currentOption.id

  const handleBuy = () => {
    setShowCheckout(true)
  }

  if (showCheckout) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-6 border-b border-border">
          <div>
            <p className="text-sm text-muted-foreground">Producto seleccionado</p>
            <p className="font-serif text-xl">{currentOption.label}</p>
            <p className="text-2xl font-serif mt-1">{currentOption.price}€</p>
          </div>
          <button
            onClick={() => setShowCheckout(false)}
            className="p-2 hover:bg-secondary transition-colors"
            aria-label="Cerrar checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <Checkout productId={currentProductId} />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Switch */}
      <div className="flex flex-col gap-3">
        <button
          onClick={() => setWithInstallation(false)}
          className={`flex items-center justify-between p-4 border transition-all duration-200 ${
            !withInstallation
              ? "border-foreground bg-foreground/5"
              : "border-border hover:border-foreground/30"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                !withInstallation ? "border-foreground bg-foreground" : "border-muted-foreground"
              }`}
            >
              {!withInstallation && <Check className="w-3 h-3 text-background" />}
            </div>
            <span className="text-sm font-sans">Solo Equipo</span>
          </div>
          <div className="text-right">
            {soloEquipo.originalPrice && (
              <span className="text-sm text-muted-foreground line-through mr-2">
                {soloEquipo.originalPrice}€
              </span>
            )}
            <span className="text-lg font-serif">{soloEquipo.price}€</span>
          </div>
        </button>

        <button
          onClick={() => setWithInstallation(true)}
          className={`flex items-center justify-between p-4 border transition-all duration-200 ${
            withInstallation
              ? "border-foreground bg-foreground/5"
              : "border-border hover:border-foreground/30"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                withInstallation ? "border-foreground bg-foreground" : "border-muted-foreground"
              }`}
            >
              {withInstallation && <Check className="w-3 h-3 text-background" />}
            </div>
            <div className="text-left">
              <span className="text-sm font-sans">Con Instalacion Profesional</span>
              <span className="block text-xs text-muted-foreground">Tecnico certificado en tu hogar</span>
            </div>
          </div>
          <div className="text-right">
            {conInstalacion.originalPrice && (
              <span className="text-sm text-muted-foreground line-through mr-2">
                {conInstalacion.originalPrice}€
              </span>
            )}
            <span className="text-lg font-serif">{conInstalacion.price}€</span>
          </div>
        </button>
      </div>

      {/* Price Display */}
      <div className="flex items-baseline gap-3 pt-4 border-t border-border">
        <span className="text-4xl font-serif">{currentOption.price}€</span>
        {currentOption.originalPrice && (
          <span className="text-lg text-muted-foreground line-through">
            {currentOption.originalPrice}€
          </span>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check className="w-4 h-4 mt-0.5 text-foreground flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Included */}
      <div className="pt-6 border-t border-border">
        <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Incluido en el pack
        </p>
        <ul className="space-y-2">
          {included.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
              {item}
            </li>
          ))}
          {withInstallation && (
            <li className="flex items-center gap-2 text-sm text-foreground font-medium">
              <span className="w-1 h-1 bg-foreground rounded-full" />
              Instalacion profesional por tecnico certificado
            </li>
          )}
        </ul>
      </div>

      {/* CTA */}
      <div className="pt-8">
        <button
          onClick={handleBuy}
          className="group w-full inline-flex items-center justify-center gap-3 bg-foreground text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-all duration-300"
        >
          <ShoppingBag className="w-4 h-4" />
          Comprar Ahora
        </button>
      </div>
    </div>
  )
}
