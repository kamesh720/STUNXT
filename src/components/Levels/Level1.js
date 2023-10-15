import Time from "../Time"
import { useNavigate } from "react-router-dom"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from "react";
import completedTick from "../../images/Goals/success.svg"
import friendList from "../../data/networkdata/friends";
import completedTickBig from "../../images/Goals/successbig.svg"

const Level1 = () => {

    let navigate = useNavigate()

    const [goal1Percentage, setGoal1Percentage] = useState(65)
    const [goal2Percentage, setGoal2Percentage] = useState(50)
    const [goal3Percentage, setGoal3Percentage] = useState(100)

    const [offcanvasBottom, setOffcanvasBottom] = useState(false)


    useEffect(() => {
        if (friendList.length > 20) {
            let i = 20
            setGoal2Percentage(i * 5)
        } else {
            let i = friendList.length
            setGoal2Percentage(i * 5)
        }
    }, [])

    useEffect(() => {
        if (goal1Percentage === 100) {
            setOffcanvasBottom(true)
        } else if (goal2Percentage === 100) {
            setOffcanvasBottom(true)
        } else if (goal3Percentage === 100) {
            setOffcanvasBottom(true)
        }
    }, [goal1Percentage, goal2Percentage, goal3Percentage])


    let goal1CompletedPercentage = (Math.round((goal1Percentage + goal2Percentage + goal3Percentage) / 3))

    function goBack() {
        navigate("/goalspage", { state: { goal1CompletedPercentage } })
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
                            <b className="ms-3">Goals - Level 1</b>
                        </div>
                        <div className="float-end me-2">
                            <b>...</b>
                        </div>
                    </div>

                </div>
            </div>

            {/* goals to be completed */}

            <div className="container mt-3">

                {/* goal1 */}
                <div className="card borderWhite rounded-4">
                    <div className="row p-3">
                        <div className="col-3">
                            {goal1Percentage === 100 ? <img src={completedTick} alt="successImage" /> : <CircularProgressbar value={goal1Percentage} text={`${goal1Percentage}%`} styles={buildStyles({
                                pathColor: `#00d970`,
                                textColor: '#00d970'
                            })} />}
                        </div>
                        <div className="col-9">
                            <b>Complete Profile</b>
                            <br />
                            <small className="text-muted">Please complete all the necessary details in your profile</small>
                        </div>
                    </div>
                </div>

                {/* goal2 */}
                <div className="card borderWhite mt-3 rounded-4">
                    <div className="row p-3">
                        <div className="col-3">
                            {goal2Percentage === 100 ? <img src={completedTick} alt="successImage" /> : <CircularProgressbar value={goal2Percentage} text={`${goal2Percentage}%`} styles={buildStyles({
                                pathColor: `#00d970`,
                                textColor: '#00d970',
                            })} />}
                        </div>
                        <div className="col-9">
                            <b>Follow Members</b>
                            <br />
                            <small className="text-muted">Follow atleast 20 friends or
                                <br /> members</small>
                        </div>
                    </div>
                </div>

                {/* goal3 */}
                <div className="card borderWhite mt-3 rounded-4">
                    <div className="row p-3">
                        <div className="col-3">
                            {goal3Percentage === 100 ? <img src={completedTick} alt="successImage" /> : <CircularProgressbar value={goal3Percentage} text={`${goal3Percentage}%`} styles={buildStyles({
                                pathColor: `#00d970`,
                                textColor: '#00d970'
                            })} />}
                        </div>
                        <div className="col-9">
                            <b>Post Feeds</b>
                            <br />
                            <small className="text-muted">Post atleast 5 feeds</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* offcanvas Bottom Popup if the goal is completed*/}

            <div className={`offcanvas rounded-top-5  offcanvas-bottom ${offcanvasBottom ? "show" : null}`} tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">

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
                                    <b className="pt-2">Goal Completed !!!</b>
                                    <br />
                                    <small className="text-muted">Congratulations, successfully completd a Goal 1 in Level 1. Complete more goals and levels to get Batches and rewards.</small>
                                    <br />
                                    <br />
                                    <span className="btn w-100 text-white rounded-5" style={{ backgroundColor: "#00d970" }}>
                                        <b>View all goals</b>
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
export default Level1


