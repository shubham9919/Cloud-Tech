import React from "react";
import "../../components-style/ArticleHeader.css"

function ArticleHeader(properties) {
    return (
        <React.Fragment>
            <div class="article_title">
                <h3>
                    {properties.articleName} 
                </h3>
            </div>
        </React.Fragment>
    )
}

export default ArticleHeader