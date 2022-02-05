import React from "react";
import '../../components-style/HeaderLogo.css'


/**
 *
 * @description site Logo component
 * @return {*} 
 */
function HeaderLogo() {
    return (
        <React.Fragment>

            <div className="Component-HeaderLogo-img">
                <a href='/'><img src="/boc.jpg" alt="siteLogo"></img></a>
            </div>
        </React.Fragment>
    )
}

export default HeaderLogo