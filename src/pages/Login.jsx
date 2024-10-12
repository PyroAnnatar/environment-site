import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="w-8/12">
        <img
          src="Rectangle 1 (2).png"
          alt="Stuff"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-4/12 p-12 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-[#4A7A4C] text-[37px] font-bold self-start">
            Sign In
          </h1>
          <div className="flex flex-col gap-8 items-center">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Username"
                className="border-2 border-[#777777] rounded-[9px] w-full pl-10 py-2"
              />
              <img
                src="/mdi_user.png"
                alt="Thing"
                className="absolute top-[50%] -translate-y-[50%] left-2"
              />
            </div>
            <div className="relative w-full">
              <input
                type="password"
                placeholder="Password"
                className="border-2 border-[#777777] rounded-[9px] w-full pl-10 py-2"
              />
              <img
                src="/Vector (2).png"
                alt="Thing"
                className="absolute top-[50%] -translate-y-[50%] left-[10px]"
              />
              <img
                src="/Vector(2).png"
                alt="Thing"
                className="absolute top-[50%] -translate-y-[50%] right-[10px] cursor-pointer"
              />
            </div>

            <label
              htmlFor=""
              className="text-[16px] font-normal w-2/3 self-start"
            >
              <input type="checkbox" className="mr-2" />I agree to the{" "}
              <span className="font-bold">
                Terms and Conditions & the Private Policy
              </span>{" "}
              by signing in
            </label>
          </div>
          <div className="flex flex-col justify-center gap-8 items-stretch text-[27px] w-3/4">
            <button className="font-extrabold bg-[#308B34] border-4 border-transparent rounded-[9px] text-white py-3 px-4">
              <Link to="/Dashboard" className="block w-full">
                Login
              </Link>
            </button>
            <button className="font-semibold border-4 border-[#308B34] rounded-[9px] text-[#308B34] py-3 px-4">
              <Link to={"/Sign-Up"} className="block w-full">
                Sign Up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
