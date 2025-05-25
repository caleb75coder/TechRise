import "./App.css";
import { Routes, Route } from "react-router-dom";
import Structure from "./Components/Structure";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Invest from "./pages/Invest";
import Services from "./pages/Services";
import Notfound from "./pages/Notfound";
import BecomeADriver from "./pages/BecomeADriver";
import Investorsig from "./pages/Investorsig";
import Investoeborad from "./pages/Investoeborad";
import Driversign from "./pages/Driversign";
import Driverdash from "./pages/Driverdash";
import Passengersign from "./pages/Passengersign";
import Passengerdash from "./pages/Passengerdash";
import Register from "./pages/Register";
import TrackPackage from "./pages/TrackPackage";
import AirportLearn from "./Learnmore/AirportLearn";
import CourierLearn from "./Learnmore/CourierLearn";
import CarLearn from "./Learnmore/CarLearn";
import Driverlearn from "./Learnmore/Driverlearn";
// import Regdrivsign from "./pages/Regdrivsign";
import Regthanks from "./pages/Regthanks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/services" element={<Services />} />
          <Route path="/becomeADriver" element={<BecomeADriver />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/investorsig" element={<Investorsig />} />
          <Route path="/investoeborad" element={<Investoeborad />} />
          <Route path="/driversign" element={<Driversign />} />
          {/* <Route path="regdrivsign" element={<Regdrivsign />} /> */}
          <Route path="/driverdash" element={<Driverdash />} />
          <Route path="/passengersign" element={<Passengersign />} />
          <Route path="passengerdash" element={<Passengerdash />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trackPackage" element={<TrackPackage />} />
          <Route path="/airportLearn" element={<AirportLearn />} />
          <Route path="/courierLearn" element={<CourierLearn />} />
          <Route path="/carLearn" element={<CarLearn />} />
          <Route path="driverlearn" element={<Driverlearn />} />
          <Route path="regthanks" element={<Regthanks />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
