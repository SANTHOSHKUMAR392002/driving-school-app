import "./applyleavepage.css"
import cancel from "../image/cancelled (1) 1.png"
let Applyleavepage=()=>{

    const date=new Date();
    const day=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
    return(
        <div className="applyleave-section">
            <div className="applyleave-container">
                <div className="applyleave-body">
                    <div className="applyleave-cancel">
                        <div className="applyleave-cancel-icon"><img src={cancel}></img></div>
                        <div className="applyleave-heading"><h2>Class Cancelled</h2></div>
                        <div className="applyleave-time">
                        <div>{date.getHours()}:{date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes()}</div>|<div>{date.getDate()}  {day[date.getDay()]}  {date.getFullYear()}</div>
                        </div>
                    </div>
                    <div className="applyleave-location-section">
                        <div className="applyleave-location-drive">
                            <div className="applyleave-button">
                                <button>Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Applyleavepage;