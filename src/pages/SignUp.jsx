import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import Test from "../components/Test";

const SignUp = ({ test, testy, users, handleAddUser, modifyCurrentUser }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    compliant: false,
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setErrorMessage("");
    const { name, value, checked, type } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    if (!test) {
      navigate("/Dashboard", { replace: true });
      return;
    }
    e.preventDefault();
    const userExists = users.find(
      (user) =>
        user.username === newUser.username || user.email === newUser.email
    );
    if (!userExists) {
      // setNewUser(prev=>({...prev,loggedIn:true}))
      handleAddUser({ ...newUser, loggedIn: true });
      modifyCurrentUser(newUser);
      setNewUser({
        username: "",
        password: "",
        email: "",
        phoneNumber: "",
        compliant: false,
      });
      navigate("/Dashboard", { replace: true });
    } else {
      setErrorMessage("Don't you have an account already?");
      console.error("Don't you have an account already?");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="h-screen flex overflow-hidden">
      <div className="w-8/12">
        <img
          src="/Rectangle 1-1.png"
          alt="Stuff"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-4/12 p-12 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-[#4A7A4C] text-[37px] font-bold self-start">
            Sign Up
          </h1>
          <div className="flex flex-col gap-8 items-center">
            <div className="relative w-full">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={newUser.username}
                required={test}
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
                type="email"
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleChange}
                required={test}
                className="border-2 border-[#777777] rounded-[9px] w-full pl-10 py-2"
              />
              <img
                src="/Vector(3).png"
                alt="Thing"
                className="absolute top-[50%] -translate-y-[50%] left-[10px]"
              />
            </div>
            <div className="relative w-full">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleChange}
                value={newUser.phoneNumber}
                className="border-2 border-[#777777] rounded-[9px] w-full pl-10 py-2"
              />
              <img
                src="/Vector(4).png"
                alt="Thing"
                className="absolute top-[50%] -translate-y-[50%] left-[10px]"
              />
            </div>
            <div className="relative w-full">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={newUser.password}
                onChange={handleChange}
                required={test}
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
              htmlFor="compliant"
              className="text-[16px] font-normal w-2/3 self-start"
            >
              <input
                type="checkbox"
                name="compliant"
                id="compliant"
                className="mr-2"
                onChange={handleChange}
                checked={newUser.compliant}
                required={test}
              />
              I agree to the{" "}
              <span className="font-bold">
                Terms and Conditions & the Private Policy
              </span>{" "}
              by signing in
            </label>
            <div
              className={`${
                errorMessage ? "visible" : "invisible"
              } text-red-600 font-bold min-h-[30px]`}
            >
              <p>{errorMessage}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-8 items-stretch text-[27px] w-3/4">
            <button
              type="submit"
              className="font-bold animation1 bg-[#308B34] border-4 border-transparent rounded-[9px] text-white py-3 px-4"
            >
              {/* <Link to="/Dashboard" className="block w-full">
                Sign Up
              </Link> */}
              <span className="block w-full">Sign Up</span>
            </button>
          </div>
        </div>
      </div>
      <Test test={test} testy={testy} />
    </form>
  );
};

export default SignUp;
