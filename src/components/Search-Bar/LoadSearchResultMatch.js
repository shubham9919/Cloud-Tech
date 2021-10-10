import React from "react";
import Blog from "../Blogs/Blog";
import LandPage from "../Land-Page/LandPage";

function LoadSearchResultMatch(props) {
        // console.log("props ---> "+JSON.stringify(props))
        const ARTICLE_NAMES = props.location.search.slice(13).split('+') //get all the key words from search entry by users
        // console.log("ARTICLE_NAME ---> "+JSON.stringify(ARTICLE_NAMES)) 

    return (
        <React.Fragment>
            {/* <Blog articleName={ARTICLE_NAME}></Blog> */}
            <LandPage searchkeys={ARTICLE_NAMES}></LandPage>
        </React.Fragment>
    )
}

export default LoadSearchResultMatch