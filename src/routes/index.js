import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Asset from "../pages/Asset";
import Account from "../pages/Account";
import Withdraw from "../pages/Withdraw";

import Benefit from "../pages/Benefit";
import Pay from "../pages/Pay";
import Stock from "../pages/Stock";
import Menu from "../pages/Menu";
import Expense from "../pages/Expense";
import Transfer from "../pages/Transfer";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/asset" element={<Asset />} />
      <Route path="/account/:id" element={<Account />} />
      <Route path="/withdraw/:id" element={<Withdraw />} />
      <Route path="/expense" element={<Expense />} />
      <Route path="/transfer/:fromId/:toId" element={<Transfer />} />

      {/* 공사중 */}
      <Route path="/benefit" element={<Benefit />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default AllRoutes;
