const paymentData = {
  supportedPaymentMethods: [
    { supportedMethods: 'basic-card' }
  ],
  paymentDetails: {
    displayItems: [
      { label: 'Super Mario Kart x 1', amount: { currency: 'USD', value: 35.00 } },
      { label: 'Super Mario World x 1', amount: { currency: 'USD', value: 35.00 } },
      { label: 'Subtotal', amount: { currency: 'USD', value: 70.00 } }, 
      { label: 'Tax', amount: { currency: 'USD', value: 1.25 } }
    ],
    total: { label: 'TOTAL', amount: { currency: 'USD', value: 71.25 } }
  },
  options: { requestPayerName: true, requestPayerPhone: true, requestPayerEmail: true }
} 


export default async function handleDefaultCheckout() {
  if(window.PaymentRequest) {
    const paymentRequest = new PaymentRequest(
      paymentData.supportedPaymentMethods,
      paymentData.paymentDetails,
      paymentData.options
    )
    const available = await paymentRequest.canMakePayment()
    if(available) {
      const paymentResponse = await paymentRequest.show()
        .catch(() => console.warn('Cancelled Payment Request'))
      if(paymentResponse) {
        paymentResponse.complete()
      }
    }
    else {
      alert('Browser Payment Request Not Supported')
    }
  }
  else {
    alert('Browser Payment Request Not Supported')
  }
}