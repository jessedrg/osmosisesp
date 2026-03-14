"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Cual es el precio del sistema de osmosis inversa?",
    a: "Tenemos varios modelos: Sistema Compacto desde 300€, Sistema 5 Etapas desde 270€, y Osmosis para Acuarios desde 189€. Todos con IVA incluido, envio gratuito y 2 años de garantia.",
  },
  {
    q: "Cuanto tiempo tarda la instalacion?",
    a: "La instalacion profesional tarda entre 2-3 horas. Un tecnico certificado instala el equipo bajo tu fregadero, conecta el grifo de diseño y te explica el funcionamiento. Sin obras ni complicaciones.",
  },
  {
    q: "Puedo instalarlo yo mismo?",
    a: "Si, el equipo viene con instrucciones detalladas y es apto para autoinstalacion si tienes conocimientos basicos de fontaneria. Tambien ofrecemos soporte tecnico por telefono durante el proceso.",
  },
  {
    q: "Cada cuanto hay que cambiar los filtros?",
    a: "Los filtros se cambian una vez al año. Ofrecemos un servicio de mantenimiento anual por 79€ que incluye cambio de todos los filtros, revision completa del equipo y visita del tecnico.",
  },
  {
    q: "El agua de osmosis es segura?",
    a: "Absolutamente. El agua de osmosis elimina el 99.9% de contaminantes: cal, cloro, metales pesados, nitratos y microplasticos. Es ideal para beber, cocinar, preparar cafe y cuidar de tu salud.",
  },
  {
    q: "Que garantia tiene el equipo?",
    a: "El equipo tiene 2 años de garantia completa. Durante este periodo, si hay cualquier problema tecnico, un tecnico te visitara sin coste adicional para solucionarlo.",
  },
  {
    q: "Haceis envios a toda España?",
    a: "Si, enviamos a toda España peninsula y Baleares con envio gratuito. El equipo llega en 7-14 dias laborables perfectamente embalado y protegido.",
  },
  {
    q: "Cual es la politica de devolucion?",
    a: "Tienes 14 dias desde la recepcion para devolver el equipo si no estas satisfecho. Te reembolsamos el 100% del importe sin preguntas.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
                FAQ
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground leading-[0.95] mb-6">
                Preguntas
                <br />
                <span className="italic font-light text-muted-foreground">frecuentes</span>
              </h2>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Todo lo que necesitas saber sobre nuestro sistema de osmosis inversa. Si tienes mas preguntas, contactanos.
              </p>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-border">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  >
                    <h3 className="text-sm sm:text-base font-sans font-medium text-foreground leading-relaxed pr-4 group-hover:text-muted-foreground transition-colors">
                      {faq.q}
                    </h3>
                    <div className="flex-shrink-0 mt-1">
                      {openIndex === i ? (
                        <Minus className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                      ) : (
                        <Plus className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                      )}
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      openIndex === i ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed pr-10">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
