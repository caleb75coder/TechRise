import React from "react";

const Driverlearn = () => {
  return (
    <div>
      <section lassName="space-y-10 ">
        <div className="md:px-20 px-2 py-40 bg-[url('./Driver2.jpg')] w-[full] h-[auto] bg-no-repeat  bg-cover text-white flex flex-col    ">
          <div className="text-3xl font-medium w-[100%] lg:w-[90%] py-5">
            <h1 className="heagings">Smart Driver Hair</h1>
          </div>
          <div className="text-xl font-medium w-[100%] md:w-[60%]">
            <p>
              Looking for a skilled and a professional driver? Our smart Driver
              services connect you with experienced, background-checked and a
              reliable Drivers foe both short-terms and long-terms needs.
            </p>
          </div>
        </div>

        <div className="w-[100%] items-center flex flex-col space-y-5 py-5 text-[#130741]">
          <div className="px-5 lg:px-18 w-[100%] ">
            <h1 className="headings flex judtify-center items-center ">
              Drive categories & price
            </h1>
          </div>
          <div className="lg:flex flex-row justify-between items-center w-[100%] px-2  md:px-5">
            <div className="bg-gray-200 w-[100%] md:w-[20%] px-5 py-5 flex flex-col  items-center">
              <h1 className="text-xl font-bold">Personal Drivers</h1>
              <h1 className="font-bold">$20 per hour</h1>
            </div>
            <hr />
            <div className="bg-gray-200 w-[100%] md:w-[20%] px-5 py-5 flex flex-col items-center">
              <h1 className="text-xl font-bold">Coperate Drivers</h1>
              <h1 className="font-bold">$20 per hour</h1>
            </div>
            <hr />
            <div className="bg-gray-200 w-[100%] md:w-[20%] px-5 py-5 flex flex-col items-center">
              <h1 className="text-xl font-bold">Chauffeurs</h1>
              <h1 className="font-bold">$20 per hour</h1>
            </div>
            <hr />
            <div className="bg-gray-200 w-[100%] md:w-[20%] px-5 py-5 flex flex-col items-center">
              <h1 className="text-xl font-bold">Heavy Truck Drivers</h1>
              <h1 className="font-bold">$20 per hour</h1>
            </div>
          </div>
        </div>

        <div className="w-[100%] items-center flex flex-col space-y-5 py-5 text-[#130741]">
          <div className="px-5 lg:px-18 w-[100%] ">
            <h1 className="headings flex justify-center items-center">
              Drive categories & price
            </h1>
          </div>

          <div className="lg:flex flex-row justify-between items-center w-[100%] px-2  md:px-5">
            <div className="bg-gray-200 w-[100%] md:w-[20%] px-5 py-5 space-x-5 flex  md:justify-center  items-center">
              <h1 className="text-3xl font-bold">1</h1>
              <h1 className="font-bold">select a driver type</h1>
            </div>
            <hr />
            <div className="bg-gray-200 w-[100%] md:w-[20%] px-5 py-5 space-x-5 flex md:justify-center  items-center">
              <h1 className="text-3xl font-bold">2</h1>
              <h1 className="font-bold">chose Duration & schedule</h1>
            </div>
            <hr />
            <div className="bg-gray-200 w-[100%] md:w-[20%] px-5 py-5 space-x-5 flex md:justify-center items-center">
              <h1 className="text-3xl font-bold">3</h1>
              <h1 className="font-bold">Confirm Booking & Payment</h1>
            </div>
            <hr />
            <div className="bg-gray-200 w-[100%] md:w-[20%] px-5 py-5 space-x-5 flex md:justify-center items-center">
              <h1 className="text-3xl font-bold">4</h1>
              <h1 className="font-bold">Meet Your Driver</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Driverlearn;
