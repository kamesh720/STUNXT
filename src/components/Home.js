import Time from "./Time";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";
import { MdVerified } from "react-icons/md"
import upcomingeventlogo from "../images/Home/upcomingevents.svg"
import cake from "../images/Home/cake.svg"
import birthdays from "./Birthdaydata"
import upComingEventsData from "../data/eventsdata/Upcomingeventsdata";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const index = 0

  const data = upComingEventsData.slice(0, 3)
  const navigate = useNavigate()

  const [upComingEvents, setUpComingEvents] = useState(data)
  const [viewAll, setViewAll] = useState(false)


  function viewAllUpComingEvents() {
    setUpComingEvents(upComingEventsData)
    setViewAll(true)
  }

  function viewLessUpcomingEvents() {
    setUpComingEvents(data)
    setViewAll(false)
    // navigate("/events")
  }

  function goToEventDetails(upcomingevents) {
    navigate("/eventdetailspage", { state: { upcomingevents } })
  }


  return (

    <div className="mainContainer bg-body-secondary card phoneSize">
      <Time />
      <MenuBar />

      <div className="container scrollHide scroll">

        {/* verify alert block */}
        <div className="card bg-white mt-3 borderWhite">
          <div className="container row">
            <div className="col-3 mt-3">
              {/* text-sm-md start */}
              <p className="text-center text-sm-start text-md-start" style={{ color: "#4d4d4d" }}>
                <MdVerified size="50px" color="#00d970" />
              </p>
            </div>
            <div className="col-9 mt-2 mb-2 text-sm-start">
              <b>Verify Profile</b>
              <div className="mt-1">
                <small className="text-muted">Join your college club and become a verified user</small>
              </div>
            </div>
          </div>
        </div>

        {/* upcoming events block  */}
        <div className="card bg-white mt-3 borderWhite">
          <div className="container">
            <div className="row">
              <b><img src={upcomingeventlogo} alt="handshakeicon" /> Upcoming Events</b>
              <div className="mt-3">
                {upComingEvents.map((ele, index) => (
                  <div key={index} className="row mb-3 cursorPointer" onClick={() => goToEventDetails(ele)}>
                    <div className="col-3 ">
                      <img src={ele.eventImage} alt="eventbanner" />
                    </div>
                    <div className="col-9 ps-3 pe-0 ">
                      <b>{ele.eventTitle}</b>
                      <br />
                      <small className="text-muted">{ele.eventDate}</small>
                      <br />
                      <small className="text-muted">{ele.eventLocation}</small>
                    </div>
                  </div>
                ))}
                <div className="mt-4 mb-3 text-center">
                  {viewAll ? <b className="appGreen cursorPointer" onClick={viewLessUpcomingEvents}>View Less</b> :
                    <b className="appGreen cursorPointer" onClick={viewAllUpComingEvents}>View all</b>}
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* birthday wishing block */}

        <div className="card bg-white mt-3 borderWhite b_100">
          <div className="container">
            <div className="row pt-2">
              <b><img src={cake} alt="handshakeicon" /> <span className="p-2">Today and upcoming birthdays</span></b>
              <div className="mt-3">
                {birthdays.map((ele, index) => (
                  <div key={index} className="row mb-3">
                    <div className="col-3">
                      <img style={{ borderRadius: "40px" }} src={ele.profile} alt="personprofile" />
                    </div>
                    <div className="col-5 ps-0 mt-1">
                      <b>{ele.name}</b>
                      <br />
                      <small className="text-muted">{ele.birthdayDate}</small>
                    </div>
                    <div className="col-4 mt-2">
                      <button className="wishNowBtn"><small>Wish Now</small></button>
                    </div>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>

      </div>

      <Navbar index={index} />
    </div>
  );


};
export default Home;