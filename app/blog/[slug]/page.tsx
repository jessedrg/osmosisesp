import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BLOG_POSTS, getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog-data"
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) return { title: "No encontrado" }

  return {
    title: `${post.title} | OSMOSIS ESP`,
    description: post.description,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Find related posts (same category, excluding current)
  const related = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2)

  // Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "OSMOSIS ESP",
    },
    publisher: {
      "@type": "Organization",
      name: "OSMOSIS ESP",
      url: "https://xn--osmosisespaa-khb.com",
    },
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 lg:pt-32">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Blog
          </Link>
        </div>

        {/* Article Header */}
        <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.1] mt-4">
              {post.title}
            </h1>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-6">
              {post.description}
            </p>
            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border text-xs text-muted-foreground font-sans">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} de lectura
              </span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="border-t border-border">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
            <div className="space-y-12">
              {post.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="font-serif text-xl sm:text-2xl tracking-tight text-foreground leading-[1.2]">
                    {section.heading}
                  </h2>
                  <p className="text-sm text-muted-foreground font-sans leading-[1.8] mt-4">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="border-t border-border bg-secondary">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-20 text-center">
            <p className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
              {post.cta.text}
            </p>
            <Link
              href={post.cta.href}
              className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-all duration-300 mt-8"
            >
              {post.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans block mb-8">
                Artículos Relacionados
              </span>
              <div className="grid sm:grid-cols-2 gap-px bg-border">
                {related.map((relPost) => (
                  <Link
                    key={relPost.slug}
                    href={`/blog/${relPost.slug}`}
                    className="group bg-background p-8 lg:p-10"
                  >
                    <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans">
                      {relPost.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl tracking-tight text-foreground mt-3 leading-[1.2] group-hover:text-muted-foreground transition-colors">
                      {relPost.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans leading-relaxed mt-3 line-clamp-2">
                      {relPost.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-sans text-foreground group-hover:gap-3 transition-all">
                      Leer
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
