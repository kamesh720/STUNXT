import { useNavigate } from "react-router-dom";
import Time from "./Time";
import girlchat from "../images/74908-girl-chatting-with-online-friends.png";

const Agreepage = () => {
  const navigate = useNavigate();

  function goToVerificationPage() {
    navigate("/verification");
  }

  return (
    <div className="mainContainer card phoneSize">
      <Time />
      <div className="container bg-body-tertiary welcomeBody">
        <img
          className="img-fluid mx-auto d-block agreeWelcomeImage"
          alt="logo"
          src={girlchat}
        />
        <div className="text-center mt-5">
          <h5 className="welcomeImage text-secondary">
            <b>Welcome to STUNXT</b>
          </h5>
          <p className="mt-3">
            Read Our Privacy Policy. Tap "Agree & Continue" to accept the Terms
            of Service.{" "}
          </p>
        </div>

        <div className="mt-5">
          <button
            className="btn w-100 mb-5 agreeContinueBtn rounded-5 p-3"
            onClick={goToVerificationPage}
          >
            <b>Agree & Continue</b>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Agreepage;
