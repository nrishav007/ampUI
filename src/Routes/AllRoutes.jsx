import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginView from '../Pages/LoginView'
import RegView from '../Pages/RegView'
import DJDashboard from '../Pages/DJ/DJDashboard'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/register" element={<RegView/>} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/dj" element={<DJDashboard />} />
    </Routes>
  )
}

export default AllRoutes