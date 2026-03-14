import { Navbar } from "@/components/navbar"
import { HomeHero } from "@/components/home-hero"
import { ProductSection } from "@/components/product-section"
import { HowItWorks } from "@/components/how-it-works"
import { ReviewsSection } from "@/components/reviews-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Sistema de Osmosis Inversa Premium",
  description: "Sistema de osmosis inversa de alta gama con panel LED tactil, filtros de cambio rapido y diseño minimalista. Tecnologia de 5 etapas con bomba integrada. Garantia 2 años.",
  brand: { "@type": "Brand", name: "OSMOSIS ESP" },
  image: [
    "https://xn--osmosisespaa-khb.com/He23d99f93a3040acb8720554edb60e11k.jpg",
    "https://xn--osmosisespaa-khb.com/H47aa1cc1901e4e8cb35c7a857893eb64H.jpg",
    "https://xn--osmosisespaa-khb.com/He931e67f2b5b4d5999ed74d013fdd560w.jpg"
  ],
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
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "DAY" },
        transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "DAY" }
      }
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200"
  }
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OSMOSIS ESP",
  description: "Sistemas de purificacion de agua premium. Osmosis inversa de alta gama para hogares exigentes.",
  url: "https://xn--osmosisespaa-khb.com",
  logo: "https://xn--osmosisespaa-khb.com/icon.svg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34711267223",
    contactType: "customer service",
    availableLanguage: "Spanish"
  },
  areaServed: {
    "@type": "Country",
    name: "Spain"
  }
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <ProductSection />
        <HowItWorks />
        <ReviewsSection />
        <FaqSection />
      </main>
      <Footer />
      <script 
        type="application/ld+json" 
        suppressHydrationWarning 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} 
      />
      <script 
        type="application/ld+json" 
        suppressHydrationWarning 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} 
      />
    </>
  )
}
