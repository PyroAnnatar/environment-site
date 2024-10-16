import React from "react";

const Test = ({ test, testy }) => {
  return (
    <button
      onClick={testy}
      className="w-2/3 mx-auto lg:absolute bottom-4 right-4 font-semibold text-red-600 bg-black p-2 rounded-full border-4 shadow-[0_0_10px_rgba(255,255,255,0.3)_inset] border-zinc-900 hover:bg-[#0a0a0a] transition-all duration-75 active:bg-[#18181b] active:shadow-[0_0_10px_rgba(0,0,0,1)_inset] group"
    >
      <div className="flex justify-center items-center gap-2 group-active:scale-95 transition-all duration-75">
        Test Mode (Enables Auth logic(logic?)):
        <span
          className={`text-white group-[thing]: font-bold w-[35px] aspect-square rounded-full flex justify-center items-center p-[2px] border-2 border-white  ${
            test ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {test ? "On" : "Off"}
        </span>
      </div>
    </button>
  );
};

export default Test;
