import React from "react";
import { IoIosStar } from "react-icons/io";

export const Icon = () => {
  return <IoIosStar className="text-[#DAA520]" />;
};

const Whyinvestprops = ({ text, image, Name }) => {
  return (
    <main className="md:w-[40%] w-[100%] px-2 ">
      <section className="flex md:flex-row flex-col md:space-x-3  space-y-5 ">
        <div>
          <img src={image} />
        </div>
        <div>
          <p className="text-[#130741] text-lg font-medium">{Name}</p>
          <div className="flex space-x-3 items-center">
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
          </div>
        </div>
      </section>
      <section className="text-base mt-2 md:mt-0 text-[#130741] font-medium">
        {text}
      </section>
    </main>
  );
};

export default Whyinvestprops;
