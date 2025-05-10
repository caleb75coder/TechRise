import React from "react";
import { List } from "./List";

const ServicesList = () => {
  return (
    <main className="space-y-6">
      {List.map((li, index) => (
        <section key={index} className=" text-[rgb(19,7,65)] text-lg">
          <h1 className="text-xl font-medium mb-1 pr-2">
            {` ${li.title}  `}
            <span className="text-[#E39400]">{li.span}</span>
          </h1>
          <p>{li.text}</p>
        </section>
      ))}
    </main>
  );
};

export default ServicesList;
