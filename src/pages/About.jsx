import React from "react";
import Mission from "../For About/Mission";

const About = () => {
  return (
    <main>
      <section className="text-[rgb(19,7,65)]">
        <div className="lg:flex flex-row space-y-4 items-center w-[100%] px-4 mb-10 pt-5">
          <div className="w-[100%] flex flex-col justify-center items-center ">
            <h1 className="headings">About US</h1>
            <p>
              <span className="text-amber-400">Drive Kunacuv</span> is a leading
              transport and logistics company committed to provide a
              smart,safe,reliable and affortable ride across thr cities in
              Nigreia. As a trusted an realiable services provider, We
              specialize on car rides in and around the city, airport trips,
              exotic and executive vihicle car hire at affortable price intown
              an intercity courier services with super fast delivery. We also
              offer our drivers for hire to drive your destination
            </p>
          </div>
          <div>
            <img className=" rounded-2xl" src="Hand.jpg" alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-10 px-2">
          <h1 className="headings">Our Mission</h1>
          <p>
            Our mission is to provide simless and comfortable riding expeience,
            our customer satisfaction and our priority. We strive to offer high
            quality services thet are affortable to all
          </p>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="headings">Why Choose Us </h1>
        </div>

        <div>
          <Mission />
        </div>
      </section>
    </main>
  );
};

export default About;
