import React, { useState } from "react";
import axios from "axios";
import image3 from "./image/image3.webp";
import "./fifthpage.css";
import { useNavigate } from "react-router-dom";

const Fifthpage = () => {
  const [phonenumber, setphonenumber] = useState("");
  const [otp, setotp] = useState("");
  const [bool, setbool] = useState(false);
  const [submit, setsubmit] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // Track if OTP was sent

  let nav = useNavigate();

  const nextpage = () => {
    axios.post("http://localhost:8000/api/verify_otp/", {
        phoneNumber: phonenumber,
        otp: otp,
      })
      .then((response) => {
        if (response.data.success) {
          nav("/rootlayout/info");
        } else {
          alert("Invalid OTP. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        alert("OTP verification failed. Please try again.");
      });
  };

  const handleGetOtp = () => {
    axios.post("http://localhost:8000/api/send_otp/", {
        phoneNumber: phonenumber,
      })
  .then((response) => {
    console.log(response.data)
    if (response.data.success) {
      setOtpSent(true);
      alert("OTP sent successfully!");
    } else {
      alert("Failed to send OTP. Please try again.");
    }
  })
  .catch((error) => {
    console.error("Error sending OTP:", error);
    alert("Failed to send OTP. Please try again.");
  });
  };

  const change = (event) => {
    setphonenumber(event.target.value);
    if (event.target.value.length === 10) {
      setbool(true);
    } else {
      setbool(false);
    }
  };

  const otpchange = (e) => {
    setotp(e.target.value);
    if (e.target.value.length === 4) {
      setsubmit(true);
    } else {
      setsubmit(false);
    }
  };

  return (
    <>
      <div className="fifth-section">
        <div className="fifthpage-container">
          <div className="fifthpage-image-section">
            <img src={image3} alt="Background" />
          </div>
          <div className="fiftpage-txt-container">
            {/* Fifthpage left side container */}
            <div className="fifthpage-leftside">
              <div className="fifthpage-heading">
                <h1>Welcomes You</h1>
              </div>
              <div className="phone-input">
                <input
                  type="text"
                  placeholder="Enter Your 10 Digit Mobile Number"
                  name="phonenumber"
                  maxLength={10}
                  onChange={change}
                />
                {bool ? (
                  <button className="otpt" onClick={handleGetOtp}>
                    Get OTP
                  </button>
                ) : (
                  <button className="otpf" disabled>
                    Get OTP
                  </button>
                )}
              </div>
              {!bool && (
                <p style={{ color: "red" }}>Please Enter The Phone Number</p>
              )}
            </div>

            {/* Fifthpage right side container */}
            <div className="fifthpage-rightside">
              <div className="fifthpage-heading2">
                <h1>Enter verification code</h1>
              </div>
              <h4>We have sent you a 4 digit verification code to</h4>
              {!bool ? (
                <h4>+91 * * * * * * * * *</h4>
              ) : (
                <h4>+91 {phonenumber}</h4>
              )}
              <div className="fifthpage-second-input">
                <input
                  type="text"
                  name="input2"
                  value={otp}
                  onChange={otpchange}
                  className="input2"
                  maxLength={4}
                />
                <h4>
                  I agree to app name <u>Terms of use</u>
                </h4>
              </div>
              {submit ? (
                <button className="submits" onClick={nextpage}>
                  <h4>Verify & Login</h4>
                </button>
              ) : (
                <button className="submit" onClick={nextpage} disabled>
                  <h4>Verify & Login</h4>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fifthpage;
