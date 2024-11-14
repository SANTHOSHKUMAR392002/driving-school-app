import React, { useState } from 'react'
import { FiMapPin } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
import driving from "../../driving_app.json"
import "./classes.css"
import { useNavigate, useOutletContext } from 'react-router-dom';
const Classes = () => {

  const [isOpen,setIsOpen]=useOutletContext();

  const nav=useNavigate();

  const fetching=(id)=>{
    nav(`/rootlayout/classes/card/${id}`)
  }


  return (
    <div className='classes-section'>
      <div className='classes-card-section'>
      {
        driving.class.map((a,i)=>{
          return (
            <div key={i} className='cardi-section'onClick={()=>fetching(a.id)}>
              <div className={isOpen?'location-section':"location-section activeclasses"}>
                <div className='location-heading'>
                  <FiMapPin/> {a.location}
                </div>
                <div className='loaction-see' >
                  <MdArrowForwardIos/> {a.see_all}
                </div>
              </div>
              <div>
                <h1 style={{textAlign:"center"}}>Day-0{a.id}</h1>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Classes;
