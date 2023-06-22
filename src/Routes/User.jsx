import React from 'react'
import { Route, Routes } from "react-router-dom";
import UserDashboard from '../Pages/User/UserDashboard';
import UserTrans from '../Pages/User/UserTrans';
import UserBooking from '../Pages/User/UserBooking';
import UserFav from '../Pages/User/UserFav';
import UserSingleDJ from '../Pages/User/UserSingleDJ';
import UserDJBook from '../Pages/User/UserDJBook';
const User = () => {
  return (
    <Routes>
    <Route path="/" element={<UserDashboard />} />
    <Route path="/transactions" element={<UserTrans />} />
    <Route path="/book" element={<UserBooking />} />
    <Route path="/favourite" element={<UserFav />} />
    <Route path="/dj/:id" element={<UserSingleDJ />} />
    <Route path="/djbook/:id" element={<UserDJBook />} />
  </Routes>
  )
}

export default User