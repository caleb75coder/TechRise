import React from "react";

const Partners = () => {
  return (
    <main className="flex flex-col justify-center items-center space-y-4 w-[100%] ">
      <section className="text-center text-[#130741] ">
        <h1 className="headings ">Our Partners</h1>
        <p className="text-lg ">
          We work hand in hand with leading automative, finance and logistics
          partner to deliver reliable nd efficient services across rhe country.
        </p>
      </section>

      <section className="flex w-[100%] space-x-3 justify-between items-center md:overflow-x-hidden overflow-x-auto">
        <img src="Jiji.jpg" alt="" />
        <img src="Lead.jpg" alt="" />
        <img src="Lfactory.jpg" alt="" />
        <img src="Fbank.jpg" alt="" />
        <img src="R.jpg" alt="" />
        <img src="Eterna.jpg" alt="" />
        <img src="Mec.jpg" alt="" />
        <img src="Aba.jpg" alt="" />
        <img src="Nur.jpg" alt="" />
      </section>
    </main>
  );
};

export default Partners;
