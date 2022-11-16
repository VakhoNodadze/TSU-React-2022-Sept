import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/molecules/Sidebar";
import ProductItem from "./pages/ProductItem";
import ProductList from "./pages/ProductsList";
import Navbar from "./components/molecules/Navbar";

const ProtectedRoutes = ({
  handleCategoryChange,
  categories,
  filteredProducts,
  handleAddToCart,
  cartItemsNumber,
}) => {
  return (
    <div>
      <Navbar cartItemsNumber={cartItemsNumber} />
      <div className="flex">
        <Sidebar
          handleCategoryChange={handleCategoryChange}
          categories={categories}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                products={filteredProducts}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/:productId"
            element={<ProductItem handleAddToCart={handleAddToCart} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default ProtectedRoutes;
