import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Regthanks from "./Regthanks";

const Register = () => {
  const navigate = useNavigate();
  const handleRegthanks = () => {
    navigate("/regthanks");
  };
  return (
    <div>
      <section className="lg:flex flex-row justify-between  w-[100%] py-10 space-x-3 px-2 lg:px-20 bor">
        <div className="w-[100%] lg:w-[50%] items-center  justify-center  pt-3">
          <img
            className=" rounded-2xl"
            src="Register.jpg"
            width={"100%"}
            alt=""
          />
        </div>

        <section className=" w-[98%] lg:w-[50%] flex  flex-col ">
          <div className="text-[#130741]  font-medium pb-2 md:pt-1 pt-6 text-xl">
            <h1>Register as a Driver</h1>
          </div>
          <form className="  px-2 w-[100%]  space-y-6 py-5 flex flex-col justify-center items-center">
            <div className="text-[#130741] w-[98%] font-medium flex flex-col  ">
              <input
                className=" focus:outline-none border-b-2 "
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="text-[#130741] w-[98%] font-medium flex flex-col   ">
              <input
                className=" focus:outline-none border-b-2 "
                type="text"
                placeholder="Middle Name"
              />
            </div>
            <div className="text-[#130741] w-[98%] font-medium flex flex-col  ">
              <input
                className=" focus:outline-none border-b-2 "
                type="text"
                placeholder="Surname"
              />
            </div>
            <div className="text-[#130741] w-[98%] font-medium flex flex-col   ">
              <input
                className=" focus:outline-none border-b-2 "
                type="text"
                placeholder="Marital stause"
              />
            </div>
            <div className="text-[#130741] w-[98%] font-medium flex flex-col   ">
              <input
                className=" focus:outline-none border-b-2 "
                type="address"
                placeholder="Address"
              />
            </div>
            <div className="text-[#130741] w-[98%] font-medium flex flex-col ">
              <input
                className=" focus:outline-none border-b-2 "
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="text-[#130741] w-[98%] font-medium flex flex-col ">
              <input
                className=" focus:outline-none border-b-2 "
                type="password"
                placeholder="password"
              />
            </div>
            <div className="text-[#130741] w-[98%] font-medium flex flex-col  ">
              <input
                className=" focus:outline-none border-b-2 "
                type="password"
                placeholder="Comfirm password"
              />
            </div>
            <div className="text-[#130741] w-[98%] font-medium flex justify-end ">
              <button
                onClick={handleRegthanks}
                className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white">
                Register
              </button>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Register;
