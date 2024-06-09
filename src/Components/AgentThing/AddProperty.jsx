import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthPorvider';

const AddProperty = () => {
    const{user}=useContext(AuthContext)


const handleSubmit=e=>{
    e.preventDefault();
    const propertyName = e.target.propertyname.value;
    const isVerified=false
    const location = e.target.location.value;
    const agentName = e.target.agentname.value;
    const agentEmail = e.target.agentemail.value;
    const photo = e.target.photo.value;
    const price = e.target.price.value;
    const property={propertyName,location,agentName,agentEmail,photo,price,isVerified}
    console.log(property)
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
                        <span className="label-text">Agent          Email</span>
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

              

             

                <div className="col-span-2 form-control w-full">
                    <label className="label">
                        <span className="label-text">Property Photo</span>
                    </label>
                    <input 
                        name="photo" 
                        type="text" 
                        placeholder="Enter Photo URL" 
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

                <input 
                    type="submit" 
                    className="col-span-2 my-5 min-w-full btn btn-outline border-orange-800 hover:border-orange-600 text-white bg-orange-600 hover:bg-orange-400 border-4" 
                    value="Add Craft" 
                />
            </form>
        </div>
    );
};

export default AddProperty;
