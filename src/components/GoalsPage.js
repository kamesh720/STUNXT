import { useEffect, useState } from "react"
import Time from "./Time"
import { useNavigate, useLocation } from "react-router-dom"
import { MdVerified } from "react-icons/md"
import starlogo from "../images/Goals/star.svg"
import "./GoalsPage.css"
import completedTick from "../images/Goals/success.svg"
import completedTickBig from "../images/Goals/successbig.svg"

// progress bar react
import ProgressBar from "@ramonak/react-progress-bar";

const GoalsPage = () => {

    let navigate = useNavigate()
    let location = useLocation()
    let goalCategories = ["Ongoing", "Completed", "Rewards & Batch"]

    const [categoryName, setCategoryName] = useState("")
    const [level1Progress, setLevel1Progress] = useState()
    const [level2Progress, setLevel2Progress] = useState(25)
    const [level3Progress, setLevel3Progress] = useState(10)

    const { goal1CompletedPercentage } = location.state || {}


    const [offcanvasBottom, setOffcanvasBottom] = useState(false)


    useEffect(() => {
        setCategoryName("Ongoing")
    }, [])

    useEffect(() => {
        setLevel1Progress(goal1CompletedPercentage)
    }, [goal1CompletedPercentage])

    useEffect(() => {
        if (level1Progress === 100) {
            setOffcanvasBottom(true)
        } else if (level2Progress === 100) {
            setOffcanvasBottom(true)
        } else if (level3Progress === 100) {
            setOffcanvasBottom(true)
        }
    }, [level1Progress, level2Progress, level3Progress])

    function changeToClickedCategory(category) {
        setCategoryName(category)
    }

    function goBack() {
        navigate("/home")
    }

    function goToLevel1Page() {
        navigate("/level1")
    }

    function goToLevel2Page() {
        // if level1 completed it will go to second
        level1Progress === 100 ?
            navigate("/level2") : navigate("/goalspage")
    }

    function goToLevel3Page() {

        // if level1 and level2 completed it will go to third
        level1Progress === 100 && level2Progress === 100 ?
            navigate("/level3") : navigate("/goalspage")
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
                            <b className="ms-3">Levels</b>
                        </div>
                        <div className="float-end me-2">
                            <b>...</b>
                        </div>
                    </div>

                </div>
            </div>

            {/* goal categories */}
            <div className="conatiner mt-4 me-2">
                <div className="container d-flex scrollHide justify-content-center no-wrap scroll">
                    {goalCategories.map((ele, index) => (
                        <div key={index}>
                            {categoryName === ele ? (
                                <small
                                    className="card ms-3 p-1 cursorPointer"
                                    style={{
                                        backgroundColor: "#00D9701A",
                                        borderColor: "#00d970",
                                    }} onClick={() => changeToClickedCategory(ele)}
                                >
                                    <b>{ele}</b>
                                </small>
                            ) : (
                                <small
                                    className="card ms-3 p-1 borderWhite cursorPointer"
                                    onClick={() => changeToClickedCategory(ele)}
                                >
                                    <b>{ele}</b>
                                </small>
                            )}
                        </div>
                    ))}
                </div>
            </div>



            {categoryName === "Ongoing" ?

                // if category name is ongoing the following will display
                <>
                    {/* verify alert block */}
                    <div className="container mt-2">
                        <div className="card bg-white mt-3 borderWhite">
                            <div className="container row">
                                <div className="col-3 mt-3">
                                    {/* text-sm-md start */}
                                    <p className="text-center text-sm-start text-md-start" style={{ color: "#4d4d4d" }}>
                                        <MdVerified size="50px" color="#00d970" />
                                    </p>
                                </div>
                                <div className="col-9 mt-2 mb-2 text-sm-start">
                                    <b>Verify Profile</b>
                                    <div className="mt-1">
                                        <small className="text-muted">Join your college club and become a verified user</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* levels  */}
                    <div className="container mt-2 scroll scrollHide">

                        {/* Level 1 */}
                        <div className="card borderWhite p-2" onClick={goToLevel1Page}>
                            <div className="row">
                                <div className="col-3">
                                    {level1Progress === 100 ? <img src={completedTick} alt="successImage" /> : <img src={starlogo} alt="staricon" />}
                                </div>
                                <div className="col-9">
                                    <b>Level 1 - Profile</b>
                                    <br />
                                    <small className="text-muted">Complete Level 1 to get "Batch name" and unlock Level 2</small>
                                </div>
                            </div>
                            <div className="row mt-3 mb-2">
                                <div className="col-12">
                                    <ProgressBar completed={level1Progress} bgColor="#00d970" height="11px" labelSize="10px" />
                                </div>
                            </div>
                        </div>

                        {/* Level 2 */}
                        <div className={level1Progress === 100 ? "card bg-white borderWhite border-0 p-2 mt-3" : "card bg-secondary-subtle border-0 p-2 mt-3"} onClick={goToLevel2Page}>
                            <div className="row">
                                <div className="col-3">
                                    {level1Progress && level2Progress === 100 ? <img src={completedTick} alt="successImage" /> : <img src={starlogo} alt="staricon" />}
                                </div>
                                <div className="col-9">
                                    <b>Level 2</b>
                                    <br />
                                    <small className="text-muted">Complete Level 2 to get "Batch name" and unlock Level 3</small>
                                </div>
                            </div>
                            <div className="row mt-3 mb-2">
                                <div className="col-12">
                                    {level1Progress === 100 ? <ProgressBar completed={level2Progress} bgColor="#00d970" height="11px" labelSize="10px" /> : null
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Level 3 */}
                        <div className={level1Progress && level2Progress === 100 ? "card bg-white borderWhite border-0 p-2 mt-3" : "card bg-secondary-subtle border-0 p-2 mt-3"} onClick={goToLevel3Page}>
                            <div className="row">
                                <div className="col-3">
                                    {level1Progress && level2Progress && level3Progress === 100 ? <img src={completedTick} alt="successImage" /> : <img src={starlogo} alt="staricon" />}
                                </div>
                                <div className="col-9">
                                    <b>Level 3</b>
                                    <br />
                                    <small className="text-muted">Complete Level 3 to get "Batch name" and unlock Level 4</small>
                                </div>
                            </div>
                            <div className="row mt-3 mb-2">
                                <div className="col-12">
                                    {level1Progress && level2Progress === 100 ? <ProgressBar completed={level3Progress} bgColor="#00d970" height="11px" labelSize="10px" />
                                        : null}
                                </div>
                            </div>
                        </div>

                    </div>
                </> :

                // if category name is completed the following will display

                categoryName === "Completed" ?

                    level1Progress && level2Progress && level3Progress === 100 ?

                        <>
                            {/* levels  */}
                            <div className="container mt-4">

                                {/* Level 1 */}
                                <div className="card borderWhite p-2" onClick={goToLevel1Page}>
                                    <div className="row">
                                        <div className="col-3 pt-2">
                                            <img src={completedTick} alt="successImage" />
                                        </div>
                                        <div className="col-9">
                                            <b>Level 1 - Profile</b>
                                            <br />
                                            <small className="text-muted">Complete Level 1 to get "Batch name" and unlock Level 2</small>
                                        </div>
                                    </div>
                                    <div className="row mt-3 mb-2">
                                        <div className="col-12">
                                            {/* <ProgressBar completed={level1Progress} bgColor="#00d970" height="11px" labelSize="10px" /> */}
                                        </div>
                                    </div>
                                </div>

                                {/* Level 2 */}
                                <div className="card bg-white borderWhite border-0 p-2 mt-3" onClick={goToLevel2Page}>
                                    <div className="row">
                                        <div className="col-3 pt-2">
                                            <img src={completedTick} alt="successImage" />
                                        </div>
                                        <div className="col-9">
                                            <b>Level 2</b>
                                            <br />
                                            <small className="text-muted">Complete Level 2 to get "Batch name" and unlock Level 3</small>
                                        </div>
                                    </div>
                                    <div className="row mt-3 mb-2">
                                        <div className="col-12">
                                            {/* {level1Progress === 100 ? <ProgressBar completed={level2Progress} bgColor="#00d970" height="11px" labelSize="10px" /> : null
                                            } */}
                                        </div>
                                    </div>
                                </div>

                                {/* Level 3 */}
                                <div className="card bg-white borderWhite border-0 p-2 mt-3" onClick={goToLevel3Page}>
                                    <div className="row">
                                        <div className="col-3 pt-2">
                                            <img src={completedTick} alt="successImage" />
                                        </div>
                                        <div className="col-9">
                                            <b>Level 3</b>
                                            <br />
                                            <small className="text-muted">Complete Level 3 to get "Batch name" and unlock Level 4</small>
                                        </div>
                                    </div>
                                    <div className="row mt-3 mb-2">
                                        <div className="col-12">
                                            {/* {level1Progress && level2Progress === 100 ? <ProgressBar completed={level3Progress} bgColor="#00d970" height="11px" labelSize="10px" />
                                                : null} */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </> : level1Progress && level2Progress === 100 ?
                            <>
                                {/* levels  */}
                                <div className="container mt-4">

                                    {/* Level 1 */}
                                    <div className="card borderWhite p-2" onClick={goToLevel1Page}>
                                        <div className="row">
                                            <div className="col-3 pt-2">
                                                <img src={completedTick} alt="successImage" />
                                            </div>
                                            <div className="col-9">
                                                <b>Level 1 - Profile</b>
                                                <br />
                                                <small className="text-muted">Complete Level 1 to get "Batch name" and unlock Level 2</small>
                                            </div>
                                        </div>
                                        <div className="row mt-3 mb-2">
                                            <div className="col-12">
                                                {/* <ProgressBar completed={level1Progress} bgColor="#00d970" height="11px" labelSize="10px" /> */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Level 2 */}
                                    <div className="card bg-white borderWhite border-0 p-2 mt-3" onClick={goToLevel2Page}>
                                        <div className="row">
                                            <div className="col-3 pt-2">
                                                <img src={completedTick} alt="successImage" />
                                            </div>
                                            <div className="col-9">
                                                <b>Level 2</b>
                                                <br />
                                                <small className="text-muted">Complete Level 2 to get "Batch name" and unlock Level 3</small>
                                            </div>
                                        </div>
                                        <div className="row mt-3 mb-2">
                                            <div className="col-12">
                                                {/* {level1Progress === 100 ? <ProgressBar completed={level2Progress} bgColor="#00d970" height="11px" labelSize="10px" /> : null
                                                } */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </> : level1Progress === 100 ?
                                <>
                                    {/* levels  */}
                                    <div className="container mt-4">

                                        {/* Level 1 */}
                                        <div className="card borderWhite p-2" onClick={goToLevel1Page}>
                                            <div className="row">
                                                <div className="col-3 pt-2">
                                                    <img src={completedTick} alt="successImage" />
                                                </div>
                                                <div className="col-9">
                                                    <b>Level 1 - Profile</b>
                                                    <br />
                                                    <small className="text-muted">Complete Level 1 to get "Batch name" and unlock Level 2</small>
                                                </div>
                                            </div>
                                            <div className="row mt-3 mb-2">
                                                <div className="col-12">
                                                    {/* <ProgressBar completed={level1Progress} bgColor="#00d970" height="11px" labelSize="10px" /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                null
                    : null}

            {/* offcanvas Bottom Popup if the Level is completed*/}

            <div className={`offcanvas rounded-top-5  offcanvas-bottom ${offcanvasBottom ? "show" : null}`} tabIndex="-1" id="offcanvasLevelBottom" aria-labelledby="offcanvasBottomLabel">

                <div>
                    <div>
                        <div className="float-end">
                            <button type="button" className="btn-close mt-3 me-2 " data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setOffcanvasBottom(false)}></button>
                        </div>
                    </div>
                    <div className="container" style={{ width: "100%", height: "100vh" }}>
                        <div className="container text-center mt-5">
                            <div className="row">
                                <div className="col-12">
                                    <img className="img-fluid" src={completedTickBig} alt="successLogo" style={{ height: "100px" }} />
                                    <br />
                                    <br />
                                    <b className="pt-2">Level Completed !!!</b>
                                    <br />
                                    <small className="text-muted">Successfully completed Level 1.</small>
                                    <br />
                                    <br />
                                    <span className="btn w-100 text-white rounded-5" style={{ backgroundColor: "#00d970" }}>
                                        <b>View all Levels</b>
                                    </span>
                                    <br />
                                    <br />
                                    <b className="appGreen">Do later</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default GoalsPage