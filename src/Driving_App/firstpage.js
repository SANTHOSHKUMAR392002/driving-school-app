import React from "react";
import image1 from "./image/firstpageimg.jpg"
import "./firstpage.css"
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

let Firstpage=()=>{


    let nav=useNavigate();

    let secondpage=()=>{
        nav("/fourthpage")
        
    }

    return(
        <div className="firstpage">
            <div className="firstpage-img-section">
                <img className="firstpage-img" src={image1}></img>
            </div>
            <div className="firstpage-txts-section">
                <div className="firstpage-headings-section">
                    <h2>Welcome To Your<br/> Driving School</h2>
                </div>
                <div className="firstpage-contents-section">
                    <h4>GPS aids in calculating vehicle arrivals and kilometers during driving practice.</h4>
                </div>
            </div>
                <div className="firstpage-leftside">
                    <div>
                        <button className="firstpage-backbutton"></button>
                    </div>
                    <div>
                        <button className="firstpage-frontbutton" onClick={secondpage}><FaArrowRight/></button>
                    </div>
                </div>
        </div>
    )
}
export default Firstpage;