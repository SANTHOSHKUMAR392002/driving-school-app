import React from 'react'
import { BsJustifyLeft } from "react-icons/bs";
import { TbNotification } from "react-icons/tb";
import icon from "../image/profile.webp"
import "./topnavbar.css"
import { useNavigate } from 'react-router-dom';
const Topnavbar = ({toggleSidebar,isOpen}) => {

let nav=useNavigate();

const gotoprofile=()=>{
  nav("/rootlayout/profile")
}

  return (
    <div className='topnavbars'>
      <div className='topnavbar-section'>
        <div className='topnavbar-container'>
          <div className={isOpen?'topnavbar':"topnavbar activetopnav"} >
            <div className='topnav-icon' onClick={toggleSidebar}>
            < BsJustifyLeft style={{fontSize:"20px"}}/>
            </div>
            <div className='topnavright'>
            <div className='top-txt-section'>
              <h3>Hello, Marshal</h3>
              <h4>Good morning</h4>
            </div>
            < TbNotification style={{fontSize:"20px"}}/>
            <div className='img' onClick={gotoprofile}><img src={icon}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topnavbar;
