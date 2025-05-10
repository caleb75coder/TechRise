import React from "react";
import Whyinvest from "../Investment/Whyinvest";

const Invest = () => {
  return (
    <div className="px-2">
      <section className=" space-y-3">
        <div className="pb-5">
          <img src="Clock.jpg" width={"100%"} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center pb-10">
          <h1 className="headings">
            Discorver Lucrative Investment Opportunity With{" "}
            <span className="text-amber-500 font-extrabold">Drive Konacuv</span>
          </h1>
          <p>
            Are you ready to embark on a journy toward profitable returns? Look
            no further than Drive Kanucuv's Drivers investment plans, tailored
            to suit your financial aspiration and goals
          </p>
        </div>

        <div className="md:flex flex-col flex-row justify-between space-x-2 w-[100%] px-5 pb-15">
          <div className=" md:w-[40%] w-[100%]">
            <img src="Toyota.jpg" alt="" />
          </div>

          <div className="flex flex-col space-y-2 justify-center items-center  md:w-[60%] w-[100%] ">
            <h1>Low budjet car purches plan for taxi</h1>
            <button className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md text-black">
              {" "}
              View plan
            </button>
          </div>
        </div>

        <div className="md:flex flex-col flex-row justify-between space-x-2 space-y-3 w-[100%] px-5 pb-10">
          <div className="flex flex-col space-y-2 justify-center items-center  md:w-[60%] w-[100%] ">
            <h1>Exotic Car purches plan for car hiring services</h1>
            <button className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md text-black">
              {" "}
              View plan
            </button>
          </div>
          <div className="  md:w-[40%] w-[100%]">
            <img src="Benz.jpg" alt="" />
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center ">
          <h1 className="font-extrabold text-[#130741] text-2xl pb-8">
            Why invest with us
          </h1>
          <p>
            invest in vehicle Ownership and reep return; join us in investment
            and enjoy lucrative ROI. invest in a vehicle with us and unlock the
            potential for substantial return on your investment
          </p>
          <p>
            and unlock the potential for substaintial return on your investment
          </p>
        </div>

        <div>
          <Whyinvest />
        </div>
      </section>
    </div>
  );
};

export default Invest;
