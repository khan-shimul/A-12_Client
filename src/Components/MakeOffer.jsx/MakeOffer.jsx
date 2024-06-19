import React, { useContext } from 'react';
import { useLoaderData, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthPorvider';
import useAxiosPublic from '../useAxiosPublic';
import Swal from 'sweetalert2';
import useaxiousSecure from '../useaxiousSecure';

const MakeOffer = () => {
    const{user}=useContext(AuthContext)
    const offerProperty =useLoaderData()
    const navigate=useNavigate()
    const axiosSecure=useaxiousSecure()
    const axiosPublic=useAxiosPublic()
    console.log(offerProperty)
    const{propertyName,
        isVerified,
        location,
        photo,
        
agentImg,
        agentName,
        
agentEmail,
        minPrice,
        maxPrice,
        _id
    }=offerProperty

    console.log(minPrice,maxPrice)

    const handleSubmit = async (e) => {
        e.preventDefault();
    const offerPrice=e.target.price.value
    console.log(offerPrice)
    if(minPrice<offerPrice && offerPrice<maxPrice){
        const OfferedProperty = {
            propertyName: e.target.propertyname.value,
            isAccepted: false,
            location: e.target.location.value,
            buyername: e.target.buyername.value,
            buyeremail: e.target.buyeremail.value,
            agentemail: e.target.agentemail.value,
            isAccepted: 'false',
            offerPrice: e.target.price.value,
           photo:photo,
            time:e.target.offerDate.value,
            propertyId:_id
          };
          console.log(OfferedProperty);
          const propertyRes = await axiosSecure.post("/offeredProperty", OfferedProperty);
          console.log(propertyRes.data);
          if (propertyRes.data.insertedId) {
            Swal.fire("Offer Added Successfully!");
            navigate('/dashboard/wishlist')
          }
        
    
        // console.log('with img',res.data)
    }
    else{
        Swal.fire("Offer price not in Pricerange!");
    }

    
       
        
      };

    return (
        <div className="h-[100vh] mx-auto bg-orange-100 text-center ">
      <h1 className="pt-20 text-3xl font-bold text-orange-500">
        Send Your Offer !!
      </h1>

      <form
        onSubmit={handleSubmit}
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
            readOnly
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
            readOnly
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Buyer Name</span>
          </label>
          <input
            defaultValue={user?.displayName ? user?.displayName : "No Name"}
            name="buyername"
            type="text"
            placeholder="Enter Craft Rating"
            className="input input-bordered w-full"
            readOnly
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Buyer Email</span>
          </label>
          <input
            name="buyeremail"
            defaultValue={user?.email}
            type="text"
            placeholder="Enter Craft Price"
            className="input input-bordered w-full"
            readOnly
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Agent Name</span>
          </label>
          <input
            defaultValue={agentEmail}
            name="agentemail"
            type="text"
            placeholder=""
            className="input input-bordered w-full"
            readOnly
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Price ($)</span>
          </label>
          <input
            
            name="price"
            type="number"
            placeholder="Offer Your Price"
            className="input input-bordered w-full"
            required
          />
        </div>
        
        <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Offer Date</span>
                    </label>
                    <input
                        name="offerDate"
                        type="date"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

        
     
        <input
          type="submit"
          className="col-span-2 my-5 min-w-full btn btn-outline border-orange-800 hover:border-orange-600 text-white bg-orange-600 hover:bg-orange-400 border-4"
          value="Offer"
        />
      </form>
    </div>
    );
};

export default MakeOffer;