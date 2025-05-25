import React from "react";
import { List } from "./List";
import { Navigate, useNavigate } from "react-router-dom";

const ServicesList = () => {
  const navigate = useNavigate();
  return (
    <main className="space-y-6 w-[100%] md:px-5 px-2  py-5">
      {List.map((li, index) => (
        <section
          key={index}
          className=" text-[rgb(19,7,65)] text-lg md:flex flex-row space-x-5 space-y-5 px-2  ">
          <div className="md:w-[60%] w-[100%] flex flex-col justify-center items-center">
            <h1 className="text-2xl font-medium mb-1 pr-2">
              {` ${li.title}  `}
              <span className="text-[#E39400]">{li.span}</span>
            </h1>
            <p>{li.text}</p>

            <div className="w-[100%] flex justify-center items-center  mt-20">
              <button
                onClick={() => navigate(li.location)}
                className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white">
                {li.button}
              </button>
            </div>
          </div>

          <div className="w-[100%] md:w-[40%]">
            <img className="rounded-xl w-[100%]" src={li.img} alt="" />
          </div>
        </section>
      ))}
    </main>
  );
};

export default ServicesList;
