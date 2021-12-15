import React from "react";
import '../../components-style/ArticleCredits.css'


function ArticleCredits(properties) {
    let creditDetails = properties.articleCredits.split(">")
    return (
        <React.Fragment>
            <div className="by_and_date">
                 <h3> <span className="By">By</span> {creditDetails[0]} <span className="date">{creditDetails[1]}.</span></h3>
            </div>
        </React.Fragment>
    )
}

export default ArticleCredits