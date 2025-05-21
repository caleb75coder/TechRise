import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocateOutline, IoLocateSharp } from "react-icons/io5";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

const Contact = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errore },
  // } = useForm({ resolver: yupResolver(schema) });
  // const submitFn = (data) => {
  //   console.log(data);
  //   reset();
  // };
  return (
    <main>
      <section className="mb-10">
        <div>
          <img src="Contact.jpg" alt="" />
        </div>

        <div className="text-sm font-bold py-5">
          <p>
            YOUR CONTACT WITH{" "}
            <span className="text-amber-400">DRIVE KONACUV</span>
          </p>
        </div>

        <div className="headings flex items-center justify-center ">
          <h1>HOW CAN WE HELP YOU</h1>
        </div>
      </section>

      <section className="lg:flex w-[100%] justify-around  flex-row py-5 px-2">
        <form className="space-y-3 w-[100%]">
          <div className="flex space-x-4">
            <label htmlFor="">Full Name</label>
            <input
              className=" border-2 rounded-sm"
              type="text"
              // {...register("fullName")}
            />
          </div>

          <div className="flex space-x-3">
            <label htmlFor="">Last Name</label>
            <input
              className=" border-2 rounded-sm"
              type="text"
              // {...register("lastName")}
            />
          </div>

          <div className="flex space-x-12">
            <label htmlFor="">Email</label>
            <input
              className=" border-2 rounded-sm"
              type="email"
              placeholder="example@gamil.com"
              // {...register("email")}
            />
          </div>

          <div className="flex space-x-10">
            <label htmlFor="">Phone</label>
            <input
              className=" border-2 rounded-sm"
              type="Phone"
              placeholder="xxxxxxx   xxxx"
              // {...register("phone")}
            />
          </div>

          <div className="pl-18 ">
            <input
              className=" border-2 rounded-sm h-[12vh] px-3  "
              type="text"
              placeholder="Your message max is 500 characters"
            />
          </div>

          <div>
            <button className="bg-[#E39400] text-sm font-bold py-2 px-10 rounded-4xl text-black  hover:transition-all duration-300 ease-linear hover:rounded-md hover:bg-[#E39400] hover:text-white">
              SUBMIT
            </button>
          </div>
        </form>

        <div className="w-[100%]">
          <div>
            <p>
              Feel free to use the form or drop us an Email. oldfashioned Phone
              calls work too
            </p>
            <div className="flex space-x-2 items-center">
              <span>
                <FaPhoneAlt />
              </span>
              <p>2348156377648</p>
            </div>

            <div className="flex space-x-2 items-center">
              <span>
                <IoMdMail />
              </span>
              <p>info@drivekonacuv.com</p>
            </div>

            <div className="flex space-x-2 items-center">
              <span>
                <IoLocateOutline />
              </span>
              <p>Off brass junction Aba Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
