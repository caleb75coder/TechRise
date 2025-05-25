import React from "react";

const TrackPackage = () => {
  return (
    <div>
      <section className="text-[#130741] lg:flex flex-row justify-between  w-[100%] py-10 px-2 lg:px-10 space-y-10 space-x-2">
        <div className=" w-[100%] lg:w-[50%]  ">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="font-semibold text-3xl   text-[#130741]">
              Track your Package
            </h1>
            <p className=" text-lg font-medium">Real time tracking</p>
          </div>

          <div className="bg-gray-200 py-10 space-y-30 rounded-lg">
            <div className=" flex justify-center py-5">
              <input
                className="text-[#130741] rounded-xl  w-[90%] bg-white py-3 px-2"
                type="text"
                placeholder="Traking Number"
              />
            </div>
            <div className="flex justify-end px-8">
              <button className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white">
                Track
              </button>
            </div>
          </div>
        </div>

        <div className="w-[100%] lg:w-[50%]  flex items-center justify-center ">
          <img className="w-[100%] rounded-2xl" src="tracking.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default TrackPackage;
