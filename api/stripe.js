import stripe from 'stripe'

const stripeClient = stripe(process.env.VITE_STRIPE_API_SECRET)

export default async function (req, res) {
  try {
    if(req.method === 'POST') {
      const { currency, total } = req.body
      const { client_secret } = await stripeClient.paymentIntents.create({
        amount: total.amount,
        currency
      })
      res.send({ clientSecret: client_secret })
    }
  }
  catch {
    res.send({ error: 'Stripe Server Error'})
  }
}