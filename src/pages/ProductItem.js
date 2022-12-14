// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import { useStore } from "../store/StoreContext";
import { setCartItems } from "../store/actions";

const ProductItem = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { dispatch } = useStore();

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

  const calculateRatingStars = (rating) => {
    if (!rating) return null;
    const stars = [];
    const roundedRating = Math.round(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<StarIcon key={i} />);
      } else if (rating - roundedRating > 0.7) {
        stars.push(<StarIcon key={i} />);
      } else if (
        rating - roundedRating <= 0.7 &&
        rating - roundedRating > 0.2
      ) {
        stars.push(<StarHalfIcon key={i} />);
      } else {
        stars.push(<StarOutlineIcon key={i} />);
      }
    }
    return stars;
  };

  const renderProduct = () => (
    <div>
      <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
        <div className="flex items-center justify-center flex-1">
          <img
            src={product.image}
            className="max-w-[400px] max-h-[400px] mobile:max-w-[200px] mobile:max-h-[200px]"
            alt="product_image"
          />
        </div>
        <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            {product.title}
          </h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
            {product.description}
          </p>
          <div className="flex flex-col place-self-start">
            <p className="text-3xl mt-7">
              Price: <b>{product.price}$</b>
            </p>
            <div className="mt-5 text-3xl">
              <p>Rating:</p>
              <div className="flex items-center">
                {calculateRatingStars(product?.rating?.rate)}
                <p className="ml-2">Reviewers: {product?.rating?.count}</p>
              </div>
            </div>
            <div className="text-2xl mt-7">
              Size
              <select
                defaultChecked="Select"
                className="border-[2px] border-silver rounded-md ml-5"
              >
                <option>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <button
            className="text-white bg-[#8a4af3] rounded-md shadow-md mt-[30px] p-3"
            onClick={() => dispatch(setCartItems(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col">
      {isLoading ? <h1>Product is loading</h1> : renderProduct()}
    </div>
  );
};

export default ProductItem;
