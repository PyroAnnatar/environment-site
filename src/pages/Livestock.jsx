import React, { useEffect, useRef, useState } from "react";

const Livestock = () => {
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
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#4A7A4C] text-white flex justify-center items-center py-2 px-4 rounded-[6px] gap-2 font-bold"
            >
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

      {isOpen ? (
        <div
          ref={modalRef}
          className="shadow-[0_0_27px_rgba(0,0,0,0.2)] rounded-[16px] py-3 px-5 absolute bg-white w-[85%] h-[85%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-4"
        >
          <div className="flex justify-start w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="border-[5px] border-[#4A7A4C] text-[#4A7A4C] font-bold text-[24px] rounded-[14px] py-1 px-7"
            >
              Back
            </button>
          </div>
          <form className="flex flex-col gap-14 justify-start items-center w-2/3 grow pt-5">
            <h2 className="uppercase text-[#4A7A4C] text-[38px] font-semibold">
              Cattle Details
            </h2>
            <div className="text-[24px] text-[#545151] w-full flex flex-col gap-10">
              <div className="relative">
                <img
                  src="/Group.png"
                  alt=""
                  className="absolute top-[50%] -translate-y-[50%] -left-[50px]"
                />
                <input
                  type="text"
                  className="bg-white border border-[#063F08] rounded-[14px] w-full py-1 px-3 pl-5 text-[24px] text-[#545151]"
                  placeholder="Enter the Cattle Type"
                  disabled
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Breed"
                  className="bg-white border border-[#063F08] rounded-[14px] w-full py-1 px-3 pl-5"
                  disabled
                />
              </div>
              <div className="relative">
                <img
                  src="/Vector (3).png"
                  alt=""
                  className="absolute top-[50%] -translate-y-[50%] -left-[47px]"
                />
                <input
                  type="text"
                  className="bg-white border border-[#063F08] rounded-[14px] w-full py-1 px-3 pl-5 text-[24px] text-[#545151]"
                  placeholder="Count"
                  disabled
                />
              </div>
              <div className="relative w-2/6">
                <input
                  type="text"
                  placeholder="Images"
                  disabled
                  className="bg-white border border-[#063F08] rounded-[14px] w-full py-2 px-3 pl-5 cursor-pointer"
                />
                <img
                  src="/Vector(11).png"
                  alt=""
                  className="absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Male/Female"
                  disabled
                  className="bg-white border border-[#063F08] rounded-[14px] w-full py-2 px-3 pl-5 cursor-pointer"
                />
                <img
                  src="/Vector(12).png"
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
    </>
  );
};

export default Livestock;
