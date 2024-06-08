import axios from "axios";

const axiosSecure= axios.create({
    baseURL:'http://localhost:5000'
})

const useaxiousSecure = () => {
    return axiosSecure
};

export default useaxiousSecure;