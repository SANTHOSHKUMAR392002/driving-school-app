import React, { useEffect } from "react";
import "./secondpage.css"
import { useNavigate } from "react-router-dom";

let Secondpage=()=>{
    let nav=useNavigate();

    let on=useEffect(()=>{
        setTimeout(() => {
            nav("/thirdpage")
        },400);
    },[])///one time refreshing when the page will load....

    return(
       <div>
        <div className="secondpage" onChange={on}></div>
       </div>
    )
}

export default Secondpage;