import React, { useEffect, useRef, useState } from "react";

const Livestock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [livestock, setLivestock] = useState([
    {
      id: crypto.randomUUID(),
      type: "Goat",
      count: 5,
      breed: "Demon",
      males: 3,
      females: 2,
      image: "/Rectangle 39.png",
    },
    {
      id: crypto.randomUUID(),
      type: "Cow",
      count: 2,
      breed: "Mooshroom",
      males: 1,
      females: 1,
      image: "/Rectangle 40.png",
    },
  ]);

  const [newAnimoo, setNewAnimoo] = useState({
    id: crypto.randomUUID(),
    type: "",
    count: "",
    breed: "",
    males: "",
    females: "",
    image: "",
  });

  const modalRef = useRef(null);

  function handleClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target))
      setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleClick);
        document.addEventListener("touchstart", handleClick);
      }, 0);
    }
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [isOpen]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewAnimoo((prev) => ({ ...prev, [name]: value }));
  }

  // console.log(newAnimoo);
  function handleSubmit(e) {
    e.preventDefault();
    setLivestock((prev) => [...prev, newAnimoo]);
    setNewAnimoo({
      id: crypto.randomUUID(),
      type: "",
      count: "",
      breed: "",
      males: "",
      females: "",
      image: "",
    });
    setIsOpen(false);
  }
  return (
    <>
      {/* <div className="w-full h-[99%] bg-white rounded-[25px] py-3 px-10 flex flex-col gap-10"> */}
      <div className="w-full h-[99%] bg-white rounded-[25px] p-4 md:py-3 md:px-10 flex flex-col gap-4 md:gap-10">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center text-[22px]">
          <h2 className="text-[18px] lg:text-[38px] font-bold text-[#308B34]">
            Manage Livestock
          </h2>
          <div className="flex gap-2 lg:gap-4 text-sm sm:text-base text-center">
            <button className="bg-[#4A7A4C] text-white flex justify-center items-center py-1 px-2 md:py-2 md:px-4 rounded-[6px] gap-2 font-bold">
              <div className="w-[25px]">
                <img src="/Vector(5).png" alt="" className="" />
              </div>
              View Live
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#4A7A4C] text-white flex justify-center items-center py-1 px-2 md:py-2 md:px-4 rounded-[6px] gap-2 font-bold"
            >
              + Add Cattle
            </button>
          </div>
        </div>
        <div className="flex justify-end gap-2 lg:gap-6">
          <button className="bg-[#4A7A4C] text-white flex justify-center items-center p-1 lg:py-2 lg:px-4 rounded-[6px] gap-1 md:gap-4 font-bold lg:text-[23px]">
            <span>Total:</span>{" "}
            <span className="text-sm lg:text-[30px] font-semibold">
              {livestock.reduce((a, b) => a.count + b.count)}
            </span>
          </button>
          <button className="bg-[#4A7A4C] text-white flex justify-center items-center p-1 lg:py-2 lg:px-4 rounded-[6px] gap-1 md:gap-4 font-bold lg:text-[23px]">
            <div className="w-[25px]">
              <img src="/Vector(7).png" alt="" className="" />
            </div>
            <span>Area:</span>{" "}
            <span className="text-sm lg:text-[30px] font-semibold">
              25 Acres
            </span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-stretch gap-4 font-bold text-[23px]">
          {livestock.map((animal) => {
            return (
              <div
                key={animal.id}
                className="lg:w-1/4 shadow-[0_0_27px_rgba(0,0,0,0.2)] rounded-[16px] py-3 px-5 flex flex-col justify-between text-[#4A7A4C] text-lg"
              >
                <h2 className="text-[25px] lg:text-[30px]">{animal.type}</h2>
                <div>
                  <h3>Count: {animal.count}</h3>
                  <h3>Breed: {animal?.breed}</h3>
                  <h3>Males: {animal?.males}</h3>
                  <h3>Females: {animal.females}</h3>
                </div>
                {animal.image ? (
                  <div className="relative">
                    <img
                      src={animal?.image}
                      alt=""
                      className="object-fill h-full w-full max-h-[200px] lg:max-h-[550px]"
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-extrabold text-[61px] text-white">
                      +{animal.count}
                    </span>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      {isOpen ? (
        <div
          ref={modalRef}
          className="shadow-[0_0_27px_rgba(0,0,0,0.2)] rounded-[16px] py-5 px-7 md:py-3 md:px-5 absolute bg-white w-[90%] md:w-[85%] md:h-[85%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-3/4 md:-translate-x-1/2 flex flex-col justify-center items-center gap-4"
        >
          <div className="flex justify-start w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="border-[5px] border-[#4A7A4C] text-[#4A7A4C] font-bold  md:text-[24px] rounded-[14px] py-1 px-4 md:px-7"
            >
              Back
            </button>
          </div>
          <form className="flex flex-col gap-9 sm:gap-4 justify-start items-center md:w-2/3 grow pt-5">
            <h2 className="uppercase text-[#4A7A4C] text-[20px] md:text-[38px] text-center font-semibold">
              Cattle Details
            </h2>
            <div className="md:text-[24px] text-[#545151] w-full flex flex-col gap-10">
              <div className="flex items-center gap-2">
                <img src="/Group.png" alt="" className="w-[25px]" />
                <input
                  value={newAnimoo.type}
                  name="type"
                  onChange={handleInputChange}
                  type="text"
                  className="bg-white border border-[#063F08] rounded-[14px] w-full py-1 px-3 md:pl-5 md:text-[24px] text-[#545151]"
                  placeholder="Enter the Cattle Type"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  name="breed"
                  onChange={handleInputChange}
                  value={newAnimoo.breed}
                  type="text"
                  placeholder="Breed"
                  className="bg-white border border-[#063F08] rounded-[14px] w-full py-1 px-3 md:pl-5"
                />
              </div>
              <div className="flex items-center gap-2">
                <img src="/Vector (3).png" alt="" className="w-[25px]" />
                <input
                  name="count"
                  onChange={handleInputChange}
                  value={newAnimoo.count}
                  type="number"
                  className="bg-white border border-[#063F08] rounded-[14px] w-full py-1 px-3 md:pl-5 md:text-[24px] text-[#545151]"
                  placeholder="Count"
                />
              </div>
              <div className="relative w-full lg:w-3/6">
                <input
                  name="image"
                  onChange={handleInputChange}
                  value={newAnimoo.image}
                  type="text"
                  placeholder="Images"
                  className="bg-white border border-[#063F08] rounded-[14px] w-full py-2 px-3 pl-5"
                />
                <img
                  src="/Vector(11).png"
                  alt=""
                  className="absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer w-[25px]"
                />
              </div>
              <div className="relative">
                <input
                  name="gender"
                  onChange={handleInputChange}
                  value={newAnimoo.gender}
                  type="text"
                  placeholder="Male/Female"
                  disabled
                  className="bg-white border border-[#063F08] rounded-[14px] w-full py-2 px-3 md:pl-5 cursor-pointer"
                />
                <img
                  src="/Vector(12).png"
                  alt=""
                  className="absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer w-[25px]"
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="uppercase font-medium text-[24px] md:text-[30px] bg-[#4A7A4C] text-white rounded-[8px] py-1 px-2 md:px-14"
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
