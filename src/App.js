// @ts-nocheck
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <div className="flex flex-wrap w-full min-h-screen bg-slate-300 ">
      <div className="flex w-full">
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="/" element={<PersonsList personData={personData} />} /> */}
          <Route path="/*" element={<ProtectedRoutes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
