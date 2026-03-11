import { Navbar } from "@/components/navbar"
import { HomeHero } from "@/components/home-hero"
import { HowItWorks } from "@/components/how-it-works"
import { ReviewsSection } from "@/components/reviews-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Sistema de Ósmosis Inversa Compacto",
  description: "Sistema de ósmosis inversa 5 etapas con panel LED, filtros click & twist, grifo incluido. Instalación profesional. Garantía 2 años.",
  brand: { "@type": "Brand", name: "osmosis esp" },
  image: ["https://osmosisesp.com/He23d99f93a3040acb8720554edb60e11k.jpg", "https://osmosisesp.com/H47aa1cc1901e4e8cb35c7a857893eb64H.jpg", "https://osmosisesp.com/He931e67f2b5b4d5999ed74d013fdd560w.jpg"],
  offers: {
    "@type": "Offer",
    price: "508",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
    itemCondition: "https://schema.org/NewCondition",
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "EUR" },
      shippingDestination: { "@type": "DefinedRegion", addressCountry: "ES" },
      deliveryTime: { "@type": "ShippingDeliveryTime", handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3, unitCode: "DAY" }, transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 5, unitCode: "DAY" } }
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "ES",
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 14,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn"
    }
  },
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <HowItWorks />
        <ReviewsSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </>
  )
}
