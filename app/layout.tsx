import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["300", "400", "500", "600"], display: "swap" })

export const metadata: Metadata = {
  title: "osmosis esp — Ósmosis Inversa en España",
  description: "Instalación de sistemas de ósmosis inversa en España. Agua pura del grifo, sin cal ni impurezas. Presupuesto gratis.",
  keywords: "ósmosis inversa, ósmosis doméstica, filtro agua, descalcificador, mantenimiento ósmosis, agua pura",
  openGraph: {
    title: "osmosis esp — Ósmosis Inversa en España",
    description: "Instalación de sistemas de ósmosis inversa. Agua pura del grifo.",
    type: "website",
    siteName: "osmosis esp",
    images: [{ url: "/og", width: 1200, height: 630, alt: "osmosis esp — Ósmosis Inversa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "osmosis esp — Ósmosis Inversa",
    description: "Instalación de sistemas de ósmosis inversa en España.",
    images: ["/og"],
  },
  icons: [{ rel: "icon", url: "/icon.svg", type: "image/svg+xml" }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
