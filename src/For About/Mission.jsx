import React from "react";
import { Missions } from "./Missions";

const Mission = () => {
  return (
    <main className="">
      {Missions.map((Mi, index) => (
        <section key={index} className="text-[rgb(19,7,65)] px-2 pb-2">
          <h1 className="text-md font-medium mb-1 text-green-900  ">
            {Mi.title}
            <p className="text-[rgb(19,7,65)]">{` ${Mi.text}  `}</p>
          </h1>
        </section>
      ))}
    </main>
  );
};

export default Mission;
