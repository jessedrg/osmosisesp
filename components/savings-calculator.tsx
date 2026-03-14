'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Calculator, Droplets, Coins, TrendingUp, Leaf, ArrowRight } from 'lucide-react'

export function SavingsCalculator() {
  const [people, setPeople] = useState(3)
  const [bottlesPerWeek, setBottlesPerWeek] = useState(4)
  
  // Prices
  const BOTTLE_PRICE = 1.20 // 5L bottle average price
  const OSMOSIS_PRICE = 508
  const YEARLY_MAINTENANCE = 79
  const LITERS_PER_BOTTLE = 5
  
  const calculations = useMemo(() => {
    const weeklyLiters = bottlesPerWeek * LITERS_PER_BOTTLE
    const yearlyLiters = weeklyLiters * 52
    const yearlyCostBottles = bottlesPerWeek * BOTTLE_PRICE * 52
    
    // Osmosis costs
    const year1Cost = OSMOSIS_PRICE + YEARLY_MAINTENANCE
    const year2Cost = YEARLY_MAINTENANCE
    const year3Cost = YEARLY_MAINTENANCE
    
    // Savings
    const savings1Year = yearlyCostBottles - year1Cost
    const savings3Years = (yearlyCostBottles * 3) - (year1Cost + year2Cost + year3Cost)
    const savings5Years = (yearlyCostBottles * 5) - (year1Cost + (YEARLY_MAINTENANCE * 4))
    
    // Plastic bottles saved (assuming 1.5L bottles for calculation)
    const bottlesSaved = Math.round((yearlyLiters / 1.5) * 5)
    
    return {
      weeklyLiters,
      yearlyLiters,
      yearlyCostBottles,
      savings1Year,
      savings3Years,
      savings5Years,
      bottlesSaved,
    }
  }, [people, bottlesPerWeek])
  
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-sans block mb-6">
            Calculadora de Ahorro
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-background leading-[0.95]">
            Descubre cuanto
            <br />
            <span className="italic font-light text-accent">puedes ahorrar</span>
          </h2>
          <p className="text-sm text-background/60 font-sans mt-6 max-w-xl mx-auto">
            Calcula el ahorro real de cambiar el agua embotellada por osmosis inversa
          </p>
        </div>
        
        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Inputs */}
          <div className="bg-background/5 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-5 h-5 text-accent" />
              <h3 className="font-serif text-xl text-background">Tu consumo actual</h3>
            </div>
            
            {/* People slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-background/70 font-sans">Personas en casa</label>
                <span className="font-serif text-2xl text-accent">{people}</span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="w-full h-2 bg-background/20 appearance-none cursor-pointer accent-accent"
                style={{
                  background: `linear-gradient(to right, oklch(0.55 0.14 220) 0%, oklch(0.55 0.14 220) ${((people - 1) / 7) * 100}%, rgba(255,255,255,0.2) ${((people - 1) / 7) * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-background/40 mt-1">
                <span>1</span>
                <span>8</span>
              </div>
            </div>
            
            {/* Bottles slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-background/70 font-sans">Garrafas 5L por semana</label>
                <span className="font-serif text-2xl text-accent">{bottlesPerWeek}</span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={bottlesPerWeek}
                onChange={(e) => setBottlesPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-background/20 appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, oklch(0.55 0.14 220) 0%, oklch(0.55 0.14 220) ${((bottlesPerWeek - 1) / 11) * 100}%, rgba(255,255,255,0.2) ${((bottlesPerWeek - 1) / 11) * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-background/40 mt-1">
                <span>1</span>
                <span>12</span>
              </div>
            </div>
            
            {/* Current spending */}
            <div className="border-t border-background/10 pt-6">
              <p className="text-sm text-background/50 font-sans mb-2">Tu gasto anual en agua embotellada:</p>
              <p className="font-serif text-4xl text-background">
                {calculations.yearlyCostBottles.toFixed(0)}€<span className="text-lg text-background/50">/año</span>
              </p>
              <p className="text-xs text-background/40 mt-2">
                {calculations.yearlyLiters.toLocaleString()} litros al año · {calculations.weeklyLiters}L/semana
              </p>
            </div>
          </div>
          
          {/* Results */}
          <div className="space-y-4">
            {/* Savings cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-background/5 p-5 text-center">
                <p className="text-[10px] tracking-[0.2em] uppercase text-background/50 mb-2">1 Año</p>
                <p className={`font-serif text-2xl ${calculations.savings1Year >= 0 ? 'text-green-400' : 'text-accent'}`}>
                  {calculations.savings1Year >= 0 ? '+' : ''}{calculations.savings1Year.toFixed(0)}€
                </p>
              </div>
              <div className="bg-accent/20 p-5 text-center border border-accent/30">
                <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-2">3 Años</p>
                <p className="font-serif text-2xl text-accent">
                  +{calculations.savings3Years.toFixed(0)}€
                </p>
              </div>
              <div className="bg-background/5 p-5 text-center">
                <p className="text-[10px] tracking-[0.2em] uppercase text-background/50 mb-2">5 Años</p>
                <p className="font-serif text-2xl text-green-400">
                  +{calculations.savings5Years.toFixed(0)}€
                </p>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="bg-background/5 p-6">
              <h4 className="text-sm font-sans text-background/70 mb-4">Ademas del ahorro economico:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/20 flex items-center justify-center">
                    <Droplets className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-background">Agua pura ilimitada</p>
                    <p className="text-xs text-background/50">Sin cargar garrafas nunca mas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/20 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-background">{calculations.bottlesSaved.toLocaleString()} botellas de plastico</p>
                    <p className="text-xs text-background/50">Ahorro de plastico en 5 años</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-background">Mejor sabor garantizado</p>
                    <p className="text-xs text-background/50">Cafe, te y comidas mas sabrosos</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <Link 
              href="/productos/compacto"
              className="group flex items-center justify-between bg-accent text-accent-foreground p-6 hover:bg-accent/90 transition-all duration-300"
            >
              <div>
                <p className="text-sm font-sans">Sistema Compacto 500GPD</p>
                <p className="font-serif text-2xl mt-1">Desde 508€</p>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <p className="text-xs text-background/40 text-center">
              Envio gratis · 2 años garantia · Instalacion disponible (+79€)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
