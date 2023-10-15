import Time from "./Time";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import pageInfo from "../images/Career/page_info.svg";
import AllData from "../data/CareerData";
import savelogo from "../images/Home/savelogo.svg";
import searchIcon from "../images/Career/search.svg";

const Career = () => {
  const index = 4;

  const careerHeader = ["Jobs", "Insights", "Wishlist"];
  const careerCategories = [
    "All",
    "Internships",
    "Freelance",
    "Part Time",
    "Full Time",

  ];
  const [SelectCareerHeader, setSelectCareerHeader] = useState("Jobs");
  const [categories, setCategories] = useState(AllData);
  const [categoryName, setCategoryName] = useState("");

  function changeCareerHeader(ele) {
    setSelectCareerHeader(ele);
  }

  function changeToClickedCategory(category) {
    setCategoryName(category);
    if (category === "All") {
      setCategories(AllData);
    } else {
      let newData = AllData.filter((ele) => {
        return ele.careerCategory === category;
      });
      setCategories(newData);
    }
  }

  useEffect(() => {
    setSelectCareerHeader("Jobs");
    setCategoryName("All");
  }, []);

  return (
    <div className="mainContainer bg-body-secondary card phoneSize">
      <Time />
      <div
        className=" container bg-white pt-3 pb-2"
        style={{ boxShadow: "0px 15px 10px -15px #111" }}
      >
        <div className=" card-fluid d-flex justify-content-between text-center">
          {careerHeader.map((ele, index) => (
            <div key={index}>
              {SelectCareerHeader === ele ? (
                <span
                  className="cursorPointer"
                  style={{ color: "#00d970" }}
                  onClick={() => changeCareerHeader(ele)}
                >
                  <b>{ele}</b>
                </span>
              ) : (
                <span
                  className="cursorPointer"
                  style={{ color: "#00000099" }}
                  onClick={() => changeCareerHeader(ele)}
                >
                  {ele}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* searchinput */}

      {SelectCareerHeader === "Jobs" && (
        <div className="container mt-2">
          <div className="row ps-1">
            <div className="col-9">
              <input
                className="form-control rounded-4 borderWhite text-start"
                placeholder="Search job..."
                style={{
                  width: "300px",
                  height: "60px",
                  borderRadius: "20px",
                  backgroundImage: `url(${searchIcon})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "95%",
                  backgroundPositionY: "center",
                }}
              />
            </div>
            <div className="col-3">
              <div
                className="card rounded-4 borderWhite ms-3"
                style={{ height: "60px", width: "60px" }}
              >
                <img
                  className="m-auto cursorPointer"
                  src={pageInfo}
                  alt="filter logo"
                  style={{ height: "14.23px", width: "16px" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Career categories */}
      {SelectCareerHeader === "Jobs" && (
        <div className="conatiner-fluid mt-4 me-2">
          <div className="d-flex justify-content-center scrollHide no-wrap" style={{ overflow: "auto" }}>
            {careerCategories.map((ele, index) => (
              <div key={index}>
                {categoryName === ele ? (
                  <small
                    className="card ms-3 p-1 cursorPointer"
                    style={{
                      backgroundColor: "#00D9701A",
                      borderColor: "#00d970",
                    }}
                    onClick={() => changeToClickedCategory(ele)}
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
      )}

      {/* all careers job */}

      {SelectCareerHeader === "Jobs" && (
        <div className="container scroll scrollHide">
          <div className="b_100">
            {categories.map((ele, index) => (
              <div
                className="container-fluid bg-white mt-3 cursorPointer"
                key={index}
              >
                <div className="pt-3 pb-3">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={ele.careerImage}
                        alt="careerimage"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <div className="col-8 ps-0">
                      <div className="float-start">
                        <small
                          style={{
                            color:
                              ele.careerCategory === "Internships"
                                ? "#1EB7CD"
                                : ele.careerCategory === "Freelance"
                                  ? "#00D970"
                                  : "#666666",
                          }}
                        >
                          {ele.careerCategory}
                        </small>
                      </div>
                      <div className="float-end">
                        <small>
                          <img src={savelogo} alt="savelogo" />
                        </small>
                      </div>
                      <br />
                      <b>{ele.careerTitle}</b>
                      <br />
                      <small style={{ color: "#666666" }}>
                        {ele.careerOrganization}
                      </small>
                      <br />
                      <small style={{ color: "#666666" }}>
                        {ele.careerLocation}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Navbar index={index} />
    </div>
  );
};
export default Career;
