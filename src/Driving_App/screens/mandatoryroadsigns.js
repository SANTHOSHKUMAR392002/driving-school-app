import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import "./mandatoryroadsign.css"
import dualcar from "../image/dualcar.png"
import rightturn from "../image/rightturn.png"
import noturn from "../image/no u turn.png"
import noentry from "../image/no entry.png"
import usehorn from "../image/use horn.png"
import noleft from "../image/no left turn.png"

const Mandatory = () => {
    let nav=useNavigate();

    let gotoback=()=>{
        nav("/rootlayout/learn")
    }
  return (
        <div className="mandatorypage-container">
            <div className="mandatorypage-topbar">
            <div className="mandatorypage-icon" onClick={gotoback}><IoIosArrowBack/></div>
                <h1>Mandatory Road Signs</h1>
            </div>
            <div className="mandatorypage-card-section">
                <div className="mandatorypage-cardi">
                    <h2>Dual car riageway ahead</h2>
                    <img src={dualcar}/>
                </div>
                <div className="mandatorypage-cardi">
                    <h2>Right turn is prohibited</h2>
                    <img src={rightturn}/>
                </div>
                <div className="mandatorypage-cardi">
                    <h2>No U turn</h2>
                    <img src={noturn}/>
                </div>
                <div className="mandatorypage-cardi">
                    <h2>No entry for motor vehicle</h2>
                    <img src={noentry}/>
                </div>
                <div className="mandatorypage-cardi">
                    <h2>Use of horn prohibited</h2>
                    <img src={usehorn}/>
                </div>
                <div className="mandatorypage-cardi">
                    <h2>No left turn</h2>
                    <img src={noleft}/>
                </div>
            </div>
        </div>
    )
}

export default Mandatory;