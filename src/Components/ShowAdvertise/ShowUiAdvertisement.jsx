import { IoLocationSharp } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";


const ShowUiAdvertisement = ({property}) => {
    const{propertyName,
        _id,
        isVerified,
        location,
        photo,
        agentName,
        minPrice,
        maxPrice,
    agentImg}=property
    return (
        <div>
           <div className="rounded-md  shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800 bg-gradient-to-bl from-lime-200 via-yellow-100 to-teal-500 backdrop-blur ">
	<div className="flex items-center justify-between p-3">
		<div className="flex items-center space-x-2">
			<img src={ agentImg || "https://source.unsplash.com/random/100x100/?5"
}  alt="" className="object-cover object-center w-14 h-w-14 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
			<div className="-space-y-1">
				<h2 className="text-lg uppercase font-semibold leading-none">{agentName}</h2>
				<span className="inline-block text-xs leading-none text-blue-600 dark:text-gray-600">-Agent-</span>
			</div>
		</div>
		
	</div>
	<img src={photo} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
	<div className='flex justify-between px-9 mt-4 '>
        <h1 className='text-xl  font-semibold'> <span className='text-violet-800 text-base mr-1'>Title:</span>  {propertyName}</h1>
        <h1 className='flex items-center justify-center gap-1 text-xl font-semibold' ><IoLocationSharp />{location}</h1>
    </div>
    <div className='flex flex-col gap-3 lg:flex-row justify-between lg:px-4'>
        <h1 className='text-xl  font-semibold'> <span className='text-violet-800 text-base mr-1'>Price:</span> ${minPrice}-{maxPrice} </h1>
        <h1 className='flex items-center justify-center gap-1 text-xl text-orange-500 font-semibold mb-4' > <MdVerifiedUser />{ isVerified===false?<><RxLapTimer /> Pending</> :isVerified=== true?'Verified':'Rejected'}</h1>
    </div>
   <Link to={`/details/${_id}`}> <button className=' btn w-full btn-outline flex items-center bg-amber-400 gap-2'><TbListDetails /> Details</button></Link>
</div> 
        </div>
    );
};

export default ShowUiAdvertisement;