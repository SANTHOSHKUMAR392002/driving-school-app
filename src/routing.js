import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./Driving_App/firstpage";
import Secondpage from "./Driving_App/secondpage";
import Thirdpage from "./Driving_App/thirdpage.js";
import Fourthpage from "./Driving_App/fourthpage.js";
import Fifthpage from "./Driving_App/fifthpage.js";
import Rootlayout from "./Driving_App/Rootlayout/rootlayout.js";//mainwrapper
import Info from "./Driving_App/screens/info.js";
import Classes from "./Driving_App/screens/classes.js"
import Goal from "./Driving_App/screens/goals.js"
import Learn from "./Driving_App/screens/learn.js"
import Classes_Card from "./Driving_App/screens/classes-cardi.js";
import Car_driver_details from "./Driving_App/screens/car_driver_details.js";
import Applyleavepage from "./Driving_App/screens/applyleavepage.js";
import Warningroadpage from "./Driving_App/screens/warningroadpage.js";
import Motorwaypage from "./Driving_App/screens/motorwaypage.js";
import Mandatory from "./Driving_App/screens/mandatoryroadsigns.js";
import Profile from "./Driving_App/profile/profile.js";
import ListOfTest from "./Driving_App/screens/listoftest.js";
import Testi from "./Driving_App/screens/testi.js";
import PaymentTracking from "./Driving_App/Payment Tracker/payment.js";
// import Classes_Card from "./Driving_App/screens/classes-cardi.js";
let Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"element={<Firstpage/>} />
                <Route path="/secondpage" element={<Secondpage/>}></Route>
                <Route path="/thirdpage" element={<Thirdpage/>}></Route>
                <Route path="/fourthpage" element={<Fourthpage/>}></Route>
                <Route path="/fifthpage" element={<Fifthpage/>}></Route>
                {/* main warpper */}
                <Route path="/rootlayout" element={<Rootlayout/>}>
                <Route path="/rootlayout/info/" element={<Info/>}/>
                <Route path="/rootlayout/info/car_driver_details" element={<Car_driver_details/>}/>
                <Route path="/rootlayout/classes" element={<Classes/>}/>
                <Route path="/rootlayout/classes/card/:id" element={<Classes_Card/>}/>
                <Route path="/rootlayout/classes/card/:id/warningroadpage" element={<Warningroadpage/>}/>
                <Route path="/rootlayout/classes/applyleavepage" element={<Applyleavepage/>}/>
                <Route path="/rootlayout/goal" element={<Goal/>}/>
                <Route path="/rootlayout/learn" element={<Learn/>}/>
                <Route path="/rootlayout/learn/motowaypage" element={<Motorwaypage/>}/> 
                <Route path="/rootlayout/learn/mandatory" element={<Mandatory/>}/>
                <Route path="/rootlayout/learn/listoftest" element={<ListOfTest/>}/>
                <Route path="/rootlayout/learn/listoftest/testi/:id" element={<Testi/>}/>
                <Route path="/rootlayout/profile" element={<Profile/>}/> 
                <Route path="/rootlayout/payment" element={<PaymentTracking/>}/> 
                </Route>
            </Routes>
        </BrowserRouter>
    )



}

export default Routing;