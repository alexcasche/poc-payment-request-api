# Proof of Concept - Browser Payment Request API w/ Stripe

This example webpage is a proof-of-concept which demonstrates how to use the Browser <a href="https://developers.google.com/web/fundamentals/payments/merchant-guide/deep-dive-into-payment-request">Payment Request API</a> with Stripe. Throughout the read me the Browser Payment Request API will be referred to as the BPR API.
 
## Requirements

To demo the functionality you will need to have a credit card saved in chrome with the following info: 

1. Card Number: `4242 4242 4242 4242`
2. Card Expiration: `Any future date`
3. Card CSV: `Any 3 numbers`

Once ready head over to this <a href="https://poc-payment-request-api.vercel.app/">Vercel App.</a>

## Getting Started

Type some Markdown on the left and see your preview on the right.  Want to work in HTML instead?  Click the code icon in the editor header.

## Motivation

To determine if a payment can be completed in the browser without an actual checkout or redirect.  This flow would eliminate a lot of friction/dropoff associated with web checkouts.

## Findings

The BPR API is not a stand-alone solution.  It requires integrating with a payment processor.

### Stripe Demo

This demo was built using the Stripe SDK, which wraps the BPR API with some additional features.  It also requires creating the Payment Intent server-side to avoid price hacking as explained <a href="https://stripe.com/docs/stripe-js/elements/payment-request-button#html-js-create-payment">here</a>

### Shipping

The BRP API provides a simple shipping method integration.  When provided with a list of possible methods, they will be displayed to user to select from.  These methods must be generated before entering the payment flow.

### Discounts / Gift Cards

The BPR API does not provide any intelligent price adjustment funcitonality.  In order to accept gift cards and discounts, the logic must be run before entering the payment flow.

### Limitations

In order to work the user must have a credit card or alternate payment sources saved in browser (such as Apple or Google pay).  If nothing is detected, the payment window will not open.  Therefore this can never fully replace web checkout.

### Support

The BPR API is not supported in all modern browsers.  The browsers that do support the API do not all function the same.  Be sure to review MDN to see if/how it can be implemented for you use case <a href="https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API">docs</a>

### Future

The BPR API is being actively developed and is still in its infancy.  Major changes are likely to occur in the near future and should be actively monitored.