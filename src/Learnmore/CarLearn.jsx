import React from "react";
import { FaCar } from "react-icons/fa6";
import { HiOutlineTruck } from "react-icons/hi";
import { LiaCarSolid } from "react-icons/lia";
import { PiCarProfileDuotone, PiCarProfileThin } from "react-icons/pi";
import { TbCarSuvFilled } from "react-icons/tb";

const CarLearn = () => {
  return (
    <main>
      <section className="space-y-10 ">
        <div className="md:px-20 px-2 py-40 bg-[url('./Carhair.jpg')] w-[full] h-[auto] bg-no-repeat  bg-cover text-white flex flex-col    ">
          <div className="text-3xl font-medium w-[100%] lg:w-[90%] py-5">
            <h1 className="heagings">Smart car Hair</h1>
          </div>
          <div className="text-xl font-medium w-[100%] md:w-[60%]">
            <p>
              Need a car for a few hours, a day, or even a month? Our exotic,
              smart car hire service gives you access to a fleet of
              well-maintained, fuel-efficient, and comfortable vehicles suited
              for personal and business use. With us, you get the convenience of
              a private vehicle without the stress of ownership.
            </p>
          </div>
        </div>

        <div className="w-[100%] items-center flex flex-col space-y-5 py-5">
          <div className="px-2 lg:px-23 w-[100%] ">
            <h1 className="headings flex justify-center items-center">
              Car categories pricing
            </h1>
          </div>
          <div className="md:flex flex-row justify-between items-center w-[90%]  mg:px-5">
            <div className="bg-gray-200 w-[100%] md:w-[20%] px-5 py-5 flex flex-col  items-center">
              <span className="text-8xl">
                <PiCarProfileDuotone />
              </span>
              <h1 className="text-xl font-bold">Luxury Car</h1>
              <h1 className="font-bold">$100</h1>
            </div>
            <hr />
            <div className="bg-gray-200 w-[100%] md:w-[20%] px-5 py-5 flex flex-col items-center">
              <span className="text-8xl">
                <HiOutlineTruck />
              </span>
              <h1 className="text-xl font-bold">Van</h1>
              <h1 className="font-bold">$100</h1>
            </div>
            <hr />
            <div className="bg-gray-200 w-[100%] md:w-[20%] px-5 py-5 flex flex-col items-center">
              <span className="text-8xl">
                <TbCarSuvFilled />
              </span>
              <h1 className="text-xl font-bold">SUV</h1>
              <h1 className="font-bold">$100</h1>
            </div>
            <hr />
            <div className="bg-gray-200 w-[100%] md:w-[20%] px-5 py-5 flex flex-col items-center">
              <span className="text-8xl">
                <LiaCarSolid />
              </span>
              <h1 className="text-xl font-bold">sedan</h1>
              <h1 className="font-bold">$100</h1>
            </div>
          </div>
        </div>

        <div className="w-[100%] items-center flex flex-col space-y-5 py-5">
          <div className="px-23 w-[100%] ">
            <h1 className="headings flex justify-center items-center">
              How it works ?
            </h1>
          </div>
          <div className="md:flex  flex-row justify-between items-center w-[100%] lg:w-[90%] px-5">
            <div className=" w-[100%] md:w-[25%] px-5 py-5 flex flex-col justify-center  items-center">
              <h1 className="text-xl font-bold px-3 py-2 rounded-lg bg-gray-300">
                1
              </h1>
              <h1 className="font-bold">choose a Car</h1>
            </div>
            <div className=" w-[100%] md:w-[25%] px-5 py-5 flex flex-col justify-center  items-center">
              <h1 className="text-xl font-bold px-3 py-2 rounded-lg bg-gray-300">
                2
              </h1>
              <h1 className="font-bold">Select Rental Duration</h1>
            </div>
            <div className=" w-[100%] md:w-[25%] px-5 py-5 flex flex-col justify-center  items-center">
              <h1 className="text-xl font-bold px-3 py-2 rounded-lg bg-gray-300">
                3
              </h1>
              <h1 className="font-bold">Comfirm Booking & Payment</h1>
            </div>
            <div className=" w-[100%] md:w-[25%] px-5 py-5 flex flex-col justify-center  items-center">
              <h1 className="text-xl font-bold px-3 py-2 rounded-lg bg-gray-300">
                4
              </h1>
              <h1 className="font-bold">Pick Up Or Get it Delivered</h1>
            </div>
          </div>
        </div>
      </section>

      <section className=" scroll  overflow-x-scroll   text-[#130741] px-2 py-2 space-x-2 grid md:[grid-template-columns:30vw_30vw_30vw_30vw_30vw_30vw_30vw_30vw]  [grid-template-columns:90vw_90vw_90vw_90vw_90vw_90vw_90vw_90vw] items-center ">
        <div className=" text-sm">
          <div className="">
            <img
              className=" w-[100%] h-[35vh] md:h-[22vh] lg:h-[44vh]  rounded-lg border-3"
              src="gwagon.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-medium text-xl">Mercedes Benz G wagon</h1>
            <li>A Luxury SUV</li>
            <li>Automatic</li>
            <li>Air conditioner</li>
          </div>
        </div>

        <div className=" text-sm">
          <div className="">
            <img
              className=" w-[100%] h-[35vh]  md:h-[22vh] lg:h-[44vh] rounded-lg border-3"
              src="highland.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-medium text-xl">Toyota Highlander</h1>
            <li>An SUV</li>
            <li>Automatic</li>
            <li>Air conditioner</li>
          </div>
        </div>

        <div className=" text-sm">
          <div className="">
            <img
              className=" w-[100%] h-[35vh]  md:h-[22vh] lg:h-[44vh] rounded-lg border-3"
              src="Revuato.webp"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-medium text-xl">Lamborghini Revuato</h1>
            <li>A Hyper Car</li>
            <li>Automatic</li>
            <li>Air conditioner</li>
          </div>
        </div>

        <div className=" text-sm">
          <div className="">
            <img
              className=" w-[100%] h-[35vh]  md:h-[22vh] lg:h-[44vh] rounded-lg border-3"
              src="Mayback.jpeg"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-medium text-xl">Mercedes Benz May-bach</h1>
            <li>First Class Luxury sedan</li>
            <li>Automatic</li>
            <li>Air conditioner</li>
          </div>
        </div>

        <div className="text-sm">
          <div className="">
            <img
              className=" w-[100%] h-[35vh]  md:h-[22vh] lg:h-[44vh] rounded-lg border-3"
              src="gwagon.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-medium text-xl">Mersedes Benz G 63</h1>
            <li>Banz G Wagon</li>
            <li>Automatic</li>
            <li>Air conditioner</li>
          </div>
        </div>

        <div className=" text-sm">
          <div className="">
            <img
              className=" w-[100%] h-[35vh]  md:h-[22vh] lg:h-[44vh] rounded-lg border-3"
              src="highland.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-medium text-xl">Toyota Highlander</h1>
            <li>An SUV</li>
            <li>Automatic</li>
            <li>Air conditioner</li>
          </div>
        </div>

        <div className=" text-sm">
          <div className="">
            <img
              className=" w-[100%] h-[35vh]  md:h-[22vh] lg:h-[44vh] rounded-lg border-3"
              src="Mayback.jpeg"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-medium text-xl">Toyota Prado</h1>
            <li>Toyota SUV</li>
            <li>Automatic</li>
            <li>Air conditioner</li>
          </div>
        </div>

        <div className=" text-sm">
          <div className="">
            <img
              className=" w-[100%] h-[35vh]  md:h-[22vh] lg:h-[44vh]  rounded-lg border-3"
              src="Revuato.webp"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-medium text-xl">Lamborghini Revuato</h1>
            <li>Italian Super Car</li>
            <li>Automatic</li>
            <li>Air conditioner</li>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CarLearn;
