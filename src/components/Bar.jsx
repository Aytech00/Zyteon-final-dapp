import React from 'react'
import Style from "./Bar.module.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={Style.SideBar}>
      <ul className={Style.items}>
        <li>
        <Link to="/" >
          Home
        </Link>
        </li>
        <li>
        <Link to="/Collection">
          Collection
        </Link>
        </li>
        <li>
        <Link to="/CreatePage" >
          Create
        </Link>
        </li>
        <li>
        <Link to="/" >
          Log out
        </Link>
        </li>

        
      </ul>
    </div>
  )
}

export default SideBar


  
 
  
  
   
  
  
  
   
  
   