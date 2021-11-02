import React from "react";
import '../../components-style/ArticleCredits.css'

function ArticleCredits(params){
    return (
        <React.Fragment>
            <div className="Component-ArticleFooter-Auther">
                <p> <cite>Auther - {params.Auther}</cite></p>
                <p>AWS Solutions Architect.</p>
            </div>
        </React.Fragment>
    )
}

export default ArticleCredits