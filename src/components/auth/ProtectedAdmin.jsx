import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedAdmin = ({ children }) => {
    const {user} = useContext(UserContext)

    if(!user){
        return <Navigate to="/login" />
    }

    if(user.role !== 'admin'){
        return <Navigate to="/" />
    }    
    
    return children
};

export default ProtectedAdmin;