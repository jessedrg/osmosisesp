"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "¿Cuánto cuesta el sistema de ósmosis inversa?",
    a: "Nuestro equipo de ósmosis inversa compacto cuesta 508€ (IVA incluido). Precio original 725€, ahora con 30% de descuento. La instalación profesional es de 79€ aparte. Incluye equipo de 5 etapas con bomba, panel LED, grifo de diseño y garantía de 2 años.",
  },
  {
    q: "¿Cuánto tiempo tarda la instalación?",
    a: "La instalación tarda entre 2-3 horas. Un técnico certificado instala el equipo bajo tu fregadero, conecta el grifo independiente y te explica el funcionamiento. Sin obras, sin ruido, sin complicaciones.",
  },
  {
    q: "¿El presupuesto tiene algún coste?",
    a: "No. El asesoramiento por WhatsApp es 100% gratuito. Te explicamos todo sin compromiso. Solo pagas si decides comprar el equipo.",
  },
  {
    q: "¿Cada cuánto hay que cambiar los filtros?",
    a: "Los filtros se cambian una vez al año. Ofrecemos servicio de mantenimiento anual por 79€ que incluye cambio de todos los filtros, revisión del equipo y visita del técnico.",
  },
  {
    q: "¿El agua de ósmosis es segura para beber?",
    a: "Sí, el agua de ósmosis es perfectamente segura y de la mejor calidad. Elimina el 99% de contaminantes: cal, cloro, metales pesados, nitratos y microplásticos. Ideal para beber, cocinar y preparar café o té.",
  },
  {
    q: "¿Qué garantía tiene el equipo?",
    a: "El equipo tiene 2 años de garantía completa. Además, tienes soporte por WhatsApp para cualquier duda. Si hay algún problema, un técnico te visita sin coste adicional durante el periodo de garantía.",
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
