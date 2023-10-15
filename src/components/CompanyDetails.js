import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Time from "./Time";

const CompanyDetails = () => {
  const navigate = useNavigate();

  const [organizationtype, setOrganizationType] = useState("");
  const [industry, setIndustry] = useState("");
  const [organizationsize, setOrganizationSize] = useState("");

  function goToLoginasPage() {
    navigate("/loginaspage");
  }

  // Check if all form fields are filled
  const isFormFilled = organizationtype && industry && organizationsize;

  //Need to set
  // Function to navigate to the next page if the form is filled

  function goTo() {
    if (isFormFilled) {
      // Navigate to the next page
      navigate("/"); // Replace "/nextPage" with the actual URL
    }
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
            <b style={{ color: "#4d4d4d" }}>Logging as Company</b>
            <p className="mt-3" style={{ color: "#636363" }}>
              Please fill your company details
            </p>
          </div>
        </div>
        <div className="container studentDetails">
          <form>
            <div className="row">
              <div className="col-12">
                <input
                  className="form-control formInputHeight"
                  placeholder="Company Name"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <select
                  className="form-select formInputHeight"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                >
                  <option value="" disabled>
                    Industry
                  </option>
                  <option value="industry1">Indutry 1</option>
                  <option value="industry2">Indutry 2</option>
                  <option value="industry3">Indutry 3</option>
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <select
                  className="form-select formInputHeight"
                  value={organizationsize}
                  onChange={(e) => setOrganizationSize(e.target.value)}
                >
                  <option value="" disabled>
                    Organization Size
                  </option>
                  <option value="small">Small Scale</option>
                  <option value="medium">Medium Scale</option>
                  <option value="large">Large Scale</option>
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <select
                  className="form-select formInputHeight"
                  value={organizationtype}
                  onChange={(e) => setOrganizationType(e.target.value)}
                >
                  <option value="" disabled>
                    Organization Type
                  </option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="type3">Type 3</option>
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <input
                  className="form-control formInputHeight"
                  placeholder="(Website Optional)"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container collegeStudentPageCtnBtn">
        <span className="btn w-100 rounded-5" style={{ backgroundColor: isFormFilled ? "#00d970" : "#00D97080", color: "white" }} onClick={goTo}><b>Continue</b></span>
      </div>
    </div>
  );
};

export default CompanyDetails;
