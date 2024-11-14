import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import driving from "../../driving_app.json"
import  "./classes_card.css"
import { FaPhone } from "react-icons/fa6";
import { PiSeatbeltThin } from "react-icons/pi";
import { TbCarOff } from "react-icons/tb";
import { PiWarning } from "react-icons/pi";
import { GiBarrier } from "react-icons/gi";
import profile from "../image/profile.webp"
import Motorwaypage from "./motorwaypage";

let Classes_Card=()=>{

    const [data,setData]=useState();

    const {id}=useParams();

    console.log(id)

    let nav=useNavigate();

    const applyleavepage=()=>{
        nav("/rootlayout/classes/applyleavepage")
    }
    let warningroadpage=()=>{
        nav("/rootlayout/classes/card/:id/warningroadpage")
    }
    let motorwaypage=()=>{
        nav("/rootlayout/learn/motowaypage")
    }
    let mandatory=()=>{
        nav("/rootlayout/learn/mandatory")
    }

    let listoftest=()=>{
        nav("/rootlayout/learn/listoftest")
    }
    useEffect(()=>{
        let f=driving.class.filter((a)=>{
            return a.id==id 
        })
        setData(f)
    },[id])


    console.log(data)

    return(
        <div>
           { data&& data?.map((item,index)=>{
                return (
                    <div key={index} className="dayi-section">
                        <div className="dayi-container">
                        <div className="day-section">
                            <h1>{item.details[0].title}</h1>
                        </div>
                        <div className="driver-section">
                            <h3>Driver</h3>
                        </div>
                        <div className="driver-info-section">
                            <div className="driver-contact">
                                <div className="driver-img"><img src={profile}/></div>
                                <div className="driver-name">{item.details[0].driver_contact.driver_name}<br/>{item.details[0].driver_contact.driver_review}</div>
                                <div className="driver-phone"><FaPhone/></div>
                            </div>
                            <div className="driver-contact-card2">
                                <div className="driver-card2-heading">
                                    <h3>Today</h3><br/>
                                </div>
                                <div className="driver-card2-time">
                                    <h2>7:45 AM</h2>
                                    <h2>8:45 AM</h2>
                                </div>
                            </div>
                        </div>
                        <div className="learn-target-section">
                            <div className="learn-target-container">
                                <div className="learn-target-card" onClick={listoftest}>
                                    <div className="learn-target-cardt">
                                        <PiSeatbeltThin/>
                                    </div>
                                    <div className="learn-target-cardb">
                                        <h4>List Of Test (20)</h4>
                                    </div>
                                </div>
                                <div className="learn-target-card" onClick={mandatory}>
                                    <div className="learn-target-cardt">
                                    <TbCarOff/>
                                    </div>
                                    <div className="learn-target-cardb">
                                        <h4>Mandatory Road Signs</h4>
                                    </div>
                                </div>
                                <div className="learn-target-card" onClick={warningroadpage}>
                                    <div className="learn-target-cardt">
                                        <PiWarning/>
                                    </div>
                                    <div className="learn-target-cardb">
                                        <h4>Warning Road Sign</h4>
                                    </div>
                                </div>
                                <div className="learn-target-card" onClick={motorwaypage}>
                                    <div className="learn-target-cardt">
                                        < GiBarrier/>
                                    </div>
                                    <div className="learn-target-cardb">
                                        <h4>Motorway Road Sign</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='classes-tracker'>
                        <h2 onClick={applyleavepage}>Apply Leave</h2>
                        <h2>Tracker</h2>
                    </div>
                </div>
                )
            })}






        </div>
    )
}
export default Classes_Card;