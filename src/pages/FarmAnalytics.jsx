import React from "react";
import WiddlePanel from "../components/WiddlePanel";

const FarmAnalytics = () => {
  return (
    <div className="w-10/12 h-screen bg-[#4A7A4C] flex justify-center items-center p-4 pl-0">
      {/* Window */}
      <div className="w-full h-[99%] bg-white rounded-[25px] py-3 px-10 flex flex-col gap-14">
        <div className="flex justify-between items-center">
          <h2 className="text-[38px] font-bold text-[#308B34]">Farm 1</h2>

          <button className="bg-[#4A7A4C] text-white flex justify-center items-center py-2 px-8 rounded-[6px] gap-2 font-bold text-[23px]">
            + Add Crop
          </button>
        </div>
        <div className="flex gap-4">
          <WiddlePanel
            name="Nitrogen"
            evaluation="Good"
            value={"20%"}
            evalColor="#00A707"
          />
          <WiddlePanel
            name="Phosphorus"
            evaluation="Good"
            value={"8%"}
            evalColor="#00A707"
          />
          <WiddlePanel
            name="Potassium"
            evaluation="Good"
            value={"13%"}
            evalColor="#00A707"
          />
        </div>

        <div className="grid grid-cols-2 grid-rows-[1fr,75px] place-items-center gap-4">
          <div className="flex flex-col items-start gap-4">
            <WiddlePanel
              name="Humidity"
              evaluation="Good"
              value={"15%"}
              evalColor="#00A707"
            />
            <WiddlePanel
              name="Soil Hydration"
              evaluation="High"
              value={"40%"}
              evalColor="#A10000"
            />
            <WiddlePanel
              name="PH Value"
              evaluation="Good"
              value={"4"}
              evalColor="#C5B100"
            />
          </div>
          <div>
            <img
              src="/Rectangle 20.png"
              alt="Crops"
              className="object-fill h-full w-full max-h-[350px]"
            />
          </div>
          <div></div>
          <div className="flex gap-4 justify-center items-center">
            <div className="border-2 border-[#4A7A4C] rounded-[61px] flex gap-4 justify-center items-center py-1 px-4">
              <div className="flex gap-1 justify-center items-center">
                <img src="/Vector(8).png" alt="Wheat icon" />
                <span className="text-[23px] font-bold text-[#308B34]">
                  Crop:
                </span>
              </div>
              <span className="text-[30px] font-semibold shrink-0">Wheat</span>
            </div>
            <div className="border-2 border-[#4A7A4C] rounded-[61px] flex gap-4 justify-center items-center py-1 px-3">
              <div className="flex gap-1 justify-center items-center">
                <img src="/Vector(9).png" alt="Wheat icon" />
                <span className="text-[23px] font-bold text-[#308B34]">
                  Area:
                </span>
              </div>
              <span className="text-[30px] font-semibold shrink-0">
                25 Acres
              </span>
            </div>
          </div>
        </div>

        <div className="w-3/4 border-[5px] border-[#4A7A4C] text-center rounded-[12px] self-center">
          <span className="text-[32px] font-bold text-[#4A7A4C]">
            Efficacy Rating
          </span>
        </div>
      </div>
    </div>
  );
};

export default FarmAnalytics;
