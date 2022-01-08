import { useState, useEffect } from "react"
import React from "react"
import Axios from 'axios'
import BlogContent from "../Blog-Content/BlogContent"


//https://www.pragimtech.com/blog/reactjs/routing-part-4-in-react/

function Blog(props) {

    const state = useState()
    const [page, topicPage] = useState(null)
    useEffect(() => {
        Axios.get(`https://of8wybu5c3.execute-api.ap-south-1.amazonaws.com/dev/cloud-tech-fetch?topic=${props.articleName || props.match.params.topic}`).then((response) => {
            console.log(response)
            topicPage(response)
        })
    }, [])
    return (
        <React.Fragment>

            {/* <div className="Component-blog"> */}
            {!page ? <h1>Loading..</h1> : <BlogContent properties={page}></BlogContent>}
            {/* </div> */}

        </React.Fragment>
    );
}

export default Blog
