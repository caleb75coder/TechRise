import React from "react";

const Investoeborad = () => {
  return (
    <main className="">
      <div className="flex justify-center pt-5">
        <h1 className="headings">Investors Dashboard</h1>
      </div>
      <div className="grid w-[100%] grid-cols-[1fr_4fr] grid-rows-[1fr_4fr] space-x-3 space-y-3 py-5 px-3 text-[#130741]">
        <aside className=" col-start-1 col-end-2 row-start-1 row-end-4 pt-4">
          <section className="py-10 bg-gray-300 w-[100%] h-[100vh] ">
            <div className="flex flex-col justify-center items-center  space-y-5 pt-10 ">
              <h1 className="text-xl font-bold">Welcome Back</h1>
              <img
                className=" rounded-full w-[90%] h-[38vh] "
                src="Investor1.jpg"
                alt=""
              />
              <h1 className="text-xl font-bold">Mr Chinedu Kalu</h1>
              <p className="font-medium">(investor)</p>
              <p className="font-medium">Status-Active</p>
            </div>
          </section>
        </aside>

        <header className=" col-start-1 lg:col-start-2 col-end-3 row-start-1 row-end-2 w-[100%]  flex items-center space-x-4 font-medium">
          <div className="bg-gray-300 w-[25%] flex flex-col items-center justify-center space-y-5 py-2">
            <h1>Total investment value</h1>
            <p>₦20,000,000</p>
          </div>
          <div className="bg-gray-300 w-[25%] flex flex-col items-center justify-center space-y-5 py-2">
            <h1>Monthly Earning</h1>
            <p>₦600,000</p>
          </div>
          <div className="bg-gray-300 w-[25%] flex flex-col items-center justify-center space-y-5 py-2">
            <h1>Pending Payment</h1>
            <p>₦200,000</p>
          </div>
          <div className="bg-gray-300 w-[25%] flex flex-col items-center justify-center space-y-5 py-2">
            <h1>Cars leased</h1>
            <p>3</p>
          </div>
        </header>

        <main className=" col-start-1 lg:col-start-2 lg:col-end-3 row-start-2 row-end-4 font-medium">
          <section className=" flex w-[100%]   space-x-4">
            <div className=" w-[65%]  space-y-3  font-medium">
              <div>
                <div className="flex flex-col items-center w-[100%] bg-gray-300">
                  <h1 className="text-xl font-bold py-2">
                    Investment Breakdown
                  </h1>
                  <div className="flex items-center justify-between w-[95%] bg-white py-4 px-2 my-2">
                    <h1>Car Model</h1>
                    <h1>Status</h1>
                    <h1>Earning</h1>
                  </div>

                  <div className="flex items-center justify-between w-[95%]  py-4 px-2 my-2">
                    <div className="flex flex-col items-center">
                      <h1>Toyota Camry</h1>
                      <h1>ABA 456RJ</h1>
                    </div>
                    <h1>Active</h1>
                    <h1>₦200,000</h1>
                  </div>

                  <div className="flex items-center justify-between w-[95%]  py-4 px-2 my-2">
                    <div className="flex flex-col items-center">
                      <h1>Toyota Corolla</h1>
                      <h1>ABJ 543 RE</h1>
                    </div>
                    <h1>Maintenance</h1>
                    <h1>₦200,000</h1>
                  </div>

                  <div className="flex items-center justify-between w-[95%]  py-4 px-2 my-2">
                    <div className="flex flex-col items-center">
                      <h1>Toyota Camry</h1>
                      <h1>ABJ 273 AF</h1>
                    </div>
                    <h1>Active</h1>
                    <h1>₦200,000</h1>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center w-[100%] bg-gray-300 font-medium py-3">
                <div>
                  <h1 className="text-xl font-bold">Investment Plan</h1>
                </div>

                <div className=" flex items-center justify-between w-[100%] px-5 ">
                  <div className="flex flex-col items-center">
                    <h1>Upcoming Payouts</h1>
                    <h1>₦200,000</h1>
                  </div>

                  <div className="flex flex-col items-center">
                    <h1>Upcoming Payouts</h1>
                    <h1>₦200,000</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-[35%]   space-y-3">
              <div className=" w-[100%] bg-gray-300 px-5 py-3 space-y-3">
                <h1 className="text-xl font-bold">Earnings & Payouts</h1>
                <div className="flex items-center justify-between">
                  <h1>Upcoming Payouts </h1>
                  <h1>₦200,000</h1>
                </div>

                <div className="flex items-center justify-between">
                  <h1>Recent Payouts </h1>
                  <h1>₦200,000</h1>
                </div>

                <div className="flex items-center justify-between">
                  <h1>₦200,00</h1>
                  <h1>₦200,000</h1>
                </div>
              </div>

              <div className=" w-[100%] bg-gray-300 px-5 py-6 space-y-6">
                <h1 className="text-xl font-bold">Earnings Payouts</h1>
                <div>
                  <img src="Invetchat.jpg" alt="" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </main>
  );
};

export default Investoeborad;
