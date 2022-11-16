// @ts-nocheck
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  // const [personData, setPersonData] = useState(data);
  const [productsData, setProductsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCateogy] = useState("all");
  const [cartItems, setCartItems] = useState([]);

  const [users, setUsers] = useState([
    { email: "vaxo@gmail.com", password: "vaxo" },
  ]);

  const filteredProducts = () => {
    if (chosenCategory === "all") return productsData;

    return productsData.filter(
      (product) => product.category === chosenCategory
    );
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => [product, ...prev]);
  };

  const handleAddUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  const handleCategoryChange = (category) => {
    setChosenCateogy(category);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProductsData(json));
  }, []);

  useEffect(() => {
    if (productsData.length > 0) {
      const categories = productsData.map((product) => product.category);
      // ვქმნით ახალ სეტს, ვაწვდით კატეგორიების მასივს, რომელშიც გვაქს დუპლიკატები,
      // შემდეგ ვუკეთებ დესტრუქტურიზაციას სამიწ წერთილით, და შემეგ ამას გარდავქმნით უკან მასივად
      // საბოლოო შედეგი იქნება მასივი, უნიკალური ელემენტებით.
      // [...new Set(categories)]
      // const mySet = new Set(categories);
      // console.log([...mySet]);
      setCategories([...new Set(categories)]);
    }
  }, [productsData]);

  return (
    <div className="flex flex-wrap w-full min-h-screen bg-slate-300 ">
      <div className="flex w-full">
        <Routes>
          <Route
            path="register"
            element={<Register handleAddUser={handleAddUser} />}
          />
          <Route path="login" element={<Login users={users} />} />
          {/* <Route path="/" element={<PersonsList personData={personData} />} /> */}
          <Route
            path="/*"
            element={
              <ProtectedRoutes
                handleAddToCart={handleAddToCart}
                handleCategoryChange={handleCategoryChange}
                categories={categories}
                filteredProducts={filteredProducts()}
                cartItemsNumber={cartItems.length}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
