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
  return (
    <main className="bg-[#0f0448]">
      <div className="flex items-center justify-between text-white px-4 w-[100%]">
        <section className="flex flex-col   w-[40%]  px-2 py-2">
          <div>
            <h1 className="text-[#E39400] text-2xl mb-5">Drive Konacuv</h1>
          </div>
          <div className="lg:flex flex-row  items-center items-cente space-x-50">
            <nav className="flex flex-col text-sm">
              <a href=""> About Drive Konacuv</a>
              <a href="">City ride</a>
              <a href="">Airport Trips</a>
              <a href="">Car Hire</a>
              <a href="">Drive Hire</a>
              <a href="">Courier Services</a>
            </nav>
            <nav className="flex flex-col text-sm">
              <a className="font-bold mb-3 text-md" href="">
                Discorver
              </a>
              <a href="">Invest</a>
              <a href="">Book a Trip</a>
              <a href="">Services</a>
              <a href="">Become a Driver</a>
              <a href="">Trick your Package</a>
            </nav>
          </div>
        </section>

        <section className="flex flex-col space-x-3 w-[60%] px-2 pr-4 py-2">
          <div className=" flex justify-between  space-x-2  py-3">
            {/* <button  className="font-bold  text-md">Back to the top</button> */}
          </div>
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
                <h1 className="text-md font-bold">
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

      <section className="px-6 py-2">
        <div>
          <nav className="flex space-x-3 text-white text-sm border-r-white">
            <a className=" border-r-white" href="./login">
              Login
            </a>
            <a href="">Terms of use</a>
            <a href="">Privacy and Policy</a>
            <a href="">Supply chain transperency</a>
          </nav>
        </div>
      </section>
    </main>
  );
}

export default Footer;
