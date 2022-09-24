import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = 'pk_test_51LakHnFUfLdDfCg4sg5aDsc4QPnGbW16pOiHTANKlThlhPdocdbV0Abqdo4CFpRSrf0C3YQx0tekfKR2CxrsqKpm00POByCtK9';
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
        </Elements>
  )
}
export default StripeContainer