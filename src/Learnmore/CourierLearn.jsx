import React from "react";
import { CourierFAQ } from "./CourierFAQ";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const CourierLearn = () => {
  const [isOpen, setisOpen] = useState(null);
  const handlecClick = (indexparameter) => {
    setisOpen(isOpen === indexparameter ? null : indexparameter);
  };
  return (
    <div>
      <section className="p">
        <div className="w-[100%] bg-[url('./Carfair.jpg')]  bg-no-repeat  bg-cover py-3 ">
          <div className=" lg:w-[50%]   backdrop-blur-xl flex flex-col justify-center items-center space-y-10 py-10 px-1 lg:mx-5 mx-2 my-5 rounded-2xl ">
            <div className=" w-[100%] lg:w-[90%] bg-gray-300 flex flex-col rounded-2xl px-2 py-2   text-[#130741] text-lg font-medium">
              <label htmlFor="">Where to pick</label>
              <input
                className="py-1 px-2 grow focus:outline-none"
                type="text"
                placeholder="Address, airport, hotel......"
              />
            </div>

            <div className="w-[100%] lg:w-[90%] bg-gray-300 flex flex-col rounded-2xl px-2 py-2 text-[#130741] text-lg font-medium">
              <label htmlFor="">Where to Deliver</label>
              <input
                className="py-1 px-2 grow focus:outline-none"
                type="text"
                placeholder="Address, airport, hotel......"
              />
            </div>

            <div className="flex w-[100%] lg:w-[90%] justify-between items-center">
              <div className="w-[45%] bg-gray-300 flex flex-col rounded-md px-2 py-1  text-[#130741]  font-medium">
                <h1 className="text-lg font-medium  flex justify-center">
                  Pickup date
                </h1>
                <p className="text-md font-medium  flex justify-center">
                  Mon, 15 April, 2025
                </p>
              </div>

              <div className="w-[45%] bg-gray-300 flex flex-col rounded-md px-2 py-1  text-[#130741] font-medium">
                <h1 className="text-lg font-medium  flex justify-center">
                  Pickup Time
                </h1>
                <p className="text-md font-medium  flex justify-center">
                  02:34 PM
                </p>
              </div>
            </div>

            <div>
              <button className="bg-[#E39400] text-sm font-bold py-3 px-10 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white">
                Try Now
              </button>
            </div>
          </div>
        </div>

        <div className="py-5 w-[100%] font-medium justify-center flex flex-col items-center text-[#130741] space-y-5 space-x-2 px-2">
          <h1 className="headings justify-center flex">We Deliver For</h1>
          <div className="lg:flex flex-row justify-evenly items-center w-[100%]  space-y-2">
            <h1 className="py-3 px-5 bg-gray-300 rounded-xl justify-center items-center flex">
              Online Store
            </h1>
            <h1 className="py-3 px-5 bg-gray-300 rounded-xl justify-center items-center flex">
              Flower & gift stores
            </h1>
            <h1 className="py-3 px-5 bg-gray-300 rounded-xl justify-center items-center flex">
              Restaurants and grocery stores
            </h1>
            <h1 className="py-3 px-5 bg-gray-300 rounded-xl  justify-center items-center flex">
              And more
            </h1>
            <h1 className="py-3 px-5 bg-gray-300 rounded-xl  justify-center items-center flex">
              pet suppliers
            </h1>
            <h1 className="py-3 px-5 bg-gray-300 rounded-xl  justify-center items-center flex">
              Auto parts retailers
            </h1>
          </div>
        </div>

        <div className="py-5 w-[100%] font-medium justify-center flex flex-col items-center text-[#130741] space-y-5 space-x-2 px-2">
          <h1 className="headings justify-center flex">How does it work</h1>
          <div className="md:flex flex-row justify-evenly  w-[100%]  space-x-4  ">
            <h1 className="py-3   rounded-xl items-center md:justify-center flex w-[100%] md:w-[33%]  ">
              Sign up and order for courier via our web or App
            </h1>
            <h1 className="py-3   rounded-xl items-center md:justify-center flex w-[100%] md:w-[33%]  ">
              Plan your delivery & make payment
            </h1>
            <h1 className="py-3  rounded-xl items-center   flex w-[100%] md:w-[33%] ">
              See where your courier is, track your parcels live status and know
              its delivered
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1 className="headings flex items-center justify-center font-bold">
            FAQ
          </h1>
        </div>

        <div className="space-y-1 px-1 text-black font mb-5">
          {CourierFAQ.map((anyname, index) => (
            <div className="text-black font-medium">
              <div
                className="flex justify-between items-center  px-2 py-3 space-x-2 bg-gray-300  mb-0.5 cursor-pointer"
                onClick={() => handlecClick(index)}>
                <p>{anyname.question}</p>
                <span className="text-xl">
                  {isOpen === index ? <AiOutlineClose /> : <FaPlus />}
                </span>
              </div>

              {isOpen === index && (
                <div className="px-2 py-5 bg-gray-200 text-sm">
                  {anyname.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourierLearn;
