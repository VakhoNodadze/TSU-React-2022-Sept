import React from "react";
import ProductItem from "../components/molecules/ProductItem";

import { useStore } from "../store/StoreContext";

const ProductList = () => {
  const { filteredProducts: products } = useStore();
  return (
    <div className="flex flex-wrap w-full">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
