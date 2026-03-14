"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/34711267223?text=Hola%2C%20me%20interesa%20un%20sistema%20de%20osmosis%20inversa"

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
    </a>
  )
}

export default WhatsAppButton
