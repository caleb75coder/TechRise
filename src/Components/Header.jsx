import { useState } from "react";
import { Link } from "react-router-dom";
import { Navlist } from "./NavList";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const handleReturn = () => {
    setTimeout(() => {
      navigate("/becomeADriver");
    }, 800);
  };
  const handlesign = () => {
    setTimeout(() => {
      navigate("signin");
    }, 800);
  };

  const handllogin = () => {
    setTimeout(() => {
      navigate("/login");
    }, 700);
  };

  const handleinvsign = () => {
    setTimeout(() => {
      navigate("investorsig");
    }, 800);
  };

  const handledrive = () => {
    setTimeout(() => {
      navigate("/driversign");
    }, 800);
  };

  const handlepass = () => {
    setTimeout(() => {
      navigate("/passengersign");
    }, 800);
  };

  const handletrack = () => {
    setTimeout(() => {
      navigate("/trackPackage");
    }, 800);
  };

  const [Visible, setVisible] = useState(false);
  const HandleClick = () => {
    setVisible(!Visible);
  };

  window.localStorage.removeItem("isLogedIn");
  const handleLogout = () => {
    navigate("/signin");
  };

  const location = useLocation();

  return (
    <header className="fixed  top-0 left-0 w-[100%] z-50 bg-white">
      <section className="flex  shadow-md shadow-gray-700 items-center justify-between    text-[#130741] lg:px-5 px-2 py-4 w-[100%] ">
        <div>
          <img src="Kunacuv.png" alt="" />
        </div>
        <nav className="lg:flex hidden items-center justify-between  font-mono text-lg gap-5 w-[78%] ">
          {Navlist.map((list, index) => (
            <Link
              key={index}
              to={list.path}
              className={`${
                location.pathname === list.path
                  ? "text-[#E39400]  border-2 border-[#E39400] px-3 rounded-xl transition-all  translate-1.5   duration-900  ease-out py-1"
                  : "text-[#130741]"
              }`}>
              {list.title}
            </Link>
          ))}
          <div className=" flex flex-col  items-center">
            <div
              onClick={HandleClick}
              className={`   text-[#130741]    space-x-2 rounded-md px-4 flex items-center hover:transition-all duration-500 ease-linear hover:bg-[#E39400]  hover:text-white `}>
              <button>More</button>
              <span>
                <RiArrowDropDownLine />
              </span>
            </div>
            <div
              className={`flex flex-col mt-10  fixed rounded-lg px-5   bg-amber-50 opacity-90  space-y-2 transition-all duration-500 ease-out overflow-hidden ${
                Visible ? "max-h-[50vh] py-4 " : "max-h-0"
              } `}
              onClick={() => {
                setVisible(false);
              }}>
              <button onClick={handleinvsign} className="more1">
                investors dashboard
              </button>
              <button onClick={handledrive} className="more1">
                Drivers dashboard
              </button>
              <button onClick={handlepass} className="more1">
                Passengers dashboard
              </button>
              <button onClick={handletrack} className="more1">
                Track your package
              </button>
              <button
                onClick={handleLogout}
                className="bg-[#E39400]  text-white px-7 hover:transition-all duration-500 ease-linear hover:bg-white border   hover:border-[#E39400] hover:text-[#E39400]">
                Logout
              </button>
            </div>
          </div>

          <button
            onClick={handleReturn}
            className="text-[#130741]  px-2  hover:transition-all duration-500 ease-linear hover:bg-[#E39400] hover:text-white">
            Become a Driver
          </button>
          <button
            onClick={handlesign}
            className="bg-[#E39400]  text-white px-7 hover:transition-all duration-500 ease-linear hover:bg-white border   hover:border-[#E39400] hover:text-[#E39400]">
            Sign up
          </button>
        </nav>

        <div className="flex items-center justify-between space-x-4">
          <div className="flex lg:hidden space-x-2">
            <button
              onClick={handllogin}
              className="bg-white border-2  text-sm font-bold py-2 px-5 rounded-xl text-black hover:transition-all duration-200 ease-linear hover:rounded-3xl border-[#E39400] ">
              Login
            </button>
            <button
              onClick={handlesign}
              className=" border-2  text-sm font-bold py-2 px-5 rounded-xl text-black hover:transition-all duration-200 ease-linear hover:rounded-3x bg-[#E39400] border-[#E39400] ">
              Signup
            </button>
          </div>
          <div
            className="text-3xl lg:hidden block cursor-pointer text-[#E39400]"
            onClick={handleMenu}>
            <MdMenu />
          </div>
        </div>
      </section>

      <section
        className={`overflow-hidden mt-2 bg-white  backdrop-blur-4xl text-[#E39400] lg:hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-screen py-4 " : "max-h-0"
        }`}>
        <nav className="flex flex-col   min-h-screen px-4  space-y-3 font-mono text-xl w-[100%]">
          {Navlist.map((list, index) => (
            <Link
              key={index}
              to={list.path}
              className={`${
                location.pathname === list.path
                  ? "text-[#E39400]"
                  : "text-[#130741]"
              }`}
              onClick={() => {
                setOpen(false);
              }}>
              {list.title}
            </Link>
          ))}
          <div
            className=" flex-col flex items-start  w-[70%]  text-xl space-y-2"
            onClick={() => {
              setOpen(false);
            }}>
            <button
              onClick={handleinvsign}
              className="text-[#130741]  font-bold ">
              investors dashboard
            </button>
            <button
              onClick={handledrive}
              className="text-[#130741]  font-bold ">
              Drivers dashboard
            </button>
            <button onClick={handlepass} className="text-[#130741]  font-bold ">
              Passengers dashboard
            </button>
            <button
              onClick={handletrack}
              className="text-[#130741]  font-bold ">
              Track your package
            </button>
            <button onClick={handleReturn} className="text-[#130741] ">
              Become a Driver
            </button>
            <button
              onClick={handleLogout}
              className="bg-[#E39400]  text-white px-7 hover:transition-all duration-500 ease-linear hover:bg-white border   hover:border-[#E39400] hover:text-[#E39400]">
              Logout
            </button>
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Header;
