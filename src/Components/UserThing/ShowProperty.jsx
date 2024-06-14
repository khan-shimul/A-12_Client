import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { MdVerifiedUser } from 'react-icons/md';
import { RxLapTimer } from 'react-icons/rx';

const ShowProperty = ({property}) => {
    console.log(property)
    const{
        _id,
        
propertyName,
isAccepted,
        location,
        photo,
        
agentemail,
        
offerPrice,
    }=property
    return (
        <div>
           <div className="rounded-md  shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800 bg-gradient-to-bl from-lime-200 via-yellow-100 to-teal-500 backdrop-blur ">
	<div className="flex items-center justify-between p-3">
		
		
	</div>
	<img src={photo} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
	<div className='flex justify-between px-9 mt-4 '>
        <h1 className='text-xl  font-semibold'> <span className='text-violet-800 text-base mr-1'>Title:</span>  {propertyName}</h1>
        <h1 className='flex items-center justify-center gap-1 text-xl font-semibold' ><IoLocationSharp />{location}</h1>
    </div>
    <div className='flex flex-col gap-3 lg:flex-row justify-between lg:px-4'>
        <h1 className='text-xl  font-semibold'> <span className='text-violet-800 text-base mr-1'>Price:</span> ${offerPrice}</h1>
       

<h1 className='flex items-center gap-2'>
{
    isAccepted === 'false' ? (
        < >
            <RxLapTimer />
            'Pending'
        </>
    ) : isAccepted === 'true' ? (
        <>
            <MdVerifiedUser />
            'Accepted'
        </>
    ) : (
        'Rejected'
    )
}
</h1>
<h1>
    {
        isAccepted==='true'&& <button className='btn btn-warning'> Pay</button>
    }
</h1>

    </div>
   
</div> 
        </div>
    );
};

export default ShowProperty;