import React from "react";
import { Navigate, useNavigate } from "react-router-dom"; // this is use to namvigate from one reauct to another

const Notfound = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    setTimeout(() => {
      navigate("/");
    }, 800);
  };
  return (
    <div className=" flex flex-col justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-9xl text-red-600 mb-2">404</h1>
        <h1 className="text-2xl  font-extrabold ">OPPS! PAGE NOT FOUND</h1>
        <h1 className="text-red-600">
          sorry! the page your are looking for dose not exist.{" "}
        </h1>
        <h1 className="text-red-500">if you think</h1>
        <h1 className="text-red-400">somthing is broken, report a problem</h1>
        <div className="flex items-center space-x-5">
          <button
            onClick={handleReturn}
            className="bg-blue-400 px-3 rounded-2xl items-center"
            curs>
            Return Home
          </button>
          <button className=" px-3 rounded-2xl items-center border-2 border-blue-600">
            Report Problem
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
