import React, { useState } from 'react'
import '../../components-style/Topic.css'


function Topic(Componentprops) {
    const [isHover, setHover] = useState(false)
    const callCloudfetchApi = (e) => {
        sessionStorage.setItem('lastPage', Componentprops.Topic_Props.Route)
    }

    return (
        <React.Fragment>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            </head>
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







