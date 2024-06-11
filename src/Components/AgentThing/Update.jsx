import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import useAxiosPublic from '../useAxiosPublic';

import useaxiousSecure from '../useaxiousSecure';
import Swal from 'sweetalert2';
const img_hosting = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting}`;

const Update = () => {
    const property =useLoaderData()
    console.log(property)
    const axiosPublic = useAxiosPublic();
    const axiosSecure= useaxiousSecure()
    const {id}=useParams()
    const navigate=useNavigate()
    const{propertyName,
        isVerified,
        location,
        photo,
        agentName,
        minPrice,
        maxPrice,agentEmail,
        _id
    }=property

    const handleUpdate=async e=>{
        e.preventDefault();



const location = e.target.location.value;
        
const propertyName = e.target.propertyname.value;
const agentName = e.target.agentname.value;
const agentEmail = e.target.agentemail.value;

const minPrice = e.target.minprice.value;
const maxPrice = e.target.maxprice.value;


        const photoFile = new FormData();
        const file = e.target.img.files[0];
        console.log(file)
        photoFile.append("image", file);
        if(file){
            const res = await axiosPublic.post(img_hosting_api, photoFile, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
            });
           const photo=res.data.data.display_url
            console.log(updatedPhoto)
            const updatedProperty = { propertyName,location,agentName,agentEmail,photo,minPrice,maxPrice};
            console.log(updatedProperty);
            
            const response = await axiosSecure.put(`/property/${id}`, updatedProperty);
            console.log(response.data);
            if(response.data.modifiedCount >0){
                Swal.fire({
                    title: 'Success!',
                    text: 'property updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  navigate('/dashboard')
            }
            return
        }
        
        
        
        
        
       
        
        const updatedProperty = { propertyName,location,agentName,agentEmail,photo,minPrice,maxPrice};
        console.log(updatedProperty);
        
        const response = await axiosSecure.put(`/property/${id}`, updatedProperty);
        console.log(response.data);
        if(response.data.modifiedCount >0){
            Swal.fire({
                title: 'Success!',
                text: 'Property updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              navigate('/dashboard')
        }
    }
    return (
        <div className="h-[100vh] mx-auto bg-orange-100 text-center ">
            <h1 className="pt-20 text-3xl font-bold text-orange-500">
        Hey Agent Update Your Property Here !!
      </h1>
            <form
         onSubmit={handleUpdate}
        className=" mx-auto md:m-6 md:p-2 grid grid-cols-2 justify-items-center gap-x-6 gap-y-2 "
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Property Name</span>
          </label>
          <input
          defaultValue={propertyName}
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
          defaultValue={location}
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
            defaultValue={agentName}
            name="agentname"
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
            defaultValue={agentEmail}
            type="text"
            placeholder="Enter Craft Price"
            className="input input-bordered w-full"
            readOnly
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Minimum Price ($)</span>
          </label>
          <input
            defaultValue={minPrice}
            name="minprice"
            type="number"
            placeholder="Minimum Price"
            className="input input-bordered w-full"
            
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Maximum Price ($)</span>
          </label>
          <input
            defaultValue={maxPrice}
            name="maxprice"
            type="number"
            placeholder="Maximum Price"
            className="input input-bordered w-full"
            
          />
        </div>
       


        
        <input
        
          type="file"
          name="img"
          className=" mt-5 file-input border-l-0 w-full max-w-xs"
        />
        <input
          type="submit"
          className="col-span-2 my-5 min-w-full btn btn-outline border-orange-800 hover:border-orange-600 text-white bg-orange-600 hover:bg-orange-400 border-4"
          value="Update Property"
        />
      </form>
        </div>
    );
};

export default Update;