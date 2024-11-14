import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { LuInfo } from "react-icons/lu";
import { MdOutlineClass } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { SiFuturelearn } from "react-icons/si";
import { Link, NavLink } from 'react-router-dom';
const Navbar = ({isOpen}) => {


  return (
    <div className={isOpen?"navbar-section":"navbar-section active1"}>
      <div className="navbar-container">
        <div className="navbar-heading">
          <ul>
          <NavLink to={"/rootlayout/info"} className="snavbar"><LuInfo/> Info</NavLink> 
          <NavLink to={"/rootlayout/classes"}  className="snavbar"><MdOutlineClass/> Classes</NavLink>
          <NavLink to={"/rootlayout/goal" } className="snavbar"><GoGoal/> Goal</NavLink>
          <NavLink to={"/rootlayout/learn"} className="snavbar"><SiFuturelearn/> Learn</NavLink>
          <NavLink to={"/rootlayout/payment"} className="snavbar"><SiFuturelearn/> Payment</NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
