import React, { useContext } from 'react';
import { Authcontext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(Authcontext);
    const location= useLocation();
    console.log(location);


    if(loading){
        return <p>loading........</p>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;