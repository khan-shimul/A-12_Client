import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthPorvider";

const axiosSecure= axios.create({
    baseURL:'http://localhost:5000'
    // baseURL:'http://localhost:5000'
   
})

const useaxiousSecure = () => {
    const navigate=useNavigate()
    const{logOut}=useContext(AuthContext)
    // interceptors for every request call
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
    //   console.log("req stop by inter", token);
      config.headers.authorization= `Bearer ${token}`
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  // Add a response interceptor
axiosSecure.interceptors.response.use(function (response) {
    
    return response;
  }, async function (error) {
    const status= error.response.status
    // console.log('stutas in inter' ,status)
    if(status===401||status===403){
     
    await logOut()
   navigate('/login')

    }
    return Promise.reject(error);
  });
    return axiosSecure
};

export default useaxiousSecure;