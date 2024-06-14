import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthPorvider';
import useaxiousSecure from '../useaxiousSecure';
import { useQuery } from '@tanstack/react-query';
import ShowAgentAddedProperty from './ShowAgentAddedProperty';
import useAxiosPublic from '../useAxiosPublic';

const AgentAddedProperty = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useaxiousSecure()
    const axiosPublic=useAxiosPublic()
    const{refetch,data:properties=[]}=useQuery({
        queryKey:['property',user?.email],
        queryFn:async ()=>{
            const res=await axiosSecure.get(`/propertu?email=${user.email}`)
         return res.data
        }
        
    })
    console.log(properties)
    return (
       <div>
         <div className='bg-[#8ba80941] text-orange-500 text-center text-3xl font-bold pt-8 pb-8'>
        <h1> Your Added Property</h1>
    </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-10'>
           
           {
            properties.map(property=><ShowAgentAddedProperty property={property}></ShowAgentAddedProperty>)
           }
        </div>
       </div>
    );
};

export default AgentAddedProperty;
// /property/${user.email}