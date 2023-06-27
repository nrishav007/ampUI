import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginView from '../Pages/LoginView'
import RegView from '../Pages/RegView'
import DJ from './DJ';
import PrivateRoute from './PrivateRoute';
import User from './User';
// import LandingPage from '../Pages/LandingPage';


const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<LandingPage/>} /> */}
        <Route path="/register" element={<RegView/>} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/dj/*" element={<PrivateRoute><DJ /></PrivateRoute>} />
        <Route path="/user/*" element={<PrivateRoute><User /></PrivateRoute>} />
    </Routes>
  )
}

export default AllRoutes