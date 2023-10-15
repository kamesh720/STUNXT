import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Time from "./Time";

const CollegeStaff = () => {
  const navigate = useNavigate();

  const [graduation, setDesignation] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  function goToLoginasPage() {
    navigate("/loginaspage");
  }

  // Check if all form fields are filled
  const isFormFilled = graduation && collegeName && department && year;

  // Function to navigate to the next page if the form is filled
  function goToStaffPage2() {
    if (isFormFilled) {
      // Navigate to the next page
      navigate("/staff2"); // Replace "/nextPage" with the actual URL
    } else {
      alert("please fill the details")
    }
  }

  // Generate an array of years (e.g., from 2022 to 2030)
  const years = Array.from({ length: 20 }, (_, index) => 1990 + index);

  function skipGoToHomePage() {
    navigate("/home")
  }

  return (
    <div
      className="mainContainer card phoneSize"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Time />

      <div className="container mt-5">
        <div className="row">
          <div className="col-1">
            <p className="cursorPointer" onClick={goToLoginasPage}>
              <i
                className="fa-solid fa-arrow-left"
                style={{ color: "#000000" }}
              ></i>
            </p>
          </div>
          <div className="col-11 text-center">
            <b style={{ color: "#4d4d4d" }}>Logging as College Staff</b>
            <p className="mt-3" style={{ color: "#636363" }}>
              Please fill your college details
            </p>
          </div>
        </div>
        <div className="container studentDetails mt-3">
          <form>
            <div className="row">
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
            <div className="row mt-4">
              <div className="col-12">
                <select
                  className="form-select formInputHeight"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="" disabled>
                    Degree Completed
                  </option>
                  {years.map((yearOption) => (
                    <option key={yearOption} value={yearOption}>
                      {yearOption}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-5 flex-grow-1"></div>
      <div className="mt-10 mb-5 style={{ marginTop: 'auto' }}">
        <div className="float-start ">
          <span className="cursorPointer ms-3" style={{ color: "#00d970" }} onClick={skipGoToHomePage}>
            <b>Skip</b>
          </span>
        </div>
        <div className="float-end ">
          <span
            className="cursorPointer me-3"
            style={{ color: isFormFilled ? "#00d970" : "#00D97080" }}
            onClick={goToStaffPage2}
          >
            <i className="fa-solid fa-circle-arrow-right fa-2xl"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollegeStaff;
