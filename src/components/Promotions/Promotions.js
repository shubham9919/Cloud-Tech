import React, { useState } from 'react'
import '../../components-style/Promotions.css'

function Promotions(promotionParams) {
    const [isHover, setHover] = useState(false)
    return (
        <React.Fragment>
            <div className="component-Promotions-course">
                <div
                    className="component-Promotions-coursePic">
                    <img src={promotionParams.advProps.AffiliateImage} alt=""></img>
                </div>
                <div className="component-Promotions-courseDec">
                    <p>
                        {promotionParams.advProps.AffiliateDesc}
                    </p>
                    <div className="component-Promotions-category">
                        <p> <span className="component-Promotions-cc">Category :</span>  {promotionParams.advProps.AffiliateCategory}</p>
                    </div>
                    <div
                        onMouseOver={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className={`component-Promotions-checkNow ${promotionParams.advProps.isActive ? "component-Promotions-first" : ""}`} id={isHover ? "component-Promotions-Active" : ""}>
                        <a href='/'>Visit</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Promotions