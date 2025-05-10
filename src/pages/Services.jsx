import React from "react";
import Hero from "../For  Services/Hero";
import Hero2 from "../For  Services/Hero2";
import ServicesList from "../For  Services/ServicesList";
const Services = () => {
  return (
    <main className="">
      <Hero />
      <section className="mx-auto w-[90%]">
        <Hero2 />
        <ServicesList />
      </section>
    </main>
  );
};

export default Services;
