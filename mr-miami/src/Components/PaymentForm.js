import React, { useState } from 'react';
import '../Styles/Payment.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';


const CARD_OPTIONS = {
    style: {
        base: {
          iconColor: '#c4f0ff',
          color: '#fff',
          fontWeight: '500',
          fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
          fontSize: '16px',
          fontSmoothing: 'antialiased',
          ':-webkit-autofill': {
            color: '#fce883',
          },
          '::placeholder': {
            color: '#87BBFD',
          },
        },
        invalid: {
          iconColor: '#FFC7EE',
          color: '#FFC7EE',
        },
      },
    };

 const PaymentForm = () => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post('http://localhost:7070/payment', {
                    amount: 2500,
                    id
                })

                if (response.data.success) {
                    console.log('Thank you for your payment');
                    setSuccess(true)
                }
            } catch (error) {
                console.log('Oh no something went wrong', error);

            }
        } else {
            console.log(error.message)
        }
    }
    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <CardElement options={CARD_OPTIONS} />
                    <button>Pay $25 Fee</button>
                </form>
                :
                <div> 
                    <h2> Consultation has been booked and paid</h2>
                    </div>
}
</>
    )
}
export default PaymentForm;