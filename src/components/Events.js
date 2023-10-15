import Time from "./Time";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import filterlogo from "../images/Home/filterlogo.svg";
import savelogo from "../images/Home/savelogo.svg";
import AllData from "../data/eventsdata/AllEvent";
import trendingevents from "../data/eventsdata/Trendingevents";

const Events = () => {
  const index = 2;
  const navigate = useNavigate();

  const eventHeader = ["Events", "Registered", "Attended", "Wishlist"];
  const eventCategories = [
    "All",
    "Sports",
    "Dance",
    "Science",
    "Singing",
    "Exhibition",
  ];
  const [selectEventHeader, setSelectEventHeader] = useState("");
  const [categories, setCategories] = useState(AllData);
  const [categoryName, setCategoryName] = useState("");

  function changeEventHeader(ele) {
    setSelectEventHeader(ele);
  }

  function changeToClickedCategory(category) {
    setCategoryName(category);
    if (category === "All") {
      setCategories(AllData);
    } else {
      let newData = AllData.filter((ele) => {
        return ele.eventCategory === category;
      });
      setCategories(newData);
    }
  }

  useEffect(() => {
    setSelectEventHeader("Events");
    setCategoryName("All");
  }, []);

  // navigate and pass the element data to navigated page
  function gotoeventpage(ele) {
    navigate("/eventdetailspage", { state: { ele } });
  }

  return (
    <div className="mainContainer bg-body-secondary card phoneSize">
      <Time />

      {/* EventHeader */}
      <div
        className=" container-fluid bg-white pt-3 pb-2"
        style={{ boxShadow: "0px 15px 10px -15px #111" }}
      >
        <div className=" card-fluid d-flex justify-content-around text-center">
          {eventHeader.map((ele, index) => (
            <div key={index}>
              {selectEventHeader === ele ? (
                <span
                  className="cursorPointer"
                  style={{ color: "#00d970" }}
                  onClick={() => changeEventHeader(ele)}
                >
                  <b>{ele}</b>
                </span>
              ) : (
                <span
                  className="cursorPointer"
                  style={{ color: "#00000099" }}
                  onClick={() => changeEventHeader(ele)}
                >
                  {ele}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Search input and filter icon */}
      <div className="container mt-4">
        <div className="row ms-1">
          <div className="col-9">

            <input
              className="form-control rounded-4 borderWhite text-start"
              placeholder="Search State here..."
              style={{ height: "60px", paddingRight: "20px" }}

            />
            {/* <GrSearch style={{ marginTop: "-85px", marginLeft: "90%" }} /> */}
          </div>
          <div className="col-3">
            <div
              className="card rounded-4 borderWhite"
              style={{ height: "60px", width: "60px" }}
            >
              <img
                className="m-auto cursorPointer"
                src={filterlogo}
                alt="filter logo"
                style={{ height: "24px", width: "24px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Event categories */}
      <div className="conatiner mt-4 me-2">
        <div className="container d-flex scrollHide no-wrap scroll">
          {eventCategories.map((ele, index) => (
            <div key={index}>
              {categoryName === ele ? (
                <small
                  className="card ms-3 p-1 cursorPointer"
                  style={{
                    backgroundColor: "#00D9701A",
                    borderColor: "#00d970",
                  }} onClick={() => changeToClickedCategory(ele)}
                >
                  {ele}
                </small>
              ) : (
                <small
                  className="card ms-3 p-1 borderWhite cursorPointer"
                  onClick={() => changeToClickedCategory(ele)}
                >
                  {ele}
                </small>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className=" scrollHide" style={{ overflow: "scroll" }}>
        {/* Trending Events */}
        <div className="container mt-4">
          <b className="ms-3">Trending Events</b>
          <div className="mt-3 d-flex scrollHide" style={{ overflow: "auto" }}>
            {trendingevents.map((ele, index) => (
              <img
                key={index}
                className="ms-3 cursorPointer"
                src={ele.eventImage}
                alt="event"
              />
            ))}
          </div>
        </div>

        {/* all events */}
        <div className="container">
          <div className="b_100">
            {categories.map((ele, index) => (
              <div
                className="container-fluid bg-white mt-3 cursorPointer"
                key={index}
                onClick={() => gotoeventpage(ele)}
              >
                <div className="pt-3 pb-3">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={ele.eventImage}
                        alt="eventimage"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                    <div className="col-8">
                      <div className="float-start">
                        <small
                          style={{
                            color:
                              ele.eventCategory === "Sports"
                                ? "#1EB7CD"
                                : ele.eventCategory === "Dance"
                                  ? "#00D970"
                                  : "#666666",
                          }}>{ele.eventCategory}</small>
                      </div>
                      <div className="float-end">
                        <small>
                          <img src={savelogo} alt="savelogo" />
                        </small>
                      </div>
                      <br />
                      <b>{ele.eventTitle}</b>
                      <br />
                      <small>
                        <i className="fa-regular fa-calendar"></i>{" "}
                        {ele.eventDate}
                      </small>
                      <br />
                      <small>
                        <i className="fa-solid fa-location-dot"></i>{" "}
                        {ele.eventLocation}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navbar index={index} />
    </div>
  );
};
export default Events;
