import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Structure = () => {
  return (
    <div>
      <Header />
      <div className="pt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Structure;
