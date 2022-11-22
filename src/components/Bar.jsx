import Style from "./Bar.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { connectWallet } from "../Blockchain.Services";
import { setGlobalState, useGlobalState, truncate } from "../store";

const SideBar = () => {

  const [connectedAccount] = useGlobalState("connectedAccount");

  return (
    <div className={Style.items}>
      

      <div className={Style.inner_wrap}>

    
  
        <ul>
        <li  >
        <Link to="/" >
          Home
        </Link>
        </li>
        <li >
        <Link to="/Collection">
          Collection
        </Link>
        </li>
        <li >
        <Link to="/CreatePage" >
          Create
        </Link>
        </li>
        <li >
        <Link to="/" >
          Log out
        </Link>
        </li> 

        <li>

       

  

        {connectedAccount ? (
        <button
          className="shadow-black text-white
        bg-[#8359ff] hover:bg-[#7862ba] md:text-xs p-3
          rounded-full cursor-pointer "
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className=" shadow-black text-white
        bg-[#8359ff] hover:bg-[#7862ba] md:text-xs p-3 mt-3 rounded-full
         cursor-pointer"
          onClick={connectWallet}
        >
          Connect
        </button>
      )}

    

</li>

        </ul>
      

        </div>
     
        
  
    </div>
  )
}

export default SideBar


  
 
  
  
   
  
  
  
   
  
   