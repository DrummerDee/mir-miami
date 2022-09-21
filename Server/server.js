const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
const app = express()
const stripe = require('stripe')('sk_test_51LakHnFUfLdDfCg4weT5PEGCDppV0EqU7Y23GrfiGG6KgngHOlqszrPRCcSLnNRTNjhhFFJJ371t4uJ79aMGA2KI00gC1vbilF');
require('dotenv').config();



app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.post('/payment', async (req,res) => {
    let {amount, id} = req.body
    try {
        const payment = await(stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Consultation fee',
            payment_method: id,
            confirm: true

        }))

        console.log('Payment', payment)
        res.json({
            message: 'Payment has been successful',
            success: true
        })
    } catch (error) {
        console.log('Error',error)
        res.json({
            message: 'Error has happened',
            success: false
        })

    }
})

app.listen(process.env.REACT_APP_PORT || 7070, () => {
    console.log('Server is connected')
})