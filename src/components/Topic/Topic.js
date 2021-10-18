import React from 'react'
import '../../components-style/Topic.css'
import Axios from 'axios'
import Blog from '../Blogs/Blog'


function Topic(Componentprops) {
     
    //  console.log(JSON.stringify(Componentprops))

    const callCloudfetchApi = (e) => {
         console.log("Clicked"); 
    }
    return (
        <React.Fragment>
         <a href={`/${Componentprops.Topic_Props.Route}`} onClick={callCloudfetchApi} style={{ textDecoration: "none" }}>
                <body className="component-topic-body">
                    <div className="component-topic-card">
                        <div className="component-topic-imgbox" >
                            <img src={Componentprops.Topic_Props.Image_source} alt={`${Componentprops.Topic_Props.Subject}-Image`}></img>
                            <div className="tempText">
                                <p>{Componentprops.Topic_Props.Topic_Hero_Text}</p>
                            </div>
                        </div>
                        <div className="component-topic-content">
                            <h3>{Componentprops.Topic_Props.Subject}</h3>
                            <p>{Componentprops.Topic_Props.Description}</p>
                        </div>
                    </div>
                </body>
            </a>

        </React.Fragment>
    );
}

export default Topic