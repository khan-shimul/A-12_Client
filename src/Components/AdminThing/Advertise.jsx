import React from 'react';
import useaxiousSecure from '../useaxiousSecure';
import { useQuery } from '@tanstack/react-query';
import { FcAdvertising } from 'react-icons/fc';
import Swal from 'sweetalert2';

const Advertise = () => {
    const axiosSecure=useaxiousSecure()
    const{refetch,data:verifiedProperties=[]}=useQuery({
        queryKey:['verifiedProperties'],
        queryFn:async ()=>{
            const res=await axiosSecure.get('/allproperty')
         return res.data
        }
        
    })
    console.log(verifiedProperties)
    const handleAdvertise = (id) => {
        console.log(id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Advertise it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.patch(`/allproperty/advertise/${id}`).then((res) => {
              if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Great!",
                  text: 'Advertise Successful',
                  icon: "success",
                });
              }
            });
          }
        });
      };
    return (
        <div className='bg-[#cababa] h-[100vh]'>
          <div className='text-center '>
<p className='text-[#230ee2] pt-20'>---Welcome Admin---</p>
<hr className='h-4 mt-3 w-60 mx-auto' />
<h1 className='text-3xl font-medium'>ADVERTISE THE BEST PROPERTY</h1>
<hr className='h-4 mt-3 mb-4 w-60 mx-auto' />
</div>
<div className='mx-7 my-7 bg-[#FFF] '>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='text-lg text-white bg-[#D1A054] rounded-t-xl'>
      <tr >
        <th>#</th>
        <th>NAME</th>
        <th>IMAGE</th>
        <th>PRICE RANGE</th>
        <th>AGENT</th>
        <th>ADVERTISE</th>
        
      </tr>
    </thead>
    <tbody>

{
    verifiedProperties?.map((item,index) => <tr className='text-lg'>
        <td>
            {index +1}
        </td>
        <td>{item?.propertyName }</td>
        
        <td>
        <img className='h-12 w-20' src={item?.photo} alt="" />
          <br/>
          
        </td>
        <td>
        ${
            item?.minPrice 
        }-
        {
             item?.maxPrice
        }
        
        </td>
        <td>
        {
            item?.agentName
        }
        
        </td>
        <td>
          <button  onClick={()=>handleAdvertise(item._id)} className="btn text-2xl text-white bg-green-200 "><FcAdvertising /></button>
         
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

export default Advertise;