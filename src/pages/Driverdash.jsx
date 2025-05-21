import React from "react";

const Driverdash = () => {
  return (
    <div className="lg:px-5 px-1 py-5 bg-gray-200">
      <div className="flex justify-center py-2">
        <h1 className="headings">Driver Dashboard</h1>
      </div>
      <section className="lg:flex flex-row   bg-gray-300 w-[100%] py-5 text-[#130741] text-md">
        <div className="flex flex-col  items-center  space-y-5   lg:w-[25%] w-[100%]">
          <h1 className="text-xl font-bold">Welcome Back</h1>
          <img
            className=" rounded-full w-[80%] h-[43vh] "
            src="Driver1.jpg"
            alt=""
          />
          <h1 className="text-xl font-bold">Mr Kelechi Dike</h1>
          <p className="font-medium">(Driver)</p>
          <p className="font-medium">Status-Active</p>
        </div>

        <div className="flex flex-col  lg:pl-10 px-5 space-y-5 lg:w-[25%] w-[100%]">
          <div className="flex lg:flex-col  w-[100%] justify-between">
            <div className="">
              <h1 className="text-xl font-bold pb-5">Current Ride</h1>
              <div className="space-y-3">
                <p>9:30 AM</p>
                <p>123Ehi rd</p>
                <p>45Okigwu str</p>
                <p>₦1300</p>
              </div>
            </div>

            <div className="text-md mb-15 ">
              <h1 className="text-lg font-bold pb-5">New Ride Request</h1>
              <p>19 Mine Park</p>
              <button className="font-medium px-5  rounded-2xl bg-[#E39400] mb-5">
                Accept
              </button>

              <p>19 Mine Park</p>
              <button className="font-medium px-5  rounded-2xl bg-[#E39400]">
                Accept
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="font-medium pb-5">My Rides</h1>
            <div className="flex space-x-5">
              <p>Abayi Rd</p>
              <p>Completed</p>
            </div>

            <div className="flex space-x-5">
              <p>Osusu Rd</p>
              <p>Completed</p>
            </div>

            <div className="flex space-x-5">
              <p>Opobo Rd</p>
              <p>Completed</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col     px-5 py-5   lg:w-[50%] w-[100%] font-medium">
          <div className=" w-[100%] flex justify-between  ">
            <div>
              <h1 className="text-xl font-bold">Today's Earnings</h1>
            </div>
            <div>
              <h1 className="text-xl font-bold">Incoming Rides</h1>
              <p>2</p>
            </div>
          </div>

          <div className=" w-[100%] flex justify-between items-center  pr-17 mb-5">
            <p>₦7500</p>
            <p>Scheduled</p>
          </div>

          <div className="flex justify-center items-center mb-5">
            <img
              className="lg:w-[70%] w-[100%] h-[50vh] rounded-2xl"
              src="Map.png"
              alt=""
            />
          </div>

          <div className=" flex flex-col lg:w-[70%] w-[100%] space-y-2">
            <h1 className="font-bold mb-5">My Rides</h1>
            <div className="flex justify-between">
              <p>Date</p>
              <p>Status</p>
              <p>Earning</p>
            </div>

            <div className="flex justify-between">
              <p>02/04/2025</p>
              <p>Completed</p>
              <p>₦45,000</p>
            </div>

            <div className="flex justify-between">
              <p>01/04/2025</p>
              <p>Completed</p>
              <p>₦40,000</p>
            </div>

            <div className="flex justify-between">
              <p>29/03/2025</p>
              <p>Completed</p>
              <p>₦39,000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Driverdash;
