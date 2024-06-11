import React, { useContext } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { MdVerifiedUser } from 'react-icons/md';
import { RxLapTimer } from 'react-icons/rx';
import { Link, useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../useAxiosPublic';
import { AuthContext } from '../../Provider/AuthPorvider';
import Swal from 'sweetalert2';

const Details = () => {
  const {user}=useContext(AuthContext)
    const property = useLoaderData()
    // console.log(property)
    const axiosPublic =useAxiosPublic()

    const{propertyName,
        
        isVerified,
        location,
        photo,
        agentName,
        minPrice,
        maxPrice,
    agentImg,
des}=property



const handleWish=async ()=>{
  const {_id,...others}=property
  const wishedProperty={propertyId:property?._id, userEmail:user?.email,...others}
  const propertyRes = await axiosPublic.post("/wishlist", wishedProperty);
      console.log(propertyRes.data);
      if (propertyRes.data.insertedId) {
        Swal.fire("Property Added to WishList");
        
      }
}

    return (
       
            <div className=" bg-yellow-50 w-[95%] md:w-[85%] mx-auto  px-1 md:px-10 py-4 rounded-xl">
      <Link to="/">
        <div className=" pt-16 mt-10 text-[#331a15]">
          <div className="flex justify-start items-center gap-2 bg-yellow-200 max-w-[9rem] hover:cursor-pointer text-orange-800 rounded p-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="inline"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="48"
                d="M244 400 100 256l144-144M120 256h292"
              ></path>
            </svg>
            <h2 className="font-exo pb-1 font-semibold text-xl inline">
              Home
            </h2>
          </div>
        </div>
      </Link>

      <div className="mt-10 md:w-[80%] mx-auto bg-gradient-to-br to-orange-300 via-yellow-200 from-yellow-300 px-1 md:px-3 pt-10 md:pt-16 rounded-2xl flex flex-col justify-center items-center md:gap-[10%]">
        {photo && <img className="w-full rounded-md" src={photo} alt='' />}
        <div className='flex mt-6 gap-36 lg:gap-48 '>
        <div className="flex items-center justify-between p-3 bg-green-400 py-4 px-10">
		<div className="flex gap-4 items-center space-x-2">
			<img src={ agentImg || "https://source.unsplash.com/random/100x100/?5"
}  alt="" className="object-cover object-center w-14 h-w-14 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
			<div className="-space-y-1">
				<h2 className="text-lg uppercase font-semibold leading-none">{agentName}</h2>
				<span className="inline-block text-xs leading-none text-blue-600 dark:text-gray-600">-Agent-</span>
			</div>
		</div>
		
	</div>
    
    <button onClick={handleWish} className='btn btn-warning'> Add to WishList</button>
        </div>
        
        <div className='flex gap-36  lg:gap-52 px-9 mt-4 '>
        <h1 className='text-xl  font-semibold'> <span className='text-violet-800 text-base mr-1'>Title:</span>  {propertyName}</h1>
        <h1 className='flex items-center justify-center gap-1 text-xl font-semibold' ><IoLocationSharp />{location}</h1>
    </div>
    <div className='flex gap-20 mt-4 lg:gap-44   lg:px-4'>
        <h1 className='text-xl  font-semibold'> <span className='text-violet-800 text-base mr-1'>Price:</span> ${minPrice}-{maxPrice} </h1>
        <h1 className='flex items-center justify-center gap-1 text-xl text-orange-500 font-semibold mb-4' > <MdVerifiedUser />{ isVerified===false?<><RxLapTimer /> Pending</> :isVerified=== true?'Verified':'Rejected'}</h1>
    </div>

        
    <h1 className='text-violet-800 text-base mr-1'>Description  <span className='text-lg  font-semibold text-gray-800'>{des}</span></h1>
         <button className='btn btn-warning w-full mt-4'>Add a Review</button>
      </div>
     
    </div>
        
    );
};

export default Details;