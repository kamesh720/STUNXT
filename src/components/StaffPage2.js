import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Time from "./Time";

const CollegeStaff2 = () => {
  const navigate = useNavigate();

  const [graduation, setDesignation] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [department, setDepartment] = useState("");
  const [isUndergoingEducation, setIsUndergoingEducation] = useState(false); // Track user's choice

  const isFormFilled = graduation && collegeName && department

  function goToStaffPage() {
    navigate("/staff");
  }

  // Generate an array of years (e.g., from 2022 to 2030)
  // const years = Array.from({ length: 20 }, (_, index) => 1990 + index);

  // Function to handle radio button click
  const handleRadioChange = (e) => {
    setIsUndergoingEducation(e.target.value === "Yes");
  };

  function goToHomePage() {
    navigate("/home")
  }


  return (
    <div
      className="container card phoneSize"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Time />

      <div className="mt-5">
        <div className="row">
          <div className="col-1">
            <p className="cursorPointer" onClick={goToStaffPage}>
              <i
                className="fa-solid fa-arrow-left"
                style={{ color: "#000000" }}
              ></i>
            </p>
          </div>
          <div className="col-11 text-center">
            <b style={{ color: "#4d4d4d" }}>Logging as College Staff</b>
            <p className="mt-3" style={{ color: "#636363" }}>
              Are you undergoing any higher education? If yes please fill the
              details
            </p>
          </div>
        </div>
        <div className="container studentDetails">
          <form>
            <div className="row">
              <div className="col-6">
                <div className="card formInputHeight">
                  <span style={{ color: "#636363" }}>
                    <input
                      type="radio"
                      name="Choice"
                      className="formInputRadio"
                      value="Yes"
                      checked={isUndergoingEducation}
                      onChange={handleRadioChange}
                    />{" "}
                    Yes
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="card formInputHeight">
                  <span style={{ color: "#636363" }}>
                    <input
                      type="radio"
                      name="Choice"
                      className="formInputRadio"
                      value="No"
                      checked={!isUndergoingEducation}
                      onChange={handleRadioChange}
                    />{" "}
                    No
                  </span>
                </div>
              </div>
            </div>
            {isUndergoingEducation && (
              <>
                <div className="row mt-4">
                  <div className="col-12">
                    <select
                      className="form-select formInputHeight"
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                    >
                      <option value="" disabled>
                        College Name
                      </option>
                      <option value="college1">College 1</option>
                      <option value="college2">College 2</option>
                      <option value="college3">College 3</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <select
                      className="form-select formInputHeight"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <option value="" disabled>
                        Department
                      </option>
                      <option value="dept1">Department 1</option>
                      <option value="dept2">Department 2</option>
                      <option value="dept3">Department 3</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <select
                      className="form-select formInputHeight"
                      value={graduation}
                      onChange={(e) => setDesignation(e.target.value)}
                    >
                      <option value="" disabled>
                        Designation
                      </option>
                      <option value="bachelor">Principal</option>
                      <option value="master">Dean</option>
                      <option value="doctorate">others</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <div className="container" style={{ marginTop: "780px", position: "absolute", marginLeft: "-12px" }}>
        <span className="btn w-100 rounded-5" style={{ backgroundColor: isUndergoingEducation ? isFormFilled ? "#00D970" : "#00D97080" : "#00D970", color: "white" }} onClick={goToHomePage} ><b>Continue</b></span>
      </div>
    </div>
  );
};

export default CollegeStaff2;
