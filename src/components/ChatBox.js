import Time from "./Time"
import refreshlogo from "../images/Home/refreshlogo.svg";
import { useNavigate } from "react-router-dom";
import ChatBoxNavbar from "./ChatBoxNavbar";
import profileimage from "../images/Network/friendimage.svg"
import addIcon from "../images/Feeds/addIcon.svg"
import { useState } from "react";



const ChatBox = () => {

    let navigate = useNavigate()

    const index = 0

    function goBack() {
        navigate("/home")
    }


    let chat = [{
        userImage: profileimage, userName: "Frodo Naveen", userMessage: [{ message: "Hello Comedy", messageDate: "22 sep" }, { message: "Dei pombala Kamesh", messageDate: "15 Jun" },
        { message: "Dei irukiya", messageDate: "15 Jun" }]
    },
    {
        userImage: profileimage, userName: "Lionel Messi", userMessage: [{ message: "Hello Comedy", messageDate: "22 sep" }, { message: "Dei pombala Kamesh", messageDate: "15 Jun" },
        { message: "I Won the world cup", messageDate: "15 Jun" }]
    },
    {
        userImage: profileimage, userName: "CR7", userMessage: [{ message: "Hello Comedy", messageDate: "22 sep" }, { message: "Dei pombala Kamesh", messageDate: "15 Jun" },
        { message: "Suiiiiiiii", messageDate: "15 Jun" }]
    }
    ]

    const [chats, setChats] = useState(chat)

    return (
        <div className="mainContainer bg-body-secondary card phoneSize">
            < Time />

            {/* chatBox Header */}
            <div className="container-fluid bg-white" style={{ boxShadow: "0px 15px 10px -15px #111" }}>
                <div className="row mb-3">
                    <div className="col-12 mt-3">
                        <div className="float-start">
                            <i className="fa-solid fa-arrow-left cursorPointer" style={{ color: "#000000" }} onClick={goBack}></i>
                            <b className="ms-3">Chat</b>
                        </div>
                        <div className="float-end me-2">
                            <b>...</b>
                        </div>
                    </div>

                </div>
            </div>

            {/* searchinput */}
            <div className="container mt-4">
                <div className="row ps-1">
                    <div className="col-9">
                        <input
                            className="form-control rounded-4 borderWhite text-start"
                            placeholder="Search by name..."
                            style={{ height: "60px", paddingRight: "20px" }}
                        />
                    </div>
                    <div className="col-3">
                        <div
                            className="card rounded-4 borderWhite ms-3"
                            style={{ height: "60px", width: "60px" }}
                        >
                            <img
                                className="m-auto cursorPointer"
                                src={refreshlogo}
                                alt="filter logo"
                                style={{ height: "24px", width: "24px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages in the chatbox */}

            <div className="container mt-3">
                {chats.map((ele, index) => (
                    <div className="card borderWhite rounded-2 mt-2 cursorPointer" key={index}>
                        <div className="row p-3">
                            <div className="col-2">
                                <img src={ele.userImage} alt="userimage" style={{ height: "50px", width: "50px" }} />
                            </div>
                            <div className="col-10">
                                <div className="float-start">
                                    <b>{ele.userName}</b>
                                    <br />

                                    {/* if message opened thn text muted else dark */}

                                    <small>{ele.userMessage ? ele.userMessage[ele.userMessage.length - 1].message : null}</small>
                                </div>
                                <div className="float-end">
                                    <small className="text-muted">{ele.userMessage ? ele.userMessage[ele.userMessage.length - 1].messageDate : null}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Sticky plus button */}
            <img
                className="sticky-plus-button"
                src={addIcon}
                alt="addIcon"
                style={{
                    position: "fixed",
                    bottom: "100px", // Adjust vertical position as needed
                    right: "20px", // Adjust horizontal position as needed
                    zIndex: 1000, // Ensure it's above other content
                }}
            />
            <ChatBoxNavbar index={index} />
        </div >
    )
}
export default ChatBox