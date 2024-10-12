import React from "react";
import SharedLayout from "./SharedLayout";

const Dashboard = () => {
  return (
    <div className="w-10/12 h-screen bg-[#4A7A4C] flex justify-center items-center p-4 pl-0">
      {/* Window */}
      <div className="w-full h-[99%] bg-white rounded-[25px] py-3 px-10 flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <h2 className="text-[38px] font-bold text-[#308B34]">Manage Farm</h2>
          <button className="bg-[#4A7A4C] text-white flex justify-center items-center py-2 px-4 rounded-[6px] gap-2 font-bold text-[23px]">
            <div>
              <img src="/Vector(5).png" alt="" />
            </div>
            View Live
          </button>
        </div>
        <div className="font-bold text-[23px] text-[#4A7A4C]">
          <p>Farms:</p>
          <p>Area:</p>
          <p>Expected Date of Harvest:</p>
        </div>
        <div className="grid grid-flow-col grid-rows-[50px,1fr] gap-x-10">
          <div></div>
          <h3 className="text-[32px] text-[#308B34] font-bold col-start-2 row-start-1 text-center">
            Crops Distribution
          </h3>
          <div className="relative">
            <img
              src="/Rectangle 46.png"
              alt=""
              className="object-fill h-full w-full max-h-[550px] rounded-[16px]"
            />
            <div className="thing1 bg-[#00FF0AD1] w-[100px] h-[100px] absolute top-10 left-[37%]"></div>
            <div className="thing2 bg-[#FF00009C] w-[160px] h-[140px] absolute top-[34%] left-[35%]"></div>
            <div className="thing3 bg-[#0066C5CF] w-[160px] h-[140px] absolute top-[55%] left-[37%]"></div>
            <div className="thing4 bg-[#FF9494A6] w-[67px] h-[200px] absolute bottom-[7%] left-[14%]"></div>
            <button className="absolute bottom-5 right-3 rounded-[73px] text-[18px] font-bold bg-white flex gap-2 py-1 px-3">
              <img src="/Vector(6).png" alt="Pin" />
              Locate
            </button>
          </div>
          <div className="shadow-[0_0_27px_rgba(0,0,0,0.2)] rounded-[16px] py-3 px-5">
            <div className="flex justify-center items-center gap-10 py-5 px-5">
              <div className="conic w-[250px] h-[250px] rounded-full relative flex justify-center items-center">
                <div className="bg-white absolute w-[200px] h-[200px] rounded-full flex justify-center items-center leading-10">
                  <h2 className="text-[41px] font-bold text-center">
                    23 <br />
                    Acres
                  </h2>
                </div>
              </div>
              <div className="font-bold text-[26px] flex flex-col justify-center items-start">
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[19px] h-[19px] bg-[#FF9494] rounded-full"></div>
                  <h3>Wheat</h3>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[19px] h-[19px] bg-[#0066C5] rounded-full"></div>
                  <h3>Corn</h3>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[19px] h-[19px] bg-[#FF0000] rounded-full"></div>
                  <h3>Barley</h3>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[19px] h-[19px] bg-[#60A662] rounded-full"></div>
                  <h3>Paddy</h3>
                </div>
              </div>
            </div>
            <hr className="bg-[#CABFBF]" />
            <div className="py-10 px-5 flex justify-center items-center">
              <div className="font-bold text-[26px] grid grid-cols-[1fr_0.8fr_1fr] w-2/3 place-items-start items-center gap-x-4">
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[19px] h-[19px] bg-[#FF9494] rounded-full"></div>
                  <h3>Wheat</h3>
                </div>
                <span className="text-[#FF9494]">40%</span>
                <div className="border-2 border-green-700 text-green-700 text-sm rounded-[3px] px-[3px] inline-block font-bold">
                  Ready
                </div>

                <div className="flex justify-center items-center gap-4">
                  <div className="w-[19px] h-[19px] bg-[#0066C5] rounded-full"></div>
                  <h3>Corn</h3>
                </div>
                <span className="text-[#0066C5]">10%</span>

                <div className="border-2 border-red-700 text-red-700 text-sm rounded-[3px] px-[3px] inline-block font-bold">
                  Not Ready
                </div>

                <div className="flex justify-center items-center gap-4">
                  <div className="w-[19px] h-[19px] bg-[#FF0000] rounded-full"></div>
                  <h3>Barley</h3>
                </div>
                <span className="text-[#FF0000]">30%</span>
                <div className="border-2 border-green-700 text-green-700 text-sm rounded-[3px] px-[3px] inline-block font-bold">
                  Ready
                </div>

                <div className="flex justify-center items-center gap-4">
                  <div className="w-[19px] h-[19px] bg-[#60A662] rounded-full"></div>
                  <h3>Paddy</h3>
                </div>
                <span className="text-[#308B34]">20%</span>
                <div className="border-2 border-green-700 text-green-700 text-sm rounded-[3px] px-[3px] inline-block font-bold">
                  Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
