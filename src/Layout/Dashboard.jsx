import { HiOutlineHomeModern } from "react-icons/hi2";

import { FaUsers } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { FaBookMedical } from "react-icons/fa6";

import { IoMenu } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin =false
    const isAgent = true
    return (
        <div className="flex h-[100vh] ">
        <div className="w-64 min-h-screen bg-[#8ba80941] pt-20">
          <ul className="menu space-y-2 mx-5">
            {isAdmin ? 
              <>
              <li>
      <NavLink className='text-lg' to='/dashboard/adminprofile'><IoMdHome /> Admin Profile</NavLink>
      </li>
      <li>
      <NavLink className='text-lg' to='/dashboard/managepropertybyadmin'><HiOutlineHomeModern /> Manage Properties</NavLink>
      </li>
      <li>
      <NavLink className='text-lg' to='/dashboard/manageusersbyadmin'><FaUsers /> Manage Users</NavLink>
      </li>
      <li>
      <NavLink className='text-lg' to='/dashboard/managereviewsbyadmin'><GoCodeReview /> Manage reviews</NavLink>
      </li>
      
              </>
             : isAgent ?

             <>

<li>
      <NavLink className='text-lg' to='/dashboard/agentprofile'><IoMdHome /> Agent Profile</NavLink>
      </li>
      <li>
      <NavLink className='text-lg' to='/dashboard/addproperty'><HiOutlineHomeModern /> Add Property</NavLink>
      </li>
      <li>
      <NavLink className='text-lg' to='/dashboard/myaddedproperty'><FaUsers /> My added properties</NavLink>
      </li>
      <li>
      <NavLink className='text-lg' to='/dashboard/soldproperty'><GoCodeReview /> My sold properties</NavLink>
      </li>
      <li>
      <NavLink className='text-lg' to='/dashboard/requestedproperty'><GoCodeReview /> Requested properties</NavLink>
      </li>
             </> 
             :
             <>
                <li>
                  <NavLink className="text-lg" to="/dashboard/userprofile">
                    <IoMdHome /> My Profile
                  </NavLink>
                </li>
                
              
                <li>
                  <NavLink className="text-lg" to="/dashboard/userreview">
                  <GoCodeReview /> My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-lg" to="/dashboard/propertybought">
                  <HiOutlineHomeModern /> Property Bought
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-lg" to="/dashboard/">
                    <FaBookMedical /> WishList
                  </NavLink>
                </li>
              </>
            }
            {/* divider */}
            <div className="divider"></div>
  
            <li>
              <NavLink className="text-lg" to="/">
                <IoMdHome /> HOME
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg" to="/allproperty">
                <IoMenu /> ALL PROPERTY
              </NavLink>
            </li>
            
            
          </ul>
        </div>
  
        <div className="flex-1 pt-20">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;