import React from "react";

const WiddlePanel = ({ name, value, evaluation, evalColor }) => {
  return (
    <div className="flex justify-between items-center shadow-[0_0_27px_rgba(0,0,0,0.2)] rounded-[16px] py-1 md:py-3 px-2 md:px-5 gap-1 md:gap-4 w-full">
      <div className="flex flex-col items-start">
        <span className="text-[#4A7A4C] font-bold md:text-[23px]">{name}:</span>
        <div
          className={`ml-2 border-2 text-sm rounded-[3px] px-[3px] inline-block font-bold`}
          style={{ borderColor: evalColor, color: evalColor }}
        >
          {evaluation}
        </div>
      </div>
      <span className="text-[24px] md:text-[32px] font-semibold">{value}</span>
    </div>
  );
};

export default WiddlePanel;
