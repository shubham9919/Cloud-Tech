import React from "react";
import '../../components-style/AricleImage.css';


function AricleImage(properties) {
    return (
        <React.Fragment>
            <div className="article_pic">
                <img src={properties.articleImage} alt="" />
            </div>
        </React.Fragment>
    )
}

export default AricleImage


