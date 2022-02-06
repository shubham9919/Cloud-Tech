import React, { useState } from 'react'
import '../../components-style/Promotions.css'


/**
 *
 * @description Affiliate promotions component.
 * @param {*} promotionParams
 * @return {*} 
 */
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
                    <div className="component-Promotions-category">
                        <p>Category : {promotionParams.advProps.AffiliateCategory}</p>
                    </div>
                    <p>
                        {promotionParams.advProps.AffiliateDesc}
                    </p>
                    <div
                        onMouseOver={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className={`component-Promotions-checkNow ${promotionParams.advProps.isActive ? "component-Promotions-first" : ""}`} id={isHover ? "component-Promotions-Active" : ""}>
                        <a href={promotionParams.advProps.link} target="_blank">Visit</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Promotions