import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { useNavigate, useLocation } from "react-router-dom";
import Time from "./Time";
import { generateOTP, validateOTP } from "./otpUtils";
import "./OtpPage.css"

const Otppage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { phoneNumber } = location.state || {};


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
        <i className="fa-solid fa-delete-left" style={{ color: "#000000" }}></i>, // Removed the unnecessary semicolon
        0,
        <i className="fa-solid fa-check" style={{ color: "#010204" }}></i>,

        // ... your dialPad configuration
    ];


    const [resendOtp, setResendOtp] = useState(15);
    const [otp, setOtp] = useState("");
    const [generatedOTP, setGeneratedOTP] = useState("");

    useEffect(() => {
        setGeneratedOTP(generateOTP());
    }, []);

    useEffect(() => {
        if (resendOtp === 0) {
            clearTimeout();
        } else {
            const timer = setTimeout(() => {
                setResendOtp(resendOtp - 1);
            }, 1000);
            return () => clearTimeout(timer); // Clear the timer on unmount
        }
    }, [resendOtp]);

    function goToPersonalDetailsPage() {
        if (validateOTP(otp, generatedOTP)) {
            navigate("/personaldetailspage");
        } else {
            alert("Incorrect OTP. Please try again.");
        }
    }

    function dialPadToInput(num) {
        if (typeof num === "number") {
            let data = otp;
            let newData = data.concat(num);
            setOtp(newData);
        } else if (num.props.className === "fa-solid fa-delete-left") {
            let splitNumber = otp.split("");
            splitNumber.pop();
            let joinNumber = splitNumber.join("");
            setOtp(joinNumber);
        } else if (num.props.className === "fa-solid fa-check") {
            goToPersonalDetailsPage()
        }
    }

    function reFreshPage() {
        window.location.reload()
    }


    return (
        <div className="mainContainer card phoneSize">
            <Time />
            <div className="container mt-5 text-center">
                <b style={{ color: "#4d4d4d" }}>Enter Code</b>
                <p className="mt-2" style={{ color: "#636363" }}>
                    Enter the 4-digit code sent to your phone number{" "}
                    <b>+91 {phoneNumber}</b>
                </p>
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-center">
                            <OtpInput
                                inputStyle={{
                                    width: "66px",
                                    height: "62px",
                                    marginLeft: "10px",
                                    alignItems: "center",
                                    borderRadius: "10px",
                                    border: "1px solid #636363",
                                    className: "sk",
                                    borderColor: otp === generatedOTP ? "#00d970" : "#636363",
                                }}
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                renderSeparator={<span> </span>}
                                renderInput={(props) => <input {...props} />}
                            />
                        </div>
                    </div>
                </div>
                {/* Display the generated OTP below the input field */}
                <div className="row mt-3">
                    <div className="col-12">
                        {generatedOTP && (
                            <p style={{ color: "#00d970" }}>Generated OTP: {generatedOTP}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="container otpVerificationFooter">
                <div className="float-start">
                    <span style={{ color: "#636363" }}>Not received OTP?</span>
                    {resendOtp === 0 ? (
                        <p className="cursorPointer" style={{ color: "#00d970" }} onClick={reFreshPage}>
                            Resend
                        </p>
                    ) : (
                        <p style={{ color: "#00d970" }}>Resend ({resendOtp} Sec)</p>
                    )}
                </div>
                {otp && otp.length === 4 ? (
                    <div className="float-end">
                        <span
                            className="cursorPointer"
                            style={{ color: "#00d970" }}
                            onClick={goToPersonalDetailsPage}
                        >
                            <i className="fa-solid fa-circle-arrow-right fa-2xl"></i>
                        </span>
                    </div>
                ) : (
                    <div className="float-end">
                        <span className="text-secondary">
                            <i className="fa-solid fa-circle-arrow-right fa-2xl"></i>
                        </span>
                    </div>
                )}
            </div>

            {/* Dialpad display */}
            {/* <div className="container dialpad mt-2 mb-5 ms-2">
                {dialPad.map((ele, index) => (
                    <button
                        key={index}
                        className="btn border-0 rounded-5  dialPadOtpPage"
                        style={{
                            backgroundColor: "#F9F9F9",

                        }}
                        onClick={() => dialPadToInput(ele)}
                    >
                        {ele}
                    </button>
                ))}
            </div> */}
        </div>
    );
};

export default Otppage;
