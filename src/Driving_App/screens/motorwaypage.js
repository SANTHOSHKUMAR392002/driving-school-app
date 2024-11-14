import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import "./motorwaypage.css"
import picnic from "../image/picnic.png"
import cafeteria from "../image/cafeteria.png"
import restaurant from "../image/Restaurant.png"
import hotel from "../image/Hotel.png"
import caravansite from "../image/cafeteria.png"
import school_area from "../image/school area.png"
const Motorwaypage = () => {
    let nav=useNavigate();

    let gotoback=()=>{
        nav("/rootlayout/learn")
    }
  return (
        <div className="motorwaypage-container">
            <div className="motorwaypage-topbar">
            <div className="motorwaypage-icon" onClick={gotoback}><IoIosArrowBack/></div>
                <h1>Motor Road Signs</h1>
            </div>
            <div className="motorwaypage-card-section">
                <div className="motorwaypage-cardi">
                    <h2>Picnic Site</h2>
                    <img src={picnic}/>
                </div>
                <div className="motorwaypage-cardi">
                    <h2>Cafeteria</h2>
                    <img src={cafeteria}/>
                </div>
                <div className="motorwaypage-cardi">
                    <h2>Restaurant</h2>
                    <img src={restaurant}/>
                </div>
                <div className="motorwaypage-cardi">
                    <h2>Hotel</h2>
                    <img src={hotel}/>
                </div>
                <div className="motorwaypage-cardi">
                    <h2>Camping and Caravan Site</h2>
                    <img src={caravansite}/>
                </div>
                <div className="motorwaypage-cardi">
                    <h2>Starting Points For Walks</h2>
                    <img src={school_area}/>
                </div>
            </div>
        </div>
    )
}

export default Motorwaypage
