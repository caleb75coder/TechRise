import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoKey } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";

export default function Signin() {
  const schema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be atleast 6 characters")
      .matches(/[0-9]/, "Password must include a number")
      .matches(
        /[@.,"}{}$#%^&*();:?!<>]/,
        "Password must include a special character"
      ),
    checkbox: Yup.boolean().oneOf(
      [true],
      "You must accept terms and conditions "
    ),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const submitFn = (data) => {
    console.log(data);
    reset();
  };
  const [visible, setVisible] = useState(false);
  const showPassword = () => {
    setVisible(!visible);
  };

  const [visiblee, setVisiblee] = useState(false);
  const seePassword = () => {
    setVisiblee(!visiblee);
  };

  const navigate = useNavigate();
  const handlesign = () => {
    setTimeout(() => {
      navigate("/");
    });
  };

  return (
    <main className="mx-auto md:w-[30%] w-[80%]  my-[5%]">
      <h1 className=" text-[#130741] text-3xl font-medium mb-8">Welcome!</h1>
      <img src="/Plogo.jpg" alt="logo" />
      <section className="mt-16 text-[#130741]">
        <h1 className="text-xl mb-4">Sign up</h1>
        <form className="space-y-5" onSubmit={handleSubmit(submitFn)}>
          <div>
            <label>Email</label>
            <div className="inputDiv">
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email")}
              />
              <span className="text-2xl">
                <MdOutlineEmail />
              </span>
            </div>
            <p className="error text-red-700">{errors.email?.message}</p>
          </div>
          <div>
            <label>Username</label>
            <div className="inputDiv">
              <input
                type="text"
                placeholder="Enter your username"
                {...register("username")}
              />
              <span className="text-2xl">
                <CgProfile />
              </span>
            </div>
            <p className="error text-red-700">{errors.username?.message}</p>
          </div>

          <div>
            <label>Password</label>
            <div className="inputDiv">
              <input
                type={visible ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password")}
              />
              <span className="text-3xl cursor-pointer" onClick={showPassword}>
                <IoKey />
              </span>
            </div>
            <p className="error text-red-700">{errors.password?.message}</p>
          </div>

          <div>
            <label>Confirm Password</label>
            <div className="inputDiv">
              <input
                type={visiblee ? "text" : "password"}
                placeholder="Confirm your password"
                {...register("confirmPassword")}
              />
              <span className="text-3xl cursor-pointer" onClick={seePassword}>
                <IoKey />
              </span>
            </div>
            <p className="error text-red-700">{errors.password?.message}</p>
          </div>

          <div>
            <div className="flex space-x-4">
              <input
                type="checkbox"
                className=" w-5 h-5 "
                {...register("checkbox")}
              />
              <p>I agree to all companies Term and conditions</p>
            </div>
            <p className="error text-red-700">{errors.checkbox?.message}</p>
          </div>
          <div className="flex justify-between mt-14 items-center">
            <button
              onClick={handlesign}
              className="font-medium px-6 py-2 rounded-md bg-[#E39400] hover:rounded-3xl hover:transition-all duration-300 ease-linear hover:bg-[#E48400]">
              Sign in
            </button>
            <p>Have an account?</p>
          </div>
        </form>

        <div className=" flex items-center  justify-between">
          <div className="flex justify-center items-center py-5 font-bold">
            <h1>or sign in with</h1>
          </div>

          <div className=" flex items-center space-x-3 bg-blue-400 text-sm font-bold py-2 px-10 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white">
            <span className="text-lg text-red-600 ">
              <FaGoogle />
            </span>
            <p>Google</p>
          </div>
        </div>
      </section>
        
    </main>
  );
}
