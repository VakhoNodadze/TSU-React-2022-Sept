import React from "react";
import ProductItem from "../components/molecules/ProductItem";

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <div className="flex flex-wrap w-full">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
          // {...product}
        />
      ))}
    </div>
  );
};

export default ProductList;
