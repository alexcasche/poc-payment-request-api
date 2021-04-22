export default {
  supportedPaymentMethods: [
    { supportedMethods: 'basic-card' }
  ],
  paymentDetails: {
    displayItems: [
      {
        label: 'Super Mario Kart x 1',
        amount: { currency: 'USD', value: 35.00 }
      },
      {
        label: 'Super Mario World x 1',
        amount: { currency: 'USD', value: 35.00 }
      },
      {
        label: 'Subtotal',
        amount: { currency: 'USD', value: 70.00 },
      }, 
      {
        label: 'Tax',
        amount: { currency: 'USD', value: 1.25 }
      }
    ],
    total: {
      label: 'TOTAL',
      amount: { currency: 'USD', value: 71.25 }
    }
  },
  options: {
    requestPayerName: true,
    requestPayerPhone: true,
    requestPayerEmail: true
  }
}