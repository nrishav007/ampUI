import React from "react";
import { Route, Routes } from "react-router-dom";
import DJDashboard from '../Pages/DJ/DJDashboard'
import DJWeek from "../Pages/DJ/DJWeek";
import DJBook from "../Pages/DJ/DJBook";
import DJMessage from "../Pages/DJ/DJMessage";
import DJPromos from "../Pages/DJ/DJPromos";

const DJ = () => {
  return (
    <Routes>
      <Route path="/" element={<DJDashboard />} />
      <Route path="/djoftheweek" element={<DJWeek />} />
      <Route path="/book" element={<DJBook />} />
      <Route path="/messages" element={<DJMessage />} />
      <Route path="/promos" element={<DJPromos />} />
    </Routes>
  );
};

export default DJ;
