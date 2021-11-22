import React from "react";
import '../../components-style/ContactHandles.css'

function ContactHandles(){
    return (
        <React.Fragment>
            <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
            <div className="Component-ContactHandles-touchPoints">
                <div className="Component-ContactHandles-linkedIn">
                    {/* <img src="/logo/LinkedIn-Logo.png"></img> */}
                    <h5>LinkedIn: <a href="https://www.linkedin.com/in/shubham-chavan-ab6a86167/" style ={{textDecoration: "none"}} target="_blank"> Shbham Chavan</a></h5>
                    {/* <h5>facebook: <a href="facebook.com" style ={{textDecoration: "none"}}> Shbham Chavan</a></h5> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactHandles

//