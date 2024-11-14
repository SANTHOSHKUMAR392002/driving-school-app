import React from 'react'
import carimg from "../image/car.png"
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "./info.css"
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
const Info = () => {
  const [isOpen,setIsOpen]=useOutletContext();

  const nav=useNavigate();

  const car_driver_details=()=>{
    nav("/rootlayout/info/car_driver_details")
  }

  return (
    <div className='info-section'>
      <div className={isOpen?'info-container':"info-container-active"}>
        <div className={isOpen?"card-info-section":"card-info-section activeinfo"}>
          <div className='trainer-card'>
            <div className='leftside-trainer-card'>
              <h3>Trainer</h3><br/>
              <div className='img'></div>
            </div>
            <div className='center-trainer-card'>
              <h2>Gopal</h2>
              <br></br>
              <h4>4.1  (100+) Review</h4>
            </div>
            <div className='rightside-trainer-card'>Suzuki</div>
          </div>
          <div className='leaner-card'>
          <div className='leftside-leaner-card'>
              <h3>Learner</h3><br/>
              <div className='info-img'></div>
            </div>
            <div className='center-leaner-card'>
              <h2>Marshal</h2>
              <br></br>
              <h4>15 Classes</h4>
            </div>
            <div className='rightside-leaner-card'>Payment Method</div>
          </div>
        </div>
        {/* card-section completed */}
        <div className={isOpen?"payment-section":"payment-section-active"}>
          <div className='payment-icon'><FaArrowRight/></div>
          <div className='payment-txt'>See Payment Details</div>
        </div>
        <div className={isOpen?'tasks-summary':"tasks-summary-active"}>
          <div className='tasks-heading'>
            <h3 className='tasks-txt'>Total Tasks Summary</h3>
          </div>
          <div className='tasks-progress'>
            <div className='task-progresss'>
              <h3 className='tasks-h3'>Today Progress</h3>
              <h3>  %68</h3>
              <div className='progress-section'>
                <div className='progress-container'></div>
              </div>
            </div>
            <div className='task-progresss'>
              <h3 className='tasks-h3'> Today Progress</h3>
              <h3>  %68</h3>
              <div className='progress-section'>
                <div className='progress-container'></div>
            </div>
            </div>
          </div>
          <div className='tasks-icon'><MdArrowOutward/></div>
        </div>
        {/* tasks summary is over */}
        <div className='info-image-section'>
          <img src={carimg} className='info-image' onClick={car_driver_details}></img>
        </div>
        <div className='info-image-txt'>
          <h2 className='image-heading'>Your Driver Car</h2>
          <div className='info-icon'>See All<MdArrowForwardIos/></div>
        </div>
      </div>
    </div>
  )
}

export default Info

