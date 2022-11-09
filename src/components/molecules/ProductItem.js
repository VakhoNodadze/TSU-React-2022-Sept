// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../atoms/Card";
import Avatar from "../atoms/Avatar/Avatar";

const ProductItem = ({
  id,
  description,
  image,
  title,
  price,
  category,
  rating,
}) => {
  //values
  const [isFrontHidden, setIsFrontHidden] = useState(false);

  // const { id, description, image, title, price, category, rating } = product;

  // handlers
  const handleFlip = () => setIsFrontHidden((prev) => !prev);

  return (
    <div className="my-5">
      <Card onClick={handleFlip}>
        <Card.Front isHidden={isFrontHidden}>
          <img
            src={image}
            alt="Placeholder"
            width="100%"
            height="100%"
            className="rounded-lg"
          />
          {/* <p className="text-2xl text-center mt-2">{title}</p>
          <p className="text-center text-lg mt-4">
            Rating <span className="font-bold">{rating.rate}</span>
          </p> */}
        </Card.Front>
        <Card.Back isHidden={isFrontHidden} className="p-4">
          <div className="flex items-center justify-between mx-4">
            <Avatar
              firstName={title}
              lastName={description}
              className="mr-2"
              avatar={image}
            />
            {/* <button
              // onClick={() => handleDelete(id)}
              className="px-2 font-bold text-white bg-red-400 rounded-lg right-6"
            >
              Remove Product
            </button> */}
          </div>
          <p className="mt-4 text-white">
            <span className="mr-2 text-sm text-white opacity-60">Title:</span>
            <span>{title}</span>
          </p>
          <p className="mt-4 text-white">
            <span className="mr-2 text-sm text-white opacity-60">
              Category:
            </span>
            <span>{category}</span>
          </p>
          <p className="mt-4 text-white">
            <span className="mr-2 text-sm text-white opacity-60">
              Description:
            </span>
            <span>{description}</span>
          </p>
        </Card.Back>
      </Card>
      <div className="mt-5 mx-4">
        <Link to={`/${id}`}>View Item</Link>
      </div>
    </div>
  );
};

export default ProductItem;
