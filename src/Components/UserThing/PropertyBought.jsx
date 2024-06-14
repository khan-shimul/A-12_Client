import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthPorvider';
import useAxiosPublic from '../useAxiosPublic';
import useaxiousSecure from '../useaxiousSecure';
import ShowProperty from './ShowProperty';

const PropertyBought = () => {
const{user}=useContext(AuthContext)        
const axiosPublic=useAxiosPublic()
const axiosSecure=useaxiousSecure()

    const { refetch, data: offeredProperty = [] } = useQuery({
        queryKey: ["offProperty", user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/offeredProperties/${user.email}`);
          return res.data;
        },
      });
      console.log(offeredProperty)
    return (
        <div>
        <div className='bg-[#8ba80941] text-orange-500 text-center text-3xl font-bold pt-8 pb-8'>
       <h1> Your Wished Property</h1>
   </div>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 px-5 mb-10'>
          
          {
           offeredProperty.map(property=><ShowProperty property={property}></ShowProperty>)
          }
       </div>
      </div>
    );
};

export default PropertyBought;