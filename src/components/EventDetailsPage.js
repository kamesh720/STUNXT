import Time from "./Time"
import { useNavigate, useLocation } from "react-router-dom"
import shareicon from "../images/Home/shareicon.svg"
import { useEffect, useRef } from "react"


const EventDetailsPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { ele } = location.state || {}
    const { upcomingevents } = location.state || {}
    const mapRef = useRef()


    function goToMainEventPage() {
        ele ? navigate("/events") : navigate("/home")
    }


    //  updating map whenever the eventlocation changes

    useEffect(() => {

        const location = ele ? ele.eventLocation : upcomingevents.eventLocation

        const className = "gmap_iframe rounded-2";
        const title = "eventlocation";
        const frameBorder = "0";
        const scrolling = "no";
        const marginh = "0";
        const marginw = "0";
        const src =
            "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=" + location + "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";

        const iframeString = `<iframe  class="${className}" title="${title}" frameBorder="${frameBorder}"
         scrolling="${scrolling}" marginHeight="${marginh}" marginWidth="${marginw}" src="${src}"></iframe>`;

        mapRef.current.innerHTML = iframeString

    }, [ele, upcomingevents])




    return (
        <div className="mainContainer card phoneSize">
            <Time />

            {/* Header */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-1">
                        <p className="cursorPointer" onClick={goToMainEventPage}>
                            <i
                                className="fa-solid fa-arrow-left"
                                style={{ color: "#000000" }}
                            ></i>
                        </p>
                    </div>
                    <div className="col-11 text-start">
                        <b style={{ color: "#4d4d4d" }}>Event Title</b>
                    </div>
                </div>
            </div>

            {/* Images */}
            <div className="mt-2">
                <img className="img-fluid" src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="eventImage" />
            </div>

            {/* card inside image */}
            {ele ? <div className="card bg-white ms-3 me-3 borderWhite " style={{ height: "120px", width: "auto", marginTop: "-65px", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.15)" }}>
                <div className="container mt-2 pb-3">
                    <b>Event Title</b>
                    <br />
                    <small><i className="fa-solid fa-location-dot me-1"></i> {ele.eventLocation}</small>
                    <br />
                    <small><i className="fa-regular fa-calendar me-1"></i> {ele.eventDate}</small>
                </div>
            </div> : <div className="card bg-white ms-4 me-3 borderWhite " style={{ height: "120px", width: "auto", marginTop: "-65px", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.15)" }}>
                <div className="container mt-2 pb-3">
                    <b>Event Title</b>
                    <br />
                    <small><i className="fa-solid fa-location-dot me-1"></i> {upcomingevents.eventLocation}</small>
                    <br />
                    <small><i className="fa-regular fa-calendar me-1"></i> {upcomingevents.eventDate}</small>
                </div>
            </div>}

            {/* Event description */}
            <div className="container scroll scrollHide">
                <div className="container mt-4">
                    <b>Description</b>
                    <br />
                    <div className="card borderWhite" style={{ width: "auto", height: "110px", color: "#706D6D", fontSize: "12px", lineHeight: "18px" }}>
                        <small>It is happening in Inaculis orci ut, blandit quam. Donec in elit auctor, finibus quam in, phar. Proin id ligula dictum, covalis enim ut, facilisis massa. Mauris a nisi ut sapien blandit imperdi. Interdum et malesuada fames ac ante ipsum primis in faucibs. Sed posuere egestas nunc ut tempus. Fu ipsum dolor sit amet. Read More..</small>
                    </div>
                    <div className="mt-2">
                        <b>Venue & Location</b>
                        <br></br>

                        {/* Google map location */}
                        <div className="mt-3">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <div ref={mapRef}>
                                        <iframe className="gmap_iframe rounded-2 "
                                            title="eventlocation"
                                            frameBorder="0"
                                            scrolling="no"
                                            marginheight="0"
                                            marginwidth="0"
                                            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=salem&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                        </iframe>
                                    </div>
                                    <a href="https://connectionsgame.org/">Connections Puzzle</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-1 pb-5">
                    <div className="row">
                        <div className="col-10">
                            <span
                                className="btn w-100 mt-5 rounded-5 p-3 text-white" style={{ backgroundColor: "#00d970" }}>
                                <b>Register</b>
                            </span>
                        </div>
                        <div className="col-2 mt-5">
                            <img className="cursorPointer" src={shareicon} alt="shareicon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventDetailsPage