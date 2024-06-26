import React from 'react';
import useAxiosPublic from '../useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ShowUiAdvertisement from './ShowUiAdvertisement';




const ShowAdvertise = () => {
    
    const axiosPublic=useAxiosPublic()
    const{refetch,data:advertiseProperties=[]}=useQuery({
        queryKey:['advertiseProperties'],
        queryFn:async ()=>{
            const res=await axiosPublic.get('/allproperties')
         return res.data
        }
        
    })
    console.log(advertiseProperties)
    return (
        <div 
        
        className='bg-gray-200 my-10 rounded-lg'>
            <div className='text-center py-10 '> <h1 className='text-3xl font-bold text-orange-400 mt-5 animate__animated animate__backInDown'>Our Best Property In Here!!</h1></div>
            <div className='mt-7 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-4'>
                {
                    advertiseProperties?.map(property=><ShowUiAdvertisement property={property}></ShowUiAdvertisement>)
                }
            </div>
        </div>
    );
};

export default ShowAdvertise;