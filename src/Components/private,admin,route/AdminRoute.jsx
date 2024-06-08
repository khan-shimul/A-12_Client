import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthPorvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../useAdmin";



const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isAdminPending]=useAdmin()
    const location =useLocation();


    if(loading || isAdminPending){
        return <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>;
    }
    
        if(user || isAdmin){
            return children;
        }
        return <Navigate state={location.pathname} to='/login'></Navigate>
   
};

export default AdminRoute;