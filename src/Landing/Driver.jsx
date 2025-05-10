import React from "react";

const Driver = () => {
  return (
    <main className="w-[100%] lg:flex flex-row flex-col lg:space-x-3 space-y-3 ">
      <section className="  flex flex-col justify-center items-center px-2   lg:w-[33%] w-[100%]">
        <div>
          <img src="Courier.jpg" alt="" />
        </div>
        <h1 className="text-2xl font-bold">Couier Services</h1>
        <p className="mb-4">
          Intown and intercity courier services with superfast delivry
        </p>
        <button className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md">
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
        <buttonn className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md">
          Learn more
        </buttonn>
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
        <buttonn className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md">
          Learn more
        </buttonn>
      </section>
    </main>
  );
};

export default Driver;
