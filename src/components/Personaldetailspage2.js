import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Personaldetailspage2 = ({ formData1 }) => {

    const navigate = useNavigate()

    const [formData2, setFormData2] = useState(
        {
            doorNo: "",
            street: "",
            district: "",
            state: "",
            pinCode: ""
        }
    )


    const [personalDetails, setPersonalDetails] = useState()

    const isFormFilled = formData2.doorNo && formData2.street && formData2.district && formData2.district && formData2.pinCode

    function fillFormData(e) {
        setFormData2((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
        setPersonalDetails({ ...formData1, ...formData2 })
    }

    function goToLoginAsPage() {
        isFormFilled ? navigate("/loginaspage") : alert("Fill all the details")
        console.log(personalDetails)
    }


    function skipPersonalDetails2Page() {
        navigate("/loginaspage")
    }
    return (
        <div>
            <div className="container formDetails">
                <form>
                    <div className="row">
                        <div className="col-12">
                            {formData2.doorNo ? <small className="formdata">Door No</small> : null}
                            <input
                                type="text"
                                className={formData2.doorNo ? "form-control formInputheight" : "form-control formInputHeight"}
                                placeholder="Door no & Building name"
                                onChange={fillFormData}
                                name="doorNo"
                                value={formData2.doorNo}
                                autoComplete="off"
                                required />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            {formData2.street ? <small className="formdata">Street</small> : null}
                            <input
                                type="text"
                                className={formData2.street ? "form-control formInputheight" : "form-control formInputHeight"}
                                placeholder="Street and Town"
                                onChange={fillFormData}
                                name="street"
                                value={formData2.street}
                                autoComplete="off"
                                required />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            {formData2.district ? <small className="formdata">District</small> : null}
                            <input
                                type="text"
                                className={formData2.district ? "form-control formInputheight" : "form-control formInputHeight"}
                                placeholder="District"
                                onChange={fillFormData}
                                name="district"
                                value={formData2.district}
                                autoComplete="off"
                                required />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            {formData2.state ? <small className="formdata">State</small> : null}
                            <input
                                type="text"
                                className={formData2.state ? "form-control formInputheight" : "form-control formInputHeight"}
                                placeholder="State"
                                onChange={fillFormData}
                                name="state"
                                value={formData2.state}
                                autoComplete="off"
                                required />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            {formData2.pinCode ? <small className="formdata">Pincode</small> : null}
                            <input
                                type="number"
                                className={formData2.pinCode ? "form-control formInputheight" : "form-control formInputHeight"}
                                placeholder="Pincode"
                                onChange={fillFormData}
                                name="pinCode"
                                value={formData2.pinCode}
                                autoComplete="off"
                                required />
                        </div>
                    </div>
                </form>
            </div>

            <div className="container formPageFooter">
                <div className="float-start mt-2">
                    <b className="cursorPointer mt-5" style={{ color: "#00d970" }} onClick={skipPersonalDetails2Page}>Skip</b>
                </div>
                <div className="float-end mt-2">
                    <span className="cursorPointer text-secondary mt-5" onClick={goToLoginAsPage}><i className="fa-solid fa-circle-arrow-right fa-2xl" style={{ color: isFormFilled ? "#00d970" : null }}></i></span>
                </div>
            </div>
        </div>
    )
}
export default Personaldetailspage2