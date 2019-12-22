// require and initialize stripe with the secret key
const stripe = require('stripe')('pk_test_PsUXCvFVMZA6dqYrQx30EX6600KLrx5Xtu')
// Stripe docs: https://stripe.com/docs
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

// Netlify functions docs: https://docs.netlify.com/functions/build-with-javascript/

// Each JavaScript file to be deployed as a serverless Lambda function
// must export a handler method
exports.handler = async (event, ctx) => {
  if (!event.body || event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: 'Invalid HTTP method'
      })
    }
  }

  const data = JSON.parse(event.body)

  // if required info not available
  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: 'Missing Information'
      })
    }
  }

  // process payment
  try {
    await stripe.customers
      .create({
        email: data.stripeEmail,
        source: data.stripeToken
      })
      .then((customer) => {
        // create new charge
        return stripe.charges.create(
          {
            currency: 'usd',
            amount: data.stripeAmt,
            receipt_email: data.stripeEmail,
            customer: customer.id,
            description: 'Sample Charge'
          },
          {
            idempotency_key: data.stripeIdempotency
          }
        )
      })

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status: 'Charged with Stripe'
      })
    }
  } catch (err) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: err
      })
    }
  }
}
