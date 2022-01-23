import React from "react";
import { Link } from "react-router-dom";
import Wallet from "./wallet";
import nft from "../images/nft.png";

const Navbar = () => {
  return (
    <nav className="w-full sm:absolute sticky flex flex-col sm:flex-row top-0  justify-between sm:px-16 py-4 border border-b-2 border-color2 items-center bg-color1">
      <section className="flex items-center">
        <div className="flex items-center justify-center">
          <img src={nft} alt="NFT" className="w-10" />
        </div>
        <Link to="/" className="text-xl px-6 font-bold">
          Home
        </Link>
        <Link to="/gallery" className="text-xl px-6 font-bold">
          Gallery
        </Link>
      </section>
      <section className="">
        <Wallet />
      </section>
    </nav>
  );
};

export default Navbar;
