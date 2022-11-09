// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductItem = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [isLoading, setIsloading] = useState(false);

  const handleGoBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setIsloading(true);
        return res.json();
      })
      .then((json) => setProduct(json))
      .finally(() => setIsloading(false));
  }, [productId]);

  const renderProduct = () => (
    <>
      <div className="flex items-start">
        <button onClick={handleGoBack}>Go back</button>
        <img src={product.image} alt="Product" width="200px" height="300px" />
      </div>
      <h1>
        <strong>Name: </strong> {product.title}
      </h1>
      <h2>
        <strong>Description:</strong> {product.description}
      </h2>
      <p>
        <strong>Rating</strong>
        {product.rating?.rate}{" "}
      </p>
    </>
  );

  return (
    <div className="flex flex-col">
      {isLoading ? <h1>Product is loading</h1> : renderProduct()}
    </div>
  );
};

export default ProductItem;
