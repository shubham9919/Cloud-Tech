import React from "react"
import Axios from 'axios'
import ReactGA from "react-ga"
import { useState, useEffect } from "react"
import { withRouter } from "react-router-dom";
import BlogContent from "../Blog-Content/BlogContent"
import Loading from "../Loading/Loading"




/**
 * @description Wrapper component for blogs.
 * @readonly https://www.pragimtech.com/blog/reactjs/routing-part-4-in-react/
 * @param {*} props
 * @return {*} 
 */
function Blog(props) {

    const [page, topicPage] = useState(null)
    useEffect(() => {
        ReactGA.initialize(process.env.REACT_APP_GOOOGLE_ANALYTICS_MEASUREMENT_ID)
        ReactGA.pageview(window.location.pathname + window.location.search);
        Axios.get(`https://of8wybu5c3.execute-api.ap-south-1.amazonaws.com/dev/cloud-tech-fetch?topic=${props.articleName || props.match.params.topic}`).then((response) => {
            topicPage(response)
        })
    }, [])

    return (
        <React.Fragment>
            {!page ? <Loading></Loading> : <BlogContent properties={page}></BlogContent>}
        </React.Fragment>
    );
}

export default withRouter(Blog)
