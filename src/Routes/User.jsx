import React from 'react'
import { Route, Routes } from "react-router-dom";
import UserDashboard from '../Pages/User/UserDashboard';
import UserTrans from '../Pages/User/UserTrans';
const User = () => {
  return (
    <Routes>
    <Route path="/" element={<UserDashboard />} />
    <Route path="/transactions" element={<UserTrans />} />
    
  </Routes>
  )
}

export default User