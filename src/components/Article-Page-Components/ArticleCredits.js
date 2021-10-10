import React from "react";
import '../../components-style/ArticleCredits.css'

function ArticleCredits(params){
    return (
        <React.Fragment>
            <div className="Component-ArticleFooter-Auther">
                <h3> <cite>Auther - {params.Auther}</cite></h3>
                <h4>AWS Cloud Practitioner</h4>
            </div>
        </React.Fragment>
    )
}

export default ArticleCredits