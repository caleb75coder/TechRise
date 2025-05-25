import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiLightbulbFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

const Regthanks = () => {
  const navigate = useNavigate();
  const handlehome = () => {
    setTimeout(() => {
      navigate("/");
    }, 800);
  };
  return (
    <div>
      <section className="w-[100%] flex flex-col justify-center items-center py-5 px-2">
        <div className="flex justify-center items-center">
          <h1 className="headings">Thank you for Registering</h1>
        </div>

        <div className="flex justify-center md:w-[70%] w-[100%] mb-5">
          <p>
            You still have remainig steps to complete your account validation
            process Please check your inbox and click the link in your mail,
            fill and upload the relevant document. then proceed for physical
            verification
          </p>
        </div>

        <div className="md:flex flex-row justify-around items-center md:w-[70%] w-[100%]  space-x-2 space-y-2 mb-5 py-10 font-bold">
          <div className="flex-col justify-center items-center flex  px-2 py-2 space-y-5">
            <span className="text-3xl text-amber-400">
              <RiLightbulbFill />
            </span>
            <p>Create Your Account</p>
          </div>

          <div className="flex-col justify-center items-center flex  px-2 py-2 space-y-5">
            <span className="text-3xl">
              <IoMailUnreadOutline />
            </span>
            <p>Email Confirmation</p>
          </div>

          <div className="flex-col justify-center items-center flex  px-2 py-2 space-y-5">
            <span className="text-3xl">
              <FaRegThumbsUp />
            </span>
            <p>Validate Account</p>
          </div>
        </div>

        <div className="flex items-center justify-around w-[100%] md:w-[70%] py-5">
          <div>
            <button className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-2xl hover:bg-white hover:border-2 hover:border-[#E39400] hover:text-[#E39400]">
              Resend Email
            </button>
          </div>

          <div>
            <button
              onClick={handlehome}
              className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-2xl hover:bg-white hover:border-2 hover:border-[#E39400] hover:text-[#E39400]">
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Regthanks;
