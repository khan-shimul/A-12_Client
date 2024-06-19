import React, { useContext } from 'react';
import useaxiousSecure from '../useaxiousSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthPorvider';

const AgentSoldProperty = () => {
    const axiosSecure=useaxiousSecure()
    const {user}=useContext(AuthContext)

    const{data: sold=[] ,refetch}=useQuery({
        queryKey:['bought'],
        queryFn:async()=>{
            const res= await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    });
    const totalPrice = parseFloat(sold.reduce((total, item) => total + item.price, 0))

    console.log(sold)
    return (
        <div>
            <div className='lg:mx-7 my-7 bg-[#FFF] '>
                <h1 className='text-center text-4xl my-7 font-bold text-orange-500'>Your Total Sell  ${totalPrice }</h1>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='text-lg text-white bg-[#D1A054] rounded-t-xl'>
      <tr >
        <th>#</th>
        <th>PROPERTY TITLE</th>
        <th>LOCATION</th>
        <th>BUYER NAME</th>
        <th>BUYER EMAIL</th>
        <th>SOLD PRICE $</th>
        
        
      </tr>
    </thead>
    <tbody>

{
    sold.map((item,index) => <tr className='text-lg'>
        <td>
            {index +1}
        </td>
        <td>{item?.propertyName }</td>
        
        <td>
        {item.location}
        
          
        </td>
        <td>
        {item?.buyername}
        
        </td>
        <td>
        {item?.buyeremail}
        
        </td>
        <td>
        <h1>{item?.offerPrice}</h1>
        
        </td>
        
      </tr>)
}
      
      
      
    </tbody>
 
    
    
  </table>
</div>
   
</div>
        </div>
    );
};

export default AgentSoldProperty;