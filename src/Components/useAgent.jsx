import { useContext } from "react";
import { AuthContext } from "../Provider/AuthPorvider";
import useaxiousSecure from "./useaxiousSecure";
import { useQuery } from "@tanstack/react-query";


const useAgent = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useaxiousSecure()
    const{data: isAgent,isPending:isAgentPending}=useQuery({
        queryKey:[user?.email, 'isAgent'],
        queryFn:async()=>{
            const res= await axiosSecure.get(`/user/agent/${user?.email}`)
            return res.data?.agent
        }
    })
    return [isAgent,isAgentPending]
};

export default useAgent;