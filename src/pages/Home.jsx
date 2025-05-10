import React from "react";
import Taxi from "../Landing/Taxi";
import Best from "../Landing/Best";
import Cars from "../Landing/Cars";
import Driver from "../Landing/Driver";
import Safety from "../Landing/Safety";
import Partners from "../Landing/Partners";
import Feedback from "../Landing/Feedback";

const Home = () => {
  return (
    <main>
      <div className="mx-auto mt-10 w-[95%] space-y-10">
        <Taxi />
        <Best />

        <div className=" ">
          <Cars />
          <Driver />
        </div>
        <Safety />
        <Partners />
        <Feedback />
      </div>
    </main>
  );
};

export default Home;
