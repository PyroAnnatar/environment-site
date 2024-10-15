import { NavLink, useNavigate } from "react-router-dom";

import React from "react";

const Navbar = ({ handleOpenModal, currentUser, clearCurrentUser }) => {
  const navigate = useNavigate();

  function handleLogout() {
    clearCurrentUser();
    navigate("/");
  }

  return (
    <div className="w-2/12 h-full flex flex-col gap-24">
      {/* Profile */}
      <div className="text-white text-center flex flex-col gap-1 justify-center items-center pt-10">
        <img
          src="/slave driver doge.jpg"
          alt="Pepega Photo"
          className="rounded-full object-cover object-right w-[100px] h-[100px] border-4 border-white"
        />
        <div className="leading-5">
          <h2 className="text-[19px] font-bold">
            {currentUser ? currentUser.username : "Farmer Doge"}
          </h2>
          <p className="text-[12px] font-bold">Farm Owner</p>
        </div>
        <button
          onClick={handleLogout}
          className="font-bold text-red-600 hover:bg-zinc-800 text-sm bg-[#1a1a1b] border-2 border-zinc-900 py-1 px-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)_inset] active:bg-[#18181b] active:shadow-[0_0_10px_rgba(0,0,0,1)_inset] transition-all duration-75 hover:text-red-500 active:text-red-700"
        >
          Log out
        </button>
      </div>
      {/* Nav */}
      <nav className="flex flex-col justify-center items-start text-white font-bold text-[23px] text-center">
        <ul className="w-full">
          <li>
            <NavLink
              to="Farm-Analytics"
              className={({ isActive }) =>
                `px-6 py-2 block w-full ${
                  isActive ? "bg-white text-[#4A7A4C]" : ""
                }`
              }
            >
              <span className="block animation3">Farm Analytics</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Livestock"
              className={({ isActive }) =>
                `delay1 px-6 py-2 block w-full ${
                  isActive ? "bg-white text-[#4A7A4C]" : ""
                }`
              }
            >
              <span className="block animation3 delay1">Livestock</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Dashboard"
              end
              className={({ isActive }) =>
                `delay2 px-6 py-2 block w-full ${
                  isActive ? "bg-white text-[#4A7A4C]" : ""
                }`
              }
            >
              <span className="block animation3 delay2">Dashboard</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Add bollocks */}
      <div className="w-full flex justify-center items-center px-4">
        <button
          onClick={handleOpenModal}
          className="text-[23px] animation2 font-bold text-[#308B34] bg-white py-2 px-4 rounded-[6px] w-full"
        >
          + Add Farm
        </button>
      </div>
    </div>
  );
};

export default Navbar;
