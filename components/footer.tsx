import Link from "next/link"
import { MessageCircle, Mail, MapPin } from "lucide-react"

const WA_URL = "https://wa.me/34711267223?text=Hola%2C%20me%20interesa%20instalar%20un%20sistema%20de%20%C3%B3smosis%20inversa."

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-serif italic text-primary-foreground tracking-tight">osmosis<span className="opacity-70">esp</span></Link>
            <p className="text-primary-foreground/60 text-xs mt-4 leading-relaxed max-w-xs">
              Instalación de sistemas de ósmosis inversa en España. Agua pura del grifo para tu hogar.
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 mb-4">Servicios</p>
            <ul className="space-y-2.5">
              {["Ósmosis inversa", "Ósmosis doméstica", "Filtros agua", "Descalcificadores", "Mantenimiento"].map(s => (
                <li key={s}><Link href="/" className="text-xs text-primary-foreground/70 hover:text-background transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 mb-4">Ciudades</p>
            <ul className="space-y-2.5">
              {["Barcelona", "Terrassa", "Sabadell", "Badalona", "Mataró", "Granollers"].map(c => (
                <li key={c}><Link href={`/osmosis-inversa/${c.toLowerCase()}/`} className="text-xs text-primary-foreground/70 hover:text-background transition-colors">{c}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 mb-4">Contacto</p>
            <ul className="space-y-3">
              <li>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-primary-foreground/70 hover:text-background transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hola@osmosisespana.com" className="flex items-center gap-2 text-xs text-primary-foreground/70 hover:text-background transition-colors">
                  <Mail className="w-3.5 h-3.5" /> hola@osmosisespana.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-primary-foreground/70">
                <MapPin className="w-3.5 h-3.5" /> España
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-primary-foreground/40">© {new Date().getFullYear()} osmosis esp. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-[10px] text-primary-foreground/40">
            <Link href="/" className="hover:text-primary-foreground/70 transition-colors">Privacidad</Link>
            <Link href="/" className="hover:text-primary-foreground/70 transition-colors">Legal</Link>
            <Link href="/" className="hover:text-primary-foreground/70 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
