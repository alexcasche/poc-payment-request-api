import data from './data'
import './style.css'

function handleCheckout() {
  if(window.PaymentRequest) {
    const request = new PaymentRequest(
      data.supportedPaymentMethods,
      data.paymentDetails,
      data.options
    )
    request.show()
      .then(res => console.warn('res', res))
      .catch(err => console.warn('err', err))
  }
  else {
    alert('Browser Payment Request Not Supported')
  }
}

window.handleCheckout = handleCheckout