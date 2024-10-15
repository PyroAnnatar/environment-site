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
    <div className="h-screen bg-[#4A7A4C] flex">
      <Navbar
        handleOpenModal={handleOpenModal}
        currentUser={currentUser}
        clearCurrentUser={clearCurrentUser}
      />
      <div className="w-10/12 h-screen bg-[#4A7A4C] flex justify-center items-center p-4 pl-0 relative">
        <Outlet />
        {isOpen ? (
          <div
            ref={modalRef}
            className="shadow-[0_0_27px_rgba(0,0,0,0.2)] rounded-[16px] py-3 px-5 absolute bg-white w-[85%] h-[85%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-4"
          >
            <div className="flex justify-start w-full">
              <button
                onClick={handleCloseModal}
                className="border-[5px] border-[#4A7A4C] text-[#4A7A4C] font-bold text-[24px] rounded-[14px] py-1 px-7"
              >
                Back
              </button>
            </div>
            <form className="flex flex-col gap-14 justify-start items-center w-2/3 grow pt-5">
              <h2 className="uppercase text-[#4A7A4C] text-[38px] font-semibold">
                Farm Details
              </h2>
              <div className="text-[24px] text-[#545151] w-full flex flex-col gap-10">
                <div className="relative">
                  <img
                    src="/Vector-1.png"
                    alt=""
                    className="absolute top-[50%] -translate-y-[50%] -left-[60px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-[#063F08] rounded-[14px] w-full py-1 px-3 pl-5 text-[24px] text-[#545151]"
                    placeholder="Farm Name"
                    disabled
                  />
                </div>
                <div className="relative">
                  <img
                    src="/Vector-2.png"
                    alt=""
                    className="absolute top-[50%] -translate-y-[50%] -left-[55px]"
                  />
                  <input
                    type="text"
                    className="bg-white border border-[#063F08] rounded-[14px] w-full py-1 px-3 pl-5 text-[24px] text-[#545151]"
                    placeholder="Farm Size (in acres)"
                    disabled
                  />
                </div>
                <div className="relative w-2/6">
                  <input
                    type="text"
                    placeholder="Farm Image"
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
                  <img
                    src="/Vector-3.png"
                    alt=""
                    className="absolute top-[50%] -translate-y-[50%] -left-[55px]"
                  />
                  <input
                    type="text"
                    placeholder="Crop Type"
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
      </div>
    </div>
  );
};

export default SharedLayout;
