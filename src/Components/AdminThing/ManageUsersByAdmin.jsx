import React from 'react';
import useaxiousSecure from '../useaxiousSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUsersBetweenLines } from 'react-icons/fa6';
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from 'sweetalert2';
import { MdSupportAgent } from "react-icons/md";

const ManageUsersByAdmin = () => {


    const axiosSecure=useaxiousSecure()

    const{data: users=[] ,refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res= await axiosSecure.get('/users')
            return res.data
        }
    });

// make admin
const handleMakeAdmin =user=>{
  console.log(user)
  Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!"
    }).then((result) => {
      if (result.isConfirmed) {
          axiosSecure.patch(`/users/admin/${user._id}`)
          .then(res=>{
              if(res.data.modifiedCount>0){
                  refetch()
                  Swal.fire({
                      title: "Great!",
                      text: `${user?.name || user?.email} is now Admin. `,
                      icon: "success"
                    });
              }
          })
      
      }
    });
}
// make agent
const handleMakeAgent =user=>{
  console.log(user)
  Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Agent!"
    }).then((result) => {
      if (result.isConfirmed) {
          axiosSecure.patch(`/users/agent/${user._id}`)
          .then(res=>{
              if(res.data.modifiedCount>0){
                  refetch()
                  Swal.fire({
                      title: "Great!",
                      text: `${user?.name || user?.email} is now Agent. `,
                      icon: "success"
                    });
              }
          })
      
      }
    });
}



    // user delete
    const handleDelete=id=>{
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
              axiosSecure.delete(`/users/${id}`)
              .then(res=>{
                  if(res.data.deletedCount>0){
                      refetch()
                      Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success"
                        });
                  }
              })
          
          }
        });
  }

    return (
        <div className='bg-[#cababa] h-[100vh]'>
          <div className='text-center '>
<p className='text-[#230ee2] pt-20'>---Welcome Admin---</p>
<hr className='h-4 mt-3 w-60 mx-auto' />
<h1 className='text-3xl font-medium'>MANAGE ALL USERS</h1>
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
        <th>EMAIL</th>
        <th>ROLE</th>
        <th>ROLE</th>
        <th>ACTION</th>
        
      </tr>
    </thead>
    <tbody>

{
    users.map((item,index) => <tr className='text-lg'>
        <td>
            {index +1}
        </td>
        <td>{item?.name || 'No Name'}</td>
        
        <td>
        {item.email}
          <br/>
          
        </td>
        <td>
        {item.role ==='admin'?'Admin':<button onClick={()=>handleMakeAdmin(item)} className="btn text-2xl text-white bg-[#D1A054]  "> <FaUsersBetweenLines /></button>}
        
        </td>
        <td>
        {item.role ==='admin'?' ': item.role ==='agent'? 'Agent': <button onClick={()=>handleMakeAgent(item)} className="btn text-2xl text-white bg-[#D1A054]  "> <MdSupportAgent /></button>}
        
        </td>
        <td>
          <button  onClick={()=>handleDelete(item._id)} className="btn text-2xl text-white bg-red-600 "><RiDeleteBin5Line /></button>
         
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

export default ManageUsersByAdmin;