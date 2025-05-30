import { FaRegCalendarAlt } from "react-icons/fa";
import Inputprops from "./Taxiprops";
import { PickupProps } from "./Taxiprops";
import { FaClock } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";
export default function Taxi() {
  const navigate = useNavigate();
  const handleBookNaw = () => {
    navigate("/login");
  };

  return (
    <>
      <main className="flex flex-col lg:flex-row justify-center gap-6 ">
        <section className="flex flex-col justify-center items-center lg:w-[50%] w-[100%] bg-white ">
          <h1 className="text-3xl font-bold text-[#130741] mb-1">
            Book Your Trip Now
          </h1>
          <p className="text-[#130741] text-lg">
            City Rides, Flights & Ticketing
          </p>
          <form className="flex justify-center items-center w-[90%]  my-20 space-y-7 flex-col">
            <Inputprops text="From" />
            <Inputprops text="To" />
            <div className="flex justify-between w-[100%] items-center">
              <PickupProps
                text="date"
                icon={<FaRegCalendarAlt />}
                time="Mon, 05 April, 2025"
              />
              <PickupProps text="time" icon={<FaClock />} time="01:50 PM" />
            </div>
            <div>
              <button
                onClick={handleBookNaw}
                className="bg-[#E39400] text-sm font-bold py-3 px-16 rounded-md hover:rounded-3xl hover:transition-all duration-200 ease-linear hover:bg-[#E48400]">
                Book Now
              </button>
            </div>
          </form>
        </section>
        <section className="lg:w-[50%] w-[100%] min-h-[100%] pb-5">
          <img
            src="/Taxi.jpg"
            width={"100%"}
            height={"100%"}
            className="object-cover min-h-full"
          />
        </section>
      </main>
          
    </>
  );
}
