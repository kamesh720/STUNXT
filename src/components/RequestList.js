import requestlist from "../data/networkdata/request"

const RequestList = () => {
    return (
        <div>
            {
                requestlist.map((ele, index) => (
                    <div className="container card bg-white borderWhite mt-3 rounded-4" style={{ height: "90px" }} key={index}>
                        <div className="pt-3 pb-3">
                            <div className="row">
                                <div className="col-2">
                                    <img className="" src={ele.userImage} alt="userimage" style={{ height: "50px", width: "50px" }} />
                                </div>
                                <div className="col-4">
                                    <b>{ele.userName}</b>
                                    <br />
                                    <small>{ele.userCollege}</small>
                                </div>
                                <div className="col-6 mt-2">
                                    <span className="float-start cursorPointer text-danger ms-2"><small>Cancel</small></span>
                                    <button className="wishNowBtn float-end"><small>Accept</small></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default RequestList