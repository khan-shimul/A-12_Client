import React from 'react';
import useaxiousSecure from '../useaxiousSecure';
import { useQuery } from '@tanstack/react-query';
import ShowAllProperty from './ShowAllProperty';

const AllProperty = () => {

    
    const axiosSecure=useaxiousSecure()
    const{refetch,data:verifiedProperties=[]}=useQuery({
        queryKey:['verifiedProperty'],
        queryFn:async ()=>{
            const res=await axiosSecure.get('/allproperty')
         return res.data
        }
        
    })
    console.log(verifiedProperties)

    return (
        <div className=''>
            <div className='text-center pt-24'> <h1 className='text-3xl font-bold text-orange-400 mt-5'>Here is ALL Property Verified By Admin</h1></div>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    verifiedProperties?.map(property=><ShowAllProperty property={property}></ShowAllProperty>)
                }
            </div>
        </div>
    );
};

export default AllProperty;