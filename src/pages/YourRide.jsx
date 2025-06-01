import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";

const YourRide = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    setTimeout(() => {
      navigate("/");
    }, 700);
  };
  return (
    <main className=" py-5 px-2 w-[100%] text-[#130741]">
      <h1 className="headings flex justify-center pb-9">
        Your Ride is on The Way
      </h1>

      <section className="w-[100%] md:flex flex-row justify-between space-x-5 space-y-2">
        <div className=" md:w-[45%] w-[100%] px-2 space-y-2 flex flex-col justify-center  items-center">
          <div className="w-[100%]">
            <h1>Driver: Mr Kalu</h1>
            <h1>camry AA 450 SSM</h1>
          </div>

          <form className="w-[100%]">
            <div className=" mb-2  ">
              <label className="font-bold " htmlFor="">
                Pickup Location
              </label>
              <div className="border-2 px-1 py-1 w-[100%]  flex items-center space-x-2 rounded-lg mt-2">
                <span>
                  <FaLocationDot />
                </span>
                <input
                  type="address"
                  placeholder=" No. 12 Cameroun Road Aba Abia State"
                />
              </div>
            </div>

            <div className="mb-10">
              <label className=" font-bold" htmlFor="">
                Dropoff Location
              </label>
              <div className="border-2 px-1 py-1 w-[100%]  flex items-center space-x-2 rounded-lg mt-2">
                <span>
                  <FaLocationDot />
                </span>
                <input
                  type="address"
                  placeholder="No 18 Pound Road Aba Abia State"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="md:w-[55%] w-[100%]  rounded-2xl">
          <img className="w-[100%] rounded-2xl" src="Map.png" alt="" />
        </div>
      </section>
      <div className="py-5 px-5 w-[100%]  flex  justify-end">
        <button
          onClick={handleHome}
          className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white">
          Back to Home
        </button>
      </div>
    </main>
  );
};

export default YourRide;
