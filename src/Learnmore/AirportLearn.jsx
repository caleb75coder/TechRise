import React from "react";
// import Airportprops from "./Airportprops";
import Taxi from "../Landing/Taxi";

const AirportLearn = () => {
  return (
    <main className="md:px-10 px-2">
      <section>
        <div className="space-y-3 py-10">
          <h1 className="headings">
            Smart, Fast & Reliable Airport Trips & City Ride
          </h1>
          <p>
            Never miss a flight or wait for a ride again! Our smart, fast, and
            reliable airport transfer service guarantees on-time pickups and
            drop-offs, ensuring a smooth and stress-free journey. Whether you're
            heading to the airport for an early morning flight or arriving late
            at night, we are available 24/7 to provide safe and comfortable
            transport. With professional drivers, well-maintained vehicles, and
            a commitment to punctuality, we make every airport trip seamless.
          </p>
        </div>

        <div>
          <Taxi />
        </div>
      </section>
    </main>
  );
};

export default AirportLearn;
