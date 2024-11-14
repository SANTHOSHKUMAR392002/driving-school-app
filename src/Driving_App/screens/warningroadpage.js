import anyotherdanger from "../image/anyotherdanger.png"
import menatwork from "../image/Men at work.png"
import minor_cross from "../image/minor cross road.png"
import watchforfaliing_rocks from "../image/watch for falling rocks.png"
import hump_bridge from "../image/hump bridge.png"
import carriageway from "../image/carriageway (2).png"
import { IoIosArrowBack } from "react-icons/io";
import uneven from "../image/un-even.jpg"
import "./warningroadpage.css"
import { useNavigate } from "react-router-dom"
const Warningroadpage=()=>{

    let nav=useNavigate()

    let gotoback=()=>{
        nav("/rootlayout/learn")
    }
    return(
        <div className="warningroad-container">
            <div className="warningroad-topbar">
            <div className="warningroad-icon" onClick={gotoback}><IoIosArrowBack/></div>
                <h1>Warning Road Signals</h1>
            </div>
            <div className="warningroad-card-section">
                <div className="warningroad-cardi">
                    <h2>Any Other Danger</h2>
                    <img src={anyotherdanger}/>
                </div>
                <div className="warningroad-cardi">
                    <h2>Carriageway</h2>
                    <img src={carriageway}/>
                </div>
                <div className="warningroad-cardi">
                    <h2>Men at Work</h2>
                    <img src={menatwork}/>
                </div>
                <div className="warningroad-cardi">
                    <h2>Minor cross road</h2>
                    <img src={minor_cross}/>
                </div>
                <div className="warningroad-cardi">
                    <h2>Hump bridge</h2>
                    <img src={hump_bridge}/>
                </div>
                <div className="warningroad-cardi">
                    <h2>Watch for falling rocks</h2>
                    <img src={watchforfaliing_rocks}/>
                </div>
                <div className="warningroad-cardi">
                    <h2>un even road</h2>
                    <img src={uneven}/>
                </div>
            </div>
        </div>
    )
}

export default Warningroadpage;
