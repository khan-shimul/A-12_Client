import React from 'react';
import useaxiousSecure from '../useaxiousSecure';
import { useQuery } from '@tanstack/react-query';
import ShowManageReview from './ShowManageReview';

const ManageReviewsByAdmin = () => {
    const axiosSecure=useaxiousSecure()
    const{refetch,data:allReviews=[]}=useQuery({
        queryKey:['verifiedProperty'],
        queryFn:async ()=>{
            const res=await axiosSecure.get('/reviews')
         return res.data
        }
        
    })
    console.log(allReviews)
    return (
        <div>
        <div className='bg-[#8ba80941] text-orange-500 text-center text-3xl font-bold pt-8 pb-8'>
       <h1>All Reviews That User Added</h1>
   </div>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-10'>
          
          {
           allReviews.map(review=><ShowManageReview review={review}></ShowManageReview>)
          }
       </div>
      </div>
    );
};

export default ManageReviewsByAdmin;