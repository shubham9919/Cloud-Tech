import React, { useState } from "react"
import "../../components-style/Footer.css"

function Footer() {
    // const [isHover, setHover] = useState(-1)
    // let topics = ["Lambda", "EBS"]
    // let tt;
    // const serverlessTopics = (getTopics) => {
    //     tt = getTopics.map((path, index) => <li> <a
    //         className={`${path == isHover ? "Component-Footer-active" : ""}`}
    //         onMouseEnter={() => setHover(path)}
    //         onMouseLeave={() => setHover(-1)}
    //         key={path} href={`/${path}`}>
    //         {topics[index]}
    //     </a> </li>)
    //     return tt
    // }

    return (
        <React.Fragment>
            <body className="Component-Footer-body">
                <div className="Component-Footer-my_footer">
                    {/* <div className="Component-Footer-my_footer_topics">
                        <div className="Component-Footer-topic">
                            <h3 style={{ marginTop: ".5rem", borderBottom: ".1rem solid white", marginBottom: "1rem" }}>Serverless</h3>
                            <ul>
                                {serverlessTopics(["Lambda", "EBS"])}
                            </ul>
                        </div>
                        <div className="Component-Footer-topic">
                            <h3 style={{ marginTop: ".5rem", borderBottom: ".1rem solid white", marginBottom: "1rem" }}>EC2 Compute</h3>

                            <ul>
                                {serverlessTopics(["Lambda1", "EBS2"])}
                            </ul>
                        </div>

                    </div> */}
                    <div className="Component-Footer-linkouts">
                        {/* <h3> &nbsp; Copyrights &copy; Simply-Cloud</h3> */}
                        <div className="Component-Footer-site_nav">
                            <ul className="Component-Footer-site_nav_ul">
                                <li><a href="/">Home</a></li>
                                <li><a href="/shubham-chavan"> About Me</a></li>
                                <li><a href="/login">Sign Up</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="Component-Footer-copyrights">

                    <h3> &nbsp; &copy; 2021 Copyrights Simply Cloud</h3>
                    </div>
                    
                </div>
            </body>
        </React.Fragment>
    )
}

export default Footer