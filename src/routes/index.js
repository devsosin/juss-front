import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Asset from "../pages/Asset";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/asset" element={<Asset />} />
    </Routes>
  );
};

export default AllRoutes;
