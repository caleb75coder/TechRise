import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiCarProfileThin } from "react-icons/pi";
import { Navigate, useNavigate } from "react-router-dom";
const BookARide = () => {
  const navigate = useNavigate();
  const handleYourride = () => {
    navigate("/yourRide");
  };
  return (
    <main className="text-[#130741] w-[100%] flex flex-col justify-center items-center  py-10 ">
      <div>
        <h1 className="headings flex justify-center items-center">
          Book a Ride
        </h1>
      </div>

      <form className="md:w-[80%] w-[100%] px-3  py-5">
        <div className=" mb-2 ">
          <label className="font-bold " htmlFor="">
            Pickup Location
          </label>
          <div className="border-2 px-1 py-1 w-[100%] md:w-[50%] flex items-center space-x-2 rounded-lg mt-2">
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
          <div className="border-2 px-1 py-1 w-[100%] md:w-[50%] flex items-center space-x-2 rounded-lg mt-2">
            <span>
              <FaLocationDot />
            </span>
            <input
              type="address"
              placeholder="No 18 Pound Road Aba Abia State"
            />
          </div>
        </div>

        <section>
          <div className="flex items-center justify-around text-xl font-bold mb-5">
            <span className="text-7xl font-bold text-amber-600">
              <PiCarProfileThin />
            </span>
            <h1>15 mins</h1>
            <h1>$75</h1>
          </div>

          <div className=" flex justify-center items-center py-5">
            <button
              onClick={handleYourride}
              className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white">
              Book Now
            </button>
          </div>
        </section>
      </form>
    </main>
  );
};

export default BookARide;
