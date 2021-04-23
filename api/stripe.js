import stripe from 'stripe'

const stripeClient = stripe(process.env.VITE_STRIPE_API_SECRET)

export default async function (req, res) {
  console.log('req', req.body)
  if(req.method === 'POST') {
    // const { clientSecret } = await stripeClient.paymentIntents.create({
    //   amount: paymentData.total.amount,
    //   currency: paymentData.currency
    // })
  }
}