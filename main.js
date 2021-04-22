import stripe, { paymentData } from './stripe'
import './style.css'

function handleCheckout() {
  if(window.PaymentRequest) {
    const paymentRequest = stripe.paymentRequest(paymentData);
    paymentRequest.show()
      .then(res => console.warn('res', res))
      .catch(err => console.warn('err', err))
  }
  else {
    alert('Browser Payment Request Not Supported')
  }
}

window.handleCheckout = handleCheckout