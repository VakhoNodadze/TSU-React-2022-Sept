// @ts-nocheck
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import data from "./dummyData/data";
import PersonsList from "./pages/PersonsList";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [personData, setPersonData] = useState(data);

  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="w-full min-h-screen bg-slate-300 flex flex-wrap ">
      <Routes>
        <Route
          path="register"
          element={<Register handleAddUser={handleAddUser} />}
        />
        <Route path="login" element={<Login users={users} />} />
        <Route path="/" element={<PersonsList personData={personData} />} />
      </Routes>
    </div>
  );
}

export default App;
