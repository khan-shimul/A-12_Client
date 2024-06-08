import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthPorvider';
import useaxiousSecure from './useaxiousSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useaxiousSecure()
    const{data: isAdmin,isPending:isAdminPending}=useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn:async()=>{
            const res= await axiosSecure.get(`/user/admin/${user?.email}`)
            return res.data?.admin
        }
    })
    return [isAdmin,isAdminPending]
};

export default useAdmin;