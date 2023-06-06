import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const user=useSelector((store)=>store.auth.user);
    if(user.userType==="" || user.userType===undefined){
        return <Navigate to={"/login"} />
    }
  return children
}

export default PrivateRoute