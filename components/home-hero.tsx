import { MessageCircle, CheckCircle } from "lucide-react"

const WA_URL = "https://wa.me/34711267223?text=Hola%2C%20me%20interesa%20instalar%20un%20sistema%20de%20%C3%B3smosis%20inversa."

export function HomeHero() {
  return (
    <section className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Images */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 bg-neutral-800 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/He23d99f93a3040acb8720554edb60e11k.jpg" 
                  alt="Sistema de ósmosis inversa completo con filtros, grifo y accesorios" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="bg-neutral-800 p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/H47aa1cc1901e4e8cb35c7a857893eb64H.jpg" 
                  alt="Equipo de ósmosis inversa con panel LED táctil" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="bg-neutral-800 p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/He931e67f2b5b4d5999ed74d013fdd560w.jpg" 
                  alt="Interior del equipo con filtros de cambio rápido" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Product Info + Price */}
          <div className="order-1 lg:order-2">
            {/* Discount badge */}
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 text-xs font-sans font-bold mb-6">
              🔥 OFERTA LIMITADA -30%
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight text-background leading-[0.95]">
              Sistema de Ósmosis Inversa
              <br />
              <span className="italic font-light text-background/60">Compacto</span>
            </h1>
            <p className="text-sm sm:text-base text-background/50 mt-6 font-sans leading-relaxed max-w-lg">
              Equipo de última generación con panel táctil LED, filtros de cambio rápido y diseño minimalista. Cabe bajo cualquier fregadero.
            </p>

            {/* Price */}
            <div className="mt-8 flex items-end gap-4">
              <span className="font-serif text-5xl sm:text-6xl text-background">508€</span>
              <div className="mb-1">
                <span className="text-xl text-background/40 line-through font-sans">725€</span>
                <span className="text-sm text-background/50 font-sans ml-2">IVA incl.</span>
              </div>
            </div>
            <p className="text-xs text-background/40 font-sans mt-2">Instalación 79€ aparte · Garantía 2 años</p>

            {/* Features */}
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Ósmosis 5 etapas con bomba",
                "Panel LED táctil",
                "Grifo de diseño incluido",
                "Filtros click & twist",
                "Garantía 2 años",
                "Soporte WhatsApp",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-xs font-sans text-background/70">
                  <CheckCircle className="w-3.5 h-3.5 text-background/50 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mt-10 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-background text-foreground px-10 py-5 text-sm font-sans font-medium hover:opacity-90 transition-opacity">
              <MessageCircle className="w-4 h-4" /> Pedir presupuesto gratis
            </a>

            {/* Trust */}
            <div className="mt-8 flex items-center gap-6 text-xs text-background/40 font-sans">
              <span>✓ Envío gratis</span>
              <span>✓ Instalación 2-3h</span>
              <span>✓ +1.200 instalaciones</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
