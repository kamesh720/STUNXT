import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileData from "../data/ProfileData";
import { MdEdit } from "react-icons/md";
import { HiShare } from "react-icons/hi";
import { LuGraduationCap } from "react-icons/lu";
import { BsPlus } from "react-icons/bs";
import proirityhigh from "../images/Profile/Group 166.svg";
import dartIMG from "../images/dart_img.svg";
import { useState, useEffect } from "react";
import Time from "./Time";
import "./ProfilePage.css";

const ProfilePage = () => {
  let navigate = useNavigate();

  const ProfileCategories = [
    "Post",
    "Experience",
    "Education",
    "Skills",
    "Certification",
  ];

  const [selectProfileCategories, setSelectProfileCategories] =
    useState("Post");
  const [userPost, setUserPost] = useState(ProfileData.userPost || []);

  function changeProfileCategories(ele) {
    setSelectProfileCategories(ele);
  }

  useEffect(() => {
    setSelectProfileCategories("Post");
  }, []);

  function goBack() {
    navigate("/home");
  }

  // To add a new experience form when add icon clicked
  const [userExperiences, setUserExperiences] = useState(
    ProfileData.userExperiences || []
  );
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [newExperience, setNewExperience] = useState({
    expType: "",
    expTitle: "",
    expStartDate: {
      month: "",
      year: "",
    },
    expEndDate: {
      month: "",
      year: "",
    },
    expOrganization: "",
    expLocation: "",
    expImage: null,
  });
  // Function to add a new experience
  const addExperience = () => {
    setShowExperienceForm(true);
  };

  // Function to close the experience form
  const closeExperienceForm = () => {
    setShowExperienceForm(false);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new experience object with the form input values
    const experienceToAdd = {
      expID: userExperiences.length + 1,
      expImage: "./CareerData images/new_experience_img.svg", // Replace with actual image source
      ...newExperience,
    };

    const totalExperience = calculateExperienceTotal(
      newExperience.expStartDate,
      newExperience.expEndDate
    );

    // Update the total experience in the experienceToAdd object
    experienceToAdd.expTotal = totalExperience;

    // Update the userExperiences state and ProfileData
    setUserExperiences([...userExperiences, experienceToAdd]);
    ProfileData.userExperiences = [...userExperiences, experienceToAdd];

    // Close the form and reset the input fields
    setShowExperienceForm(false);
    setNewExperience({
      expType: "",
      expTitle: "",
      expStartDate: {
        month: "",
        year: "",
      },
      expEndDate: {
        month: "",
        year: "",
      },
      expTotal: "",
      expOrganization: "",
      expLocation: "",
      expImage: null,
    });
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setNewExperience({
      ...newExperience,
      expImage: URL.createObjectURL(selectedImage),
    });
  };

  //Function to clculate total experince
  function calculateExperienceTotal(startDate, endDate) {
    const startYear = parseInt(startDate.year, 10);
    const endYear = parseInt(endDate.year, 10);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const startMonthIndex = monthNames.indexOf(startDate.month);
    const endMonthIndex = monthNames.indexOf(endDate.month);

    let totalYears = endYear - startYear;
    let totalMonths = endMonthIndex - startMonthIndex;

    if (totalMonths < 0) {
      totalYears--;
      totalMonths += 12;
    }

    if (totalYears < 0) {
      return "Invalid date range";
    }

    if (totalYears === 0) {
      if (totalMonths === 1) {
        return `${totalMonths} month`;
      } else if (totalMonths > 1) {
        return `${totalMonths} months`;
      } else {
        return "Less than a month";
      }
    } else {
      if (totalMonths === 0) {
        return `${totalYears} years`;
      } else if (totalMonths === 1) {
        return `${totalYears} years ${totalMonths} month`;
      } else {
        return `${totalYears} years ${totalMonths} months`;
      }
    }
  }

  // Function to calculate overall total experience in header section h6
  const calculateTotalExperience = () => {
    let totalYears = 0;
    let totalMonths = 0;

    // Loop through each experience and add its duration to totalYears and totalMonths
    ProfileData.userExperiences.forEach((experience) => {
      const expStartDate = experience.expStartDate;
      const expEndDate = experience.expEndDate;

      const { years, months } = calculateExperienceYearsAndMonths(
        expStartDate,
        expEndDate
      );

      totalYears += years;
      totalMonths += months;
    });

    // Adjust totalMonths to include extra years
    totalYears += Math.floor(totalMonths / 12);
    totalMonths %= 12;

    return `${totalYears} years ${totalMonths} months`;
  };
  const calculateExperienceYearsAndMonths = (startDate, endDate) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const startYear = parseInt(startDate.year, 10);
    const endYear = parseInt(endDate.year, 10);

    const startMonthIndex = monthNames.indexOf(startDate.month);
    const endMonthIndex = monthNames.indexOf(endDate.month);

    let totalYears = endYear - startYear;
    let totalMonths = endMonthIndex - startMonthIndex;

    if (totalMonths < 0) {
      totalYears--;
      totalMonths += 12;
    }

    if (totalYears < 0) {
      return { years: 0, months: 0 }; // Invalid date range
    }

    return { years: totalYears, months: totalMonths };
  };

  return (
    <div
      className="mainContainer card phoneSize"
      style={{ background: "#F9F9F9" }}
    >
      <Time />
      <div
        className="container-fluid bg-white"
        style={{ boxShadow: "0px 15px 10px -15px #111" }}
      >
        <div className="row mb-3">
          <div className="col-12 mt-3">
            <div className="float-start">
              <i
                className="fa-solid fa-arrow-left cursorPointer"
                style={{ color: "#000000" }}
                onClick={goBack}
              ></i>
              <b className="ms-3">Profile</b>
            </div>
            <div className="float-end me-2">
              <b>...</b>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-white rounded-3 mt-2 pb-3"
        // style={{ height: "242px", width: "388px" }}
      >
        <div className="row-3 mb-3 mt-3">
          <div className="col-12">
            <div className="float-start">
              <div
                className="avatar-container"
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={ProfileData.userAvatar}
                  alt="userAvatar"
                  style={{ height: "90px", width: "90px", borderRadius: "50%" }}
                />
                {/* Priority High Icon (Inside Avatar Icon) */}
                <div
                  className="priority-icon"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={proirityhigh}
                    alt="Priority High"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-3 float-end">
              <HiShare
                style={{ height: "20px", width: "30px", marginRight: "10px" }}
              />
              <MdEdit
                style={{ height: "20px", width: "30px", marginLeft: "5px" }}
              />
            </div>
            <div className="row pt-3">
              <b style={{ fontSize: "18px" }}>{ProfileData.username}</b>
              <br />
              <small className="text-muted" style={{ fontSize: "15px" }}>
                {ProfileData.usertype} @{ProfileData.userID}
              </small>
            </div>
          </div>
        </div>
        <br />

        <div>
          <p className="text-muted">
            <i className="fa-solid fa-location-dot"></i>{" "}
            {ProfileData.userLocation}
          </p>

          <div className="">
            <p className="text-muted">
              <LuGraduationCap /> {ProfileData.userEducation}
            </p>
          </div>
        </div>
        <div className="container text-start mt-3 no-wrap">
          <div className="row" style={{ fontSize: "16px", color: "#00D970" }}>
            <div className="col-3">
              <b>{ProfileData.userPosts} Posts</b>
            </div>
            <div className="col">
              <b>{ProfileData.userFollowers} Followers</b>
            </div>
            <div className="col">
              <b>{ProfileData.userFollowing} Following</b>
            </div>
          </div>
        </div>
      </div>

      {/* Achieve your goals */}
      <div className="container-fluid bg-white mt-2 rounded-3">
        <div className="row pt-4 pb-4">
          <div className="col-3">
            <img src={dartIMG} alt="dartimage" />
          </div>
          <div className="col-9">
            <b>Achieve Your Goals</b>
            <br />
            <small className="text-muted">
              Start completing goals and get a new batches and reward points
            </small>
          </div>
        </div>
      </div>

      {/* {categories} */}
      <div className="mb-2">
        <div className="container-fluid d-flex scrollHide no-wrap scroll mt-4 justify-content-around text-center">
          {ProfileCategories.map((ele, index) => (
            <div key={index}>
              {selectProfileCategories === ele ? (
                <small
                  className="card p-1 cursorPointer"
                  style={{
                    backgroundColor: "#00D9701A",
                    borderColor: "#00d970",
                  }}
                  onClick={() => changeProfileCategories(ele)}
                >
                  {ele}
                </small>
              ) : (
                <small
                  className="card p-1 borderWhite cursorPointer"
                  onClick={() => changeProfileCategories(ele)}
                >
                  {ele}
                </small>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* {Experience Edit section} */}
      {selectProfileCategories === "Experience" && (
        <div className="ms-3 mt-2 row">
          <div className="col-8">
            <h6>Experience ({calculateTotalExperience()})</h6>
          </div>
          <div className="col ps-4 d-flex align-items-center">
            <div
              className="rounded-circle p-1"
              style={{
                border: "2px solid #D9D9D9",
                backgroundColor: "#D9D9D9",
                width: "auto",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "-20px",
              }}
            >
              <BsPlus onClick={addExperience} />
            </div>
            <div
              className="rounded-circle p-1"
              style={{
                border: "2px solid #D9D9D9",
                backgroundColor: "#D9D9D9",
                width: "auto",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <MdEdit />
            </div>
          </div>
        </div>
      )}

      {/* Experience Form */}
      {showExperienceForm && (
        <div className="fullscreen-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Experience Type"
                value={newExperience.expType}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    expType: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Experience Title"
                value={newExperience.expTitle}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    expTitle: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="mb-3">
              <label>Start Date:</label>
              <select
                className="form-select"
                value={newExperience.expStartDate.month}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    expStartDate: {
                      ...newExperience.expStartDate,
                      month: e.target.value,
                    },
                  })
                }
                required
              >
                <option value="">Select Month</option>
                <option value="January">Jan</option>
                <option value="February">Feb</option>
                <option value="March">Mar</option>
                <option value="April">Apr</option>
                <option value="May">May</option>
                <option value="June">Jun</option>
                <option value="July">Jul</option>
                <option value="August">Aug</option>
                <option value="September">Sep</option>
                <option value="October">Oct</option>
                <option value="November">Nov</option>
                <option value="December">Dec</option>
              </select>
              <select
                className="form-select"
                value={newExperience.expStartDate.year}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    expStartDate: {
                      ...newExperience.expStartDate,
                      year: e.target.value,
                    },
                  })
                }
                required
              >
                <option value="">Select Year</option>
                {/* Add options for years */}
                {/* Example: Option elements for years from 2000 to 2030 */}
                {Array.from({ length: 31 }, (_, i) => 2000 + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label>End Date:</label>
              <select
                className="form-select"
                value={newExperience.expEndDate.month}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    expEndDate: {
                      ...newExperience.expEndDate,
                      month: e.target.value,
                    },
                  })
                }
                required
              >
                <option value="">Select Month</option>
                <option value="January">Jan</option>
                <option value="February">Feb</option>
                <option value="March">Mar</option>
                <option value="April">Apr</option>
                <option value="May">May</option>
                <option value="June">Jun</option>
                <option value="July">Jul</option>
                <option value="August">Aug</option>
                <option value="September">Sep</option>
                <option value="October">Oct</option>
                <option value="November">Nov</option>
                <option value="December">Dec</option>
              </select>
              <select
                className="form-select"
                value={newExperience.expEndDate.year}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    expEndDate: {
                      ...newExperience.expEndDate,
                      year: e.target.value,
                    },
                  })
                }
                required
              >
                <option value="">Select Year</option>
                {/* Add options for years */}
                {/* Example: Option elements for years from 2000 to 2030 */}
                {Array.from({ length: 31 }, (_, i) => 2000 + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Experience Organization"
                value={newExperience.expOrganization}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    expOrganization: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Experience Location"
                value={newExperience.expLocation}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    expLocation: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="file" // Use input type file for image upload
                accept="image/*" // Allow only image files
                onChange={handleImageUpload}
              />
            </div>
            <div className="d-flex">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                className="close-button p-1 rounded-3 ms-5"
                onClick={closeExperienceForm}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}

      {/* {Post section} */}
      <div
        className="container-fluid"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        {selectProfileCategories === "Post" && (
          <div className="d-flex flex-wrap">
            {userPost.map((post, index) => (
              <div
                className="card bg-white mt-3 ms-1 cursorPointer"
                key={index}
              >
                <img src={post} alt={`Post ${index}`} />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Experience */}
      {selectProfileCategories === "Experience" && (
        <div
          className="container-fluid"
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          <div className="b_100">
            {ProfileData.userExperiences.map((ele, index) => (
              <div
                className="container-fluid bg-white mt-2 mb-2 cursorPointer"
                key={index}
              >
                <div className="pt-3 pb-3">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={ele.expImage}
                        alt="careerimage"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <div className="col-8 ps-0">
                      <b style={{ color: "#1EB7CD" }}>{ele.expType} </b>
                      <br />
                      <b>{ele.expTitle}</b>
                      <br />
                      <small style={{ color: "#666666" }}>
                        {ele.expStartDate.month} {ele.expStartDate.year} -{" "}
                        {ele.expEndDate.month} {ele.expEndDate.year} (
                        {calculateExperienceTotal(
                          ele.expStartDate,
                          ele.expEndDate
                        )}
                        )
                      </small>
                      <br />
                      <small style={{ color: "#666666" }}>
                        {ele.expLocation}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
