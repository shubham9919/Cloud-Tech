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





















// import React from 'react'
// import '../../components-style/Topic.css'
// import Axios from 'axios'
// import Blog from '../Blogs/Blog'


// function Topic(Componentprops) {

//     //  console.log(JSON.stringify(Componentprops))

//     const callCloudfetchApi = (e) => {
//         console.log("Clicked");
//     }
//     return (
//         <React.Fragment>
//             <a href={`/article/${Componentprops.Topic_Props.Route}`} onClick={callCloudfetchApi} style={{ textDecoration: "none" }}>
//                 <body classNameName="component-topic-body">
//                     <div classNameName="component-topic-card">
//                         <div classNameName="component-topic-imgbox" >
//                             <img src={Componentprops.Topic_Props.Image_source} alt={`${Componentprops.Topic_Props.Subject}-Image`}></img>
//                             <div classNameName="tempText">
//                                 <p>{Componentprops.Topic_Props.Topic_Hero_Text}</p>
//                             </div>
//                         </div>
//                         <div classNameName="component-topic-content">
//                             <h3>{Componentprops.Topic_Props.Subject}</h3>
//                             <p>{Componentprops.Topic_Props.Description}</p>
//                         </div>
//                     </div>
//                 </body>
//             </a>

//         </React.Fragment>
//     );
// }

// export default Topic