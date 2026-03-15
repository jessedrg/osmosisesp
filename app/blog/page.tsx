import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ALL_BLOG_POSTS } from "@/lib/blog-data"
import { ArrowRight, Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | OSMOSIS ESP",
  description: "Guías, comparativas y consejos sobre osmosis inversa. Todo lo que necesitas saber sobre purificación de agua para el hogar.",
  keywords: "blog osmosis inversa, guia osmosis inversa, filtros osmosis inversa, mantenimiento osmosis inversa, instalacion osmosis inversa",
  openGraph: {
    title: "Blog | OSMOSIS ESP",
    description: "Guías, comparativas y consejos sobre osmosis inversa para el hogar.",
    type: "website",
  },
}

export default function BlogPage() {
  const featured = ALL_BLOG_POSTS[0]
  const rest = ALL_BLOG_POSTS.slice(1)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-4">
              Blog
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[0.95]">
              Guías y
              <br />
              <span className="italic font-light text-muted-foreground">consejos</span>
            </h1>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-6 max-w-lg">
              Todo lo que necesitas saber sobre osmosis inversa, purificación de agua, mantenimiento y más.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <Link href={`/blog/${featured.slug}`} className="group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans">{featured.category}</span>
                  <p className="font-serif text-2xl lg:text-3xl text-foreground mt-4 leading-tight">{featured.title}</p>
                </div>
              </div>
              <div>
                <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans border border-border px-3 py-1 mb-6">
                  Destacado
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-foreground leading-[1.1] group-hover:text-muted-foreground transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-4 max-w-md">
                  {featured.description}
                </p>
                <div className="flex items-center gap-6 mt-6 text-xs text-muted-foreground font-sans">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(featured.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-sans text-foreground group-hover:gap-4 transition-all">
                  Leer Artículo
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="border-t border-border bg-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-8">
              Todos los Artículos
            </span>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-background p-8 lg:p-10 flex flex-col"
                >
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl tracking-tight text-foreground mt-3 leading-[1.2] group-hover:text-muted-foreground transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed mt-3 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-sans">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "short" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground text-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-background leading-[0.95]">
              ¿Listo para agua pura?
            </h2>
            <p className="text-sm text-background/60 font-sans mt-6 max-w-xl mx-auto leading-relaxed">
              Descubre nuestros sistemas de osmosis inversa premium. Envío gratuito, instalación profesional y 2 años de garantía.
            </p>
            <Link
              href="/productos"
              className="inline-flex items-center gap-3 border border-background/30 text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:border-background transition-all duration-300 mt-10"
            >
              Ver Productos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
