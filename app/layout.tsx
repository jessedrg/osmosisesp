import type { Metadata, Viewport } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["300", "400", "500", "600", "700"], display: "swap" })

export const viewport: Viewport = {
  themeColor: "#1a1a18",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "OSMOSIS ESP — Sistemas de Purificación de Agua Premium",
  description: "Sistemas de ósmosis inversa de alta gama para hogares que valoran la pureza. Diseño minimalista, tecnología avanzada, instalación profesional. Agua cristalina desde el primer día.",
  keywords: "ósmosis inversa premium, sistema purificación agua, filtro agua lujo, ósmosis doméstica España, agua pura hogar",
  openGraph: {
    title: "OSMOSIS ESP — Purificación de Agua Premium",
    description: "Sistemas de ósmosis inversa de alta gama. Diseño minimalista, tecnología avanzada.",
    type: "website",
    siteName: "OSMOSIS ESP",
    images: [{ url: "/og", width: 1200, height: 630, alt: "OSMOSIS ESP — Agua Pura" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OSMOSIS ESP — Agua Pura",
    description: "Sistemas de ósmosis inversa premium para hogares exigentes.",
    images: ["/og"],
  },
  icons: [{ rel: "icon", url: "/icon.svg", type: "image/svg+xml" }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        {/* Google Ads Conversion Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16741652529"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16741652529');
            `,
          }}
        />
      </head>
      <body className="overflow-x-hidden">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
