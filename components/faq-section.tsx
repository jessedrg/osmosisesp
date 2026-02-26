"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Cuanto cuesta instalar un sistema de osmosis?",
    a: "El precio depende del modelo y las caracteristicas de tu vivienda. Un equipo de osmosis domestica basico cuesta entre 300-600€ instalado. Equipos premium con bomba y remineralizacion entre 600-1.200€. osmosis esp te presenta presupuestos detallados sin compromiso.",
  },
  {
    q: "Cuanto tiempo tarda la instalacion?",
    a: "La instalacion de un equipo de osmosis domestica tarda entre 2-3 horas. No requiere obras ni permisos. El tecnico conecta el equipo bajo el fregadero y te explica el funcionamiento. Agua pura desde el primer momento.",
  },
  {
    q: "El servicio de osmosis esp tiene algun coste?",
    a: "No. El presupuesto y asesoramiento es 100% gratuito. Solo pagas si decides instalar. Sin comisiones, sin costes ocultos.",
  },
  {
    q: "Cada cuanto hay que cambiar los filtros?",
    a: "Los filtros de sedimentos y carbon se cambian cada 6-12 meses. La membrana de osmosis dura 2-4 años con buen mantenimiento. osmosis esp ofrece servicio de mantenimiento anual que incluye todos los filtros.",
  },
  {
    q: "El agua de osmosis es segura para beber?",
    a: "Si, el agua de osmosis es perfectamente segura. Elimina contaminantes pero mantiene los minerales esenciales. Muchos equipos incluyen remineralizacion para un sabor optimo.",
  },
  {
    q: "Trabajais en toda España?",
    a: "Si. Tenemos tecnicos certificados en mas de 300 municipios de España. Barcelona, Tarragona, Lleida y Girona.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">FAQ</p>
      <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-foreground mb-16">
        Preguntas frecuentes
      </h2>

      <div className="border-t border-border">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-border">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
            >
              <h3 className="text-sm font-sans font-medium text-foreground leading-relaxed group-hover:opacity-70 transition-opacity">
                {faq.q}
              </h3>
              <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96 pb-6" : "max-h-0"}`}>
              <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed -mt-2">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
