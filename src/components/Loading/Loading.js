import React from "react";
import '../../components-style/Loading.css'


/**
 *
 * @description Loading GIF component.
 * @return {*} 
 */
function Loading() {
    return (
        <React.Fragment>
            <div className="Component-Loading">
                <img src='/LoadingGif.gif' alt="Loading..."></img>
            </div>
        </React.Fragment>
    )
}

export default Loading