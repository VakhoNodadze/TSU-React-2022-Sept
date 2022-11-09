// @ts-nocheck
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// import data from "./dummyData/data";
// import LoginClass from "./pages/LoginClass";
import Login from "./pages/Login";
// import PersonsList from "./pages/PersonsList";
import ProductList from "./pages/ProductsList";
import Register from "./pages/Register";
import ProductItem from "./pages/ProductItem";

function App() {
  // const [personData, setPersonData] = useState(data);
  const [productsData, setProductsData] = useState([]);

  const [users, setUsers] = useState([
    { email: "vaxo@gmail.com", password: "vaxo" },
  ]);

  const handleAddUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProductsData(json));
  }, []);

  return (
    <div className="flex flex-wrap w-full min-h-screen bg-slate-300 ">
      <Routes>
        <Route
          path="register"
          element={<Register handleAddUser={handleAddUser} />}
        />
        <Route path="login" element={<Login users={users} />} />
        {/* <Route path="/" element={<PersonsList personData={personData} />} /> */}
        <Route path="/" element={<ProductList products={productsData} />} />
        <Route path="/:productId" element={<ProductItem />} />
      </Routes>
    </div>
  );
}

export default App;
