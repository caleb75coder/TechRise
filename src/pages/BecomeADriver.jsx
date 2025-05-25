import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const BecomeADriver = () => {
  const navigate = useNavigate();
  const handleRegisterD = () => {
    setTimeout(() => {
      navigate("/register");
    }, 800);
  };
  return (
    <div>
      <section className="">
        <div className="pb-5">
          <img src="Key.jpg" width={"100%"} alt="" />
        </div>

        <div className="lg:px-20 px-2 flex  flex-col items-center justify-center pb-10">
          <h1 className="headings">Become a Driver</h1>
          <p>
            Become part of a community of passionate, Driven individuals earning
            steady income while transforming transportation in our cities, As
            Drive Kunacuv, we're more than a logistics company, we're your
            partner in growth from flexible schedules to guaranteed payouts and
            support a very step of the way, we're here to help you succeed on
            and off the road
          </p>
        </div>

        <div className="px-3 flex justify-center my-10">
          <h1 className="headings">Why Drive with us</h1>
        </div>

        <div className="w-[100%]  lg:flex  flex-row space-y-2 items-center px-5 space-x-2 mb-20">
          <div className=" border-2 border-black lg:w-[33%] w-[100%] flex flex-col  items-center space-y-8 px-1 rounded-2xl">
            <h1 className="text-[#130741] font-bold text-xl">
              Drive and earn when you like
            </h1>
            <p>
              Earn during everning and weekends, or make more money by Driving
              more frequently, it's up to you
            </p>
          </div>

          <div className=" border-2 border-black lg:w-[33%] w-[100%]  flex flex-col  items-center space-y-8 px-1 rounded-2xl">
            <h1 className="text-[#130741] font-bold text-xl">
              A reliable source of income
            </h1>
            <p>
              you'll order's from our large network of Riders anytime you are
              online
            </p>
          </div>

          <div className=" border-2 border-black lg:w-[33%] w-[100%]  flex flex-col  items-center space-y-3 px-1 rounded-2xl">
            <h1 className="text-[#130741] font-bold text-xl">Weekly payout </h1>
            <p>
              Receive your earning at the end of the week. There are no hidden
              subscriptons fee and you'll will ony pay commission on your
              earnings
            </p>
          </div>
        </div>

        <div className="px-3  my-5">
          <h1 className="headings">Get Started</h1>
        </div>

        <div className="w-[100%]  lg:flex  flex-row space-y-2 items-center justify-between  space-x-10 pb-5">
          <div className=" lg:w-[30%] w-[100%]  space-y-5 px-1">
            <h1 className="text-[#130741] font-bold text-xl">
              1. Register online
            </h1>
            <p>
              Tell us which city you'd like to Drive in and the type of licencs
              you have we'll we will Email you with the next step
            </p>
          </div>

          <div className="lg:w-[30%] w-[100%]  space-y-5 px-1">
            <h1 className="text-[#130741] font-bold text-xl">
              2. Upload your documents
            </h1>
            <p>
              The document needed for your Driving can vary depending on your
              Driving location
            </p>
          </div>

          <div className="lg:w-[30%] w-[100%]   space-y-6 px-1">
            <h1 className="text-[#130741] font-bold text-xl">3. Get trained</h1>
            <p>Get tranined as a Driver onec you apply to become a Driver</p>
          </div>
        </div>

        <div className="py-5 px-5">
          <button
            onClick={handleRegisterD}
            className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default BecomeADriver;
