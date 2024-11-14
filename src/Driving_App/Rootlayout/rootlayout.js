import React, { useEffect, useState } from 'react'
import Navbar from "../sidenavbar/Navbar.js"
import { Outlet } from 'react-router-dom'
import Topnavbar from '../Navbar/Topnavbar.js'
import "./rootlayout.css"
// import { IoStopwatch } from 'react-icons/io5'

const Rootlayout = (data) => {
  const [isOpen, setIsOpen] = useState(true);

  // const [path,setpath]=useState(window.location.pathname)
  
  console.log(data.phone)

  // let isOpens="sk"

    useEffect(() => {
        const windowSizeHandler = () => {
            if(window.innerWidth<768){
                setIsOpen(false)
            }   
        };
        windowSizeHandler()
        window.addEventListener("resize", windowSizeHandler);
        return () => {
        window.removeEventListener("resize", windowSizeHandler);
        };
       
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };

  return (
    <div>
     <section >
     <Navbar isOpen={isOpen} />
     <Topnavbar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
     <div className={!isOpen?"main-wrap activewrap":"main-wrap"}>
      <Outlet context={[isOpen,setIsOpen]}/>
     </div>
     </section>
    </div>
  )
}

export default Rootlayout;
