// @ts-nocheck
import React, { useState } from "react";
import Card from "../primitives/Card";
import Avatar from "../primitives/Avatar/Avatar";

import useToggle from "hooks/useToggle";

const PersonItem = ({
  name,
  country,
  avatar,
  region,
  numberRange,
  phone,
  address,
  id,
  handleDelete,
}) => {
  //values
  const [value, toggleValue] = useToggle(false);

  const firstName = name?.split(" ")[0];
  const lastName = name?.split(" ")[1];

  // handlers
  // const handleFlip = () => setvalue((prev) => !prev);

  return (
    <div>
      <Card onClick={toggleValue}>
        <Card.Front isHidden={value}>
          <img
            src="https://www.w3schools.com/w3images/team2.jpg"
            alt="Placeholder"
            width="100%"
            className="rounded-lg"
          />
          <p className="mt-2 text-2xl text-center">{name}</p>
          <p className="mt-4 text-lg text-center">
            Number Range: <span className="font-bold">{numberRange}</span>
          </p>
        </Card.Front>
        <Card.Back isHidden={value} className="p-4">
          <div className="flex items-center justify-between mx-4">
            <Avatar
              firstName={firstName}
              lastName={lastName}
              className="mr-2"
              avatar={avatar}
            />
            <button
              onClick={() => handleDelete(id)}
              className="px-2 font-bold text-white bg-red-400 rounded-lg right-6"
            >
              Remove User
            </button>
          </div>
          <p className="mt-4 text-white">
            <span className="mr-2 text-sm text-white opacity-60">
              Full Name:
            </span>
            <span>{name}</span>
          </p>
          <p className="mt-4 text-white">
            <span className="mr-2 text-sm text-white opacity-60">Address:</span>
            <span>{address}</span>
          </p>
          <p className="mt-4 text-white">
            <span className="mr-2 text-sm text-white opacity-60">Country:</span>
            <span>{country}</span>
          </p>
          <p className="mt-4 text-white">
            <span className="mr-2 text-sm text-white opacity-60">Region:</span>
            <span>{region}</span>
          </p>
          <p className="mt-4 text-white">
            <span className="mr-2 text-sm text-white opacity-60">
              Phone Number:
            </span>
            <span>{phone}</span>
          </p>
        </Card.Back>
      </Card>
    </div>
  );
};

export default PersonItem;
