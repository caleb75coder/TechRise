import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoKey } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";

export default function Login() {
  const schema = Yup.object().shape({
    username: Yup.string().required("Username is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be atleast 6 characters")
      .matches(/[0-9]/, "Password must include a number")
      .matches(
        /[@.,"}{}$#%^&*();:?!<>]/,
        "Password must include a special character"
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
    setTimeout(() => {
      navigate("/");
    }, 900);
    window.localStorage.setItem("isLogedIn", true);
  };
  const [visible, setVisible] = useState(false);
  const showPassword = () => {
    setVisible(!visible);
  };

  const navigate = useNavigate();
  const handleCreate = () => {
    setTimeout(() => {
      navigate("/signin");
    }, 900);
  };

  return (
    <main className="mx-auto md:w-[30%] w-[80%]  my-[5%]">
      <h1 className=" text-[#130741] text-3xl font-medium mb-2">Welcome!</h1>
      <img src="/Plogo.jpg" alt="logo" />
      <section className="mt-16 text-[#130741]">
        <h1 className="headings text-xl mb-4">Log in</h1>
        <form className="space-y-5" onSubmit={handleSubmit(submitFn)}>
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

          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between space-x-2 ">
              <input type="checkbox" />
              <h1>Remenber me </h1>
            </div>
            <h1 className="cursor-default">Forgot password</h1>
          </div>

          <div className="flex mt-5 items-center justify-center  ">
            <button
              // onClick={handlesign}
              className="font-medium px-8 py-2 rounded-md bg-[#E39400] w-[100%]">
              Log in
            </button>
          </div>

          <div className="flex justify-center items-center  ">
            <h1 className="">OR</h1>
          </div>

          <div className=" flex items-center justify-center space-x-3  bg-blue-400 text-sm font-bold py-2 px-10 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white">
            <span className="text-lg text-red-600 ">
              <FaGoogle />
            </span>
            <p>Login with Google</p>
          </div>

          <div className="flex justify-center items-center py-3  space-x-2 bg-gray-100 rounded-xl">
            <h1>New to Konacuv ?</h1>
            <h1
              onClick={handleCreate}
              className="text-[#E39400] cursor-default ">
              {" "}
              Create account
            </h1>
          </div>
        </form>
      </section>
        
    </main>
  );
}
