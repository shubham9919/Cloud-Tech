import React from "react";
import '../../components-style/logo.css'


/**
 *
 * @description Component for site logo.
 * @param {*} properties
 * @return {*} 
 */
function Logo(properties) {
    return (
        <img src={`/logo/${properties.logo}`} className="Component-logo-logo "></img>
    )
}

export default Logo