import React from "react";
import '../../components-style/Loading.css'

function Loading() {
    return (
        <React.Fragment>
            <div className="Component-Loading">
                <img src='/LoadingGif.gif'></img>
            </div>
        </React.Fragment>
    )
}

export default Loading