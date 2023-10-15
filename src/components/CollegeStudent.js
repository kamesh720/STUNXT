import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Time from "./Time";
import "./CollegeStudent.css"

const CollegeStudent = () => {
  const navigate = useNavigate();

  const [graduation, setGraduation] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [registerNumber, setRegisterNumber] = useState("")

  function goToLoginasPage() {
    navigate("/loginaspage");
  }

  const isFormFilled = graduation && collegeName && department && year && registerNumber

  // Generate an array of years (e.g., from 2022 to 2030)
  const years = Array.from({ length: 12 }, (_, index) => 2010 + index);

  function goToHomePage() {
    isFormFilled ? navigate("/home") : alert("please fill the details")

  }

  return (
    <div
      className="mainContainer card phoneSize"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Time />
      <div className=" container mt-5">
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
            <b style={{ color: "#4d4d4d" }}>Logging as College Student</b>
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
                  value={graduation}
                  onChange={(e) => setGraduation(e.target.value)}
                >
                  <option value="" disabled>
                    Graduation
                  </option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                </select>
              </div>
            </div>
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
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="" disabled>
                    Year
                  </option>
                  {years.map((yearOption) => (
                    <option key={yearOption} value={yearOption}>
                      {yearOption}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <input
                  className="form-control formInputHeight"
                  placeholder="Register Number (in ID Card)"
                  onChange={(e) => setRegisterNumber(e.target.value)}
                  value={registerNumber}
                  name="registerNumber"

                />
              </div>
            </div>
          </form>
        </div>

        <div className="container collegeStudentPageCtnBtn" >
          <span className="btn w-100 rounded-5" style={{ backgroundColor: isFormFilled ? "#00d970" : "#00D97080", color: "white" }} onClick={goToHomePage}><b>Continue</b></span>
        </div>
      </div>
    </div>

  );
};

export default CollegeStudent;
