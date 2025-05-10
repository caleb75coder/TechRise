import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Inputprops({ text }) {
  return (
    <section className="bg-gray-100 px-2 w-[100%] pb-4 rounded-md">
      <p className=" text-[#130741] text-sm">{text}</p>
      <div className="flex items-center space-x-8">
        <span className="text-[#130741]">
          <FaLocationDot />
        </span>
        <input
          type="text"
          placeholder="Address, airport, hostel,...."
          className="placeholder:text-sm focus:outline-none grow placeholder:text-[#786ea5] font-medium"
        />
      </div>
    </section>
  );
}
export const PickupProps = ({ text, icon, time }) => {
  return (
    <section className="bg-white pt-1 pb-4 px-2 w-[40%] rounded-md">
      <p className="text-[#786ea5] text-sm font-medium">Pickup {text}</p>
      <div className="flex items-center space-x-2 font-bold text-[#130741] text-sm">
        <span>{icon}</span>
        <p>{time}</p>
      </div>
    </section>
  );
};
