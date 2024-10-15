import { Link, useNavigate } from "react-router-dom";

import React, { useState } from "react";
import Test from "../components/Test";

const Login = ({ test, testy, modifyCurrentUser, users }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [loginfo, setLoginfo] = useState({
    username: "",
    password: "",
    compliant: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!test) {
      navigate("/Dashboard");
    } else {
      const user = users.find(
        (user) =>
          user.username === loginfo.username &&
          user.password === loginfo.password
      );
      if (user) {
        modifyCurrentUser(user);
        navigate("/Dashboard");
      } else {
        setErrorMessage("Username or password wrong");
        console.error("You whoopsie'd");
      }
    }
  }
  function handleLoginfo(e) {
    setErrorMessage("");
    const { name, value, type, checked } = e.target;
    setLoginfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function togglePasswordVisib() {
    setPasswordHidden((prev) => !prev);
  }

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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-10"
        >
          <h1 className="text-[#4A7A4C] text-[37px] font-bold self-start">
            Sign In
          </h1>
          <div className="flex flex-col gap-8 items-center">
            <div className="relative w-full">
              <input
                name="username"
                value={loginfo.username}
                onChange={handleLoginfo}
                type="text"
                placeholder="Username"
                className="border-2 border-[#777777] rounded-[9px] w-full pl-10 py-2"
                required={test}
              />
              <img
                src="/mdi_user.png"
                alt="Thing"
                className="absolute top-[50%] -translate-y-[50%] left-2"
                required={test}
              />
            </div>
            <div className="relative w-full">
              <input
                name="password"
                value={loginfo.password}
                onChange={handleLoginfo}
                type={passwordHidden ? "password" : "text"}
                placeholder="Password"
                className="border-2 border-[#777777] rounded-[9px] w-full pl-10 py-2"
              />
              <img
                src="/Vector (2).png"
                alt="Thing"
                className="absolute top-[50%] -translate-y-[50%] left-[10px]"
              />
              <img
                onClick={togglePasswordVisib}
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
                name="compliant"
                checked={loginfo.compliant}
                onChange={handleLoginfo}
                required={test}
                id="compliant"
                type="checkbox"
                className="mr-2"
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
              className="animation1 font-extrabold bg-[#308B34] border-4 border-transparent rounded-[9px] text-white py-3 px-4"
            >
              <span className="block w-full">Login</span>
            </button>
            <button className="animation1 delay1 font-semibold border-4 border-[#308B34] rounded-[9px] text-[#308B34] py-3 px-4">
              <Link to={"/Sign-Up"} className="block w-full">
                Sign Up
              </Link>
            </button>
          </div>
        </form>
      </div>
      <Test test={test} testy={testy} />
    </div>
  );
};

export default Login;
