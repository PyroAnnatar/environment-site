import { Link } from "react-router-dom";

import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center h-screen p-4 bg-gray-700 shadow-[0_0_50px_rgba(0,0,0,1)_inset] text-white">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-center">404</h1>
        <div className="flex flex-col gap-4 justify-center items-center p-4 max-w-[450px] rounded-full bg-white">
          <div className="w-[250px] h-[250px] ">
            <img
              src="/philosoraptor.png"
              alt=""
              className="w-full h-full object-cover rounded-full memes"
            />
          </div>
        </div>
      </div>

      <div className="w-2/3 text-center flex flex-col gap-4">
        <p>You have found the elusive Philosoraptor</p>
        <p>
          He starts contemplating the mysteries of life and the universe but you
          know he'll eat you eventually.
        </p>
        <p>
          You better go{" "}
          <Link to="/" className="font-bold text-blue-500 hover:text-blue-400">
            back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
