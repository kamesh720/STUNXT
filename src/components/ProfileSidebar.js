import React from "react";
import ProfileData from "../data/ProfileData";
import Time from "./Time";
import dartIMG from "../images/dart_img.svg";
import { IoMdSettings } from "react-icons/io"
import { useNavigate } from "react-router-dom";

const ProfileSidebar = () => {

  let navigate = useNavigate()

  function goToProfilePage() {
    navigate("/profilepage")
  }

  function goToGoalsPage() {
    navigate("/goalspage")
  }


  return (
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: "100%", height: "100vh" }}>
      <div className="pt-2 pb-2">
        <Time />
      </div>
      <div className="d-flex">
        <div className="bg-secondary-subtle" style={{ width: "90%", height: "100vh" }}>
          <div className="container">
            <div className="card bg-white borderWhite mt-3 rounded-3">
              <div className="row pt-4 pb-4" onClick={goToProfilePage}>
                <div className="col-2 ms-2">
                  <img src={ProfileData.userAvatar} alt="userAvatar" style={{ height: "50px", width: "50px" }} />
                </div>
                <div className="col-9">
                  <b>{ProfileData.username}</b>
                  <br />
                  <small className="text-muted">{ProfileData.usertype} @{ProfileData.userID}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-2" style={{ bottom: "0", position: "fixed", width: "90%" }} >

            {/* Achieve your goals */}
            <div className="card borderWhite" onClick={goToGoalsPage}>
              <div className="row pt-4 pb-4">
                <div className="col-3">
                  <img src={dartIMG} alt="dartimage" />
                </div>
                <div className="col-9">
                  <b>Achieve Your Goals</b>
                  <br />
                  <small className="text-muted">Start completing goals and get a new batches and reward points</small>
                </div>
              </div>
            </div>

            {/* Refer and earn */}

            <div className="card borderWhite mt-3">
              <div className="row pt-4 pb-4">
                <div className="col-3">
                  <img src={dartIMG} alt="dartimage" />
                </div>
                <div className="col-9">
                  <b>Refer and earn</b>
                  <br />
                  <small className="text-muted">Refer your friends and get rewards worth 2000rs</small>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className=" card borerWhite mt-3">
              <div className="row pt-2 pb-2 ps-2">
                <span><IoMdSettings size="22px" /> <b>Settings</b></span>
              </div>
            </div>

            {/* version */}

            <div className="text-center mt-4">
              <b>Version 1.0.1</b>
            </div>
          </div>

        </div>
        <div style={{ width: "10%", backgroundColor: "grey" }}>
          <button type="button" className="btn-close mt-2 ms-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
