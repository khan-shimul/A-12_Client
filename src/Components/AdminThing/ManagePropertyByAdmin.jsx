import React from 'react';
import useaxiousSecure from '../useaxiousSecure';
import { useQuery } from '@tanstack/react-query';
import { RxLapTimer } from 'react-icons/rx';
import { TiDeleteOutline } from "react-icons/ti";

const ManagePropertyByAdmin = () => {
    const axiosSecure =useaxiousSecure()

     
    const{refetch,data:property=[]}=useQuery({
        queryKey:['property'],
        queryFn:async ()=>{
            const res = await axiosSecure.get('/property')
            return res.data
        }
        
    })
    console.log(property)

    return (
        <div>
            <div className='lg:mx-7 my-7 bg-[#FFF] '>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='text-lg text-white bg-[#D1A054] rounded-t-xl'>
      <tr >
        <th>#</th>
        <th>PROPERTY TITLE</th>
        <th>LOCATION</th>
        <th>AGENT NAME</th>
        <th>AGENT EMAIL</th>
        <th>PRICE $</th>
        <th>VERIFY</th>
        <th>REJECT</th>
        
      </tr>
    </thead>
    <tbody>

{
    property.map((item,index) => <tr className='text-lg'>
        <td>
            {index +1}
        </td>
        <td>{item?.propertyName }</td>
        
        <td>
        {item.location}
        
          
        </td>
        <td>
        {item?.agentName}
        
        </td>
        <td>
        {item?.agentEmail}
        
        </td>
        <td>
        <h1>{item?.minPrice}-{item?.maxPrice}</h1>
        
        </td>
        <td>
          <button   className="btn text-2xl text-white bg-[#D1A054]"><RxLapTimer /></button>
         
        </td>
        <td>
          <button   className="btn text-2xl text-white bg-red-600 "><TiDeleteOutline /></button>
         
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

export default ManagePropertyByAdmin;