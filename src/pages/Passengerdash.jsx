import React from "react";
import Inputprops from "../Landing/Taxiprops";
import { PickupProps } from "../Landing/Taxiprops";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const Passengerdash = () => {
  return (
    <main className="w-[100%]">
      <h1 className="headings flex justify-center pt-5">Passenger Dashboard</h1>
      <div className="flex   w-[100%] py-5 text-[#130741] font-medium text-md">
        <section className="  py- px-5   w-[30%] ">
          <div className="flex flex-col bg-gray-300  items-center h-full  space-y-5 py-5  w-[100%] ">
            <h1 className="text-xl font-bold">Welcome Back</h1>
            <img
              className=" rounded-full w-[80%] h-[43vh] "
              src="Pasenger1.jpg"
              alt=""
            />
            <h1 className="text-xl font-bold">Mr Charles Kalu</h1>
            <p className="font-medium">Active</p>
          </div>
        </section>

        <div className="flex flex-col  items-center  space-y-5   w-[40%] ">
          <section className="w-[100%] flex space-x-4 ">
            <div className="flex flex-col bg-gray-300 w-[50%] px-2 py-3 space-y-2">
              <h1>Next Ride</h1>
              <p>April 26,2025 9:21 AM</p>
              <p>12 Aba Owerri Road</p>
              <p>12 Azikiwe Road Umuahia</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-gray-300 w-[50%]">
              <h1>Wallet Balance</h1>
              <p>₦17,000</p>
            </div>
          </section>

          <section className="w-[100%] ">
            <main className="flex flex-col md:flex-row justify-center gap-6 w-[100%] ">
              <section className="flex flex-col justify-center items-center py-5 w-[100%] bg-gray-300 ">
                <h1 className="text-3xl font-bold text-[#130741] mb-1">
                  Book Your Trip Now
                </h1>
                <p className="text-[#130741] text-lg">
                  City Rides, Flights & Ticketing
                </p>
                <form className="flex justify-center items-center w-[90%]  my-10 space-y-7 flex-col">
                  <Inputprops text="From" />
                  <Inputprops text="To" />
                  <div className="flex justify-between w-[100%] items-center ">
                    <PickupProps
                      text="date"
                      icon={<FaRegCalendarAlt />}
                      time="Mon, 05 April, 2025"
                    />
                    <PickupProps
                      text="time"
                      icon={<FaClock />}
                      time="01:50 PM"
                    />
                  </div>
                  <div>
                    <button className="bg-[#E39400] text-sm font-bold py-3 px-16 rounded-md">
                      Book Now
                    </button>
                  </div>
                </form>
              </section>
            </main>
          </section>
        </div>

        <div className="flex flex-col  items-center space-y-3  px-4 w-[30%] ">
          <div className="w-[100%] bg-gray-300 px-3 py-8">
            <h1 className="font-bold mb-10">Total Riders</h1>
            <div className="flex items-center mb-10 w-[100%] justify-between">
              <p className="underline">2025</p>
              <p>20</p>
            </div>

            <div className="flex items-center w-[100%] justify-between">
              <p className="underline">2025</p>
              <p>20</p>
            </div>
          </div>

          <div className="flex flex-col px-4 bg-gray-300 w-[100%] h-full space-y-15 py-8">
            <h1 className="font-bold">Live Tracking</h1>
            <div className="w-[100%] flex justify-center">
              <input
                className="bg-gray-100 py-2 px-1 rounded-md w-[90%]"
                type="text"
                placeholder="Vehicle No."
              />
            </div>

            <div className="">
              <button className="bg-[#E39400] text-sm font-bold py-3 px-6 rounded-md">
                Track
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Passengerdash;
