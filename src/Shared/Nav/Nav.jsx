
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import logo from '../../assets/download-C1bLvnDk.jpg'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthPorvider";
import Swal from "sweetalert2";



const Nav = () => {

  const { logOut, user } = useContext(AuthContext);
  


  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire("Log Out Successful!");
      })
      .catch((error) => console.log(error));
  };

    const navLinks = (
        <>
          <div className=" text-green-500 sm:flex md:gap-3 items-center mx-auto justify-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border p-2 rounded-md border-yellow-400 font-mono"
                    : "text-xl"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allproperty"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border p-2 rounded-md border-yellow-400 font-mono"
                    : "text-xl"
                }
              >
               ALL PROPERTIES
              </NavLink>
            </li>
    
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border p-2 rounded-md border-yellow-400 font-mono"
                    : "text-xl"
                }
              >
                 <FaCartShopping  className="text-3xl"/>
                DASHBOARD
              </NavLink>
            </li>
            
            
    
          
          </div>
        </>
      );

    return (
        <div className="max-w-screen-xl navbar fixed z-50 bg-[#15151580] container px-4 mx-auto  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu navbar-end menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <div className="text-white flex gap-2">
          <img className='h-9 w-9 rounded-lg' src={logo} alt="" />
          <p className="font-bold ">
    <span className='text-white'><span className='text-3xl text-orange-600'>P</span ><span className='text-lg'>ROPERTY</span></span> <span className='text-3xl text-orange-600'>Z</span><span className='text-lg'>ONE</span> <br/>
    </p>
         
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="">
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content={user?.displayName || "No User"}
          className="w-10 mr-2 rounded-full"
        >
          <img className="rounded-2xl" alt="" src={user?.photoURL} />
        </div>
        {
      user?<>
      
<Link> <button onClick={handleLogout} className="btn border-green-600 text-green-500">Sign Out</button></Link>
</> :
<div className="flex gap-3">
<Link to='/login'> <button className="btn  bg-gray-500 border-green-600 text-white">Login</button></Link>
<Link to='/signup'> <button className="btn bg-gray-500 border-green-600 text-white">Register</button></Link>
</div>
    }
      </div>
      <div className="ml-4">
       
      </div>
      
      <Tooltip id="my-tooltip" />
    </div>
    );
};

export default Nav;