import {loadStripe} from '@stripe/stripe-js'

const stripe = await loadStripe(import.meta.env.VITE_STRIPE_API_KEY)

export const paymentData = {
  country: 'US',
  currency: 'usd',
  displayItems: [
    { label: 'Super Mario Kart x 1', amount: 35.00 },
    { label: 'Super Mario World x 1', amount: 35.00 },
    { label: 'Subtotal', amount: 70.00 },
    { label: 'Tax', amount: 1.25 }
  ],
  total: { label: 'TOTAL', amount: 71.25 },
  requestPayerName: true,
  requestPayerPhone: true,
  requestPayerEmail: true
}

export default stripe