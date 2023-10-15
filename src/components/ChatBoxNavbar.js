import React, { useEffect, useState } from "react"
import { TbCameraPlus } from "react-icons/tb";
import { HiMiniUserGroup } from "react-icons/hi2"
import { BsChatLeft } from "react-icons/bs"
import { FaHandshake } from "react-icons/fa"
import { IoSettingsOutline } from "react-icons/io5"
// import { useNavigate } from "react-router-dom"

const ChatBoxNavbar = (props) => {

    // const [nav, setNav] = useState()
    // const navigate = useNavigate()


    // function goToAnotherNav(name) {
    //     if (name === "Home") {
    //         navigate("/home")
    //     } else if (name === "Feeds") {
    //         navigate("/feeds")
    //     } else if (name === "Events") {
    //         navigate("/events")
    //     } else if (name === "Network") {
    //         navigate("/network")
    //     } else {
    //         navigate("/career")
    //     }
    // }

    const [page, setPage] = useState("")


    useEffect(() => {
        // setNav(props.index)
        setPage("Chat")
    }, [props])


    function goToClickedPage(page) {
        setPage(page)
    }

    const navBarFooter = [{ image: <BsChatLeft size="20px" />, name: "Chat" },
    { image: <HiMiniUserGroup size="25px" />, name: "Group" },
    { image: <TbCameraPlus size="25px" />, name: "Snap" },
    { image: <FaHandshake size="25px" />, name: "Club" },
    { image: <IoSettingsOutline size="25px" />, name: "Settings" }]


    return (
        <div className="container-fluid">
            <div>
                <ul className="nav bg-white justify-content-between navBar pt-1" >
                    {navBarFooter.map((ele, index) => (
                        <li className="nav-item text-center" key={index} onClick={() => goToClickedPage(ele.name)} >
                            {ele.name === page ?
                                <span className="nav-link cursorPointer" style={{ color: "#00d970" }}>{ele.image}</span>
                                :
                                <span className="nav-link text-black cursorPointer">{ele.image}</span>
                            }
                            <span>{ele.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}
export default ChatBoxNavbar