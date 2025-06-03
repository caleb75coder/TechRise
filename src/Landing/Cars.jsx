import React from "react";
import Tplan from "/Tplan.jpg";
import { Navigate, useNavigate } from "react-router-dom";

const Cars = () => {
  const navigate = useNavigate();
  const handleAirportCity = () => {
    setTimeout(() => {
      navigate("/airportLearn");
    }, 800);
  };

  const handlecar = () => {
    setTimeout(() => {
      navigate("/carLearn");
    }, 800);
  };

  const handleinvsign = () => {
    setTimeout(() => {
      navigate("invest");
    }, 800);
  };

  const handlecourier = () => {
    setTimeout(() => {
      navigate("courierLearn");
    }, 800);
  };

  const handledrivelearn = () => {
    setTimeout(() => {
      navigate("/driverlearn");
    }, 800);
  };
  return (
    <main className=" scroll bg-gray-100  overflow-x-scroll   text-[#130741] px- py-2 space-x-2 grid md:[grid-template-columns:30vw_30vw_30vw_30vw_30vw_30vw]  [grid-template-columns:85vw_85vw_85vw_85vw_85vw_85vw] items-center ">
      <section className="  flex flex-col  items-center px-2 py-2 ">
        <div>
          <img
            className="object-cover w-[100vw] h-auto rounded-md transform transition-transform duration-300 hover:scale-105"
            src="Tplan.jpg"
          />
        </div>
        <div className=" px-1 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Airport Trips</h1>
          <p className="">
            Book your stress-free and comfortable trip at an affortable price.
          </p>
        </div>
        <button
          onClick={handleAirportCity}
          className="bg-[#E39400] hover:scale-115  text-sm font-bold py-3 px-5 rounded-md hover:rounded-3xl hover:transition-all duration-300 ease-linear hover:bg-[#E48400] ">
          Learn more
        </button>
      </section>

      <section className="  flex flex-col  items-center px-2 py-2   space-y-1">
        <div>
          <img
            className="object-cover w-full h-auto rounded-md transform transition-transform duration-300 hover:scale-105"
            src="City.jpg"
            alt=""
          />
        </div>
        <h1 className="text-2xl font-bold">City Rides</h1>
        <p className="">
          Get around the city at your convenience anytime anywhere.
        </p>
        <button
          onClick={handleAirportCity}
          className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md hover:rounded-3xl hover:transition-all duration-300 hover:scale-110 ease-linear hover:bg-[#E48400]">
          Learn more
        </button>
      </section>

      <section className=" flex flex-col  items-center px-2 py-2   space-y-1">
        <div>
          <img
            className="object-cover w-[100%] lg:h-[50vh] md:h-[16vh] h-[30vh]  rounded-md transform transition-transform duration-300 hover:scale-105"
            src="Cars.jpg"
            alt=""
          />
        </div>
        <h1 className="text-2xl font-bold">Car Hire</h1>
        <p className="">
          offers exotic cars, executive vehicle tailored for attending
          ceremonies &  other events.
        </p>
        <button
          onClick={handlecar}
          className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md hover:rounded-3xl hover:transition-all duration-300 hover:scale-110 ease-linear hover:bg-[#E48400]">
          Learn more
        </button>
      </section>

      <section className="  flex flex-col  items-center px-2 py-2   space-y-2">
        <div>
          <img
            className="object-cover w-full h-auto rounded-md transform transition-transform duration-300 hover:scale-105"
            src="Courier.jpg"
            alt=""
          />
        </div>
        <h1 className="text-2xl font-bold">Courier Services</h1>
        <p className="">
          Intown and intercity courier services with superfast delivry.
        </p>
        <button
          onClick={handlecourier}
          className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md hover:rounded-3xl hover:transition-all duration-300 hover:scale-110 ease-linear hover:bg-[#E48400]">
          Learn more
        </button>
      </section>

      <section className="  flex flex-col  items-center px-2 py-2   space-y-3">
        <div>
          <img
            className="object-cover w-full h-auto rounded-md transform transition-transform duration-300 hover:scale-105"
            src="Driver.jpg"
            alt=""
          />
        </div>
        <h1 className="text-2xl font-bold">Driver Hire</h1>
        <p className="">Hire our driver to drive you to your destination</p>
        <button
          onClick={handledrivelearn}
          className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md hover:rounded-3xl hover:transition-all duration-300 hover:scale-110 ease-linear hover:bg-[#E48400]">
          Learn more
        </button>
      </section>

      <section className="  flex flex-col  items-center px-2 py-2   space-y-1">
        <div>
          <img
            className="object-cover w-full h-auto rounded-md transform transition-transform duration-300 hover:scale-105"
            src="Invest.jpg"
            alt=""
          />
        </div>

        <h1 className="text-2xl font-bold">Invest</h1>
        <p className="mb-4">Invest in car ownership and reap your dividends.</p>
        <button
          onClick={handleinvsign}
          className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md hover:rounded-3xl hover:transition-all duration-300 hover:scale-110 ease-linear  hover:bg-[#E48400]">
          Learn more
        </button>
      </section>
    </main>
  );
};

export default Cars;
