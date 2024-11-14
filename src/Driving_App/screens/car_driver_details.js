import { useNavigate } from "react-router-dom";
import "./car_driver_details.css"
import { IoIosArrowBack } from "react-icons/io";
import car from "../image/car.png"
import { FaRegHeart } from "react-icons/fa";
import trainerphoto from "../image/Trainer photo.png"
import { FaPhoneAlt } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";

let  Car_driver_details=()=>{
    const nav=useNavigate();

    const gotoback=()=>{
        nav("/rootlayout/info")
    }

    return(
        <div className="car-driver-container">
            <div className="car-driver-title">
                <div className="car-driver-icon" onClick={gotoback}><IoIosArrowBack/></div>
                <div className="car-driver-heading"><h1>Your Car Driver</h1></div>
            </div>
            <div className="car-driver-image"><img src={car}></img></div>
            <div className="car-driver-contact">
                <div className="car-driver-review">
                    <h2>Suzuki Dzire</h2>
                    <div className="car-driver-review-icon"><FaRegHeart/></div>
                </div><br></br>
                <div style={{paddingLeft:"150px",color:"gray"}}><h3>4.1 [100+ Review]</h3></div>
            </div>

            <h1 style={{paddingLeft:"30px",paddingTop:"20px"}}> Trainer</h1>
            <div className="car-trainer-contact">
                <div className="car-trainer-image"><img src={trainerphoto}/></div>
                <div className="car-trainer-details">
                    <h3>Name : Gopal</h3>
                    <h3>Age : 32</h3>
                </div>
                <div className="car-trainer-calls-icons">
                    <div className="car-trainer-phone"><FaPhoneAlt/></div>
                    <div className="car-trainer-message"><BiMessageAltDetail/></div>
                </div>
            </div>
            <div className="car-driver-info">
                <div className="car-driver-info1">
                    <h1>Car Info</h1>
                    <p>As of my last knowledge update in January 2022, the Maruti Suzuki Swift Dzire VDI is a variant of the Maruti Suzuki Dzire, a popular subcompact sedan produced by Maruti Suzuki in India. Please note that specifications and features may have changed since then, so it's advisable to check the latest information from official sources or dealerships. Here is some general information about the Maruti Suzuki Swift Dzire VDI based on my last update:</p>
                </div>
                <div className="car-driver-info2">
                    <h1>Engine and Performance:</h1>
                    <ul>
                        <li>The Maruti Suzuki Swift Dzire VDI typically comes equipped</li>
                        <li>The Diesel Engine Is Known For Its Fuel Efficiency And Is Designed To Provide A Balance Between Performance And Mileage.</li>
                    </ul>
                    <h1>Features:</h1>
                    <ul>
                        <li>The VDI Variant Usually Offers A Range Of Features, Including Power Steering, Power Windows, Central Locking, Air Conditioning, And A Music System.</li>
                        <li>Safety Features May Include Dual Front Airbags, ABS (Anti- Lock Braking System) With EBD (Electronic Brakeforce Distribution), And More.</li>
                    </ul>
                    <h1>Interior:</h1>
                    <ul>
                        <li>The Interior Is Designed To Be Comfortable And Spacious, Offering Seating For Five Occupants.</li>
                        <li>Depending On The Variant, Features Like A Touchscreen Infotainment System, Rear AC Vents, And Adjustable Driver's Seat May Be Available.</li>
                    </ul>
                    <h1>Exterior:</h1>
                    <ul>
                        <li>The Maruti Suzuki Swift Dzire Typically Features A Stylish And Aerodynamic Design With Signature Elements In Line With The Swift Series.</li>
                        <li>Alloy Wheels, Body-Colored ORVMs (Outside Rear View Mirrors), And Chrome Accents Might Be Part Of The Exterior Design.</li>
                    </ul>
                    <h1>Transmission:</h1>
                    <ul>
                        <li>The VDI Variant May Come With A Manual Transmission.</li>
                    </ul>
                    <h1>Fuel Efficiency:</h1>
                    <ul>
                        <li> Diesel Variants Of The Swift Dzire, Including The VDI, Are Known For Their Good Fuel Efficiency, Making Them Suitable For Long Drives And City Commuting.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Car_driver_details;