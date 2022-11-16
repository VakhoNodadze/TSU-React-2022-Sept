import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({ cartItemsNumber }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="py-2 mb-2 md:border-b">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <img
              className="w-32 ml-2"
              src="https://refine.dev/img/refine_logo.png"
              alt="Logo"
            />
            <div className="flex items-center justify-between ">
              <ul className="hidden md:flex">
                <li className="float-left">
                  <p className="flex items-center gap-1 px-2 py-1 mt-2 capitalize transition duration-300 ease-in-out rounded-sm cursor-pointer hover:text-gray-700 decoration-indigo-500 decoration-2 underline-offset-1">
                    <Link to="/">Main Menu</Link>
                  </p>
                </li>
                <li className="float-left">
                  <p className="flex items-center gap-1 px-2 py-1 mt-2 capitalize transition duration-300 ease-in-out rounded-sm cursor-pointer decoration-indigo-500 decoration-2 underline-offset-1 hover:text-gray-700">
                    <Link to="/watchlist">Watch List</Link>
                  </p>
                </li>
                <li className="float-left">
                  <p className="flex items-center gap-1 px-2 py-1 mt-2 capitalize transition duration-300 ease-in-out rounded-sm cursor-pointer hover:text-gray-700 decoration-indigo-500 decoration-2 underline-offset-1">
                    <span>
                      Cart <ShoppingCartIcon />{" "}
                      {cartItemsNumber > 0 && cartItemsNumber}
                    </span>
                  </p>
                </li>
              </ul>
              <p
                className="flex items-center gap-1 px-2 py-1 mt-2 capitalize transition duration-300 ease-in-out rounded-sm cursor-pointer hover:text-gray-700 decoration-indigo-500 decoration-2 underline-offset-1"
                onClick={handleLogout}
              >
                <Link to="/login">Log out</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
