import zyteonlogo from "../assets/logo.png";
import React, { useState } from "react";
import { connectWallet } from "../Blockchain.Services";
import { setGlobalState, useGlobalState, truncate } from "../store";
import Identicon from "react-identicons";

import { Link } from "react-router-dom";
import Profile from "./Profile";
import SideBar from "./Bar";

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [openProfile, setOpenProfile] = useState("");

  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto mb-8">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          className="w-32 cursor-pointer"
          src={zyteonlogo}
          alt="Timeless Logo"
        />
      </div>

      <ul
        className="md:flex-[0.5] text-black md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial menu-items-mobile"
      >
        {/* <li className="mx-4 cursor-pointer">Home</li>
        <li className="mx-4 cursor-pointer">Collection</li>
        <li className="mx-4 cursor-pointer">About</li>
        <li className="mx-4 cursor-pointer">Items</li> */}
        <Link to="/" className="mx-4 cursor-pointer">
          Home
        </Link>
        <Link to="/Collection" className="mx-4 cursor-pointer">
          Collection
        </Link>
        <Link to="/CreatePage" className="mx-4 cursor-pointer">
          Create
        </Link>
        <Link to="/Profile" className="mx-4 cursor-pointer">
          Profile
        </Link>
      </ul>

     
      <div className="flex justify-start items-center p-3">
        <button
          className="bg-transparent  hover:bg-transparent"
          onClick={() => setOpenProfile((prev) => !prev)}
        >
          {" "}
          <Identicon
            string={connectedAccount ? connectedAccount : "Connect Your Wallet"}
            size={50}
            className="h-10 w-10 object-contain rounded-full mr-3"
          />
        </button>

        {openProfile && <SideBar/>}
       
      </div>
    </nav>
  );
};

export default Header;
