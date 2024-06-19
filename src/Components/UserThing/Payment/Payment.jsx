import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutFrom from './CheckoutFrom';


const stripePromise =loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY)

const Payment = () => {
    return (
        <div className=" h-[100vh]">
              <div className='text-center '>
<p className='text-[#230ee2] pt-20'>---Welcome to Payment---</p>
<hr className='h-4 mt-3 w-60 mx-auto' />
<h1 className='text-3xl font-medium'>PAY FOR YOUR PROPERTY</h1>
<hr className='h-4 mt-3 mb-4 w-60 mx-auto' />
</div>

<div>
    <Elements stripe={stripePromise}>
      <CheckoutFrom></CheckoutFrom>
    </Elements>
</div>

        </div>
    );
};

export default Payment;