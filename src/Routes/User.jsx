import React from 'react'
import { Route, Routes } from "react-router-dom";
import UserDashboard from '../Pages/User/UserDashboard';
const User = () => {
  return (
    <Routes>
    <Route path="/" element={<UserDashboard />} />
    
  </Routes>
  )
}

export default User