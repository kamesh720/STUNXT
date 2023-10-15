import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo txt.png";
import logoloader from "../images/s logo.png";
import "./Loader.css";
import Time from "./Time";

const LogoLoader = () => {
  const navigate = useNavigate();


  useEffect(() => {
    // Automatically navigate to the welcome page after 3 seconds (adjust the delay as needed)
    const navigationTimeout = setTimeout(() => {
      navigate("/welcome");
    }, 3000); // 3000 milliseconds (3 seconds)

    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(navigationTimeout);
    };
  }, [navigate]);

  return (
    <div className="mainContainer card phoneSize">
      <Time />
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="loader-container">
        <img src={logoloader} className="loader-logo" alt="logo" />
      </div>
    </div>
  );
};

export default LogoLoader;
