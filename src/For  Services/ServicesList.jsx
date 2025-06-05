import React from "react";
import { List } from "./List";
import { Navigate, useNavigate } from "react-router-dom";

const ServicesList = () => {
  const navigate = useNavigate();
  const handleAir = () => {
    setTimeout(() => {
      navigate("/airportLearn");
    }, 800);
  };

  const handleCity = () => {
    setTimeout(() => {
      navigate("/airportLearn");
    }, 800);
  };

  const handlecar = () => {
    setTimeout(() => {
      navigate("/carLearn");
    }, 800);
  };

  const handleCouier = () => {
    setTimeout(() => {
      navigate("/courierLearn");
    }, 800);
  };

  const handledrive = () => {
    setTimeout(() => {
      navigate("/driverlearn");
    }, 800);
  };

  const handleinvest = () => {
    setTimeout(() => {
      navigate("/invest");
    }, 800);
  };

  return (
    <main className="space-y-25 w-[100%] md:px-5 px-2 pb-5  ">
      {/* {List.map((li, index) => (
        <section
          key={index}
          className=" text-[rgb(19,7,65)] text-md md:flex flex-row space-x-5 space-y-5 px-2  ">
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
      ))} */}

      <section className=" text-[rgb(19,7,65)] text-md md:flex flex-row space-x-5 space-y-2 px-2  ">
        <div className="w-[100%] md:w-[40%]">
          <img className=" w-[100%]" src="Tplan.jpg" alt="" />
        </div>
        <div className="md:w-[60%] w-[100%] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-medium mb-1">
            Smart, Fast & Reliable
            <span className="text-[#E39400]">Airport Trips</span>
          </h1>
          <p>
            Never miss a flight or wait for a ride again! Our smart, fast, and
            reliable airport transfer service guarantees on-time pickups and
            drop-offs, ensuring a smooth and stress-free journey. Whether you're
            heading to the airport for an early morning flight or arriving late
            at night, we are available 24/7 to provide safe and comfortable
            transport. With professional drivers, well-maintained vehicles, and
            a commitment to punctuality, we make every airport trip seamless.
          </p>
          <div className="w-[100%] flex justify-center items-center  mt-5">
            <button
              onClick={handleCity}
              className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400 hover:text-white">
              Book Now
            </button>
          </div>
        </div>
      </section>

      <section className=" text-[rgb(19,7,65)] text-md md:flex flex-row space-x-5 space-y-2 px-2  ">
        <div className="md:w-[60%] w-[100%] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-medium mb-1 pr-2">
            {" "}
            Fast & Reliable
            <span className="text-[#E39400]">City Rides</span>
          </h1>
          <p>
            Navigating the city has never been easier! Our fast and reliable
            city ride service ensures that you get where you need to be—quickly,
            safely, and comfortably. Whether you're commuting to work, attending
            a business meeting, shopping, or enjoying a night out, we provide a
            hassle-free transport experience. Our fleet of well-maintained
            vehicles and professional drivers ensure every ride is efficient,
            affordable, and secure.
          </p>
          <div className="w-[100%] flex justify-center items-center mt-5">
            <button
              onClick={handleCity}
              className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400 hover:text-white">
              Try Now
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[40%]">
          <img src="City.jpg" alt="" />
        </div>
      </section>

      <section className=" text-[rgb(19,7,65)] text-md md:flex flex-row space-x-5 space-y-2 px-2  ">
        <div className="w-[100%] md:w-[40%]">
          <img className=" w-[100%]" src="Cars.jpg" alt="" />
        </div>
        <div className="md:w-[60%] w-[100%] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-medium mb-1 pr-2">
            {" "}
            Smart
            <span className="text-[#E39400]">Car Hire</span>
          </h1>
          <p>
            Need a car for a few hours, a day, or even a month? Our exotic,
            smart car hire service gives you access to a fleet of
            well-maintained, fuel-efficient, and comfortable vehicles suited for
            personal and business use. Whether you're traveling out of town,
            running errands, or need a temporary replacement car, we provide
            affordable rates, flexible rental plans, and a seamless booking
            process. With us, you get the convenience of a private vehicle
            without the stress of ownership.
          </p>
          <div className="w-[100%] flex justify-center items-center mt-5">
            <button
              onClick={handlecar}
              className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400 hover:text-white">
              Book Now
            </button>
          </div>
        </div>
      </section>

      <section className=" text-[rgb(19,7,65)] text-md md:flex flex-row space-x-5 space-y-2 px-2  ">
        <div className="md:w-[60%] w-[100%] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-medium mb-1 pr-2">
            {" "}
            Fast & Reliable
            <span className="text-[#E39400]">Couier Services</span>
          </h1>
          <p>
            We understand the importance of fast and secure deliveries. Our
            intown and intercity smart, fast, and reliable courier service
            ensures your packages, documents, and parcels reach their
            destination on time and in perfect condition. Whether it's an urgent
            business document, a fragile package, we provide real-time tracking,
            safe handling, and efficient delivery. Trust us to move your parcels
            with care and speed.
          </p>
          <div className="w-[100%] flex justify-center items-center mt-5">
            <button
              onClick={handleCouier}
              className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400 hover:text-white">
              Try Now
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[40%]">
          <img src="Courier.jpg" alt="" />
        </div>
      </section>

      <section className=" text-[rgb(19,7,65)] text-md md:flex flex-row space-x-5 space-y-2 px-2  ">
        <div className="w-[100%] md:w-[40%]">
          <img src="Driver.jpg" alt="" />
        </div>
        <div className="md:w-[60%] w-[100%] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-medium mb-1 pr-2">
            {" "}
            Smart
            <span className="text-[#E39400]">Driver Hire</span>
          </h1>
          <p>
            Looking for a skilled and professional driver? Our smart driver hire
            service connects you with experienced, background-checked, and
            reliable drivers for both short-term and long-term needs. Whether
            you require a driver for a personal trip, corporate service, or
            special occasion, we ensure you get a safe, punctual, and
            professional chauffeur. Enjoy a smooth ride while we take care of
            the driving
          </p>
          <div className="w-[100%] flex justify-center items-center mt-5">
            <button
              onClick={handledrive}
              className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400 hover:text-white">
              Hire Now
            </button>
          </div>
        </div>
      </section>

      <section className=" text-[rgb(19,7,65)] text-md md:flex flex-row space-x-5 space-y-2 px-2  ">
        <div className="md:w-[60%] w-[100%] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-medium mb-1 pr-2">
            {" "}
            Smart
            <span className="text-[#E39400]">Investment</span>
          </h1>
          <p>
            Turn your vehicle into a profitable asset with our smart investment
            opportunity! We offer a structured investment plan where you can
            lease your car to us and earn steady, reliable income. With our
            hassle-free management, timely payments, and full operational
            handling, you can enjoy a stress-free investment while watching your
            money grow. Partner with us today and secure a brighter financial
            future!
          </p>
          <div className="w-[100%] flex justify-center items-center mt-5">
            <button
              onClick={handleinvest}
              className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400 hover:text-white">
              Try Now
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[40%]">
          <img className=" w-[100%]" src="investt.jpg" alt="" />
        </div>
      </section>
    </main>
  );
};

export default ServicesList;
