import React from 'react';
import useAxiosPublic from '../../../Components/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ShowLatestReview from './ShowLatestReview';

const LatestReview = () => {
const axiosPublic= useAxiosPublic();


    const{refetch,data:reviews=[]}=useQuery({
        queryKey:['latestReviews'],
        queryFn:async ()=>{
            const res=await axiosPublic.get('/reviews')
         return res.data
        }
        
    })
    // console.log(reviews)
    return (
        <div className='mt-12 py-10 px-5 rounded-xl bg-gradient-to-tr from-lime-100 via-yellow-200 to-teal-400'>
            <h1 className='text-center mb-10 text-4xl font-bold text-orange-500'>Latest Reviews is here!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4' >
                {
                    reviews.slice(0,3).map(review =><ShowLatestReview review={review}></ShowLatestReview>)
                }
            </div>
        </div>
    );
};

export default LatestReview;