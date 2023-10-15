import { useNavigate } from "react-router-dom";
import Time from "./Time";
import girlchat from "../images/74908-girl-chatting-with-online-friends.png";
import "./Welcome.css"

const Welcomee2 = () => {
  const navigate = useNavigate();

  function goToNextPage() {
    navigate("/welcome3");
  }

  function goToPreviousPage() {
    navigate("/welcome");
  }

  function skipWelcomePage() {
    navigate("/verification")
  }

  return (
    <div className="mainContainer card phoneSize">
      <Time />
      <div className="container bg-body-tertiary welcomeBody">
        <p className="cursorPointer mt-5" onClick={goToPreviousPage}>
          <i
            className="fa-solid fa-arrow-left"
            style={{ color: "#000000" }}
          ></i>
        </p>
        <img
          className="img-fluid mx-auto d-block welcomeImage"
          alt="logo"
          src={girlchat}
        />
        <div className="text-center mt-5">
          <h5 className="welcomeImage text-secondary">
            <b>Sample heading 2</b>
          </h5>
          <p className="mt-3">Sample text for onboarding screen</p>
        </div>
        <div className="text-center mt-5">
          <span className="m-2">
            <i
              className="fa-solid fa-circle fa-2xs"
              style={{ color: "#e6e6e6" }}
            ></i>
          </span>
          <span className="m-2 page">
            <i
              className="fa-solid fa-circle fa-xs"
              style={{ color: "#00d970" }}
            ></i>
          </span>
          <span className="m-2">
            <i
              className="fa-solid fa-circle fa-2xs"
              style={{ color: "#e6e6e6" }}
            ></i>
          </span>
        </div>
        <div className="mt-5">
          <div className="float-start">
            <button className="btn" style={{ color: "#00d970" }} onClick={skipWelcomePage}>
              <b>Skip</b>
            </button>
          </div>
          <div className="float-end mb-5">
            <button
              className="btn"
              style={{ color: "#00d970" }}
              onClick={goToNextPage}
            >
              <i className="fa-solid fa-circle-arrow-right fa-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcomee2;
