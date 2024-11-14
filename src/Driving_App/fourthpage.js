import React from "react";
import image1 from "./image/secondpage.jpg"
import "./fourthpage.css"
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

let Fourthpage=()=>{


    let nav=useNavigate();

    let fifthpage=()=>{
        nav("/fifthpage")
        
    }

    return(
        <div className="fourthpage">
            <div className="fourthpage-img-section">
                <img className="fourthpage-img" src={image1}></img>
            </div>
            <div className="fourthpage-txts-section">
                <div className="fourthpage-headings-section">
                    <h2>Welcome To You<br/> Driving School</h2>
                </div>
                <div className="fourthpage-contents-section">
                    <h4>GPS aids in calculating vehicle arrivals and kilometers during driving practice.</h4>
                </div>
            </div>
            <div>
                <div className="fourthpage-leftside">
                    <div>
                        <button className="fourthpage-backbutton"></button>
                    </div>
                    <div>
                        <button className="fourthpage-frontbutton" onClick={fifthpage}><FaArrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fourthpage;