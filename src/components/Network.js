import Time from "./Time";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import refreshlogo from "../images/Home/refreshlogo.svg";
import friendList from "../data/networkdata/friends";
import RequestList from "./RequestList"; // component
import SuggestList from "./SuggestList";
import ContactList from "./ContactList";


const Network = () => {
  const index = 3;


  const networkHeader = ["Friends", "Requests", "Suggested", "Contacts"];

  const [selectNetworkHeader, setSelectNetworkHeader] = useState("");

  function changeNetworkHeader(ele) {
    setSelectNetworkHeader(ele);
  }

  useEffect(() => {
    setSelectNetworkHeader("Friends");
  }, []);


  return (
    <div className="mainContainer bg-body-secondary card  phoneSize">
      <Time />

      {/* NetworkHeader */}
      <div
        className=" container-fluid bg-white pt-3 pb-2"
        style={{ boxShadow: "0px 15px 10px -15px #111" }}
      >
        <div className=" card-fluid d-flex justify-content-around text-center">
          {networkHeader.map((ele, index) => (
            <div key={index}>
              {selectNetworkHeader === ele ? (
                <span
                  className="cursorPointer"
                  style={{ color: "#00d970" }}
                  onClick={() => changeNetworkHeader(ele)}
                >
                  <b>{ele}</b>
                </span>
              ) : (
                <span
                  className="cursorPointer"
                  style={{ color: "#00000099" }}
                  onClick={() => changeNetworkHeader(ele)}
                >
                  {ele}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* searchinput */}
      <div className="container mt-4">
        <div className="row ps-1">
          <div className="col-9">
            <input
              className="form-control rounded-4 borderWhite text-start"
              placeholder="Search by name..."
              style={{ height: "60px", paddingRight: "20px" }}
            />
          </div>
          <div className="col-3">
            <div
              className="card rounded-4 borderWhite ms-3"
              style={{ height: "60px", width: "60px" }}
            >
              <img
                className="m-auto cursorPointer"
                src={refreshlogo}
                alt="filter logo"
                style={{ height: "24px", width: "24px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* networkList */}

      <div className="container scroll scrollHide">
        <div className="b_100">
          {selectNetworkHeader === "Friends" ? (
            <div>
              {friendList.map((ele, index) => (
                <div
                  className="container card bg-white borderWhite mt-3 rounded-4"
                  style={{ height: "90px" }}
                  key={index}
                >
                  <div className="pt-3 pb-3">
                    <div className="row">
                      <div className="col-2">
                        <img
                          className=""
                          src={ele.userImage}
                          alt="userimage"
                          style={{ height: "50px", width: "50px" }}
                        />
                      </div>
                      <div className="col-5">
                        <b>{ele.userName}</b>
                        <br />
                        <small>{ele.userCollege}</small>
                      </div>
                      <div className="col-5 mt-2 text-end">
                        <button className="wishNowBtn" >
                          <small>Message</small>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : selectNetworkHeader === "Requests" ? (
            <RequestList />
          ) : selectNetworkHeader === "Suggested" ? (
            <SuggestList />
          ) : (
            <ContactList />
          )}
        </div>
      </div>
      <Navbar index={index} />
    </div>
  );
};
export default Network;
