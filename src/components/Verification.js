import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Time from "./Time";
import "./Verification.css"

const Verification = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkPhoneNumber, setCheckPhoneNumber] = useState(false);
  const inputRef = useRef();

  // Removed unnecessary semicolon in the following line
  const dialPad = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    <i className="fa-solid fa-delete-left" style={{ color: "#000000" }}></i>, // Removed semicolon here as well
    0,
    <i className="fa-solid fa-check" style={{ color: "#010204" }}></i>,
  ];

  useEffect(() => {
    setCheckPhoneNumber(false);
  }, []);

  function getPhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  function getOtp() {

    if (phoneNumber.length === 0) {
      alert("Please enter your phone number")
    } else if (phoneNumber && phoneNumber.length < 10) {
      alert(`You have entered only ${phoneNumber.length} digits of your phone number`)
    } else {
      setCheckPhoneNumber(true)
    }
  }

  function editNumber() {
    setCheckPhoneNumber(false);
    inputRef.current.focus();
  }

  function goToOtpPage() {
    navigate("/otp", { state: { phoneNumber } });

  }

  function dialPadToInput(num) {
    if (typeof num === "number") {
      let data = phoneNumber;
      let newData = data.concat(num);
      setPhoneNumber(newData);
    } else if (num.props.className === "fa-solid fa-delete-left") {
      let splitNumber = phoneNumber.split("");
      splitNumber.pop();
      let joinNumber = splitNumber.join("");
      setPhoneNumber(joinNumber);
    } else if (num.props.className === "fa-solid fa-check" && phoneNumber && phoneNumber.length === 10) {
      goToOtpPage()
    }
  }


  return (
    <div className="mainContainer card phoneSize" style={{ backgroundColor: checkPhoneNumber ? "#b3b3b3" : null }}>
      <Time />
      {phoneNumber && phoneNumber.length === 10 && checkPhoneNumber ? (
        <div className="row">
          <div className="col-12">
            <div className="card confirmNumber">
              <div className="card-body text-center">
                <div className="row">
                  <div className="col-12 mt-3">
                    <span>
                      <b>+91 {phoneNumber}</b>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-2">
                    <span className="text-muted">
                      Is this the correct number?
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-2">
                    <span
                      className="btn"
                      onClick={editNumber}
                      style={{ color: "#00d970" }}
                    >
                      <b>Edit</b>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-2">
                    <button
                      className="btn w-100 rounded-5 p-3"
                      style={{ backgroundColor: "#00d970", color: "white" }}
                      onClick={goToOtpPage}
                    >
                      <b>Continue</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div style={{ backgroundColor: checkPhoneNumber ? "#b3b3b3" : null }}>
        <div className="mt-5">
          <p className="text-center" style={{ color: "#4d4d4d" }}>
            <b>Phone number</b>
          </p>
          <p className="text-center" style={{ color: "#636363" }}>
            Please confirm your country code and enter your phone number
          </p>
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-2">
              <span>
                <input
                  className="form-control phoneNumber"
                  value="+91"
                  style={{
                    width: "52px",
                    height: "60px",
                    backgroundColor: checkPhoneNumber ? "#b3b3b3" : null,
                    borderColor: checkPhoneNumber
                      ? "#00d970"
                      : phoneNumber && phoneNumber.length === 10
                        ? "#00d970"
                        : null,

                  }}
                  readOnly
                // Use readOnly instead of placeholder for static text
                />
              </span>
            </div>
            <div className="col-10">
              <div>
                {phoneNumber ? (
                  <small
                    className="inputNumberSuccess"
                    style={{
                      backgroundColor: checkPhoneNumber ? "#b3b3b3" : null,
                      color: checkPhoneNumber ? "#636363" : null,
                    }}
                  >
                    Phone number
                  </small>
                ) : null}
                <input
                  className="form-control phoneNumber"
                  ref={inputRef}
                  maxLength="10"
                  type="tel" // Use type "tel" for phone numbers
                  placeholder="Phone number"
                  style={{
                    height: "60px",
                    backgroundColor: checkPhoneNumber ? "#b3b3b3" : null,
                    borderColor: checkPhoneNumber
                      ? "#00d970"
                      : phoneNumber && phoneNumber.length === 10
                        ? "#00d970"
                        : null,
                  }}
                  onChange={getPhoneNumber}
                  value={phoneNumber}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <small className="text-muted text-start">
              We'll send you an OTP by SMS to confirm your mobile number
            </small>
          </div>
          <div className="verificationFooter">
            <div className="float-start">
              <span style={{ color: "#636363" }}>
                Having trouble logging in?
              </span>
              <p style={{ color: "#00d970" }}>Get Help</p>
            </div>
            {phoneNumber && phoneNumber.length === 10 ? (
              <div className="float-end me-4">
                <span
                  className="cursorPointer"
                  style={{ color: "#00d970" }}
                  onClick={getOtp}
                >
                  <i className="fa-solid fa-circle-arrow-right fa-2xl"></i>
                </span>
              </div>
            ) : (
              <div className="float-end me-4">
                <span className="text-secondary" onClick={getOtp}>
                  <i className="fa-solid fa-circle-arrow-right fa-2xl"></i>
                </span>
              </div>
            )}
          </div>
        </div>


        {/* dialpad display */}
        {/* <div className="container dialpad p-3 mb-3 ms-2">
          {dialPad.map((ele, index) => (
            <button
              key={index}
              className="btn rounded-5 border-0 dialPadNumbers"
              style={{
                backgroundColor: checkPhoneNumber ? "#837f7f" : "#F9F9F9"
              }}
              onClick={() => dialPadToInput(ele)}
            >
              {ele}
            </button>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Verification;