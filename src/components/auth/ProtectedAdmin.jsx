import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { Navigate } from 'react-router-dom';
import AdminSkeleton from '../../pages/admin/components/AdminSkeleton';

const ProtectedAdmin = ({ children }) => {
    const {user,loading} = useContext(UserContext)

    if(loading){
        return <AdminSkeleton/>
    }

    if(!user){
        return <Navigate to="/login" />
    }

    if(user.role !== 'admin'){
        return <Navigate to="/" />
    }    
    
    return children
};

export default ProtectedAdmin;