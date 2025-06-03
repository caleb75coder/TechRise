import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoKey } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";

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
      <h1 className=" text-[#130741] text-3xl font-medium mb-8">Welcome!</h1>
      <img src="/Plogo.jpg" alt="logo" />
      <section className="mt-16 text-[#130741]">
        <h1 className="text-xl mb-4">Log in</h1>
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
            <h1 onClick={handleCreate} className="cursor-default">
              Create account
            </h1>
            <h1 className="cursor-default">Forgot password</h1>
          </div>

          <div className="flex justify-between mt-14 items-center">
            <button
              // onClick={handlesign}
              className="font-medium px-8 py-3 rounded-md bg-[#E39400]">
              Log in
            </button>
          </div>
        </form>
      </section>
        
    </main>
  );
}
