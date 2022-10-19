import React from "react";

const Card = ({ children, ...rest }) => (
  <div
    {...rest}
    className='m-4 bg-transparent rounded-lg cursor-pointer w-72 h-96 perspective'
  >
    <div className='relative w-full h-full duration-1000 preserve-3d'>
      {children}
    </div>
  </div>
);

const CardFront = ({ children, className, isHidden }) => (
  <div
    className={`absolute w-full h-full transition-all 
    bg-red-200 duration-500 border-0 backface-hidden rounded-lg ${
      isHidden ? "rotate-y-180 z-10" : "rotate-y-0 z-20"
    } ${className}`}
  >
    {children}
  </div>
);

const CardBack = ({ children, className, isHidden }) => (
  <div
    className={`absolute w-full h-full transition-all 
      bg-red-200 duration-500 border-0 backface-hidden rounded-lg ${
        isHidden ? "rotate-y-0 z-20" : "rotate-y-180 z-10"
      } ${className}`}
  >
    {children}
  </div>
);

Card.Front = CardFront;
Card.Back = CardBack;

export default Card;
