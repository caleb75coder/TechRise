import React from "react";
import Whyinvestprops from "./Whyinvestprops";

export default function Whyinvest() {
  return (
    <main>
      <section className="flex justify-center  w-[100%] items-center py-10">
        <section className="flex md:flex-row flex-col md:space-x-10 md:items-center h-[80%] space-y-10 md:space-y-0">
          <Whyinvestprops
            image="/Gold.jpg"
            Name="Mrs Gold"
            text="Drive Kunacuv customer support has been second to none,they have surpasses my expectation and i highly recomended them to investors"
          />
          <Whyinvestprops
            image="/Brown.jpg"
            Name="Mr Brown"
            text="Excellent investment platform that actually works and puts you in touch with real investment Thank you"
          />
          <Whyinvestprops
            image="/Uche.jpg"
            Name="Mrs Uchenna"
            text="I was skeptical  about meking investment and always doubted. but investing in Drive Konacuv changed my opinion"
          />
        </section>
      </section>
    </main>
  );
}
