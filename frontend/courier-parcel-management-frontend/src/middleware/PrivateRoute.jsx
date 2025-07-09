import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = ({role}) => {
    const {user, loading} = useAuth();

    if(loading){
        return <p>Loading....</p>
    }

    if(!user || user?.role !== role ){
        return <Navigate to='/login' replace />
    }
 
    return <Outlet />
}

export default PrivateRoute