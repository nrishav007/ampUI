import React from 'react'
import { Route, Routes } from "react-router-dom";
import UserTrans from '../Pages/User/UserTrans';
import UserBooking from '../Pages/User/UserBooking';
import UserSingleDJ from '../Pages/User/UserSingleDJ';
import UserDJBook from '../Pages/User/UserDJBook';
import UserDjs from '../Pages/User/UserDjs';
import UserFav from '../Pages/User/UserFav';
import UserMessage from '../Pages/User/UserMessage';
const User = () => {
  return (
    <Routes>
    <Route path="/alldjs" element={<UserDjs />} />
    <Route path="/transactions" element={<UserTrans />} />
    <Route path="/book" element={<UserBooking />} />
    <Route path="/" element={<UserFav />} />
    <Route path="/messages" element={<UserMessage />} />
    <Route path="/singleDJ/:id" element={<UserSingleDJ />} />
    <Route path="/djbook/:id" element={<UserDJBook />} />
  </Routes>
  )
}

export default User