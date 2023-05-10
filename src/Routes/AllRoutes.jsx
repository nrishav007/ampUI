import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginView from '../Pages/LoginView'
import RegView from '../Pages/RegView'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/register" element={<RegView/>} />
        <Route path="/login" element={<LoginView />} />
    </Routes>
  )
}

export default AllRoutes