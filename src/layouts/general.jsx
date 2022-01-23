import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const General = ({ children }) => {
  return (
    <div className="w-full max-w-screen min-w-screen h-auto min-h-screen bg-color1 text-color5">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default General;
