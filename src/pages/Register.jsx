import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handledrivers = () => {
    setTimeout(() => {
      navigate("/regdrivsign");
    }, 800);
  };
  return (
    <div>
      <section className="lg:flex flex-row justify-between  w-[100%] py-10 px-2 lg:px-20">
        <div className="w-[100%] lg:w-[50%] items-center ">
          <img
            className=" rounded-2xl"
            src="Register.jpg"
            width={"100%"}
            alt=""
          />
        </div>
        <div className=" w-[100%] lg:w-[50%] flex justify-center">
          <form className="  px-5 space-y-3  py-5">
            <div className="text-[#130741]  font-medium pb-6 text-xl">
              <h1>Register as a Driver</h1>
            </div>
            <div className="text-[#130741]  font-medium flex space-x-10 ">
              <label htmlFor="">First Name</label>
              <input
                className="bg-gray-300 pt-1 rounded-lg border-2"
                type="text"
              />
            </div>
            <div className="text-[#130741]  font-medium flex space-x-5 ">
              <label htmlFor="">Middle Name</label>
              <input
                className="bg-gray-300 pt-1 rounded-lg border-2"
                type="text"
              />
            </div>
            <div className="text-[#130741]  font-medium flex space-x-13 ">
              <label htmlFor="">Surname</label>
              <input
                className="bg-gray-300 pt-1 rounded-lg border-2"
                type="text"
              />
            </div>
            <div className="text-[#130741]  font-medium flex space-x-4 ">
              <label htmlFor="">Marital stause</label>
              <input
                className="bg-gray-300 pt-1 rounded-lg border-2"
                type="text"
              />
            </div>
            <div className="text-[#130741]  font-medium flex space-x-10 ">
              <label htmlFor="">First Name</label>
              <input
                className="bg-gray-300 pt-1 rounded-lg border-2"
                type="text"
              />
            </div>
            <div className="text-[#130741]  font-medium flex space-x-10 ">
              <label htmlFor="">First Name</label>
              <input
                className="bg-gray-300 pt-1 rounded-lg border-2"
                type="text"
              />
            </div>
            <div className="text-[#130741]  font-medium flex space-x-10 ">
              <label htmlFor="">First Name</label>
              <input
                className="bg-gray-300 pt-1 rounded-lg border-2"
                type="text"
              />
            </div>
            <div className="text-[#130741]  font-medium flex space-x-10 ">
              <label htmlFor="">First Name</label>
              <input
                className="bg-gray-300 pt-1 rounded-lg border-2"
                type="text"
              />
            </div>
            <div className="text-[#130741]  font-medium flex justify-end space-x-10 ">
              <button
                onClick={handledrivers}
                className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white">
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
