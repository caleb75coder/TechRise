import React from "react";
import Tplan from "/Tplan.jpg";

const Cars = () => {
  return (
    <main className="w-[100%] lg:flex flex-row flex-col lg:space-x-3 space-y-3  mb-3">
      <section className="  flex flex-col justify-center items-center px-2 py-2  lg:w-[33%]  w-[100%]">
        <div>
          <img className="asp" src="Tplan.jpg" width={"490px"} />
        </div>
        <h1 className="text-2xl font-bold">Airport Trips</h1>
        <p className="mb-4">
          Book your stress-free and comfortable trip at an affortable price,
          with service from our seasined staff today
        </p>
        <button className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md">
          Learn more
        </button>
      </section>

      <section className="  flex flex-col justify-center items-center px-2 py-2  lg:w-[33%] w-[100%]">
        <div>
          <img src="City.jpg" alt="" />
        </div>
        <h1 className="text-2xl font-bold">City Rides</h1>
        <p className="mb-4">
          Get around the city at your convenience anytime, anywhere. we are just
          an order away from you
        </p>
        <button className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md">
          Learn more
        </button>
      </section>

      <section className=" flex flex-col justify-center items-center px-2 py-2  lg:w-[33%] w-[100%]">
        <div>
          <img className="asp" src="Cars.jpg" width={"500px"} alt="" />
        </div>
        <h1 className="text-2xl font-bold">City Rides</h1>
        <p className="mb-4">
          Get around the city at your convenience anytime, anywhere. we are just
          an order away from you
        </p>
        <button className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md">
          Learn more
        </button>
      </section>
    </main>
  );
};

export default Cars;
