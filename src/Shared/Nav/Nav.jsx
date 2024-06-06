import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import logo from '../../assets/download-C1bLvnDk.jpg'

const Nav = () => {



    const navLinks = (
        <>
          <div className=" text-white sm:flex md:gap-3 items-center mx-auto justify-center">
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
            
            
    
            {/* {user ? (
              <>
                <button className="btn btn-ghost text-xl" >
                    onClick={handleLogout}
                  Log Out
                </button>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-400 border p-2 rounded-md border-yellow-400 font-mono"
                        : "text-xl"
                    }
                  >
                    LOGIN
                  </NavLink>
                </li>
              </>
            )} */}
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
          <h1 className=" font-bold text-2xl">PropertyZone</h1>
         
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="">
        {/* <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content={user?.displayName || "No User"}
          className="w-10 mr-2 rounded-full"
        >
          <img className="rounded-2xl" alt="" src={user?.photoURL} />
        </div> */}
        {/* {
      user?<>
      
<Link> <button className="btn border-green-600 text-green-500">Sign Out</button></Link>
</> :
<div className="flex gap-3">
<Link to='/login'> <button className="btn  border-green-600 text-green-500">Login</button></Link>
<Link to='/register'> <button className="btn border-green-600 text-green-500">Register</button></Link>
</div>
    } */}
      </div>
      <div className="ml-4">
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
    );
};

export default Nav;