import React, { useEffect, useRef, useState } from "react";

import WiddlePanel from "../components/WiddlePanel";

const FarmAnalytics = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef(null);

  function handleClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target))
      setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleClick);
      }, 0);
    }
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsOpen(false);
  }
  return (
    <>
      <div className="w-full h-[99%] bg-white rounded-[25px] p-4 md:py-3 md:px-10 flex flex-col gap-4 md:gap-10">
        <div className="flex justify-between items-center">
          <h2 className="text-[18px] lg:text-[38px] font-bold text-[#308B34]">
            Farm 1
          </h2>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#4A7A4C] text-white flex justify-center items-center py-1 px-2 md:py-2 md:px-4 rounded-[6px] gap-2 font-bold md:text-[23px]"
          >
            + Add Crop
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
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

        <div className="grid md:grid-cols-2 md:grid-rows-[1fr,75px] place-items-center gap-4">
          <div className="flex flex-col items-start gap-4 w-full md:w-auto">
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
          <div className="relative">
            <img
              src="/Rectangle 20.png"
              alt="Crops"
              className="object-fill h-full w-full max-h-[350px]"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex gap-4">
                <img src="/arrow.png" alt="Left" className="cursor-pointer" />
                <img
                  src="/arrow.png"
                  alt="Right"
                  className="rotate-180 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div></div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="border-2 border-[#4A7A4C] rounded-[61px] flex gap-4 justify-center items-center py-1 px-4">
              <div className="flex gap-1 justify-center items-center">
                <img
                  src="/Vector(8).png"
                  alt="Wheat icon"
                  className="w-[25px]"
                />
                <span className="md:text-[23px] font-bold text-[#308B34]">
                  Crop:
                </span>
              </div>
              <span className="md:text-[30px] font-semibold shrink-0">
                Wheat
              </span>
            </div>
            <div className="border-2 border-[#4A7A4C] rounded-[61px] flex gap-4 justify-center items-center py-1 px-3">
              <div className="flex gap-1 justify-center items-center">
                <img
                  src="/Vector(9).png"
                  alt="Wheat icon"
                  className="w-[25px]"
                />
                <span className="md:text-[23px] font-bold text-[#308B34]">
                  Area:
                </span>
              </div>
              <span className="md:text-[30px] font-semibold shrink-0">
                25 Acres
              </span>
            </div>
          </div>
        </div>

        <div className="w-3/4 border-[5px] border-[#4A7A4C] text-center rounded-[12px] self-center">
          <span className="text-[24px] md:text-[32px] font-bold text-[#4A7A4C]">
            Efficacy Rating
          </span>
        </div>
        {isOpen ? (
          <div
            ref={modalRef}
            className="shadow-[0_0_27px_rgba(0,0,0,0.2)] rounded-[16px] py-3 px-5 absolute bg-white w-[85%] h-[85%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-3/4 md:-translate-x-1/2 flex flex-col justify-center items-center gap-4"
          >
            <div className="flex justify-start w-full">
              <button
                onClick={() => setIsOpen(false)}
                className="border-[5px] border-[#4A7A4C] text-[#4A7A4C] font-bold text-[24px] rounded-[14px] py-1 px-7"
              >
                Back
              </button>
            </div>
            <form className="flex flex-col gap-20 justify-start items-center w-2/3 grow pt-5">
              <h2 className="uppercase text-[#4A7A4C] text-[38px] font-semibold">
                Crop Details
              </h2>
              <div className="text-[24px] text-[#545151] w-full flex flex-col gap-10">
                <div className="relative">
                  <img
                    src="/Vector(8).png"
                    alt=""
                    className="absolute top-[50%] -translate-y-[50%] -left-10"
                  />
                  <input
                    type="text"
                    className="bg-white border border-[#063F08] rounded-[14px] w-full py-1 px-3 pl-5 text-[24px] text-[#545151] cursor-pointer"
                    placeholder="Crop Name"
                    disabled
                  />
                  <img
                    src="/Vector(12).png"
                    alt=""
                    className="absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer"
                  />
                </div>
                <div className="relative">
                  <img
                    src="/Vector(10).png"
                    alt=""
                    className="absolute top-[50%] -translate-y-[50%] -left-[50px]"
                  />
                  <input
                    type="text"
                    placeholder="Soil Type"
                    className="bg-white border border-[#063F08] rounded-[14px] w-full py-1 px-3 pl-5"
                    disabled
                  />
                </div>
                <div className="relative w-3/6">
                  <input
                    type="text"
                    placeholder="Add Image"
                    disabled
                    className="bg-white border border-[#063F08] rounded-[14px] w-full py-2 px-3 pl-5 cursor-pointer"
                  />
                  <img
                    src="/Vector(11).png"
                    alt=""
                    className="absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer"
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="uppercase font-medium text-[30px] bg-[#4A7A4C] text-white rounded-[8px] py-1 px-14"
              >
                Submit
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FarmAnalytics;
