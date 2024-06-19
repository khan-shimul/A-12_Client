import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useaxiousSecure from '../../useaxiousSecure';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthPorvider';
import Swal from 'sweetalert2';

const CheckoutFrom = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const navigate =useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure=useaxiousSecure()
    const {user}=useContext(AuthContext)
    const boughtProperty=useLoaderData()
    const {buyeremail,
        propertyName
, 
buyername ,location,offerPrice ,agentemail }=boughtProperty
    console.log(boughtProperty )
        const totalPrice=parseFloat(boughtProperty?.offerPrice);
        // console.log(typeof(totalPrice),totalPrice)


    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])


    const handleSubmit =async (e) =>{
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                 // now save the payment in the database
                 const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    propertyObjIds:boughtProperty._id,
                    propertyIds:boughtProperty.propertyId
                    ,
                    status: 'pending',
                    buyeremail:buyeremail,
                    buyername:buyername,
                    location:location,
                    offerPrice:offerPrice,
                    agentemail:agentemail,
                    propertyName:propertyName

                }
                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                
                if (res.data?.paymentResult?.insertedId) {
                    
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for Payment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    await axiosSecure.patch(`/bought/${boughtProperty._id}`)
                    .then(()=>{
                        window.location.reload()
                        navigate('/dashboard/propertybought')
                    })
                    
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
<CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '36px',
                            
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn w-20 lg:w-32 mx-64 lg:mx-96 mt-8  btn-warning my-4" type="submit" disabled={!stripe || !clientSecret }>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutFrom;