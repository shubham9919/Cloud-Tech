import React from "react";
import '../../components-style/HeroImageForArticle.css'

function HeroImageForArticle(params) {
    let picCourtecy = params.courtesy ? `Pic Courtesy: ${params.courtesyDomain}` : null
    return (
        <React.Fragment>
            <div className="Component-HeroImageForArticle">
                <img src={params.image} alt={params.logo}></img>
            </div>
            <div className="Component-HeroImageForArticle-picCourtesy">
                <a href={params.courtesy} style={{ textDecoration: "none" }} target="_blank" rel="noopener">{picCourtecy}</a>
            </div>
        </React.Fragment>
    )
}

export default HeroImageForArticle