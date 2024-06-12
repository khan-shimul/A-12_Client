import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthPorvider';

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../useAxiosPublic';
import ShowUserReviews from './ShowUserReviews';

const UserReviews = () => {
    const {user}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const{refetch,data:myReviews=[]}=useQuery({
        queryKey:['myReviews',user?.email],
        queryFn:async ()=>{
            const res=await axiosPublic.get(`/reviews/${user.email}`)
         return res.data
        }
        
    })
    // console.log(myReviews)
    return (
        <div>
        <div className='bg-[#8ba80941] text-orange-500 text-center text-3xl font-bold pt-8 pb-8'>
       <h1>{myReviews?.userName} Your Reviews to Property</h1>
   </div>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-10'>
          
          {
           myReviews.map(review=><ShowUserReviews review={review}></ShowUserReviews>)
          }
       </div>
      </div>
    );
};

export default UserReviews;