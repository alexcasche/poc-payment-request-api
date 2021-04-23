import {loadStripe} from '@stripe/stripe-js'
import fetch from 'isomorphic-fetch'
import axios from 'axios'
// import stripe from 'stripe'

const stripeClient = loadStripe(import.meta.env.VITE_STRIPE_API_KEY)
// const stripeServer = stripe(import.meta.env.VITE_STRIPE_API_SECRET)

const paymentData = {
  country: 'US',
  currency: 'usd',
  displayItems: [
    { label: 'Super Mario Kart x 1', amount: 3500 },
    { label: 'Super Mario World x 1', amount: 3500 },
    { label: 'Subtotal', amount: 7000 },
    { label: 'Tax', amount: 125 }
  ],
  total: { label: 'TOTAL', amount: 7125 },
  requestPayerName: true,
  requestPayerPhone: true,
  requestPayerEmail: true
}

export default async function handleStripeCheckout() {
  const response = await axios.get('/api/stripe')
  console.log('data', response.data)


  // const paymentRequest = stripeClient.paymentRequest(paymentData);
  // const available = await paymentRequest.canMakePayment()
  // if(available) {
  //   await paymentRequest.show()
  //   const { clientSecret } = await stripeServer.paymentIntents.create({
  //     amount: paymentData.total.amount,
  //     currency: paymentData.currency
  //   })
  //   paymentRequest.on('cancel', () => console.warn('Cancelled Payment Request'))
  //   paymentRequest.on('paymentmethod', async ({ paymentMethod, complete }) => {
  //     const { paymentIntent, error: confirmError } = await stripeClient.confirmCardPayment(
  //       clientSecret,
  //       { payment_method: paymentMethod.id },
  //       { handleActions: false }
  //     )
  //     if (confirmError) complete('fail')
  //     else complete('success')
  //   })
  // }
  // else {
  //   alert('Browser Payment Request Not Supported')
  // }
}