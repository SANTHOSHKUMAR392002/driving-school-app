import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let Thirdpage=()=>{
    let nav=useNavigate();

    let nextpage=useEffect(()=>{
        setTimeout(()=>{
            nav("/fourthpage")
        },400)
    },[])
    return(
        <>
        <div onChange={nextpage}></div>
        </>
    )
}
export default Thirdpage;