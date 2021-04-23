import {loadStripe} from '@stripe/stripe-js'
import axios from 'axios'

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
  try {
    const stripeClient = await loadStripe(import.meta.env.VITE_STRIPE_API_KEY)
    
    const paymentRequest = stripeClient.paymentRequest(paymentData)
    const available = await paymentRequest.canMakePayment()
    
    if(available) {
      await paymentRequest.show()

      paymentRequest.on('cancel', () => console.warn('Cancelled Payment Request'))

      paymentRequest.on('paymentmethod', async ({ paymentMethod, complete }) => {

          const paymentResponse = await axios.post('/api/stripe', paymentData)
          const { clientSecret } = paymentResponse.data
          
          const { paymentIntent, error: confirmError } = await stripeClient.confirmCardPayment(
            clientSecret,
            { payment_method: paymentMethod.id },
          )

          if (confirmError) {
            complete('fail')
            console.log('payment failed')       
          }
          else {
            complete('success')
            console.log('payment succeeded')
          }
      })
    }
    else {
      alert('Browser Payment Request Not Supported')
    }
  }
  catch {
    alert('Something bad happened.')
  }
}