import React, { useContext } from 'react';
import useAxiosPublic from '../useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthPorvider';
import ShowWishlist from './ShowWishlist';
import useaxiousSecure from '../useaxiousSecure';

const Wishlist = () => {
    const{user}=useContext(AuthContext)
    
    const axiosSecure=useaxiousSecure()

    const{refetch,data:properties=[]}=useQuery({
        queryKey:['wishedProperty',user?.email],
        queryFn:async ()=>{
            const res=await axiosSecure.get(`/wishlist/${user.email}`)
         return res.data
        }
        
    })
    // console.log(properties)
    

    return (
        <div>
        <div className='bg-[#8ba80941] text-orange-500 text-center text-3xl font-bold pt-8 pb-8'>
       <h1>{properties?.agentName} Your Wished Property</h1>
   </div>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-10'>
          
          {
           properties.map(property=><ShowWishlist item={property}></ShowWishlist>)
          }
       </div>
      </div>
    );
};

export default Wishlist;