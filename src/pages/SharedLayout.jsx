import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <div className="h-screen bg-[#4A7A4C] flex">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
