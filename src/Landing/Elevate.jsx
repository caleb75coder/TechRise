import React from "react";

const Elevate = () => {
  return (
    <main className="md:flex flex-row items-center space-y-5  w-[100%] py-5">
      <div className=" flex flex-col items-start text-2xl w-[100%] md:w-[60%] text-[#130741]">
        <h1>We Are Ready to Elevate Your</h1>
        <h1 className="text-[#130741] font-bold pb-5">
          Transport And Logistics Operation.
        </h1>
        <button className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white">
          Take Your next step with us
        </button>
      </div>

      <div className="w-[100%] md:w-[40%]">
        <img className="rounded-2xl" src="mapp.jpg" alt="" />
      </div>
    </main>
  );
};

export default Elevate;
