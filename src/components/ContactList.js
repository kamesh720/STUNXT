import contactList from "../data/networkdata/contact"

const ContactList = () => {
    return (
        <div>
            {
                contactList.map((ele, index) => (
                    <div className="container card bg-white borderWhite mt-3 rounded-4" style={{ height: "90px" }} key={index}>
                        <div className="pt-3 pb-3">
                            <div className="row">
                                <div className="col-2">
                                    <img className="" src={ele.userImage} alt="userimage" style={{ height: "50px", width: "50px" }} />
                                </div>
                                <div className="col-5">
                                    <b>{ele.userName}</b>
                                    <br />
                                    <small>{ele.userCollege}</small>
                                </div>
                                <div className="col-5 mt-2 text-end">
                                    {ele.userInContact ?
                                        <button className="wishNowBtn"><small>Follow</small></button> :
                                        <button className="inviteBtn"><small>Invite</small></button>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}
export default ContactList