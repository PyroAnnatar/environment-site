import { Outlet } from "react-router-dom";

import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

const SharedLayout = ({
  isOpen,
  handleOpenModal,
  handleCloseModal,
  currentUser,
  clearCurrentUser,
}) => {
  const modalRef = useRef(null);

  function handleClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target))
      handleCloseModal();
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
    handleCloseModal();
  }
  return (
    <div className="bg-[#4A7A4C] min-h-screen flex overflow-hidden">
      <Navbar
        handleOpenModal={handleOpenModal}
        currentUser={currentUser}
        clearCurrentUser={clearCurrentUser}
      />
      <div className="w-10/12 bg-[#4A7A4C] flex justify-center items-center p-4 pl-0 relative">
        <Outlet />
        {isOpen ? (
          <div
            ref={modalRef}
            className="shadow-[0_0_27px_rgba(0,0,0,0.2)] rounded-[16px] py-5 px-7 md:py-3 md:px-5 absolute bg-white w-full md:w-[85%] md:h-[85%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-3/4 md:-translate-x-1/2 flex flex-col justify-stretch items-center gap-4"
          >
            <div className="flex justify-start w-full">
              <button
                onClick={handleCloseModal}
                className="border-[5px] border-[#4A7A4C] text-[#4A7A4C] font-bold md:text-[24px] rounded-[14px] py-1 px-4 md:px-7"
              >
                Back
              </button>
            </div>
            <form className="flex flex-col justify-between items-center md:w-2/3 lg:w-2/4 gap-4 sm:pt-5">
              <h2 className="uppercase text-[#4A7A4C] text-[20px] md:text-[38px] col-span-2 text-center font-semibold">
                Farm Details
              </h2>
              <div className="md:text-[24px] grid gap-x-2 gap-y-6 place-items-center w-full grid-cols-[25px_1fr] text-[#545151]">
                <div>
                  <img src="/Vector-1.png" alt="" className="w-[25px]" />
                </div>
                <input
                  name="farmName"
                  type="text"
                  className="bg-white border col-start-2 border-[#063F08] rounded-[14px] w-full py-1 px-3 md:pl-5 md:text-[24px] text-[#545151]"
                  placeholder="Farm Name"
                />

                <input
                  name="farmSize"
                  type="number"
                  placeholder="Farm Size (in acres)"
                  className="bg-white col-start-2 border border-[#063F08] rounded-[14px] w-full py-1 px-3 md:pl-5"
                />

                <img src="/Vector-2.png" alt="" className="w-[25px]" />
                <input
                  name="cropType"
                  type="text"
                  className="bg-white border border-[#063F08] rounded-[14px] w-full py-1 px-3 md:pl-5 md:text-[24px] text-[#545151]"
                  placeholder="Crop Type"
                />

                <div className="col-start-2 place-self-start relative w-full lg:w-3/6">
                  <input
                    name="farmImage"
                    type="text"
                    placeholder="Farm Image"
                    className="bg-white border border-[#063F08] rounded-[14px] w-full py-2 px-3 pl-5"
                  />
                  <img
                    src="/Vector(11).png"
                    alt=""
                    className="absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer w-[25px]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="uppercase col-span-2 font-medium text-[24px] md:text-[30px] bg-[#4A7A4C] text-white rounded-[8px] py-1 px-2 md:px-14"
              >
                Submit
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SharedLayout;
