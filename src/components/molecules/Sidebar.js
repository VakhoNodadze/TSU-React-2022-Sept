import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ categories, handleCategoryChange }) => {
  return (
    <aside className="w-64 min-h-screen">
      <div className="h-full px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center px-2 py-2 space-x-2 capitalize rounded-md cursor-pointer break-keep hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => handleCategoryChange("all")}
            >
              <span
                className="text-sm font-medium text-gray-500 break-keep dark:text-gray-400"
                style={{ whiteSpace: "nowrap" }}
              >
                All
              </span>
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Link
                to="/"
                className="flex items-center px-2 py-2 space-x-2 capitalize rounded-md cursor-pointer break-keep hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handleCategoryChange(category)}
              >
                <span
                  className="text-sm font-medium text-gray-500 break-keep dark:text-gray-400"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {category}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
