import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthPorvider';
import useAxiosPublic from '../useAxiosPublic';
import useaxiousSecure from '../useaxiousSecure';
import Swal from 'sweetalert2';

const img_hosting=import.meta.env.VITE_IMAGE_HOSTING_KEY
const img_hosting_api=`https://api.imgbb.com/1/upload?key=${img_hosting}`


const AddProperty = () => {
    const{user}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const axiosSecure=useaxiousSecure()

const handleSubmit=async e=>{
    e.preventDefault();

    const photoFile = new FormData();
    const file = e.target.img.files[0];
    photoFile.append("image", file);
const res =await axiosPublic.post(img_hosting_api,photoFile,{
  headers:{
    'Content-Type':'multipart/form-data'
  }
  
})
if(res.data.success){
  const propertyItem={
    

    propertyName : e.target.propertyname.value,
    isVerified:false,
    location : e.target.location.value,
    agentName : e.target.agentname.value,
    agentEmail : e.target.agentemail.value,
  photo:res.data.data.display_url,
    price : e.target.price.value
    
  }
  console.log(propertyItem)
  const propertyRes= await axiosSecure.post('/property',propertyItem)
  console.log(propertyRes.data)
  if(propertyRes.data.insertedId){
    Swal.fire("Property Added Successfully!");
  }
}


// console.log('with img',res.data)

    
}

    return (
        <div className= 'h-[100vh] mx-auto bg-orange-100 text-center '>
            <h1 className='pt-20 text-3xl font-bold text-orange-500'>Hey Agent Add Your Property Here !!</h1>

            <form  onSubmit={handleSubmit} className=" mx-auto md:m-6 md:p-2 grid grid-cols-2 justify-items-center gap-x-6 gap-y-2 ">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Property Name</span>
                    </label>
                    <input 
                        name="propertyname" 
                        type="text" 
                        placeholder="Enter Property Name" 
                        className="input input-bordered w-full" 
                        required 
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Property Location</span>
                    </label>
                    <input 
                        name="location" 
                        type="text" 
                        placeholder="Enter Property Location" 
                        className="input input-bordered w-full" 
                        required 
                    />
                   
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Agent Name</span>
                    </label>
                    <input 
                       defaultValue={user?.displayName ? user?.displayName :'No Name'}
                       name='agentname'
                        type="text" 
                        placeholder="Enter Craft Rating" 
                        className="input input-bordered w-full" 
                        readOnly
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Agent Email</span>
                    </label>
                    <input 
                        name="agentemail"
                        defaultValue={user?.email} 
                        type="text" 
                        placeholder="Enter Craft Price" 
                        className="input input-bordered w-full" 
                        required 
                    />
                </div>

              

             

               

                <div className="col-span-2 w-full">
                    <label className="label">
                        <span className="label-text">Price Range</span>
                    </label>
                    <textarea 
                        name="price" 
                        placeholder="Enter Price Range" 
                        className="p-2 w-full input input-bordered" 
                        rows="10"
                    />
                </div>
                <input type="file" name="img" className=" mt-5 file-input w-full max-w-xs" />
                <input 
                    type="submit" 
                    className="col-span-2 my-5 min-w-full btn btn-outline border-orange-800 hover:border-orange-600 text-white bg-orange-600 hover:bg-orange-400 border-4" 
                    value="Add Property" 
                />
            </form>
        </div>
    );
};

export default AddProperty;
