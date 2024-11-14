import React from 'react'
import "./learn.css"
import { PiSeatbeltDuotone } from "react-icons/pi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { TiWarningOutline } from "react-icons/ti";
import { TbCarOff } from "react-icons/tb";
import { GiBarrier } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  let nav=useNavigate();
  
  let warningroadpage=()=>{
    nav("/rootlayout/classes/card/:id/warningroadpage")
  }

  let motorwaysign=()=>{
    nav("/rootlayout/learn/motowaypage")
  }

  let mandatory=()=>{
    nav("/rootlayout/learn/mandatory")
  }

  let listoftest=()=>{
    nav("/rootlayout/learn/listoftest")
  }

  return (
    <div className='learn-container'>
      <div className='learn-section'>
        <div className='learn-cardi'>
          <div className='learn-card' onClick={listoftest}>
            <div className='learn-card-section'>
              <div className='learn-card-icon'><PiSeatbeltDuotone /></div>
              <div className='learn-card-txt'>List Of Test (20)</div>
            </div>
          </div>
          <div className='learn-card'>
            <div className='learn-card-section'>
              <div className='learn-card-icon'><PiBookOpenTextLight/></div>
              <div className='learn-card-txt'>Practice</div>
            </div>
          </div>
          <div className='learn-card' onClick={warningroadpage}>
            <div className='learn-card-section'>
              <div className='learn-card-icon'>< TiWarningOutline/></div>
              <div className='learn-card-txt'>Warning Road Sign</div>
            </div>
          </div>
          <div className='learn-card' onClick={mandatory}>
            <div className='learn-card-section'>
              <div className='learn-card-icon'><TbCarOff /></div>
              <div className='learn-card-txt'>Mandatory Road Signs</div>
            </div>
          </div>
          <div className='learn-card' onClick={motorwaysign}>
            <div className='learn-card-section'>
              <div className='learn-card-icon'><GiBarrier/></div>
              <div className='learn-card-txt'>Motorway Road Sign</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn
