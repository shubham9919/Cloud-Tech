import React from "react";
import '../../components-style/HeaderLogo.css'

function HeaderLogo(params) {
    return (
        <React.Fragment>

            <div  className="Component-HeaderLogo-img">
            <a href='/'><img src="/CloudSage.jpg"></img></a>
            {/* <h2>CloudSage</h2> */}
            </div>
        </React.Fragment>
    )
}

export default HeaderLogo