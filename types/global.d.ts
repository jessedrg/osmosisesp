// Google Ads gtag type declaration
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js',
      targetId: string | Date,
      config?: {
        send_to?: string
        value?: number
        currency?: string
        transaction_id?: string
        [key: string]: unknown
      }
    ) => void
    dataLayer: unknown[]
  }
}

export {}
