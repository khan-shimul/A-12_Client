import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthPorvider";
import useaxiousSecure from "../useaxiousSecure";
import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdAddToPhotos } from "react-icons/md";

import Swal from "sweetalert2";

const RequestedProperty = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useaxiousSecure();

  const { refetch, data: offeredProperty = [] } = useQuery({
    queryKey: ["property", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/offeredProperty/${user.email}`);
      return res.data;
    },
  });
  // console.log(offeredProperty);
  const handleAccept = (property) => {
    console.log(property);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/offeredProperty/accept/${property._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Great!",
              text: `${property.propertyName} is Accepted Now!!`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleReject = (property) => {
    console.log(property);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/offeredProperty/reject/${property._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Great!",
              text: `${property.propertyName} is Rejected!`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="bg-[#cababa] h-[100vh]">
      <div className="text-center ">
        <p className="text-[#230ee2] pt-20">---Welcome Agent---</p>
        <hr className="h-4 mt-3 w-60 mx-auto" />
        <h1 className="text-3xl font-medium">MANAGE REQUESTED PROPERTY</h1>
        <hr className="h-4 mt-3 mb-4 w-60 mx-auto" />
      </div>
      <div className="mx-7 my-7 bg-[#FFF] ">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg text-white bg-[#D1A054] rounded-t-xl">
              <tr>
                <th>#</th>
                <th>TITLE</th>
                <th>LOCATION</th>
                <th>BUYER NAME</th>
                <th>BUYER EMAIL</th>
                <th>OFFER PRICE</th>
                <th>STATUS</th>
                <th>ACCEPT</th>
                <th>REJECT</th>
              </tr>
            </thead>
            <tbody>
              {offeredProperty.map((item, index) => (
                <tr className="text-lg">
                  <td>{index + 1}</td>
                  <td>{item?.propertyName}</td>

                  <td>
                    {item.location}
                    <br />
                  </td>
                  <td>
                    {item.buyername}
                    <br />
                  </td>
                  <td>
                    {item.buyeremail}
                    <br />
                  </td>
                  <td>
                    {" "}
                    ${item.offerPrice}
                    <br />
                  </td>
                  <td>
                    {item?.isAccepted === "false"
                      ? "PENDING"
                      :item?.isAccepted === "true"
                      ? "ACCEPTED"
                      : "REJECTED"}
                  </td>
                 <td>
                 {item?.isAccepted === "reject" ? (
                    "REJECTED"
                  ) :item?.isAccepted === "true" ? (
                    "ACCEPTED"
                  ) : (
                    <button
                      onClick={() => handleAccept(item)}
                      className="btn text-2xl text-white bg-[#D1A054]  "
                    >
                    
                      <MdAddToPhotos />
                    </button>
                  )}
                 </td>
                  <td>
                  {item?.isAccepted === "reject" ? (
                    "REJECTED"
                  ) :item?.isAccepted === "true" ? (
                    "ACCEPETED"
                  ) : (
                    <button
                      onClick={() => handleReject(item)}
                      className="btn text-2xl text-white bg-red-600"
                    >
                    
                    <RiDeleteBin5Line />
                    </button>
                  )}
                    
                    
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestedProperty;
