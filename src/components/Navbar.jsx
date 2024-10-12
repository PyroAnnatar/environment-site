import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-2/12 h-full flex flex-col gap-24">
      {/* Profile */}
      <div className="text-white text-center flex flex-col gap-2 justify-center items-center pt-10">
        <img src="/Ellipse 1.png" alt="Pepega Photo" />
        <div>
          <h2 className="text-[19px] font-bold">Farmer Doge</h2>
          <p className="text-[12px] font-bold">Farm Owner</p>

          <Link to="/" className="font-bold text-red-500 text-sm bg-white">
            Log out
          </Link>
        </div>
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
              Farm Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Livestock"
              className={({ isActive }) =>
                `px-6 py-2 block w-full ${
                  isActive ? "bg-white text-[#4A7A4C]" : ""
                }`
              }
            >
              Livestock
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Dashboard"
              end
              className={({ isActive }) =>
                `px-6 py-2 block w-full ${
                  isActive ? "bg-white text-[#4A7A4C]" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Add bollocks */}
      <div className="w-full flex justify-center items-center px-4">
        <button className="text-[23px] font-bold text-[#308B34] bg-white py-2 px-4 rounded-[6px] w-full">
          + Add Farm
        </button>
      </div>
    </div>
  );
};

export default Navbar;
