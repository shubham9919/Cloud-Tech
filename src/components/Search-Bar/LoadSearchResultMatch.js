import React from "react";
import LandPage from "../Land-Page/LandPage";


/**
 *
 *
 * @param {*} props
 * @return {*} 
 */
function LoadSearchResultMatch(props) {
    const ARTICLE_NAMES = props.location.search.slice(13).split('+') //get all the key words from search entry by users

    return (
        <React.Fragment>
            <LandPage searchkeys={ARTICLE_NAMES}></LandPage>
        </React.Fragment>
    )
}

export default LoadSearchResultMatch