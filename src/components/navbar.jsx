import React from "react";
import { Link } from "react-router-dom";
import Wallet from "./wallet";
import nft from "../images/nft.png";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 flex justify-between px-16 py-4 border border-b-2 border-color2 items-center">
      <section className="flex items-center">
        <div className="flex items-center justify-center">
          <img src={nft} alt="NFT" className="w-10" />
        </div>
        <Link to="/" className="text-xl px-5">
          Home
        </Link>
        <Link to="/search" className="text-xl px-5">
          Search
        </Link>
      </section>
      <section className="">
        <Wallet />
      </section>
    </nav>
  );
};

export default Navbar;
