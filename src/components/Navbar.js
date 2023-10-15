import React, { useEffect, useState } from "react"
import { GiPartyPopper } from "react-icons/gi";
import { MdOutlineFeed } from "react-icons/md"
import { GoHome } from "react-icons/go"
import { FaUserFriends } from "react-icons/fa"
import { PiSuitcaseSimpleLight } from "react-icons/pi"
import { useNavigate } from "react-router-dom"



const Navbar = (props) => {

    const [nav, setNav] = useState()
    const navigate = useNavigate()


    function goToAnotherNav(name) {
        if (name === "Home") {
            navigate("/home")
        } else if (name === "Feeds") {
            navigate("/feeds")
        } else if (name === "Events") {
            navigate("/events")
        } else if (name === "Network") {
            navigate("/network")
        } else {
            navigate("/career")
        }
    }

    useEffect(() => {
        setNav(props.index)
    }, [props])



    const navBarFooter = [{ image: <GoHome size="20px" />, name: "Home" },
    { image: <MdOutlineFeed size="20px" />, name: "Feeds" },
    { image: <GiPartyPopper size="20px" />, name: "Events" },
    { image: <FaUserFriends size="20px" />, name: "Network" },
    { image: <PiSuitcaseSimpleLight size="20px" />, name: "Career" }]
    return (
        // added container fluid 
        <div className="container-fluid">
            <ul className="nav bg-white justify-content-between navBar" >
                {navBarFooter.map((ele, index) => (
                    <li className="nav-item text-center" key={index} onClick={() => goToAnotherNav(ele.name)}>
                        {nav === index ?
                            <span className="nav-link cursorPointer" style={{ color: "#00d970" }}>{ele.image}</span>
                            :
                            <span className="nav-link text-black cursorPointer">{ele.image}</span>
                        }
                        <span>{ele.name}</span>
                    </li>
                ))}
            </ul>
        </div>

    )
}
export default Navbar