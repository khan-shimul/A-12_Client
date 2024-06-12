import React, { useContext } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { MdDelete, MdOutlineLocalOffer, MdSystemUpdateAlt } from 'react-icons/md';
import { RxLapTimer } from 'react-icons/rx';
import { AuthContext } from '../../Provider/AuthPorvider';
import Swal from 'sweetalert2';
import useaxiousSecure from '../useaxiousSecure';
import useAxiosPublic from '../useAxiosPublic';

const ShowWishlist = ({item}) => {
    console.log(item)
    const{user}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const{propertyName,
        isVerified,
        location,
        photo,
        
agentImg,
        agentName,
        minPrice,
        maxPrice,
        _id
    }=item
    const handleDelete=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/wishlist/${id}`)
                .then(res=>{
                    if(res.data.deletedCount>0){
                        
                        Swal.fire({
                            title: "Removed!",
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
            <div className=' bg-gradient-to-bl from-orange-100 via-yellow-100 to-yellow-400 backdrop-blur'>
            
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
		<img  alt="" src={
agentImg|| "https://source.unsplash.com/random/100x100/?5"
} className="object-cover w-16 h-16 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className=" font-semibold text-orange-500 uppercase text-lg">{agentName}</a>
			<span className="text-base text-blue-600 dark:text-gray-600">-Agent-</span>
		</div>
	</div>
	<div >
		<img  src={photo} alt="" className="object-cover w-full   h-60 sm:h-96 dark:bg-gray-500" />
		
        
	</div>
	
	<div className='flex justify-between px-9'>
        <h1 className='text-xl  font-semibold'> <span className='text-green-600 text-base mr-1'>Title:</span>  {propertyName}</h1>
        <h1 className='flex items-center justify-center gap-1 text-xl font-semibold' ><IoLocationSharp />{location}</h1>
    </div>
    <div className='flex flex-col gap-3 lg:flex-row justify-between lg:px-9'>
        <h1 className='text-xl  font-semibold'> <span className='text-green-600 text-base mr-1'>Price:</span> ${minPrice}-{maxPrice} </h1>
        <h1 className='flex items-center justify-center gap-1 text-xl text-orange-500 font-semibold' >{ isVerified===false?<><RxLapTimer /> Pending</> :isVerified=== true?'Verified':'Rejected'}</h1>
    </div>
	<div className="flex justify-between px-14 lg:px-24 items-center  ">
		<div className="">
			
				<button aria-label="" type="button" className="p-2 text-green-500 text-3xl text-center">
				<MdOutlineLocalOffer />
				</button>
			
		
			
		</div>
		<div className=" dark:text-gray-600">
			<button onClick={()=>handleDelete(_id)} type="button" className="w-10 text-red-600 text-3xl">
			 	 <MdDelete />
				
			</button>
			
		</div>
	</div>
	
    
</div>
        </div>
        </div>
    );
};

export default ShowWishlist;