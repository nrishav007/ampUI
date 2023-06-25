import React from 'react'
import { Route, Routes } from "react-router-dom";
import UserTrans from '../Pages/User/UserTrans';
import UserBooking from '../Pages/User/UserBooking';
import UserSingleDJ from '../Pages/User/UserSingleDJ';
import UserDJBook from '../Pages/User/UserDJBook';
import UserDjs from '../Pages/User/UserDjs';
import UserMessage from '../Pages/User/UserMessage';
import UserHome from '../Pages/User/UserHome';
import UserFavourite from '../Pages/User/UserFavourite';
import UserProfile from '../Pages/User/UserProfile';
const User = () => {
  return (
    <Routes>
    <Route path="/alldjs" element={<UserDjs />} />
    <Route path="/transactions" element={<UserTrans />} />
    <Route path="/book" element={<UserBooking />} />
    <Route path="/" element={<UserHome />} />
    <Route path="/messages" element={<UserMessage />} />
    <Route path="/favourites" element={<UserFavourite />} />
    <Route path="/singleDJ/:id" element={<UserSingleDJ />} />
    <Route path="/djbook/:id" element={<UserDJBook />} />
    <Route path="/profile" element={<UserProfile />} />
  </Routes>
  )
}

export default User