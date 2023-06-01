import React from "react";
import { Route, Routes } from "react-router-dom";
import DJDashboard from '../Pages/DJ/DJDashboard'
import DJWeek from "../Pages/DJ/DJWeek";
import DJBook from "../Pages/DJ/DJBook";

const DJ = () => {
  return (
    <Routes>
      <Route path="/" element={<DJDashboard />} />
      <Route path="/djoftheweek" element={<DJWeek />} />
      <Route path="/book" element={<DJBook />} />
    </Routes>
  );
};

export default DJ;
