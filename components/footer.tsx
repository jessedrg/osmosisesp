import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-background/10" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase font-sans font-medium text-background">
                OSMOSIS<span className="text-accent">ESP</span>
              </span>
            </Link>
            <p className="text-sm text-background/50 font-sans leading-relaxed mt-6 max-w-xs">
              Sistemas de osmosis inversa premium para hogares que valoran la pureza. Diseño minimalista, tecnologia avanzada.
            </p>
            {/* Large decorative text */}
            <p className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.85] text-accent/20 mt-12 tracking-tight italic">
              Agua
              <br />
              Pura
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-background/30 font-sans block mb-6">
              Navegacion
            </span>
            <ul className="space-y-3">
              {[
                { label: "Producto", href: "#productos" },
                { label: "Proceso", href: "#proceso" },
                { label: "Opiniones", href: "#opiniones" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-background/60 font-sans hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ciudades */}
          <div className="lg:col-span-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-background/30 font-sans block mb-6">
              Ciudades
            </span>
            <ul className="space-y-3">
              {["Barcelona", "Terrassa", "Sabadell", "Badalona", "Mataro", "Granollers"].map((city) => (
                <li key={city}>
                  <Link 
                    href={`/osmosis-inversa/${city.toLowerCase()}`} 
                    className="text-sm text-background/60 font-sans hover:text-background transition-colors"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 lg:col-start-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-background/30 font-sans block mb-6">
              Contacto
            </span>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:hola@osmosisesp.com" 
                  className="flex items-center gap-3 text-sm text-background/60 font-sans hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  hola@osmosisesp.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+34711267223" 
                  className="flex items-center gap-3 text-sm text-background/60 font-sans hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  +34 711 267 223
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/60 font-sans">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                España
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-16 lg:mt-24 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-[0.15em] uppercase text-background/30 font-sans">
            © {new Date().getFullYear()} OSMOSIS ESP. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link href="/" className="text-[10px] tracking-[0.15em] uppercase text-background/30 font-sans hover:text-background/60 transition-colors">
              Privacidad
            </Link>
            <Link href="/" className="text-[10px] tracking-[0.15em] uppercase text-background/30 font-sans hover:text-background/60 transition-colors">
              Legal
            </Link>
            <Link href="/" className="text-[10px] tracking-[0.15em] uppercase text-background/30 font-sans hover:text-background/60 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
