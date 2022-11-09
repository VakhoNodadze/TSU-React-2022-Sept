import React from "react";
import ProductItem from "../components/molecules/ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap w-full">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          // product={product}
          {...product}
        />
      ))}
    </div>
  );
};

export default ProductList;
