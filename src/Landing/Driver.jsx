import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Driver = () => {
  const navigate = useNavigate();
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
    <main className="w-[100%] lg:flex flex-row  lg:space-x-3 space-y-3 ">
      <section className="  flex flex-col justify-center items-center px-2   lg:w-[33%] w-[100%]">
        <div>
          <img src="Courier.jpg" alt="" />
        </div>
        <h1 className="text-2xl font-bold">Couier Services</h1>
        <p className="mb-4">
          Intown and intercity courier services with superfast delivry
        </p>
        <button
          onClick={handlecourier}
          className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md hover:rounded-3xl hover:transition-all duration-200 ease-linear hover:bg-[#E48400]">
          Learn more
        </button>
      </section>

      <section className="  flex flex-col justify-center items-center px-2 py-2  lg:w-[33%] w-[100%]">
        <div>
          <img className="" src="Driver.jpg" alt="" />
        </div>
        <h1 className="text-2xl font-bold">Driver Hire</h1>
        <p className="mb-4">
          Hire our Driver to work for you or to your destination
        </p>
        <button
          onClick={handledrivelearn}
          className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md hover:rounded-3xl hover:transition-all duration-200 ease-linear hover:bg-[#E48400]">
          Learn more
        </button>
      </section>

      <section className="  flex flex-col justify-center items-center px-2 py-2  lg:w-[33%] w-[100%]">
        <div>
          <img src="Invest.jpg" alt="" />
        </div>
        <h1 className="text-2xl font-bold">Invest</h1>
        <p className="mb-4">
          It is also a opportunity for and Investment to get good benefits as
          your our App
        </p>
        <button
          onClick={handleinvsign}
          className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md hover:rounded-3xl hover:transition-all duration-200 ease-linear hover:bg-[#E48400]">
          Learn more
        </button>
      </section>
    </main>
  );
};

export default Driver;
