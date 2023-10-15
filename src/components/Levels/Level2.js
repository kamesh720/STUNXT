import Time from "../Time"
import { useNavigate } from "react-router-dom"

const Level2 = () => {
    let navigate = useNavigate()

    function goBack() {
        navigate("/goalspage")
    }
    return (
        <div className="mainContainer bg-body-tertiary card phoneSize">
            <Time />

            {/* chatBox Header */}
            <div className="container-fluid bg-white" style={{ boxShadow: "0px 15px 10px -15px #111" }}>
                <div className="row mb-3">
                    <div className="col-12 mt-3">
                        <div className="float-start">
                            <i className="fa-solid fa-arrow-left cursorPointer" style={{ color: "#000000" }} onClick={goBack}></i>
                            <b className="ms-3">Goals - Level 2</b>
                        </div>
                        <div className="float-end me-2">
                            <b>...</b>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Level2