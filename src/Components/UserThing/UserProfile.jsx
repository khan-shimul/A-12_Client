import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthPorvider';

const UserProfile = () => {
  const {user}=useContext(AuthContext)
    return (
      <div className="flex items-center flex-col justify-center pt-20 p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
      <h1 className='pb-10 text-3xl font-bold text-yellow-500 '>Here is your all information what we have!!</h1>
<div>
{user?.photoURL? <img className="w-24 rounded-full  " src={user?.photoURL} alt="" />:  <div >
<img className="w-24 rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
</div>}
</div>
<div className="space-y-4 text-center divide-y dark:divide-gray-300">
<div className="my-2 space-y-1">
<h2 className="text-2xl font-semibold sm:text-2xl"><span className='text-xl mr-1 text-orange-500'>Name:</span> {user?.displayName}</h2>
<p className="px-5 text-2xl sm:text-base dark:text-gray-600 font-semibold"><span className='text-xl mr-1 text-orange-500'>Profession:</span> Not Provided </p>
<p className="px-5 text-2xl sm:text-base dark:text-gray-600 font-semibold"><span className='text-xl mr-1 text-orange-500'>Email:</span> {user?.email}</p>
<p className="px-5 text-2xl sm:text-base dark:text-gray-600 font-semibold"><span className='text-xl mr-1 text-orange-500'>Role:</span> User</p>
</div>


</div>
</div>
    );
};

export default UserProfile;