import React, { useState } from 'react'
import '../../components-style/Topic.css'


/**
 *
 * @description Topic tiles component on landpage.
 * @param {*} Componentprops
 * @return {*} 
 */
function Topic(Componentprops) {
    const [isHover, setHover] = useState(false)
    const callCloudfetchApi = (e) => {
        sessionStorage.setItem('lastPage', Componentprops.Topic_Props.Route)
    }

    return (
        <React.Fragment>
            <a
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                href={`/article/${Componentprops.Topic_Props.Route}`} onClick={callCloudfetchApi}>
                <div className={`Component-Topic-card ${isHover ? "Component-Topic-active" : ""}`}>
                    <div className="Component-Topic-image-box">
                        <img src={Componentprops.Topic_Props.Image_source} alt=""></img>
                    </div>
                    <div className="Component-Topic-card-desc">
                        <p>{Componentprops.Topic_Props.Description}</p>
                    </div>
                </div>
            </a>
        </React.Fragment>
    );
}

export default Topic







