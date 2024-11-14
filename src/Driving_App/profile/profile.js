import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import profileimg from "../image/profile.webp"
import setting from "../image/setting.png"
import wallet from "../image/wallet.png"
import request from "../image/request.png"
import about from "../image/about.png"
import help from "../image/help.png"
import changelan from "../image/change_lan.png"
import darkmode from "../image/dark.png"
import notification from "../image/notification.png"
import rateapp from "../image/rate_app.png"
import privacy from "../image/privacy.png"
import terms from "../image/terms.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import "./profile.css"
import settingcar from "../image/setting car img.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Profile=()=>{
    const [bool,setbool]=useState(false);
    const [active,setActive] = useState()

    const on=(val)=>{
        setbool(true)
        setActive(val)
    }

    const nav=useNavigate()

    const backtoinfo=()=>{
        nav("/rootlayout/info")
    }

    return(
        <div className="profile-container">
            <div className="profile-section">
                <div className="profile-topbar">
                    <div className="profile-icon" onClick={backtoinfo}><IoIosArrowBack/></div>
                    <h1>Profile</h1>
                </div><br/><br/>
                <div className="profile-card">
                    <img src={profileimg}></img>
                    <div className="profile-card-name">
                        <h3>Marshal.J</h3>
                        <br></br>
                        <h3>Personal info</h3>
                    </div>
                    <div  className="profile-card-class">
                        <h3>05/15</h3>
                        <br/>
                        <h3>Classes</h3>
                    </div>
                    <MdArrowForwardIos/>
                </div><br/><br/>
                <div className="profile-setting">
                    <div className="profile-setting-panel">
                        <div className="profile-setting-card">
                            <div className="profile-setting-cardi" onClick={()=>on('setting')}>
                                <img src={setting}></img>
                                <h3 >Setting</h3>
                                <MdKeyboardArrowRight/>
                            </div>
                            <div className="profile-underline"></div>
                            <div className="profile-setting-cardi" onClick={()=>on('wallet')}>
                                <img src={wallet}></img>
                               <h3>Wallet</h3>
                                <MdKeyboardArrowRight/>
                            </div>
                            <div className="profile-underline"></div>
                            <div className="profile-setting-cardi" onClick={()=>on('request')}>
                                <img src={request}></img>
                               <h3>Request</h3>
                                <MdKeyboardArrowRight/>
                            </div>
                            <div className="profile-underline"></div>
                            <div className="profile-setting-cardi" onClick={()=>on('about')}>
                                <img src={about}></img>
                                 <h3>About</h3>
                                <MdKeyboardArrowRight/>
                            </div>
                            <div className="profile-underline"></div>
                            <div className="profile-setting-cardi" onClick={()=>on('help')}>
                                <img src={help}></img>
                                <h3>Get Help</h3>
                                <MdKeyboardArrowRight/>
                            </div>
                            <div className="profile-underline"></div>
                        </div>
                    </div>
                    <div className="profile-setting-image-section">
                        <div className={!bool?"profile-setting-image":"profile-setting-images"}>
                            <img src={settingcar}></img>
                        </div>
                        <div className={active == "setting" ? "profile-setting-card-section" : "profile-setting-card-sections"}>
                            <div className="setting-section-cardi1">
                                <div className="setting-cardi">
                                    <img src={changelan}></img>
                                    <h3>Change Language</h3>
                                    <MdKeyboardArrowRight/>
                                </div>
                                <div className="setting-underline"></div>
                                <div className="setting-cardi">
                                    <img src={darkmode}></img>
                                    <h3>Dark ModeNotification</h3>
                                    <MdKeyboardArrowRight/>
                                </div>
                                <div className="setting-underline"></div>
                                <div className="setting-cardi">
                                    <img src={notification}></img>
                                    <h3>Notification</h3>
                                    <MdKeyboardArrowRight/>
                                </div>
                                <div className="setting-underline"></div>
                            </div>
                            {/* card1 is over */}
                            <div className="setting-section-Cardi2">
                                <div className="setting-Cardi2">
                                    <img src={rateapp}></img>
                                    <h3>Rate App</h3>
                                    <MdKeyboardArrowRight/>
                                </div>
                                <div className="setting-underline"></div>
                                <div className="setting-Cardi2">
                                    <img src={privacy}></img>
                                    <h3>Privacy Policy</h3>
                                    <MdKeyboardArrowRight/>
                                </div>
                                <div className="setting-underline"></div>
                                <div className="setting-Cardi2">
                                    <img src={terms}></img>
                                    <h3>Terms & Conditions</h3>
                                    <MdKeyboardArrowRight/>
                                </div>
                                <div className="setting-underline"></div>
                            </div>
                            {/* card2 is over */}
                        </div>
                        <div className={active =="wallet"?"wallet-section":"wallet-sections"}>
                            <div className="wallet-card">
                                <div className="wallet-s1">
                                    <h1>Amount</h1>
                                    <h1>$ 0</h1>
                                    <h3>Not Pay</h3>
                                </div>
                                <div className="wallet-s2">
                                    <h3>Type 4 Wheeler</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;