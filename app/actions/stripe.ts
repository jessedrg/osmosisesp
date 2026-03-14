'use server'

// Stripe Checkout - Production Ready

import { stripe } from '../../lib/stripe'
import { PRODUCTS } from '../../lib/products'

export async function startCheckoutSession(productId: string) {
  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`)
  }

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    redirect_on_completion: 'never',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: product.name,
            description: product.description,
            images: product.images || [],
          },
          unit_amount: product.priceInCents,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    // Embedded Checkout automatically enables Apple Pay, Google Pay, Link, and cards
    // Billing address collection for better fraud prevention
    billing_address_collection: 'auto',
    // Shipping address collection - only Spain
    shipping_address_collection: {
      allowed_countries: ['ES'],
    },
    // Phone number for shipping updates
    phone_number_collection: {
      enabled: true,
    },
  })

  return session.client_secret
}
