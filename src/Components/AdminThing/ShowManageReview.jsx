import React from 'react';
import { MdDelete } from 'react-icons/md';
import useaxiousSecure from '../useaxiousSecure';
import Swal from 'sweetalert2';

const ShowManageReview = ({review}) => {
    const axiosSecure=useaxiousSecure()
    const{reviewDes,userName,userImg,propertyName,
        location, userEmail,_id,
        time}=review
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
                    axiosSecure.delete(`/reviews/${id}`)
                    .then(res=>{
                        if(res.data.deletedCount>0){
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                              window.location.reload()
                        }
                    })
                
                }
              });
        }
    return (
        <div>
            <div className="container bg-fuchsia-200 h-full flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
	<div className="flex bg-slate-100 justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={userImg || "https://source.unsplash.com/100x100/?portrait"} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{userName}</h4>
				<span className="text-xs dark:text-gray-600">{userEmail}</span>
			</div>
		</div>
		<button onClick={()=>handleDelete(_id)} type="button" className="w-10 text-red-600 text-3xl">
			 	 <MdDelete />
				
			</button>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-600">
    <p className="text-2xl font-bold"><span className="text-emerald-600 text-lg">Review For:</span> {propertyName}</p>
		<p className="text-xl"><span className="text-emerald-600 text-lg">Review:</span> {reviewDes}</p>
	</div>
</div>
        </div>
    );
};

export default ShowManageReview;