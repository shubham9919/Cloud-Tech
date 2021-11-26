import React from "react";
import "../../components-style/ArticleHeader.css"

function ArticleHeader() {
    return (
        <React.Fragment>
            <div className="article-header-element">
                <a href="/"><li className="btn">&larr;  Back</li></a>
            </div>

        </React.Fragment>
    )
}

export default ArticleHeader