import React from "react";

const Livestock = () => {
  return (
    <div className="w-10/12 h-screen bg-[#4A7A4C] flex justify-center items-center p-4 pl-0">
      {/* Window */}
      <div className="w-full h-[99%] bg-white rounded-[25px] py-3 px-10 flex flex-col gap-10">
        <div className="flex justify-between items-center text-[22px]">
          <h2 className="text-[38px] font-bold text-[#308B34]">
            Manage Livestock
          </h2>
          <div className="flex gap-4">
            <button className="bg-[#4A7A4C] text-white flex justify-center items-center py-2 px-4 rounded-[6px] gap-2 font-bold">
              <div>
                <img src="/Vector(5).png" alt="" />
              </div>
              View Live
            </button>
            <button className="bg-[#4A7A4C] text-white flex justify-center items-center py-2 px-4 rounded-[6px] gap-2 font-bold">
              + Add Cattle
            </button>
          </div>
        </div>
        <div className="flex justify-end gap-6">
          <button className="bg-[#4A7A4C] text-white flex justify-center items-center py-2 px-4 rounded-[6px] gap-4 font-bold text-[23px]">
            <span>Total:</span>{" "}
            <span className="text-[30px] font-semibold">63</span>
          </button>
          <button className="bg-[#4A7A4C] text-white flex justify-center items-center py-2 px-4 rounded-[6px] gap-4 font-bold text-[23px]">
            <div>
              <img src="/Vector(7).png" alt="" />
            </div>
            <span>Area:</span>{" "}
            <span className="text-[30px] font-semibold">25 Acres</span>
          </button>
        </div>
        <div className="flex justify-start items-stretch h-2/4 gap-4 font-bold text-[23px]">
          <div className="w-1/4 shadow-[0_0_27px_rgba(0,0,0,0.2)] rounded-[16px] py-3 px-5 flex flex-col justify-between text-[#4A7A4C]">
            <h2 className="text-[30px]">Goat</h2>
            <div>
              <h3>Count:</h3>
              <h3>Breed:</h3>
              <h3>Males:</h3>
              <h3>Females:</h3>
            </div>
            <div className="relative">
              <img
                src="/Rectangle 39.png"
                alt=""
                className="object-fill h-full w-full max-h-[550px]"
              />
              <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-extrabold text-[61px] text-white">
                +5
              </span>
            </div>
          </div>
          <div className="w-1/4 shadow-[0_0_27px_rgba(0,0,0,0.2)] rounded-[16px] py-3 px-5 flex flex-col justify-between text-[#4A7A4C]">
            <h2 className="text-[30px]">Cow</h2>
            <div>
              <h3>Count:</h3>
              <h3>Breed:</h3>
              <h3>Males:</h3>
              <h3>Females:</h3>
            </div>
            <div className="relative">
              <img
                src="/Rectangle 40.png"
                alt=""
                className="object-fill h-full w-full max-h-[550px]"
              />
              <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-extrabold text-[61px] text-white">
                +2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livestock;
