import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthPorvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation();

    if(loading){
        return <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>;
    }
    
        if(user){
            return children;
        }
        return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;