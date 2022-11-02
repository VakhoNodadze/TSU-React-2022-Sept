// @ts-nocheck
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import data from "./dummyData/data";
import PersonsList from "./pages/PersonsList";
import Register from "./pages/Register";
// import Login from "./pages/Login";
import LoginClass from "./pages/LoginClass";

function App() {
  const [personData, setPersonData] = useState(data);

  const [users, setUsers] = useState([
    { email: "vaxo@gmail.com", password: "vaxo" },
  ]);

  const handleAddUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="flex flex-wrap w-full min-h-screen bg-slate-300 ">
      <Routes>
        <Route
          path="register"
          element={<Register handleAddUser={handleAddUser} />}
        />
        <Route path="login" element={<LoginClass users={users} />} />
        <Route path="/" element={<PersonsList personData={personData} />} />
      </Routes>
    </div>
  );
}

export default App;
