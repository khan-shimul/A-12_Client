import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthPorvider';
import useaxiousSecure from '../useaxiousSecure';
import { useQuery } from '@tanstack/react-query';
import ShowAgentAddedProperty from './ShowAgentAddedProperty';

const AgentAddedProperty = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useaxiousSecure()
    const{refetch,data:properties=[]}=useQuery({
        queryKey:['property',user?.email],
        queryFn:async ()=>{
            const res=await axiosSecure.get(`/propertu?email=${user.email}`)
         return res.data
        }
        
    })
    console.log(properties)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
           {
            properties.map(property=><ShowAgentAddedProperty property={property}></ShowAgentAddedProperty>)
           }
        </div>
    );
};

export default AgentAddedProperty;
// /property/${user.email}