import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SharedLayout from "./pages/SharedLayout";
import Livestock from "./pages/Livestock";
import FarmAnalytics from "./pages/FarmAnalytics";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Sign-Up" element={<SignUp />} />
        <Route path="/Dashboard" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="Livestock" element={<Livestock />} />
          <Route path="Farm-Analytics" element={<FarmAnalytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
