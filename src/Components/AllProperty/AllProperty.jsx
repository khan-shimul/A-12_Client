import React from 'react';
import useaxiousSecure from '../useaxiousSecure';
import { useQuery } from '@tanstack/react-query';

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
        <div>
            <h1>All property will be here</h1>
        </div>
    );
};

export default AllProperty;