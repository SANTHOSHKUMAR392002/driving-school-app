import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import "./testi.css"
const Testi = () => {
    const {id}=useParams()

    const nav =useNavigate()

    const gotobacktest=()=>{
        nav("/rootlayout/learn/listoftest")
    }

  return (
    <div className='testi-container'>
        <div className="testi-topbar">
            <div className="testi-icon" onClick={gotobacktest}><IoIosArrowBack/></div>
                <h1>Test {id}</h1>
        </div>
        <div className='testi-question-section'>
        <div className='testi-question'>
            <h3>Q. You are involved in a collision while you’re driving. 
            What is the first think you must do?</h3>
        </div>
        </div>
        <div className='testi-choice-section'>
            <div className='testi-choice'>
                <div><b>A.</b> Call you insurance company.</div>
            </div>
            <div className='testi-choice'>
                <div><b>B.</b> Call you insurance company.</div>
            </div>
            <div className='testi-choice'>
                <div><b>C.</b> Call you insurance company.</div>
            </div>
            <div className='testi-choice'>
                <div><b>D.</b> Call you insurance company.</div>
            </div>
        </div>
    </div>
  )
}

export default Testi
