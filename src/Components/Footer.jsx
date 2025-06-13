import React from "react";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const handleteam = () => {
    setTimeout(() => {
      navigate("/myteam");
    }, 800);
  };

  const handleReg = () => {
    setTimeout(() => {
      navigate("/register");
    });
  };

  // const handlelogiin = () => {
  //   setTimeout(() => {});
  // };
  return (
    <main className="bg-[#0f0448] py-2 ">
      <div className="px-5">
        <h1 className="text-[#E39400] text-2xl mb-5">Drive Konacuv</h1>
      </div>
      <div className="md:flex  justify-between text-white px-4 w-[100%]">
        <section className="flex flex-col   md:w-[50%]  px-2 py-2 ">
          <div className="flex  w-[100%]  items-center  space-x-20 md:space-x-50">
            <nav className="flex flex-col text-sm">
              <a href="about"> About Drive Konacuv</a>
              <a href="airportLearn">City ride</a>
              <a href="airportLearn">Airport Trips</a>
              <a href="carLearn">Car Hire</a>
              <a href="driverlearn">Drive Hire</a>
              <a href="courierLearn">Courier Services</a>
            </nav>
            <nav className="flex flex-col text-sm">
              <a className="font-bold pb-2 text-md" href="">
                Discorver
              </a>
              <a href="invest">Invest</a>
              <a href="bookARide">Book a Trip</a>
              <a href="services">Services</a>
              <a href="becomeADriver">Become a Driver</a>
              <a href="trackPackage">Trick your Package</a>
            </nav>
          </div>
          <div></div>
        </section>

        <section className="flex flex-col space-x-3 md:w-[50%] px-2 pr-4 py-2 ">
          <div className=" lg:flex flex-row  justify-between">
            <nav className="flex flex-col text-sm ">
              <a className="font-bold mb-2text-md" href="">
                Support Resources
              </a>
              <a href="">Support and Downloads</a>
              <a href="">Contact support</a>
              <a href="">Request and repair</a>
              <a href="">Product waeeanty information</a>
              <a href="">Developer's fortal</a>
              <a href="">Report and potential security Vulnerebility</a>
              <a href="">Concern</a>
            </nav>

            <div>
              <div className="pb-5">
                <h1 className="text-md font-bold py-5">
                  Stay up to date with Drive Konacuv
                </h1>
                <p className="text-sm">Sign up for our new startter</p>
              </div>
              <div className="pb-5">
                <button
                  onClick={handleReg}
                  className="bg-[#E39400] text-sm font-bold py-3 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white">
                  Register
                </button>
              </div>

              <div className="text-sm pb-2">
                <p>Manage contact preferences</p>
              </div>

              <div className="flex items-center space-x-2">
                <span>
                  <FaLinkedin />{" "}
                </span>
                <span>
                  <FaFacebook />
                </span>
                <span>
                  <BsYoutube />
                </span>
                <span>
                  <BsTwitterX />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="px-6 py-2 ">
        <div className="space-y-2  md:flex items-center  md:space-x-10">
          <nav className="flex justify-between items-center text-white text-sm space-x-5">
            <a
              className="bg-[#E39400] text-sm font-bold py-2 px-5 rounded-md text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl hover:bg-[#E39400] hover:text-white"
              href="/login">
              Login
            </a>
            <a href="">Terms of use</a>
          </nav>
          <nav className="flex justify-between items-center text-white text-sm space-x-5">
            <a href="">Privacy and Policy</a>
            <a href="">Supply chain transperency</a>
          </nav>
        </div>
      </section>
    </main>
  );
}

export default Footer;
