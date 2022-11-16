// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";

const ProductItem = ({ product, handleAddToCart }) => {
  //values
  // const [isFrontHidden, setIsFrontHidden] = useState(false);
  const { id, description, image, title, price, category, rating } = product;

  const [hoverEffects, setHoverEffects] = useState(" opacity-0");

  // const { id, description, image, title, price, category, rating } = product;

  // handlers
  // const handleFlip = () => setIsFrontHidden((prev) => !prev);

  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";

  function handleHoverEnter() {
    setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  }

  function handleHoverExit() {
    setHoverEffects(" opacity-0");
  }

  return (
    <div
      className="flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={image} alt="product" className="h-[80%] w-[90%]" />
      <div
        className={
          `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
          hoverEffects
        }
      >
        <div className={iconStyle} onClick={() => handleAddToCart(product)}>
          <ShoppingCartIcon />
        </div>
        <div className={iconStyle}>
          <FavoriteIcon />
        </div>
        <div className={iconStyle}>
          <Link to={`/${id}`}>
            <SearchIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
