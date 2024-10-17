import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full h-[99%] bg-white rounded-[25px] p-4 md:py-3 md:px-10 flex flex-col gap-4 md:gap-10">
      <div className="flex justify-between items-center">
        <h2 className="text-[18px] lg:text-[38px] font-bold text-[#308B34]">
          Manage Farm
        </h2>
        <button className="bg-[#4A7A4C] text-white flex justify-center items-center py-1 px-2 md:py-2 md:px-4 rounded-[6px] gap-2 font-bold">
          <div className="w-[25px]">
            <img src="/Vector(5).png" alt="" className="" />
          </div>
          View Live
        </button>
      </div>
      <div className="font-bold md:text-[23px] text-[#4A7A4C]">
        <p>Farms:</p>
        <p>Area:</p>
        <p>Expected Date of Harvest:</p>
      </div>
      <div className="grid md:grid-flow-col md:grid-rows-[50px,1fr] gap-4 md:gap-x-10">
        <div></div>
        <h3 className="text-[32px] text-[#308B34] font-bold md:col-start-2 md:row-start-1 text-center leading-9 md:leading-normal">
          Crops Distribution
        </h3>
        <div className="relative sm:max-h-[400px] md:max-h-[400px] lg:max-h-[450px] xl:max-h-[650px] ">
          <img
            src="/Rectangle 46.png"
            alt=""
            className="object-fill h-full w-full lg:max-h-[550px] rounded-[16px]"
          />
          <div className="thing1 bg-[#00FF0AD1] w-[50px] h-[50px] md:w-[50px] lg:w-[100px] md:h-[50px] lg:h-[100px] absolute top-10 left-[37%]"></div>
          <div className="thing2 bg-[#FF00009C] w-[80px] h-[60px] md:w-[100px] lg:w-[160px] md:h-[80px] lg:h-[140px] absolute top-[34%] left-[35%]"></div>
          <div className="thing3 bg-[#0066C5CF] w-[90px] h-[70px]  md:w-[100px] lg:w-[160px] md:h-[80px] lg:h-[140px] absolute top-[55%] left-[37%]"></div>
          <div className="thing4 bg-[#FF9494A6] w-[30px] h-[100px] md:w-[40px] lg:w-[67px] md:h-[140px] lg:h-[200px] absolute bottom-[7%] left-[14%]"></div>
          <button className="absolute bottom-5 right-3 rounded-[73px] text-[18px] font-bold bg-white flex gap-2 py-1 px-3">
            <img src="/Vector(6).png" alt="Pin" />
            Locate
          </button>
        </div>
        <div className="shadow-[0_0_27px_rgba(0,0,0,0.2)] flex flex-col gap-2 rounded-[16px] py-2 px-3">
          <div className="flex justify-center items-center gap-4 md:gap-2 lg:gap-6 xl:gap-10 md:p-1 lg:p-2 xl:p-5">
            <div className="conic w-[75px] h-[75px] sm:w-[75px] md:w-[100px] lg:w-[150px] xl:w-[250px] sm:h-[75px] md:h-[100px] lg:h-[150px] xl:h-[250px] rounded-full relative flex justify-center items-center">
              <div className="bg-white absolute w-[60px] h-[60px] sm:w-[60px] md:w-[85px] lg:w-[125px] xl:w-[200px] sm:h-[60px] md:h-[85px] lg:h-[125px] xl:h-[200px] rounded-full flex justify-center items-center md:leading-5 lg:leading-10">
                <h2 className="md:text-[20px] lg:text-[30px] xl:text-[41px] font-bold text-center">
                  25 <br />
                  Acres
                </h2>
              </div>
            </div>
            <div className="font-bold md:text-[20px] lg:text-[24px] flex flex-col justify-center items-start">
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
          <div className="md:py-8 md:px-1 lg:py-5 xl:py-8 lg:px-2 xl:px-3 flex justify-center items-center">
            <div className="font-bold text-[12px] md:text-[20px] lg:text-[26px] grid grid-cols-[1fr_0.8fr_1fr] w-2/3 place-items-center sm:place-items-start items-center gap-x-1 md:gap-x-4">
              <div className="flex justify-center items-center gap-4">
                <div className="w-[10px] sm:w-[19px] h-[10px] sm:h-[19px] bg-[#FF9494] rounded-full"></div>
                <h3>Wheat</h3>
              </div>
              <span className="text-[#FF9494]">40%</span>
              <div className="border-2 border-green-700 text-green-700 text-[10px] sm:text-sm rounded-[3px] px-[3px] inline-block font-bold">
                Ready
              </div>

              <div className="flex justify-center items-center gap-4">
                <div className="w-[10px] sm:w-[19px] h-[10px] sm:h-[19px] bg-[#0066C5] rounded-full"></div>
                <h3>Corn</h3>
              </div>
              <span className="text-[#0066C5]">10%</span>

              <div className="border-2 border-red-700 text-red-700 text-[10px] sm:text-sm rounded-[3px] px-[3px] inline-block font-bold ">
                Not Ready
              </div>

              <div className="flex justify-center items-center gap-4">
                <div className="w-[10px] sm:w-[19px] h-[10px] sm:h-[19px] bg-[#FF0000] rounded-full"></div>
                <h3>Barley</h3>
              </div>
              <span className="text-[#FF0000]">30%</span>
              <div className="border-2 border-green-700 text-green-700 text-[10px] sm:text-sm rounded-[3px] px-[3px] inline-block font-bold">
                Ready
              </div>

              <div className="flex justify-center items-center gap-4">
                <div className="w-[10px] sm:w-[19px] h-[10px] sm:h-[19px] bg-[#60A662] rounded-full"></div>
                <h3>Paddy</h3>
              </div>
              <span className="text-[#308B34]">20%</span>
              <div className="border-2 border-green-700 text-green-700 text-[10px] sm:text-sm rounded-[3px] px-[3px] inline-block font-bold">
                Ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
