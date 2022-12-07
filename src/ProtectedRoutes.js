import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/molecules/Sidebar";
import ProductItem from "./pages/ProductItem";
import ProductList from "./pages/ProductsList";
import Navbar from "./components/molecules/Navbar";

const ProtectedRoutes = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/:productId" element={<ProductItem />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProtectedRoutes;
