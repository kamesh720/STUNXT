import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Personaldetailspage2 from "./Personaldetailspage2"
import Time from "./Time"
import "./PersonalDetails.css"


const Personaldetailspage1 = () => {

    const navigate = useNavigate()
    const bday = useRef()

    const [goToSecondDetailsPage, setGoToSecondDetailsPage] = useState(false)

    const [formData1, setFormData1] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        emailId: "",
        gender: "",
        dateOfBirth: ""
    })

    const isFormFilled = formData1.firstName && formData1.lastName && formData1.emailId && formData1.gender && formData1.dateOfBirth


    function goToNextFormPage() {
        isFormFilled ? setGoToSecondDetailsPage(true) : alert("please fill the details")
    }

    function goToOtpPage() {
        navigate("/otp")
    }

    function goToPreviousFormPage() {
        setGoToSecondDetailsPage(false)
    }

    function typeDateChange() {
        bday.current.type = "date"
    }

    function typeTextChange() {
        bday.current.type = "text"
    }

    function fillFormData(e) {
        setFormData1((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    return (
        <div className="mainContainer card phoneSize">
            <Time />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-1">
                        <p className="cursorPointer" onClick={goToSecondDetailsPage ? goToPreviousFormPage : goToOtpPage}><i className="fa-solid fa-arrow-left" style={{ color: "#000000" }}></i></p>
                    </div>
                    <div className="col-11 text-center">
                        <b style={{ color: "#4d4d4d" }}>Personal details</b>
                        <p className="mt-3" style={{ color: "#636363" }}>Please fill your personal details</p>
                        <div className="mt-4">
                            <p className={goToSecondDetailsPage ? "card mx-auto detailsPage2Filling " : "card mx-auto detailsPage1Filling"}></p>
                        </div>
                    </div>
                </div>
            </div>
            {goToSecondDetailsPage ? <Personaldetailspage2 formData1={formData1} /> :
                <div>
                    <div className="container formDetails">
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    {formData1.firstName ? <small className="formdata">First name</small> : null}
                                    <input
                                        className={formData1.firstName ? "form-control formInputheight" : "form-control formInputHeight"}
                                        placeholder="First name"
                                        value={formData1.firstName}
                                        name="firstName"
                                        onChange={fillFormData}
                                        autoComplete="off"
                                        required />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    {formData1.middleName ? <small className="formdata">Middle name</small> : null}
                                    <input
                                        type="text"
                                        className={formData1.middleName ? "form-control formInputheight" : "form-control formInputHeight"}
                                        placeholder="Middle name (Optional)"
                                        value={formData1.middleName}
                                        name="middleName"
                                        onChange={fillFormData}
                                        autoComplete="off" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    {formData1.lastName ? <small className="formdata">Last name</small> : null}
                                    <input
                                        type="text"
                                        className={formData1.lastName ? "form-control formInputheight" : "form-control formInputHeight"}
                                        placeholder="Last name"
                                        name="lastName"
                                        onChange={fillFormData}
                                        value={formData1.lastName}
                                        autoComplete="off"
                                        required />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    {formData1.emailId ? <small className="formdata">Email ID</small> : null}
                                    <input
                                        type="text"
                                        className={formData1.emailId ? "form-control formInputheight" : "form-control formInputHeight"}
                                        placeholder="Email ID"
                                        name="emailId"
                                        onChange={fillFormData}
                                        value={formData1.emailId}
                                        autoComplete="off"
                                        required />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <div className={formData1.gender === "Male" ? "card formInputheight" : "card formInputHeight"}>
                                        <span style={{ color: "#636363" }}>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Male"
                                                checked={formData1.gender === "Male"}
                                                onChange={fillFormData}
                                                className="formInputRadio"
                                                required /> Male</span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className={formData1.gender === "Female" ? "card formInputheight" : "card formInputHeight"}>
                                        <span style={{ color: "#636363" }}>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Female"
                                                checked={formData1.gender === "Female"}
                                                onChange={fillFormData}
                                                className="formInputRadio"
                                                required /> Female</span>
                                    </div>

                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    {formData1.dateOfBirth ? <small className="formdata">Date of Birth</small> : null}
                                    <input ref={bday}
                                        className={formData1.dateOfBirth ? "form-control formInputheight" : "form-control formInputHeight"}
                                        placeholder="Date of Birth"
                                        value={formData1.dateOfBirth}
                                        name="dateOfBirth"
                                        onChange={fillFormData}
                                        onFocus={typeDateChange}
                                        onBlur={typeTextChange}
                                        autoComplete="off"
                                        required />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="container mt-2">
                        <span className="cursorPointer text-secondary float-end mt-5" onClick={goToNextFormPage}><i className="fa-solid fa-circle-arrow-right fa-2xl" style={{ color: isFormFilled ? "#00d970" : null }}></i></span>
                    </div>
                </div>}

        </div>
    )
}
export default Personaldetailspage1

