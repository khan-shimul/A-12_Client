import React from 'react';
import useaxiousSecure from '../useaxiousSecure';
import { useQuery } from '@tanstack/react-query';
import { RxLapTimer } from 'react-icons/rx';
import { TiDeleteOutline } from "react-icons/ti";
import Swal from 'sweetalert2';

const ManagePropertyByAdmin = () => {
    const axiosSecure =useaxiousSecure()

     
    const{refetch,data:property=[]}=useQuery({
        queryKey:['property'],
        queryFn:async ()=>{
            const res = await axiosSecure.get('/property')
            return res.data
        }
        
    })


    const handleVerify =property=>{
        console.log(property)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Verify it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/property/verify/${property._id}`)
                .then(res=>{
                    if(res.data.modifiedCount>0){
                        refetch()
                        Swal.fire({
                            title: "Great!",
                            text:`${property.
                                propertyName} is Verified Now!!`,
                            icon: "success"
                          });
                    }
                })
            
            }
          });
    }
    const handleReject =property=>{
        console.log(property)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/property/reject/${property._id}`)
                .then(res=>{
                    if(res.data.modifiedCount>0){
                        refetch()
                        Swal.fire({
                            title: "Great!",
                            text:`${property.
                                propertyName} is Rejected!`,
                            icon: "success"
                          });
                    }
                })
            
            }
          });
    }




    // console.log(property)

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

            {
                item?.isVerified===true?'Verified':item?.isVerified==='reject'?'Rejected': <button  onClick={()=>handleVerify(item)}  className="btn text-2xl text-white bg-[#D1A054]"><RxLapTimer /></button>
            }
          
         
        </td>
        <td>
            {
                item?.isVerified===true?'Verified':item?.isVerified==='reject'?'Rejected':<button onClick={()=>handleReject(item)}  className="btn text-2xl text-white bg-red-600 "><TiDeleteOutline /></button>
            }
          
         
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